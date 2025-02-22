/**
 * @fileoverview Test for `typescript-extension.js`, `typescript-recommended.js`, `typescript-stylistic.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { strictEqual } = require('node:assert');
const { describe, it } = require('node:test');

// const typescriptExtension = require('./typescript-extension'); // TODO
const typescriptRecommended = require('./typescript-recommended');
const typescriptStylistic = require('./typescript-stylistic');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const prefix = '@typescript-eslint/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

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
