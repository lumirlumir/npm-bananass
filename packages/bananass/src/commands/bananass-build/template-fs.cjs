/**
 * @fileoverview Entry file for the `webpack.js` file.
 *
 * The `build` function's `webpackConfigs.entry` property references this file.
 * The global variable `globalThis.BAEKJOON_PROBLEM_NUMBER_WITH_PATH` is defined via the `build` function's `webpackConfigs.plugin`'s `new webpack.DefinePlugin`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { readFileSync } = require('node:fs');

const solutionModule = require(globalThis.BAEKJOON_PROBLEM_NUMBER_WITH_PATH); // dynamic require

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const { solution } = solutionModule?.default ?? solutionModule; // Handle both ES module and CommonJS module.
const inputFile = readFileSync(0, 'utf-8');

// --------------------------------------------------------------------------------
// Run Solution
// --------------------------------------------------------------------------------

console.log(solution(inputFile)); // eslint-disable-line no-console
