/**
 * @fileoverview Test for `config-object-info.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectInfo from './config-object-info.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-info.js', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectInfo = {};

    strictEqual(ConfigObjectInfo.is(configObjectInfo), true);
  });

  it('should return true for a valid `all` property', () => {
    const configObjectInfo = {
      all: true,
    };

    strictEqual(ConfigObjectInfo.is(configObjectInfo), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectInfo = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectInfo.is(configObjectInfo), false);
  });

  it('should return false for an invalid `all` property', () => {
    const configObjectInfo = {
      all: 'Hello, World!',
    };

    strictEqual(ConfigObjectInfo.is(configObjectInfo), false);
  });
});
