/**
 * @fileoverview Test for `react-compiler.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import reactCompiler from './react-compiler.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const prefix = 'react-compiler/';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('react-compiler', () => {
  describe(`All key values must start with \`${prefix}\`.`, () => {
    it('react-compiler.js', () => {
      Object.keys(reactCompiler).forEach(key => {
        strictEqual(key.startsWith(prefix), true);
      });
    });
  });
});
