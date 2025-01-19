/**
 * @fileoverview Test for `react.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { strictEqual } = require('node:assert');
const { describe, it } = require('node:test');

const react = require('./react');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const prefix = 'react/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe(`All key values must start with \`${prefix}\`.`, () => {
  it('react.js', () => {
    Object.keys(react).forEach(key => {
      strictEqual(key.startsWith(prefix), true);
    });
  });
});
