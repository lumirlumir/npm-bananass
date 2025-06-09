/**
 * @fileoverview Test for `config-object.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObject from './config-object.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object', () => {
  // true
  it('should return true for an empty object', () => {
    const configObject = {};

    strictEqual(ConfigObject.is(configObject), true);
  });
  it('should return true for a valid object with some properties', () => {
    const configObject = {
      cwd: '/path/to/directory',
      entryDir: 'entry',

      browser: {
        browser: 'default',
        secret: false,
      },
      console: {
        debug: false,
      },
    };

    strictEqual(ConfigObject.is(configObject), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObject = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObject.is(configObject), false);
  });
  it('should return false for an invalid type', () => {
    strictEqual(ConfigObject.is(0), false);
    strictEqual(ConfigObject.is('string'), false);
    strictEqual(ConfigObject.is(true), false);
    strictEqual(ConfigObject.is(undefined), false);
    strictEqual(ConfigObject.is(null), false);
    strictEqual(ConfigObject.is([]), false);
  });
});
