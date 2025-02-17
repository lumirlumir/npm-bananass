/**
 * @fileoverview Test runner. Return an object with test results.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { Problem, SolutionWithTestcases, Testcase } from '../../core/structs/index.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../core/types.js').Problem} Problem
 * @typedef {import('../../core/types.js').SolutionWithTestcases} SolutionWithTestcases
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Test runner. Return an object with test results.
 *
 * @param {Problem} problem
 * @param {SolutionWithTestcases} solutionWithTestcases
 */
export default function testRunner(problem, solutionWithTestcases) {
  // ------------------------------------------------------------------------------
  // Runtime Validation
  // ------------------------------------------------------------------------------

  Problem.assert(problem);
  SolutionWithTestcases.assert(solutionWithTestcases);

  // ------------------------------------------------------------------------------
  // Declarations
  // ------------------------------------------------------------------------------

  const { solution, testcases } = solutionWithTestcases;

  // ------------------------------------------------------------------------------
  // Test Runner
  // ------------------------------------------------------------------------------

  const results = testcases.map(({ input, output }) => {
    Testcase.assert({ input, output: solution(input) }); // `solution(input)` should be `Testcase.output` type.

    const outputExpected = String(output);
    const outputActual = String(solution(input));
    const result = Object.is(outputExpected, outputActual);

    return {
      input,
      outputExpected,
      outputActual,
      result,
    };
  });

  // ------------------------------------------------------------------------------
  // Return
  // ------------------------------------------------------------------------------

  return {
    /** @type {Problem} */
    problem,
    results,
  };
}
