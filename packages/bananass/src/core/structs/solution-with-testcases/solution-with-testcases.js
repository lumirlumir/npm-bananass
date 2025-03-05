/**
 * @fileoverview `SolutionWithTestcases` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { object, optional } from 'superstruct';

import Solution from '../solution/index.js';
import Testcases from '../testcases/index.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types.js').SolutionWithTestcases} SolutionWithTestcases
 * @typedef {import('superstruct').Struct<SolutionWithTestcases>} SolutionWithTestcasesStruct
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `SolutionWithTestcases` type struct.
 *
 * @type {SolutionWithTestcasesStruct}
 */
const SolutionWithTestcases = object({
  solution: Solution,
  testcases: optional(Testcases),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default SolutionWithTestcases;
