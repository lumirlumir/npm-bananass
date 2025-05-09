/**
 * @fileoverview Test for `config-object-repo.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectRepo from './config-object-repo.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-repo', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectRepo = {};

    strictEqual(ConfigObjectRepo.is(configObjectRepo), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectRepo = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectRepo.is(configObjectRepo), false);
  });
});
