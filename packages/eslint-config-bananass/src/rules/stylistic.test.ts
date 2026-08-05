/**
 * @fileoverview Test for `stylistic.ts`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import { stylisticPlugin, stylisticRules } from './stylistic.ts';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = '@stylistic/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('stylistic', () => {
  describe('Exports', () => {
    it('`stylisticPlugin` should be defined', () => {
      ok(stylisticPlugin);
      strictEqual(typeof stylisticPlugin, 'object');
    });
  });

  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('stylistic.ts', () => {
      Object.keys(stylisticRules).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
