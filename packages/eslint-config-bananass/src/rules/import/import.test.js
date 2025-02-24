/**
 * @fileoverview Test for `import-helpful-warnings.js`, `import-module-systems.js`, `import-static-analysis.js`, `import-style-guide.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { strictEqual } = require('node:assert');
const { describe, it } = require('node:test');

const importHelpfulWarnings = require('./import-helpful-warnings');
const importModuleSystems = require('./import-module-systems');
const importStaticAnalysis = require('./import-static-analysis');
const importStyleGuide = require('./import-style-guide');

// --------------------------------------------------------------------------------
// Declaration
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

    it('import-module-systems.js', () => {
      Object.keys(importModuleSystems).forEach(key => {
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
