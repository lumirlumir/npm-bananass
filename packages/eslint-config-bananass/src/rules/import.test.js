/**
 * @fileoverview Test for `import.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { importPlugin, importRules } from './import.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = 'import/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('import', () => {
  describe('Exports', () => {
    it('`importPlugin` should be defined', () => {
      ok(importPlugin);
      strictEqual(typeof importPlugin, 'object');
    });
  });

  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('import.js', () => {
      Object.keys(importRules).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
