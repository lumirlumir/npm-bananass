/**
 * @fileoverview Test for `typescript-extension.js`, `typescript-recommended.js`, `typescript-stylistic.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import typescriptExtension from './typescript-extension.js';
import typescriptRecommended from './typescript-recommended.js';
import typescriptStylistic from './typescript-stylistic.js';

// --------------------------------------------------------------------------------
// Helper
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
