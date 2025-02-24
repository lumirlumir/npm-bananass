/**
 * @fileoverview Test for `react-compiler.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { strictEqual } = require('node:assert');
const { describe, it } = require('node:test');

const reactCompiler = require('./react-compiler');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const prefix = 'react-compiler/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('react-compiler', () => {
  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('react-compiler.js', () => {
      Object.keys(reactCompiler).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
