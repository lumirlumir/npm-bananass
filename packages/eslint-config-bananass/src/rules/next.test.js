/**
 * @fileoverview Test for `next.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { nextPlugin, nextRules } from './next.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = '@next/next/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('next', () => {
  describe('Exports', () => {
    it('`nextPlugin` should be defined', () => {
      ok(nextPlugin);
      strictEqual(typeof nextPlugin, 'object');
    });
  });

  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('next.js', () => {
      Object.keys(nextRules).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
