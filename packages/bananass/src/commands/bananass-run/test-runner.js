/**
 * @fileoverview Test runner. Return an object with test results.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { SolutionWithTestcases, Testcase } from '../../core/structs/index.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../core/types.js').SolutionWithTestcases} SolutionWithTestcases
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Test runner. Return an object with test results.
 *
 * @param {SolutionWithTestcases} solutionWithTestcases
 */
export default function testRunner(solutionWithTestcases) {
  // ------------------------------------------------------------------------------
  // Runtime Validation
  // ------------------------------------------------------------------------------

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
    const isTestPassed = Object.is(outputExpected, outputActual);

    return {
      input,
      outputExpected,
      outputActual,
      isTestPassed,
    };
  });

  const numberOfTests = testcases.length;
  const numberOfTestsPassed = results.filter(({ isTestPassed }) => isTestPassed).length;
  const numberOfTestsFailed = numberOfTests - numberOfTestsPassed;

  const isAllTestsPassed = numberOfTests === numberOfTestsPassed;

  // ------------------------------------------------------------------------------
  // Return
  // ------------------------------------------------------------------------------

  return {
    results,
    numberOfTests,
    numberOfTestsPassed,
    numberOfTestsFailed,
    isAllTestsPassed,
  };
}
