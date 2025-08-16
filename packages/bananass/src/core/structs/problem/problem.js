/**
 * @fileoverview `Problem` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { refine, string } from 'superstruct';
import { BAEKJOON_PROBLEM_NUMBER_MIN } from '../../constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Problem } from '../../types/index.js';
 * @import { Struct } from 'superstruct';
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `Problem` type struct.
 * @type {Struct<Problem>}
 */ // @ts-expect-error -- TODO: migrate to Zod
const Problem = refine(string(), 'Problem', problem =>
  Number(problem) >= BAEKJOON_PROBLEM_NUMBER_MIN
    ? true
    : `\`Problem\` must be Baekjoon problem number as a string. Problem number must be greater than or equal to \`${BAEKJOON_PROBLEM_NUMBER_MIN}\``,
);

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default Problem;
