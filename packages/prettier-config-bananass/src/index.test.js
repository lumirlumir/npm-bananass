/**
 * @fileoverview Test for `index.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { strictEqual } = require('node:assert');
const { test } = require('node:test');

const prettierConfig = require('./index');

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

test('printWidth should be 90', () => {
  strictEqual(prettierConfig.printWidth, 90);
});

test('tabWidth should be 2', () => {
  strictEqual(prettierConfig.tabWidth, 2);
});

test('useTabs should be false', () => {
  strictEqual(prettierConfig.useTabs, false);
});

test('semi should be true', () => {
  strictEqual(prettierConfig.semi, true);
});

test('singleQuote should be true', () => {
  strictEqual(prettierConfig.singleQuote, true);
});

test('quoteProps should be "as-needed"', () => {
  strictEqual(prettierConfig.quoteProps, 'as-needed');
});

test('jsxSingleQuote should be false', () => {
  strictEqual(prettierConfig.jsxSingleQuote, false);
});

test('trailingComma should be "all"', () => {
  strictEqual(prettierConfig.trailingComma, 'all');
});

test('bracketSpacing should be true', () => {
  strictEqual(prettierConfig.bracketSpacing, true);
});

test('bracketSameLine should be false', () => {
  strictEqual(prettierConfig.bracketSameLine, false);
});

test('arrowParens should be "avoid"', () => {
  strictEqual(prettierConfig.arrowParens, 'avoid');
});

test('proseWrap should be "never"', () => {
  strictEqual(prettierConfig.proseWrap, 'never');
});

test('htmlWhitespaceSensitivity should be "css"', () => {
  strictEqual(prettierConfig.htmlWhitespaceSensitivity, 'css');
});

test('endOfLine should be "lf"', () => {
  strictEqual(prettierConfig.endOfLine, 'lf');
});

test('singleAttributePerLine should be false', () => {
  strictEqual(prettierConfig.singleAttributePerLine, false);
});
