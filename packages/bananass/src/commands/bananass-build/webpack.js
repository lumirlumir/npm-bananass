/**
 * @fileoverview Asynchronously build and create bundled files using Webpack.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { rmSync } from 'node:fs';

import { getRootDir } from 'bananass-utils/fs';
import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, success, error } from 'bananass-utils-console/theme';
import webpack from 'webpack';

import {
  OUTPUT_DIRECTORY_NAME,
  BAEKJOON_PROBLEM_NUMBER_MIN,
  BAEKJOON_PROBLEM_NUMBER_MAX,
} from '../../constants/index.js';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Asynchronously build and create bundled files using Webpack.
 *
 * @param {string[]} problems Baekjoon problem number list.
 * @param // TODO
 * @async
 */
export default async function build(problems, options) {
  // ------------------------------------------------------------------------------
  // Declaration
  // ------------------------------------------------------------------------------

  const WEBPACK_ENTRY_FILE_NAME = 'template.cjs';
  const rootDir = getRootDir();
  const outputDir = resolve(rootDir, OUTPUT_DIRECTORY_NAME);
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

  /**
   * `problems` parameter validation.
   */
  problems.forEach(problem => {
    if (typeof problem !== 'string') {
      logger.log(() => spinner.error());

      throw new TypeError(error('The `problems` parameter must be of type `string[]`.'));
    }

    if (
      Number(problem) < BAEKJOON_PROBLEM_NUMBER_MIN ||
      Number(problem) > BAEKJOON_PROBLEM_NUMBER_MAX
    ) {
      logger.log(() => spinner.error());

      throw new TypeError(
        error(
          `The Baekjoon problem number must be between ${BAEKJOON_PROBLEM_NUMBER_MIN} and ${BAEKJOON_PROBLEM_NUMBER_MAX}.`,
        ),
      );
    }
  });

  // ------------------------------------------------------------------------------
  // Webpack Configs
  // ------------------------------------------------------------------------------

  const webpackConfigs = problems.map(problem => ({
    /**
     * See {@link https://webpack.js.org/configuration/target/}.
     */
    target: 'node',

    /**
     * See {@link https://webpack.js.org/configuration/mode/}.
     */
    mode: 'production',

    /**
     * See {@link https://webpack.js.org/concepts/#entry}.
     */
    entry: resolve(dirname(fileURLToPath(import.meta.url)), WEBPACK_ENTRY_FILE_NAME),

    /**
     * See {@link https://webpack.js.org/concepts/#output}.
     */
    output: {
      path: outputDir,
      filename: `${problem}.js`,
      // clean: options.clean, // DO NOT USE THIS OPTION.
    },

    /**
     * See {@link https://webpack.js.org/concepts/#plugins}.
     */
    plugins: [
      new webpack.DefinePlugin({
        BAEKJOON_PROBLEM_NUMBER_WITH_PATH: JSON.stringify(
          resolve(rootDir, 'bananass', problem), // TODO: add `src/bananass` directory.
        ),
      }),
    ],
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
      rmSync(outputDir, { recursive: true, force: true });
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
      .log('Output Directory:', outputDir)
      .log('Created:', problems.map(problem => `${problem}.js`).join(', '));
  } catch ({ message }) {
    logger.log(() => spinner.error());

    throw new Error(error(`Webpack run failed - ${message}`));
  }
}
