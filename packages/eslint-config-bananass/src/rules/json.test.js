/**
 * @fileoverview Test for `json.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { jsonRules } from './json.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = 'json/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('json', () => {
  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('json.js', () => {
      Object.keys(jsonRules).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
