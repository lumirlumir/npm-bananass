/**
 * @fileoverview Test for `json.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { jsonPlugin, jsonRules } from './json.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = 'json/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('json', () => {
  describe('Exports', () => {
    it('`jsonPlugin` should be defined', () => {
      ok(jsonPlugin);
      strictEqual(typeof jsonPlugin, 'object');
    });
  });

  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('json.js', () => {
      Object.keys(jsonRules).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
