/**
 * @fileoverview Test for `config-object-login.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectLogin from './config-object-login.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-login.js', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectLogin = {};

    strictEqual(ConfigObjectLogin.is(configObjectLogin), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectLogin = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectLogin.is(configObjectLogin), false);
  });
});
