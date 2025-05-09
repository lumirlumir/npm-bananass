/**
 * @fileoverview Test for `config-object-open.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectOpen from './config-object-open.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-open', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectOpen = {};

    strictEqual(ConfigObjectOpen.is(configObjectOpen), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectOpen = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectOpen.is(configObjectOpen), false);
  });
});
