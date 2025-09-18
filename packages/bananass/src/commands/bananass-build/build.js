/**
 * @fileoverview Asynchronously build and create bundled files using webpack and babel.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { resolve } from 'node:path';
import fsPromises from 'node:fs/promises'; // DO NOT USE DESTRUCTURING syntax due to `mock` usage in test.

import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, success, error } from 'bananass-utils-console/theme';
import webpack from 'webpack';

import {
  transformArrayPrototypeToReversed,
  transformArrayPrototypeToSorted,
  transformObjectHasOwn,
} from '../../babel-plugins/index.js';

import { defaultConfigObject as dco } from '../../core/conf/index.js';
import {
  Problems as ProblemsStruct,
  ConfigObject as ConfigObjectStruct,
} from '../../core/structs/index.js';
import {
  DEFAULT_OUT_FILE_EXTENSION,
  NODE_VERSION_BAEKJOON,
  WEBPACK_BANNER,
  SUPPORTED_SOLUTION_FILE_EXTENSIONS,
} from '../../core/constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Configuration as WebpackConfig } from 'webpack';
 * @import { PluginItem as BabelPluginItem } from '@babel/core';
 * @import { Problems, ConfigObject } from '../../core/types/index.js';
 */

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

/**
 * @param {BabelPluginItem[]} [babelPlugins]
 * @param {'module' | 'unambiguous'} [sourceType]
 */
