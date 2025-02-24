/**
 * @fileoverview Test for `jsx-a11y.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { strictEqual } = require('node:assert');
const { describe, it } = require('node:test');

const jsxA11y = require('./jsx-a11y');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const prefix = 'jsx-a11y/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('jsx-a11y', () => {
  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('jsx-a11y.js', () => {
      Object.keys(jsxA11y).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
