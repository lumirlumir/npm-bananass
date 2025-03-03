/**
 * @fileoverview Test for `config-object-run.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectRun from './config-object-run.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-run.js', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectRun = {};

    strictEqual(ConfigObjectRun.is(configObjectRun), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectRun = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectRun.is(configObjectRun), false);
  });
});
