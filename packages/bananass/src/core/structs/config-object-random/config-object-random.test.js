/**
 * @fileoverview Test for `config-object-random.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectRandom from './config-object-random.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-random.js', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectRandom = {};

    strictEqual(ConfigObjectRandom.is(configObjectRandom), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectRandom = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectRandom.is(configObjectRandom), false);
  });
});
