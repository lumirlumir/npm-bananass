/**
 * @fileoverview Test for `eslint-layout-formatting.js`, `eslint-possible-problems.js`, `eslint-suggestions.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import eslintLayoutFormatting from './eslint-layout-formatting.js';
import eslintPossibleProblems from './eslint-possible-problems.js';
import eslintSuggestions from './eslint-suggestions.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = '/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('eslint', () => {
  describe(`All key values must not include \`${prefix}\`.`, () => {
    it('eslint-layout-formatting.js', () => {
      Object.keys(eslintLayoutFormatting).forEach(key => {
        strictEqual(key.includes(prefix), false);
      });
    });

    it('eslint-possible-problems.js', () => {
      Object.keys(eslintPossibleProblems).forEach(key => {
        strictEqual(key.includes(prefix), false);
      });
    });

    it('eslint-suggestions.js', () => {
      Object.keys(eslintSuggestions).forEach(key => {
        strictEqual(key.includes(prefix), false);
      });
    });
  });
});
