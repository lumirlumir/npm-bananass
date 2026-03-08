/**
 * @fileoverview Test for `stylistic.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import stylistic from './stylistic.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = '@stylistic/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('stylistic', () => {
  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('stylistic.js', () => {
      Object.keys(stylistic).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
