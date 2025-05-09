/**
 * @fileoverview Test for `config-object-home.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectHome from './config-object-home.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-home', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectHome = {};

    strictEqual(ConfigObjectHome.is(configObjectHome), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectHome = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectHome.is(configObjectHome), false);
  });
});
