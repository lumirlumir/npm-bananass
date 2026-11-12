/**
 * @fileoverview Entry file for Rolldown.
 *
 * The `build` function's Rolldown config references this file as its input.
 * Rolldown replaces `globalThis.BAEKJOON_PROBLEM_NUMBER_WITH_PATH` with the solution path.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { readFileSync } = require('node:fs');

// @ts-expect-error -- Rolldown will replace this with the actual path.
const solutionModule = require(globalThis.BAEKJOON_PROBLEM_NUMBER_WITH_PATH); // dynamic require

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const { solution } = solutionModule?.default ?? solutionModule; // Handle both ES module and CommonJS module.
const inputStr = readFileSync(0, 'utf-8');

// --------------------------------------------------------------------------------
// Run Solution
// --------------------------------------------------------------------------------

console.log(solution(inputStr)); // eslint-disable-line no-console
