/**
 * @fileoverview Test for `next.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { strictEqual } = require('node:assert');
const { describe, it } = require('node:test');

const next = require('./next');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const prefix = '@next/next/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('next', () => {
  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('next.js', () => {
      Object.keys(next).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
