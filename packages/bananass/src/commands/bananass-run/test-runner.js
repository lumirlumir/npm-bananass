/**
 * @fileoverview Test runner. Return an object with test results.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import {
  testcases as testcasesSchema,
  solution as solutionSchema,
} from '../../core/types/index.js';

// --------------------------------------------------------------------------------
// Typedef
// --------------------------------------------------------------------------------

/**
 * @import { Output, Testcases, Solution } from '../../core/types/index.js';
 */

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

/** @param {Output} output */
function normalizeOutput(output) {
  return String(output).trimEnd();
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Test runner. Return an object with test results.
 * @param {{testcases?: Testcases, solution: Solution}} solutionWithTestcases
 */
export default function testRunner({ testcases, solution }) {
  // ------------------------------------------------------------------------------
  // Declaration
  // ------------------------------------------------------------------------------

  const sanitizedTestcases = testcasesSchema.parse(testcases);
  const sanitizedSolution = solutionSchema.implement(solution);

  // ------------------------------------------------------------------------------
  // Test Runner
  // ------------------------------------------------------------------------------

  const results = sanitizedTestcases.map(({ input, output: outputExpected }) => {
    const outputActual = sanitizedSolution(input);
    const normalizedOutputExpected = normalizeOutput(outputExpected);
    const normalizedOutputActual = normalizeOutput(outputActual);

    return {
      input,
      outputExpected,
      outputActual,
      normalizedOutputExpected,
      normalizedOutputActual,
      isTestPassed: Object.is(normalizedOutputExpected, normalizedOutputActual),
    };
  });

  const numberOfTests = sanitizedTestcases.length;
  const numberOfTestsPassed = results.filter(({ isTestPassed }) => isTestPassed).length;
  const numberOfTestsFailed = numberOfTests - numberOfTestsPassed;
  const isAllTestsPassed = Object.is(numberOfTests, numberOfTestsPassed);

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
