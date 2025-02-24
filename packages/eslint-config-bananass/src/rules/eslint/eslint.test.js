/**
 * @fileoverview Test for `eslint-layout-formatting.js`, `eslint-possible-problems.js`, `eslint-suggestions.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { strictEqual } = require('node:assert');
const { describe, it } = require('node:test');

const eslintLayoutFormatting = require('./eslint-layout-formatting');
const eslintPossibleProblems = require('./eslint-possible-problems');
const eslintSuggestions = require('./eslint-suggestions');

// --------------------------------------------------------------------------------
// Declaration
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
