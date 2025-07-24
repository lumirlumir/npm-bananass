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
 * @import { Solution } from '../../types.js';
 * @import { Struct } from 'superstruct';
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `Solution` type struct.
 * @type {Struct<Solution>}
 */ // @ts-expect-error -- Types cannot be matched, as `superstruct` is unable to infer the input and output types of the function.
const Solution = refine(func(), 'Solution', solution =>
  solution.length <= 1
    ? true
    : `\`Solution\` must be a function that takes zero or one parameter`,
);

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default Solution;
