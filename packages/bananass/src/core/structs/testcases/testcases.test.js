/**
 * @fileoverview Test for `testcases.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import Testcases from './testcases.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('testcases.js', () => {
  // true
  it('should return true for valid testcases', () => {
    const testcases = [
      {
        input: '1\n2',
        output: '3',
      },
      {
        input: '2\n3',
        output: '5',
      },
    ];

    strictEqual(Testcases.is(testcases), true);
  });

  // false
  it('should return false for an empty array', () => {
    const problems = [];

    strictEqual(Testcases.is(problems), false);
  });
  it('should return false for non-array inputs', () => {
    strictEqual(Testcases.is(null), false);
    strictEqual(Testcases.is('1000'), false);
    strictEqual(Testcases.is({}), false);
  });
});
