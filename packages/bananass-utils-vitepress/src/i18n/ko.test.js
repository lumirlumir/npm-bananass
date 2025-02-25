/**
 * @fileoverview Test for `ko.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import ko from './ko.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('ko.js', () => {
  it('should return default configuration when no option is provided', () => {
    const koConfig = ko();

    strictEqual(koConfig.themeConfig.editLink.pattern, '');
    ok(koConfig.themeConfig.search.options.locales.root);
  });

  it('should return configuration with provided `themeConfigEditLinkPattern`', () => {
    const themeConfigEditLinkPattern = 'https://github.com/org/repo/edit/main/docs/:path';
    const koConfig = ko({ themeConfigEditLinkPattern });

    strictEqual(koConfig.themeConfig.editLink.pattern, themeConfigEditLinkPattern);
  });

  it('should return configuration with provided `searchOptionsLocalesKey`', () => {
    const searchOptionsLocalesKey = 'ko';
    const koConfig = ko({ searchOptionsLocalesKey });

    ok(koConfig.themeConfig.search.options.locales.ko);
  });
});
