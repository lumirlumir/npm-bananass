/**
 * @fileoverview Test for `eslint.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { eslintRules } from './eslint.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = '/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('eslint', () => {
  describe(`All key values must not include \`${prefix}\`.`, () => {
    it('eslint.js', () => {
      Object.keys(eslintRules).forEach(key => {
        strictEqual(key.includes(prefix), false);
      });
    });
  });
});
