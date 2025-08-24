/**
 * @fileoverview Test runner. Return an object with test results.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import {
  SolutionWithTestcases as SolutionWithTestcasesStruct,
  Input as InputStruct,
  Output as OutputStruct,
} from '../../core/structs/index.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { SolutionWithTestcases, Output } from '../../core/types/index.js';
 */

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

/** @param {Output} output */
function transformOutput(output) {
  return String(output).trimEnd();
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Test runner. Return an object with test results.
 * @param {SolutionWithTestcases} solutionWithTestcases
 */
export default function testRunner(solutionWithTestcases) {
  // ------------------------------------------------------------------------------
  // Runtime Validation
  // ------------------------------------------------------------------------------

  SolutionWithTestcasesStruct.assert(solutionWithTestcases);

  // ------------------------------------------------------------------------------
  // Declarations
  // ------------------------------------------------------------------------------

  const { solution, testcases } = solutionWithTestcases;

  // ------------------------------------------------------------------------------
  // Test Runner
  // ------------------------------------------------------------------------------

  const results = testcases.map(({ input, output: outputExpected }) => {
    const outputActual = solution(input);

    InputStruct.assert(input);
    OutputStruct.assert(outputExpected);
    OutputStruct.assert(outputActual);

    const outputExpectedTransformed = transformOutput(outputExpected);
    const outputActualTransformed = transformOutput(outputActual);

    return {
      input,
      outputExpected,
      outputActual,
      outputExpectedTransformed,
      outputActualTransformed,
      isTestPassed: Object.is(outputExpectedTransformed, outputActualTransformed),
    };
  });

  const numberOfTests = testcases.length;
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
