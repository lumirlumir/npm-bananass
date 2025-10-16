/**
 * @fileoverview Test for `import.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import importRule from './import.js';
import importStyleGuide from './import-style-guide.js';

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
      Object.keys(importRule).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });

    it('import-style-guide.js', () => {
      Object.keys(importStyleGuide).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
