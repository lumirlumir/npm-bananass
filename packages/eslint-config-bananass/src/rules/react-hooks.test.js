/**
 * @fileoverview Test for `react-hooks.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { reactHooksRules } from './react-hooks.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = 'react-hooks/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('react-hooks', () => {
  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('react-hooks.js', () => {
      Object.keys(reactHooksRules).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
