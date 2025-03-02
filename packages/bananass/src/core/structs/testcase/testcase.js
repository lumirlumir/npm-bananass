/**
 * @fileoverview `Testcase` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { boolean, number, object, optional, string, union } from 'superstruct';

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
  input: optional(string()),
  output: union([number(), string(), boolean()]),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default Testcase;
