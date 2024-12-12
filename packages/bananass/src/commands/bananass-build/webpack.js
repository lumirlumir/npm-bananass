/**
 * @fileoverview Asynchronously build and create bundled files using Webpack.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { resolve } = require('node:path');
const { log } = require('node:console');

const {
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
module.exports = async function build(problems) {
  // ------------------------------------------------------------------------------
  // Declaration
  // ------------------------------------------------------------------------------

  const WEBPACK_ENTRY_FILE_NAME = 'template.js';
  const rootDir = getRootDir();
  const spinner = createSpinner({
    color: 'yellow',
  }).start(bananass('Bananass build is running...')); // CLI Animation.

  // ------------------------------------------------------------------------------
  // Runtime Input Validation
  // ------------------------------------------------------------------------------

  /**
   * `problems` parameter validation.
   */
  problems.forEach(problem => {
    if (typeof problem !== 'string') {
      spinner.error();

      throw new TypeError(error('The `problems` parameter must be of type `string[]`.'));
    }

    if (
      Number(problem) < BAEKJOON_PROBLEM_NUMBER_MIN ||
      Number(problem) > BAEKJOON_PROBLEM_NUMBER_MAX
    ) {
      spinner.error();

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
  // Run Webpack
  // ------------------------------------------------------------------------------

  function webpackAsync(configs) {
    return new Promise((res, rej) => {
      webpack(configs, (err, stats) => {
        if (err || stats.hasErrors()) {
          rej(new Error(err || stats.toString()));
        } else {
          res(stats);
        }
      });
    });
  }

  try {
    await webpackAsync(webpackConfigs);

    spinner.success(success('Bananass build completed successfully.', false));

    // TODO: add -d, --debug option.
    log(); // new line.
    log(`- Output Directory: ${resolve(rootDir, OUTPUT_DIRECTORY_NAME)}`); // TODO: reduce redundency using `outputDir` variable.
    log(`- Created: ${problems.map(problem => `${problem}.js`).join(', ')}`);
  } catch {
    spinner.error();

    throw new Error(error('`webpackAysnc` function run failed.'));
  }
};
