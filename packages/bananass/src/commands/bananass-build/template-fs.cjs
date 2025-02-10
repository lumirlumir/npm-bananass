/**
 * @fileoverview Entry file for the `webpack.js` file.
 *
 * The `build` function's `webpackConfigs.entry` property references this file.
 * The global variable `BAEKJOON_PROBLEM_NUMBER_WITH_PATH` is defined via the `build` function's `webpackConfigs.plugin`'s `new webpack.DefinePlugin`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { readFileSync } = require('node:fs');

// dynamic require
const solutionModule = require(BAEKJOON_PROBLEM_NUMBER_WITH_PATH); // eslint-disable-line

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const solution = solutionModule?.default ?? solutionModule; // Handle both ES module and CommonJS module.
const inputFile = readFileSync(0, 'utf-8');

// --------------------------------------------------------------------------------
// Run Solution
// --------------------------------------------------------------------------------

solution(inputFile);
