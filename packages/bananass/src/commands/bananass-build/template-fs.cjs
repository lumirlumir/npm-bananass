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
// eslint-disable-next-line
const solution = require(BAEKJOON_PROBLEM_NUMBER_WITH_PATH);

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const inputFile = readFileSync(0, 'utf-8');

// --------------------------------------------------------------------------------
// Run Solution
// --------------------------------------------------------------------------------

solution(inputFile);
