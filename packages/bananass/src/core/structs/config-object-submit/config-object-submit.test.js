/**
 * @fileoverview Test for `config-object-submit.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectSubmit from './config-object-submit.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-submit.js', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectSubmit = {};

    strictEqual(ConfigObjectSubmit.is(configObjectSubmit), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectSubmit = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectSubmit.is(configObjectSubmit), false);
  });
});
