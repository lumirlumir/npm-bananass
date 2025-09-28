/**
 * @fileoverview `Problems` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { array, nonempty, refine } from 'superstruct';
import Problem from '../problem/index.js';
import { BAEKJOON_PROBLEM_NUMBER_MIN } from '../../constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Problems } from '../../types/index.js';
 * @import { Struct } from 'superstruct';
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `Problems` type struct.
 * @type {Struct<Problems>}
 */ // @ts-expect-error -- TODO: migrate to Zod.
const Problems = refine(nonempty(array(Problem)), 'Problems', problems =>
  problems.every(problem => Number(problem) >= BAEKJOON_PROBLEM_NUMBER_MIN)
    ? true
    : `\`Problems\` must be Baekjoon problem numbers as a nonempty string array. Each problem number must be greater than or equal to \`${BAEKJOON_PROBLEM_NUMBER_MIN}\``,
);

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default Problems;
