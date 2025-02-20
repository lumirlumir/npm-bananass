/**
 * @fileoverview Test for `react-hooks.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { strictEqual } = require('node:assert');
const { describe, it } = require('node:test');

const reactHooks = require('./react-hooks');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const prefix = 'react-hooks/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe(`All key values must start with \`${prefix}\`.`, () => {
  it('react-hooks.js', () => {
    Object.keys(reactHooks).forEach(key => {
      strictEqual(key.startsWith(prefix), true);
    });
  });
});
