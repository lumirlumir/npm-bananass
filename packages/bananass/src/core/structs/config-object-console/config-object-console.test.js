/**
 * @fileoverview Test for `config-object-console.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectConsole from './config-object-console.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-console', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectConsole = {};

    strictEqual(ConfigObjectConsole.is(configObjectConsole), true);
  });
  it('should return true for a valid `debug` property', () => {
    const configObjectConsole = {
      debug: true,
    };

    strictEqual(ConfigObjectConsole.is(configObjectConsole), true);
  });
  it('should return true for a valid `quiet` property', () => {
    const configObjectConsole = {
      quiet: true,
    };

    strictEqual(ConfigObjectConsole.is(configObjectConsole), true);
  });
  it('should return true for a valid `debug` and `quiet` property', () => {
    const configObjectConsole = {
      debug: true,
      quiet: true,
    };

    strictEqual(ConfigObjectConsole.is(configObjectConsole), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectConsole = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectConsole.is(configObjectConsole), false);
  });
  it('should return false for an invalid `debug` property', () => {
    const configObjectConsole = {
      debug: 'Hello, World!',
    };

    strictEqual(ConfigObjectConsole.is(configObjectConsole), false);
  });
});
