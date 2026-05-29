/**
 * @fileoverview Test for `node.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { nodeRules } from './node.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = 'n/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('node', () => {
  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('node.js', () => {
      Object.keys(nodeRules).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
