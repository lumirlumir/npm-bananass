/**
 * @fileoverview Asynchronously build and create bundled files using webpack and esbuild.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { rm } from 'node:fs/promises';

import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, success, error } from 'bananass-utils-console/theme';
import webpack from 'webpack';

import { defaultConfigObject as dco } from '../../core/conf/index.js';
import { Problems, ConfigObject } from '../../core/structs/index.js';
import {
  WEBPACK_BANNER,
  SUPPORTED_SOLUTION_FILE_EXTENSIONS,
} from '../../core/constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('webpack').Configuration} WebpackConfig
 * @typedef {import('../../core/types.js').Problems} Problems
 * @typedef {import('../../core/types.js').ConfigObject} ConfigObject
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Asynchronously build and create bundled files using webpack and esbuild.
 *
 * @param {Problems} problems
 * @param {ConfigObject} configObject
 * @async
 */
export default async function build(problems, configObject = dco) {
  // ------------------------------------------------------------------------------
  // Runtime Validation
  // ------------------------------------------------------------------------------

  Problems.assert(problems);
  ConfigObject.assert(configObject);

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
    dirname(fileURLToPath(import.meta.url)),
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
          extensions: SUPPORTED_SOLUTION_FILE_EXTENSIONS,
        },

        /** @see https://webpack.js.org/concepts/#entry */
        entry: resolvedWebpackEntryFile,

        /** @see https://webpack.js.org/concepts/#output */
        output: {
          path: resolvedOutDir,
          filename: `${problem}.js`,
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
              test: /\.(?:js|mjs|cjs)$/i, // JavaScript
              loader: 'esbuild-loader',
              options: {
                target: 'node14',
                format: 'cjs',
              },
            },
            {
              test: /\.(?:ts|mts|cts)$/i, // TypeScript
              loader: 'esbuild-loader',
              options: {
                loader: 'ts',
                target: 'node14',
                format: 'cjs',
              },
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
    if (clean) await rm(resolvedOutDir, { recursive: true, force: true });
  } catch ({ message }) {
    logger.log(() => spinner.error(error('Failed to clean output directory')));

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

    const message = err.message || String(err);
    throw new Error(error(message, true));
  }

  // ------------------------------------------------------------------------------
  // Exit
  // ------------------------------------------------------------------------------

  logger
    .log(() => spinner.success(success('Bananass build completed successfully')))
    .eol()
    .log('Output Directory:', resolvedOutDir)
    .log('Created:', problems.map(problem => `${problem}.js`).join(', '));
}
