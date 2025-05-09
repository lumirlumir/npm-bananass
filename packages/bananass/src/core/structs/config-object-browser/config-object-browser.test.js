/**
 * @fileoverview Test for `config-object-browser.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ConfigObjectBrowser from './config-object-browser.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-object-browser', () => {
  // true
  it('should return true for an empty object', () => {
    const configObjectBrowser = {};

    strictEqual(ConfigObjectBrowser.is(configObjectBrowser), true);
  });
  it('should return true for a valid `browser` property (`chrome`)', () => {
    const configObjectBrowser = {
      browser: 'chrome',
    };

    strictEqual(ConfigObjectBrowser.is(configObjectBrowser), true);
  });
  it('should return true for a valid `browser` property (`edge`)', () => {
    const configObjectBrowser = {
      browser: 'edge',
    };

    strictEqual(ConfigObjectBrowser.is(configObjectBrowser), true);
  });
  it('should return true for a valid `browser` property (`firefox`)', () => {
    const configObjectBrowser = {
      browser: 'firefox',
    };

    strictEqual(ConfigObjectBrowser.is(configObjectBrowser), true);
  });
  it('should return true for a valid `browser` property (`default`)', () => {
    const configObjectBrowser = {
      browser: 'default',
    };

    strictEqual(ConfigObjectBrowser.is(configObjectBrowser), true);
  });
  it('should return true for a valid `secretMode` property', () => {
    const configObjectBrowser = {
      secretMode: true,
    };

    strictEqual(ConfigObjectBrowser.is(configObjectBrowser), true);
  });
  it('should return true for a valid `browser` and `secretMode` property', () => {
    const configObjectBrowser = {
      browser: 'default',
      secretMode: false,
    };

    strictEqual(ConfigObjectBrowser.is(configObjectBrowser), true);
  });

  // false
  it('should return false for an unknown property', () => {
    const configObjectBrowser = {
      unknownProperty: 'Hello, World!',
    };

    strictEqual(ConfigObjectBrowser.is(configObjectBrowser), false);
  });
  it('should return false for an invalid `browser` property', () => {
    const configObjectBrowser = {
      browser: 'chrmoe',
    };

    strictEqual(ConfigObjectBrowser.is(configObjectBrowser), false);
  });
});
