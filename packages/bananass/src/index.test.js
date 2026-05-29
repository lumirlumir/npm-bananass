/**
 * @fileoverview Test for `index.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import packageJson from '../package.json' with { type: 'json' };

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('index', () => {
  describe('package.json', () => {
    it('should not have `typesVersions` keys that start with `./`', () => {
      const typesVersionKeys = Object.keys(packageJson.typesVersions['*']);

      strictEqual(typesVersionKeys.filter(key => key.startsWith('./')).length, 0);
    });
  });
});
