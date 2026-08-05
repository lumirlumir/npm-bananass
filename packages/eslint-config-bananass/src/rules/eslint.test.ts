/**
 * @fileoverview Test for `eslint.ts`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import { eslintRules } from './eslint.ts';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = '/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('eslint', () => {
  describe(`All key values must not include \`${prefix}\`.`, () => {
    it('eslint.ts', () => {
      Object.keys(eslintRules).forEach(key => {
        strictEqual(key.includes(prefix), false);
      });
    });
  });
});