function babelLoaderConfig(babelPlugins = [], sourceType = 'module') {
  return {
    loader: 'babel-loader',
    options: {
      targets: { node: NODE_VERSION_BAEKJOON },
      presets: [
        // Preset ordering is reversed (last to first).
        // https://babeljs.io/docs/presets#preset-ordering
        [
          '@babel/preset-env',
          {
            targets: { node: NODE_VERSION_BAEKJOON },
          },
        ],
      ],
      plugins: [
        // Plugin ordering is first to last.
        // https://babeljs.io/docs/plugins#plugin-ordering
        ...babelPlugins,
        transformArrayPrototypeToReversed,
        transformArrayPrototypeToSorted,
        transformObjectHasOwn,
      ],
      sourceType,
    },
  };
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Asynchronously build and create bundled files using webpack and babel.
 * @param {Problems} problems
 * @param {ConfigObject} [configObject = dco]
 * @async
 */
export default async function build(problems, configObject = dco) {
  // ------------------------------------------------------------------------------
  // Runtime Validation
  // ------------------------------------------------------------------------------

  ProblemsStruct.assert(problems);
  ConfigObjectStruct.assert(configObject);

  // ------------------------------------------------------------------------------
  // Declarations
  // ------------------------------------------------------------------------------

  const {
    cwd = dco.cwd,
    entryDir = dco.entryDir,
    outDir = dco.outDir,
    console: {
      debug = dco.console.debug, // (This comment was used for code formatting.)
      quiet = dco.console.quiet,
    } = dco.console,
    build: {
      clean = dco.build.clean, // (This comment was used for code formatting.)
      templateType = dco.build.templateType,
    } = dco.build,
  } = configObject;

  const resolvedEntryDir = resolve(cwd, entryDir);
  const resolvedOutDir = resolve(cwd, outDir);
  const resolvedWebpackEntryFile = resolve(
    import.meta.dirname,
    `template-${templateType}.cjs`,
  );

  const logger = createLogger({ debug, quiet });
  const spinner = createSpinner();

  // ------------------------------------------------------------------------------
  // CLI Animation
  // ------------------------------------------------------------------------------

  // Ensure correct `this` binding for `spinner.start` using arrow function. (Or use `apply`, `call` or `bind` method.)
  logger.log(() => spinner.start(bananass('Bananass build is running...', true)));

  // ------------------------------------------------------------------------------
  // Webpack Configs
  // ------------------------------------------------------------------------------

  /** @type {WebpackConfig[]} */
  const webpackConfigs = problems.map(
    problem =>
      /** @type {WebpackConfig} */ ({
        /** @see https://webpack.js.org/configuration/target/ */
        target: 'node',

        /** @see https://webpack.js.org/configuration/mode/ */
        mode: 'production',

        /** @see https://webpack.js.org/configuration/resolve/#resolveextensions */
        resolve: {
          extensions: [...SUPPORTED_SOLUTION_FILE_EXTENSIONS],
        },

        /** @see https://webpack.js.org/concepts/#entry */
        entry: resolvedWebpackEntryFile,

        /** @see https://webpack.js.org/concepts/#output */
        output: {
          path: resolvedOutDir,
          filename: `${problem}${DEFAULT_OUT_FILE_EXTENSION}`,
          // clean: options.clean, // DO NOT USE THIS OPTION.
        },

        /** @see https://webpack.js.org/concepts/#plugins */
        plugins: [
          new webpack.BannerPlugin({
            banner: WEBPACK_BANNER,
            raw: true,
            stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
          }),
          new webpack.DefinePlugin({
            'globalThis.BAEKJOON_PROBLEM_NUMBER_WITH_PATH': JSON.stringify(
              resolve(resolvedEntryDir, problem),
            ),
            'globalThis.IS_PROD': JSON.stringify(true), // Same with `process.env.NODE_ENV === 'production'`.
          }),
        ],

        module: {
          rules: [
            {
              test: /\.(?:js|mjs|cjs)$/i, // JavaScript: `js`, `mjs`, `cjs`
              use: [babelLoaderConfig()],
            },
            /*
             * You can find the motivation for these TypeScript setups here:
             * https://github.com/babel/babel/blob/v7.28.2/packages/babel-preset-typescript/src/index.ts#L44-L102
             */
            {
              test: /\.mts$/i, // TypeScript: `mts`
              use: [
                babelLoaderConfig([
                  [
                    '@babel/plugin-transform-typescript',
                    {
                      allowDeclareFields: true,
                    },
                  ],
                ]),
              ],
            },
            /*
             * `.ts` files can include both ESM and CommonJS modules,
             * so we need to convert them to CommonJS first when dealing with CommonJS modules.
             *
             * NOTE: `@babel/preset-typescript` treats `.ts` files as ESM by default,
             * and this behavior is not configurable.
             * This can cause issues when using CommonJS modules with `.ts` files.
             * To avoid this, we use `@babel/plugin-transform-modules-commonjs` and `@babel/plugin-transform-typescript`
             * directly to transpile `.ts` files to CommonJS format.
             */
            {
              test: /\.(?:ts|cts)$/i, // TypeScript: `ts`, `cts`
              use: [
                babelLoaderConfig(
                  [
                    [
                      '@babel/plugin-transform-modules-commonjs',
                      { allowTopLevelThis: true },
                    ],
                    [
                      '@babel/plugin-transform-typescript',
                      {
                        allowDeclareFields: true,
                      },
                    ],
                  ],
                  'unambiguous',
                ),
              ],
            },
          ],
        },
      }),
  );

  // ------------------------------------------------------------------------------
  // Clean Output Directory
  // ------------------------------------------------------------------------------

  try {
    // Clean the output directory before emitting files.
    // Note that we must not use the `webpackConfigs.output.clean` option.
    // Firstly, using the `webpackConfigs.output.clean` option would clean the output directory before each emit,
    // resulting in only one file in the output directory.
    // Secondly, even if we use `webpackConfigs.output.clean` only once with the `map()` method's `index` parameter,
    // it cannot guarantee the build order and may lead to race conditions where files get deleted unpredictably.
    if (clean) await fsPromises.rm(resolvedOutDir, { recursive: true, force: true });
  } catch (err) {
    logger.log(() => spinner.error(error('Failed to clean output directory')));

    const message = err instanceof Error ? err.message : String(err);
    throw new Error(error(message, true));
  }

  // ------------------------------------------------------------------------------
  // Run Webpack
  // ------------------------------------------------------------------------------

  try {
    await new Promise((res, rej) => {
      webpack(webpackConfigs, (err, stats) => {
        if (err || stats.hasErrors()) {
          rej(err || new Error(stats.toString()));
        } else {
          res(stats);
        }
      });
    });
  } catch (err) {
    logger.log(() => spinner.error(error('Failed to run webpack')));

    const message = err instanceof Error ? err.message : String(err);
    throw new Error(error(message, true));
  }

  // ------------------------------------------------------------------------------
  // Exit
  // ------------------------------------------------------------------------------

  logger
    .log(() => spinner.success(success('Bananass build completed successfully')))
    .eol()
    .log('Output Directory:', resolvedOutDir)
    .log(
      'Created:',
      problems.map(problem => `${problem}${DEFAULT_OUT_FILE_EXTENSION}`).join(', '),
    );
}
