/**
 * @fileoverview `SolutionWithTestcases` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { object } from 'superstruct';
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
  testcases: Testcases,
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default SolutionWithTestcases;
