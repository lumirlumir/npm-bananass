/**
 * @fileoverview Test for `stylistic-js.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { strictEqual } = require('node:assert');
const { describe, it } = require('node:test');

const stylisticJs = require('./stylistic-js');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const prefix = '@stylistic/js/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('stylistic-js', () => {
  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('stylistic-js.js', () => {
      Object.keys(stylisticJs).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
