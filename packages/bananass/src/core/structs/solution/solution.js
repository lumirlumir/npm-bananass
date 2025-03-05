/**
 * @fileoverview `Solution` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { func, refine } from 'superstruct';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types.js').Solution} Solution
 * @typedef {import('superstruct').Struct<Solution>} SolutionStruct
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `Solution` type struct.
 *
 * @type {SolutionStruct}
 */ // @ts-ignore -- Types cannot be matched, as `superstruct` is unable to infer the input and output types of the function.
const Solution = refine(func(), 'Solution', solution =>
  solution.length <= 1
    ? true
    : `\`Solution\` must be a function that takes zero or one parameter`,
);

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default Solution;
