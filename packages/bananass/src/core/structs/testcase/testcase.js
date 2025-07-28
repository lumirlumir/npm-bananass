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
 * @import { Testcase } from '../../types.js';
 * @import { Struct } from 'superstruct';
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `Testcase` type struct.
 * @type {Struct<Testcase>}
 */ // @ts-expect-error -- TODO: migrate to `zod`
const Testcase = object({
  input: optional(Input),
  output: Output,
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default Testcase;
