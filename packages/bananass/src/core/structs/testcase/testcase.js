/**
 * @fileoverview `Testcase` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { bigint, boolean, number, object, string, union } from 'superstruct';

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
  input: string(),
  output: union([number(), string(), boolean(), bigint()]),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default Testcase;
