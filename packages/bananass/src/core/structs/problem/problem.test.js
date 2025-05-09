/**
 * @fileoverview Test for `problem.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import Problem from './problem.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('problem', () => {
  // true
  it('should return true for a valid problem string', () => {
    const problem1 = '1234';
    const problem2 = '30002';

    strictEqual(Problem.is(problem1), true);
    strictEqual(Problem.is(problem2), true);
  });

  // false
  it('should return false if any problem number is below minimum', () => {
    const problem1 = '999';
    const problem2 = '0';
    const problem3 = '-999';

    strictEqual(Problem.is(problem1), false);
    strictEqual(Problem.is(problem2), false);
    strictEqual(Problem.is(problem3), false);
  });
  it('should return false if the value is non-string', () => {
    const problem = 1500;

    strictEqual(Problem.is(problem), false);
  });
  it('should return false if the value is an empty string', () => {
    const problem = '';

    strictEqual(Problem.is(problem), false);
  });
  it('should return false for non-string inputs', () => {
    strictEqual(Problem.is(null), false);
    strictEqual(Problem.is(undefined), false);
    strictEqual(Problem.is({}), false);
  });
});
