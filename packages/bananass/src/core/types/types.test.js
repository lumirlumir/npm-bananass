/**
 * @fileoverview Test for `types.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { configObject } from './types.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('types', () => {
  describe('config-object', () => {
    // true
    it('should return true for an empty object', () => {
      const object = {};

      strictEqual(configObject.safeParse(object).success, true);
    });
    it('should return true for a valid object with some properties', () => {
      const object = {
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

      strictEqual(configObject.safeParse(object).success, true);
    });

    // false
    it('should return false for an unknown property', () => {
      const object = {
        unknownProperty: 'Hello, World!',
      };

      strictEqual(configObject.safeParse(object).success, false);
    });
    it('should return false for an invalid type', () => {
      strictEqual(configObject.safeParse(0).success, false);
      strictEqual(configObject.safeParse('string').success, false);
      strictEqual(configObject.safeParse(true).success, false);
      strictEqual(configObject.safeParse(undefined).success, false);
      strictEqual(configObject.safeParse(null).success, false);
      strictEqual(configObject.safeParse([]).success, false);
    });
  });
});
