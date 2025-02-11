/**
 * @fileoverview `Problems` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { array, nonempty, refine, string } from 'superstruct';
import { BAEKJOON_PROBLEM_NUMBER_MIN } from '../../constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types.js').Problems} Problems
 * @typedef {import('superstruct').Struct<Problems>} ProblemsStruct
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `Problems` type struct.
 *
 * @type {ProblemsStruct}
 */
const Problems = refine(nonempty(array(string())), 'Problems', problems =>
  problems.every(problem => Number(problem) >= BAEKJOON_PROBLEM_NUMBER_MIN)
    ? true
    : `\`Problems\` must be nonempty string array of problem numbers. Each problem number must be greater than or equal to \`${BAEKJOON_PROBLEM_NUMBER_MIN}\``,
);

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default Problems;
