/**
 * @fileoverview Test for `solution.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import Solution from './solution.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('solution.js', () => {
  // true
  it('should return true for a function with 0 parameter (arrow func)', () => {
    const solution = () => 'result';

    strictEqual(Solution.is(solution), true);
  });
  it('should return true for a function with 1 parameter (arrow func)', () => {
    const solution = input => `${input} processed`;

    strictEqual(Solution.is(solution), true);
  });
  it('should return true for a function with 1 parameter (func declaration)', () => {
    function solution(input) {
      return `Result: ${input}`;
    }

    strictEqual(Solution.is(solution), true);
  });

  // false
  it('should return false for a function with 2 parameters', () => {
    const solution = (input, extra) => input + extra;

    strictEqual(Solution.is(solution), false);
  });
  it('should return false for a function with 3 parameters', () => {
    const solution = (a, b, c) => a + b + c;

    strictEqual(Solution.is(solution), false);
  });
  it('should return false for non-function values', () => {
    strictEqual(Solution.is('string'), false);
    strictEqual(Solution.is(123), false);
    strictEqual(Solution.is({}), false);
    strictEqual(Solution.is([]), false);
    strictEqual(Solution.is(null), false);
    strictEqual(Solution.is(undefined), false);
  });
});
