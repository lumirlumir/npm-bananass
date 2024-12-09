/**
 * @fileoverview Build and create bundled files using Webpack.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { resolve } = require('node:path');
const { log } = require('node:console');

const webpack = require('webpack');
const c = require('ansi-colors');

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
 * Build and create bundled files using Webpack.
 *
 * @param {string[]} problems Baekjoon problem number list.
 */
module.exports = function build(problems) {
  // ------------------------------------------------------------------------------
  // Runtime Input Validation
  // ------------------------------------------------------------------------------

  /**
   * `problems` parameter validation.
   */
  problems.forEach(problem => {
    if (typeof problem !== 'string')
      throw new TypeError(
        c.red('❌ The `problems` parameter must be of type `string[]`.'),
      );

    if (
      Number(problem) < BAEKJOON_PROBLEM_NUMBER_MIN ||
      Number(problem) > BAEKJOON_PROBLEM_NUMBER_MAX
    )
      throw new TypeError(
        c.red(
          `❌ The Baekjoon problem number must be between ${BAEKJOON_PROBLEM_NUMBER_MIN} and ${BAEKJOON_PROBLEM_NUMBER_MAX}.`,
        ),
      );
  });

  // ------------------------------------------------------------------------------
  // Declaration
  // ------------------------------------------------------------------------------

  const rootDir = getRootDir();

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
    entry: resolve(__dirname, 'template.js'),

    /**
     * See {@link https://webpack.js.org/concepts/#output}.
     */
    output: {
      path: resolve(rootDir, OUTPUT_DIRECTORY_NAME),
      filename: `${problem}.js`,
      // clean: true, // Clean the output directory before emit.
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

  webpack(webpackConfigs, (err, stats) => {
    if (err || stats.hasErrors()) {
      throw new Error(err || stats.toString());
    }

    log(`- Output Directory: ${resolve(rootDir, OUTPUT_DIRECTORY_NAME)}`); // TODO: reduce redundency using `outputDir` variable.
    log(`- Created: ${problems.map(problem => `${problem}.js`).join(', ')}`);
    log(c.green('✅ Bananass build completed successfully.'));
  });
};
