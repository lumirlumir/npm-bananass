/**
 * @fileoverview Test for `node.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { nodePlugin, nodeRules } from './node.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = 'n/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('node', () => {
  describe('Exports', () => {
    it('`nodePlugin` should be defined', () => {
      ok(nodePlugin);
      strictEqual(typeof nodePlugin, 'object');
    });
  });

  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('node.js', () => {
      Object.keys(nodeRules).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
