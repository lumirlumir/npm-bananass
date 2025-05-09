/**
 * @fileoverview Test for `problems.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import Problems from './problems.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('problems', () => {
  // true
  it('should return true for a single valid problem string', () => {
    const problems = ['1234'];

    strictEqual(Problems.is(problems), true);
  });

  it('should return true for valid problems array', () => {
    const problems = ['1000', '1500', '2000'];

    strictEqual(Problems.is(problems), true);
  });

  // false
  it('should return false for an empty array', () => {
    const problems = [];

    strictEqual(Problems.is(problems), false);
  });

  it('should return false if any problem number is below minimum', () => {
    const problems = ['1000', '999', '1500'];

    strictEqual(Problems.is(problems), false);
  });

  it('should return false if the array contains non-string values', () => {
    const problems = ['1000', 1500, '2000'];

    strictEqual(Problems.is(problems), false);
  });

  it('should return false if the array includes an empty string', () => {
    const problems = ['1000', '', '2000'];

    strictEqual(Problems.is(problems), false);
  });

  it('should return false for non-array inputs', () => {
    strictEqual(Problems.is(null), false);
    strictEqual(Problems.is('1000'), false);
    strictEqual(Problems.is({}), false);
  });
});
