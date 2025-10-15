/**
 * @fileoverview Test for `import-helpful-warnings.js`, `import-module-systems.js`, `import-static-analysis.js`, `import-style-guide.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import importHelpfulWarnings from './import-helpful-warnings.js';
import importStaticAnalysis from './import-static-analysis.js';
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
    it('import-helpful-warnings.js', () => {
      Object.keys(importHelpfulWarnings).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });

    it('import-static-analysis.js', () => {
      Object.keys(importStaticAnalysis).forEach(key => {
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
