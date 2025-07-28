/**
 * @fileoverview Entry file for the `webpack.js` file.
 *
 * The `build` function's `webpackConfigs.entry` property references this file.
 * The global variable `globalThis.BAEKJOON_PROBLEM_NUMBER_WITH_PATH` is defined via the `build` function's `webpackConfigs.plugin`'s `new webpack.DefinePlugin`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { createInterface } = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { EOL } = require('node:os');

// @ts-expect-error -- Webpack will replace this with the actual path.
const solutionModule = require(globalThis.BAEKJOON_PROBLEM_NUMBER_WITH_PATH); // dynamic require

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const { solution } = solutionModule?.default ?? solutionModule; // Handle both ES module and CommonJS module.
const rl = createInterface({ input, output });

let inputStr = '';

// --------------------------------------------------------------------------------
// Event Listening
// --------------------------------------------------------------------------------

rl.on('line', line => {
  inputStr += `${line}${EOL}`;
}).on('close', () => {
  console.log(solution(inputStr)); // eslint-disable-line no-console
});
