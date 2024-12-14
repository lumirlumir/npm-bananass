/**
 * @fileoverview Asynchronously build and create bundled files using Webpack.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { resolve } = require('node:path');

const {
  createLogger,
  createSpinner,
  theme: { bananass, success, error },
  // TODO: Bug Report
  // eslint-disable-next-line import/no-unresolved
} = require('bananass-utils-console');
const webpack = require('webpack');

const {
  OUTPUT_DIRECTORY_NAME,
  BAEKJOON_PROBLEM_NUMBER_MIN,
  BAEKJOON_PROBLEM_NUMBER_MAX,
} = require('../../constants');
const { getRootDir } = require('../../utils/fs');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

/**
 * Asynchronously build and create bundled files using Webpack.
 *
 * @param {string[]} problems Baekjoon problem number list.
 * @async
 */
module.exports = async function build(problems, options) {
  // ------------------------------------------------------------------------------
  // Declaration
  // ------------------------------------------------------------------------------

  const WEBPACK_ENTRY_FILE_NAME = 'template.js';
  const rootDir = getRootDir();
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
    entry: resolve(__dirname, WEBPACK_ENTRY_FILE_NAME),

    /**
     * See {@link https://webpack.js.org/concepts/#output}.
     */
    output: {
      path: resolve(rootDir, OUTPUT_DIRECTORY_NAME),
      filename: `${problem}.js`,
      // clean: true, // TODO: Clean the output directory before emit.
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
      .log(`Output Directory: ${resolve(rootDir, OUTPUT_DIRECTORY_NAME)}`) // TODO: reduce redundency using of `outputDir` variable.
      .log(`Created: ${problems.map(problem => `${problem}.js`).join(', ')}`);
  } catch {
    logger.log(() => spinner.error());

    throw new Error(error('Webpack run failed.'));
  }
};
