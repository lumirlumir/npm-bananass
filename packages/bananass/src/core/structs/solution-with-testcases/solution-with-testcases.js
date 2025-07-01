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
 * @import { SolutionWithTestcases } from '../../types.js';
 * @import { Struct } from 'superstruct';
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `SolutionWithTestcases` type struct.
 * @type {Struct<SolutionWithTestcases>}
 */
const SolutionWithTestcases = object({
  solution: Solution,
  testcases: optional(Testcases),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default SolutionWithTestcases;
