/**
 * @fileoverview Test for `index.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import prettierConfig from './index';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('index.js', () => {
  it('printWidth should be 90', () => {
    strictEqual(prettierConfig.printWidth, 90);
  });

  it('tabWidth should be 2', () => {
    strictEqual(prettierConfig.tabWidth, 2);
  });

  it('useTabs should be false', () => {
    strictEqual(prettierConfig.useTabs, false);
  });

  it('semi should be true', () => {
    strictEqual(prettierConfig.semi, true);
  });

  it('singleQuote should be true', () => {
    strictEqual(prettierConfig.singleQuote, true);
  });

  it('quoteProps should be "as-needed"', () => {
    strictEqual(prettierConfig.quoteProps, 'as-needed');
  });

  it('jsxSingleQuote should be false', () => {
    strictEqual(prettierConfig.jsxSingleQuote, false);
  });

  it('trailingComma should be "all"', () => {
    strictEqual(prettierConfig.trailingComma, 'all');
  });

  it('bracketSpacing should be true', () => {
    strictEqual(prettierConfig.bracketSpacing, true);
  });

  it('bracketSameLine should be false', () => {
    strictEqual(prettierConfig.bracketSameLine, false);
  });

  it('arrowParens should be "avoid"', () => {
    strictEqual(prettierConfig.arrowParens, 'avoid');
  });

  it('proseWrap should be "never"', () => {
    strictEqual(prettierConfig.proseWrap, 'never');
  });

  it('htmlWhitespaceSensitivity should be "css"', () => {
    strictEqual(prettierConfig.htmlWhitespaceSensitivity, 'css');
  });

  it('endOfLine should be "lf"', () => {
    strictEqual(prettierConfig.endOfLine, 'lf');
  });

  it('singleAttributePerLine should be false', () => {
    strictEqual(prettierConfig.singleAttributePerLine, false);
  });
});
