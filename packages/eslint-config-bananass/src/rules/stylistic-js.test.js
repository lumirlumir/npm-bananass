/**
 * @fileoverview Test for `stylistic-js.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import stylisticJs from './stylistic-js.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = '@stylistic/js/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('stylistic-js', () => {
  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('stylistic-js.js', () => {
      Object.keys(stylisticJs).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
