/**
 * @fileoverview Test for `typescript.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import typescript from './typescript.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = '@typescript-eslint/';
const eslintKeys = Object.keys(typescript).filter(key => !key.includes('/'));
const typescriptKeys = Object.keys(typescript).filter(key => key.includes('/'));

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('typescript', () => {
  it('The rules of ESLint and TypeScript must correspond one-to-one in the extension rules', () => {
    for (const eslintKey of eslintKeys) {
      ok(Object.hasOwn(typescript, `${prefix}${eslintKey}`));
    }
  });

  it('The rules of ESLint should be set to "off" in the extension rules', () => {
    for (const eslintKey of eslintKeys) {
      strictEqual(typescript[eslintKey], 'off');
    }
  });

  it('The rules of TypeScript should have `@typescript-eslint/` prefix', () => {
    for (const typescriptKey of typescriptKeys) {
      ok(typescriptKey.startsWith(prefix));
    }
  });
});
