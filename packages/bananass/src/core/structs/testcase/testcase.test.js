/**
 * @fileoverview Test for `testcase.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import Testcase from './testcase.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('testcase', () => {
  // true
  it('should return true for a valid object without input', () => {
    const testcase = {
      output: 'result',
    };

    strictEqual(Testcase.is(testcase), true);
  });
  it('should return true for a valid object with input', () => {
    const testcase = {
      input: 'Hello, World!',
      output: 'Hello, World! processed',
    };

    strictEqual(Testcase.is(testcase), true);
  });

  // false
  it('should return false for an empty object', () => {
    const testcase = {};

    strictEqual(Testcase.is(testcase), false);
  });
  it('should return false for an unknown property', () => {
    const testcase = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(Testcase.is(testcase), false);
  });
});
