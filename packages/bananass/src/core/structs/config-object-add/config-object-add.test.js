/**
 * @fileoverview Test for `config-object-add.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectAdd from './config-object-add.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-add.js', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectAdd = {};

    strictEqual(ConfigObjectAdd.is(configObjectAdd), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectAdd = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectAdd.is(configObjectAdd), false);
  });
});
