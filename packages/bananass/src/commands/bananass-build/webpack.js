/**
 * @fileoverview Asynchronously build and create bundled files using webpack and esbuild.
 */

// @ts-nocheck -- TODO: Delete this line later.
// TODO: More detailed error messages.

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { rmSync } from 'node:fs';

import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, success, error } from 'bananass-utils-console/theme';
import webpack from 'webpack';

import { findRootDir } from '../../core/fs/index.js';
import { Problems } from '../../core/structs/index.js';
import {
  WEBPACK_BANNER,
  SUPPORTED_SOLUTION_FILE_EXTENSIONS,
} from '../../core/constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
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
export default async function build(problems, { build: options }) {
  // ------------------------------------------------------------------------------
  // Declaration
  // ------------------------------------------------------------------------------

  const webpackEntryFileName = `template-${options.templateType}.cjs`;
  const rootDir = findRootDir();
  const entryDir = resolve(rootDir, options.entryDir);
  const outDir = resolve(rootDir, options.outDir);

  const logger = createLogger(options);
  const spinner = createSpinner({
    color: 'yellow',
  });

  // Ensure correct `this` binding for `spinner.start` using arrow function. (Or use `apply`, `call` or `bind` method.)
  // CLI Animation.
  logger.log(() => spinner.start(bananass('Bananass build is running...')));

  // ------------------------------------------------------------------------------
  // Runtime Input Validation
  // ------------------------------------------------------------------------------

  try {
    Problems.assert(problems);
  } catch ({ message }) {
    logger.log(() => spinner.error());

    throw new TypeError(error(message));
  }

  // ------------------------------------------------------------------------------
  // Webpack Configs
  // ------------------------------------------------------------------------------

  const webpackConfigs = problems.map(problem => ({
    /**
     * @see https://webpack.js.org/configuration/target/
     */
    target: 'node',

    /**
     * @see https://webpack.js.org/configuration/mode/
     */
    mode: 'production',

    /**
     * @see https://webpack.js.org/configuration/resolve/#resolveextensions
     */
    resolve: {
      extensions: SUPPORTED_SOLUTION_FILE_EXTENSIONS,
    },

    /**
     * @see https://webpack.js.org/concepts/#entry
     */
    entry: resolve(dirname(fileURLToPath(import.meta.url)), webpackEntryFileName),

    /**
     * @see https://webpack.js.org/concepts/#output
     */
    output: {
      path: outDir,
      filename: `${problem}.js`,
      // clean: options.clean, // DO NOT USE THIS OPTION.
    },

    /**
     * @see https://webpack.js.org/concepts/#plugins
     */
    plugins: [
      new webpack.BannerPlugin({
        banner: WEBPACK_BANNER,
        raw: true,
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
      }),
      new webpack.DefinePlugin({
        BAEKJOON_PROBLEM_NUMBER_WITH_PATH: JSON.stringify(resolve(entryDir, problem)),
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
  }));

  // ------------------------------------------------------------------------------
  // Webpack Excution
  // ------------------------------------------------------------------------------

  try {
    // Clean the output directory before emitting files.
    // Note that we must not use the `webpackConfigs.output.clean` option.
    // Firstly, using the `webpackConfigs.output.clean` option would clean the output directory before each emit,
    // resulting in only one file in the output directory.
    // Secondly, even if we use `webpackConfigs.output.clean` only once with the `map()` method's `index` parameter,
    // it cannot guarantee the build order and may lead to race conditions where files get deleted unpredictably.
    if (options.clean) {
      rmSync(outDir, { recursive: true, force: true });
    }

    await new Promise((res, rej) => {
      webpack(webpackConfigs, (err, stats) => {
        if (err || stats.hasErrors()) {
          rej(new Error(err || stats.toString()));
        } else {
          res(stats);
        }
      });
    });

    logger
      .log(() =>
        spinner.success(success('Bananass build completed successfully.', false)),
      )
      .eol()
      .log('Output Directory:', outDir)
      .log('Created:', problems.map(problem => `${problem}.js`).join(', '));
  } catch ({ message }) {
    logger.log(() => spinner.error());

    throw new Error(error(`Webpack run failed - ${message}`));
  }
}
