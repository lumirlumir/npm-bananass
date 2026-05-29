/**
 * @fileoverview Test for `react-hooks.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { reactHooksPlugin, reactHooksRules } from './react-hooks.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = 'react-hooks/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('react-hooks', () => {
  describe('Exports', () => {
    it('`reactHooksPlugin` should be defined', () => {
      ok(reactHooksPlugin);
      strictEqual(typeof reactHooksPlugin, 'object');
    });
  });

  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('react-hooks.js', () => {
      Object.keys(reactHooksRules).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
