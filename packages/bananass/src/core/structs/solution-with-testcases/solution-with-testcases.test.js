/**
 * @fileoverview Test for `solution-with-testcases.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import SolutionWithTestcases from './solution-with-testcases.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('solution-with-testcases', () => {
  // true
  it('should return true for a valid object without testcases', () => {
    const solutionWithTestcases = {
      solution: () => 'result',
    };

    strictEqual(SolutionWithTestcases.is(solutionWithTestcases), true);
  });
  it('should return true for a valid object with testcases', () => {
    const solutionWithTestcases = {
      solution: input => `${input} processed`,
      testcases: [
        {
          input: 'Hello, World!',
          output: 'Hello, World! processed',
        },
      ],
    };

    strictEqual(SolutionWithTestcases.is(solutionWithTestcases), true);
  });

  // false
  it('should return false for an empty object', () => {
    const solutionWithTestcases = {};

    strictEqual(SolutionWithTestcases.is(solutionWithTestcases), false);
  });
  it('should return false for an unknown property', () => {
    const solutionWithTestcases = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(SolutionWithTestcases.is(solutionWithTestcases), false);
  });
});
