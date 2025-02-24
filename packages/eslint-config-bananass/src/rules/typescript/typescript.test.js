/**
 * @fileoverview Test for `typescript-extension.js`, `typescript-recommended.js`, `typescript-stylistic.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { strictEqual } = require('node:assert');
const { describe, it } = require('node:test');

const typescriptExtension = require('./typescript-extension');
const typescriptRecommended = require('./typescript-recommended');
const typescriptStylistic = require('./typescript-stylistic');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const prefix = '@typescript-eslint/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('typescript', () => {
  describe('The rules of ESLint and TypeScript must correspond one-to-one in the extension rules.', () => {
    it('typescript-extension.js', () => {
      const keys = Object.keys(typescriptExtension);
      const eslintKeys = keys.filter(key => !key.startsWith(prefix));
      const typescriptKeys = keys.filter(key => key.startsWith(prefix));

      strictEqual(eslintKeys.length, typescriptKeys.length);
    });
  });

  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('typescript-recommended.js', () => {
      Object.keys(typescriptRecommended).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });

    it('typescript-stylistic.js', () => {
      Object.keys(typescriptStylistic).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
