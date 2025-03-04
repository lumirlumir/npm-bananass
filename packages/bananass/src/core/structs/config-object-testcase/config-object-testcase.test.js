/**
 * @fileoverview Test for `config-object-testcase.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectTestcase from './config-object-testcase.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-testcase.js', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectTestcase = {};

    strictEqual(ConfigObjectTestcase.is(configObjectTestcase), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectTestcase = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectTestcase.is(configObjectTestcase), false);
  });
});
