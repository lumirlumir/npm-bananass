/**
 * @fileoverview This file declares constants used throughout the `bananass` package.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { join } = require('node:path');
const { name } = require('../../package.json');

// --------------------------------------------------------------------------------
// Constants
// --------------------------------------------------------------------------------

module.exports.ENTRY_DIRECTORY_NAME_ARRAY = Object.freeze([name, join('src', name)]);
module.exports.OUTPUT_DIRECTORY_NAME = `.${name}`;
module.exports.BAEKJOON_PROBLEM_NUMBER_MIN = 1_000;
module.exports.BAEKJOON_PROBLEM_NUMBER_MAX = 100_000; // This value can be updated later.
