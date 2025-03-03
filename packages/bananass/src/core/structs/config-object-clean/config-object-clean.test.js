/**
 * @fileoverview Test for `config-object-clean.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectClean from './config-object-clean.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-clean.js', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectClean = {};

    strictEqual(ConfigObjectClean.is(configObjectClean), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectClean = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectClean.is(configObjectClean), false);
  });
});
