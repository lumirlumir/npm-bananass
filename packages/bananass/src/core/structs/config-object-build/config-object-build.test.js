/**
 * @fileoverview Test for `config-object-build.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectBuild from './config-object-build.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-build', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectBuild = {};

    strictEqual(ConfigObjectBuild.is(configObjectBuild), true);
  });
  it('should return true for a valid `clean` property', () => {
    const configObjectBuild = {
      clean: true,
    };

    strictEqual(ConfigObjectBuild.is(configObjectBuild), true);
  });
  it('should return true for a valid `templateType` property (`fs`)', () => {
    const configObjectBuild = {
      templateType: 'fs',
    };

    strictEqual(ConfigObjectBuild.is(configObjectBuild), true);
  });
  it('should return true for a valid `templateType` property (`rl`)', () => {
    const configObjectBuild = {
      templateType: 'rl',
    };

    strictEqual(ConfigObjectBuild.is(configObjectBuild), true);
  });
  it('should return true for a valid `clean` and `templateType` property', () => {
    const configObjectBuild = {
      clean: true,
      templateType: 'fs',
    };

    strictEqual(ConfigObjectBuild.is(configObjectBuild), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectBuild = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectBuild.is(configObjectBuild), false);
  });
  it('should return false for an invalid `templateType` property', () => {
    const configObjectBuild = {
      templateType: 'fe',
    };

    strictEqual(ConfigObjectBuild.is(configObjectBuild), false);
  });
});
