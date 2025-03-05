/**
 * @fileoverview `Testcase` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { object, optional } from 'superstruct';

import Input from '../input/index.js';
import Output from '../output/index.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types.js').Testcase} Testcase
 * @typedef {import('superstruct').Struct<Testcase>} TestcaseStruct
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `Testcase` type struct.
 *
 * @type {TestcaseStruct}
 */
const Testcase = object({
  input: optional(Input),
  output: Output,
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default Testcase;
