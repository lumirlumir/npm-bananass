/**
 * @fileoverview Test for `react-hooks.ts`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import { reactHooksPlugin, reactHooksRules } from './react-hooks.ts';

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
    it('react-hooks.ts', () => {
      Object.keys(reactHooksRules).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
