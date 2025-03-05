/**
 * @fileoverview Test for `config-object-lint.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectLint from './config-object-lint.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-lint.js', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectLint = {};

    strictEqual(ConfigObjectLint.is(configObjectLint), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectLint = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectLint.is(configObjectLint), false);
  });
});
