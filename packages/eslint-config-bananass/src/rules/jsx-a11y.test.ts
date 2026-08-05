/**
 * @fileoverview Test for `jsx-a11y.ts`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import { jsxA11yPlugin, jsxA11yRules } from './jsx-a11y.ts';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = 'jsx-a11y/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('jsx-a11y', () => {
  describe('Exports', () => {
    it('`jsxA11yPlugin` should be defined', () => {
      ok(jsxA11yPlugin);
      strictEqual(typeof jsxA11yPlugin, 'object');
    });
  });

  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('jsx-a11y.ts', () => {
      Object.keys(jsxA11yRules).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
