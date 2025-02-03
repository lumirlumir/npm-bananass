/**
 * @fileoverview Asynchronously build and create bundled files using Webpack and Babel.
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
  OUTPUT_DIR_NAME_ARRAY,
  BAEKJOON_PROBLEM_NUMBER_MIN,
} from '../../core/constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../core/types.js').ConfigObject} ConfigObject
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Asynchronously build and create bundled files using Webpack.
 *
 * @param {string[]} problems Baekjoon problem number list.
 * @param {ConfigObject} configObject Configuration object.
 * @async
 */
export default async function build(problems, { build: options }) {
  // ------------------------------------------------------------------------------
  // Declaration
  // ------------------------------------------------------------------------------
  const { templateType } = options;

  const webpackEntryFileName = `template-${templateType}.cjs`;

  const rootDir = getRootDir();
  const outputDir = resolve(rootDir, OUTPUT_DIR_NAME_ARRAY[0]);
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

    if (Number(problem) < BAEKJOON_PROBLEM_NUMBER_MIN) {
      logger.log(() => spinner.error());

      throw new TypeError(
        error(
          `Invalid Baekjoon problem number: ${problem}. The problem number must be greater than or equal to ${BAEKJOON_PROBLEM_NUMBER_MIN}.`,
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
    entry: resolve(dirname(fileURLToPath(import.meta.url)), webpackEntryFileName),

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
