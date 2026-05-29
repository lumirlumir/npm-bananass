/**
 * @fileoverview Test for `jsx-a11y.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { jsxA11yRules } from './jsx-a11y.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = 'jsx-a11y/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('jsx-a11y', () => {
  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('jsx-a11y.js', () => {
      Object.keys(jsxA11yRules).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
