/**
 * @fileoverview Test for `next.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { nextRules } from './next.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = '@next/next/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('next', () => {
  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('next.js', () => {
      Object.keys(nextRules).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
