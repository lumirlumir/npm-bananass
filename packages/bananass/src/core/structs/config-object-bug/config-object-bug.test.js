/**
 * @fileoverview Test for `config-object-bug.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectBug from './config-object-bug.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-bug.js', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectBug = {};

    strictEqual(ConfigObjectBug.is(configObjectBug), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectBug = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectBug.is(configObjectBug), false);
  });
});
