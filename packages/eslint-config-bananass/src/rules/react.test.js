/**
 * @fileoverview Test for `react.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import react from './react.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = 'react/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('react', () => {
  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('react.js', () => {
      Object.keys(react).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
