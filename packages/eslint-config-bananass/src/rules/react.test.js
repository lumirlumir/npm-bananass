/**
 * @fileoverview Test for `react.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { reactPlugin, reactRules } from './react.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = 'react/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('react', () => {
  describe('Exports', () => {
    it('`reactPlugin` should be defined', () => {
      ok(reactPlugin);
      strictEqual(typeof reactPlugin, 'object');
    });
  });

  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('react.js', () => {
      Object.keys(reactRules).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
