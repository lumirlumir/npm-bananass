/**
 * @fileoverview Test for `import.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import importRules from './import.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = 'import/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('import', () => {
  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('import.js', () => {
      Object.keys(importRules).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
