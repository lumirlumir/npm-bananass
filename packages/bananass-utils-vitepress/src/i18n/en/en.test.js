/**
 * @fileoverview Test for `en.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import en from './en.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('en', () => {
  it('should return default configuration when no option is provided', () => {
    const enConfig = en();

    strictEqual(enConfig.themeConfig.editLink.pattern, '');
  });

  it('should return configuration with provided `themeConfigEditLinkPattern`', () => {
    const themeConfigEditLinkPattern = 'https://github.com/org/repo/edit/main/docs/:path';
    const enConfig = en({ themeConfigEditLinkPattern });

    strictEqual(enConfig.themeConfig.editLink.pattern, themeConfigEditLinkPattern);
  });
});
