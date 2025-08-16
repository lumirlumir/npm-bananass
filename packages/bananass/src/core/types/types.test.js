/**
 * @fileoverview Test for `types.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import {
  configObject,
  configObjectBrowser,
  // configObjectConsole,
  // configObjectAdd,
  // configObjectBug,
  // configObjectBuild,
  // configObjectDiscussion,
  // configObjectHome,
  // configObjectInfo,
  // configObjectOpen,
  // configObjectRepo,
  // configObjectRun,
  // problem,
  // problems,
  // input,
  // output,
  // testcase,
  // testcases,
  // solution,
} from './types.js';

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

  describe('config-object-browser', () => {
    // true
    it('should return true for an empty object', () => {
      const object = {};

      strictEqual(configObjectBrowser.safeParse(object).success, true);
    });
    it('should return true for a valid `browser` property (`chrome`)', () => {
      const object = {
        browser: 'chrome',
      };

      strictEqual(configObjectBrowser.safeParse(object).success, true);
    });
    it('should return true for a valid `browser` property (`edge`)', () => {
      const object = {
        browser: 'edge',
      };

      strictEqual(configObjectBrowser.safeParse(object).success, true);
    });
    it('should return true for a valid `browser` property (`firefox`)', () => {
      const object = {
        browser: 'firefox',
      };

      strictEqual(configObjectBrowser.safeParse(object).success, true);
    });
    it('should return true for a valid `browser` property (`brave`)', () => {
      const object = {
        browser: 'brave',
      };

      strictEqual(configObjectBrowser.safeParse(object).success, true);
    });
    it('should return true for a valid `browser` property (`default`)', () => {
      const object = {
        browser: 'default',
      };

      strictEqual(configObjectBrowser.safeParse(object).success, true);
    });
    it('should return true for a valid `secret` property', () => {
      const object = {
        secret: true,
      };

      strictEqual(configObjectBrowser.safeParse(object).success, true);
    });
    it('should return true for a valid `browser` and `secret` property', () => {
      const object = {
        browser: 'default',
        secret: false,
      };

      strictEqual(configObjectBrowser.safeParse(object).success, true);
    });

    // false
    it('should return false for an unknown property', () => {
      const object = {
        unknownProperty: 'Hello, World!',
      };

      strictEqual(configObjectBrowser.safeParse(object).success, false);
    });
    it('should return false for an invalid `browser` property', () => {
      const object = {
        browser: 'chrmoe',
      };

      strictEqual(configObjectBrowser.safeParse(object).success, false);
    });
  });
});
