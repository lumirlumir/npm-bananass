/**
 * @fileoverview Entry file for the `prettier-config-bananass` package.
 * @module prettier-config-bananass
 *
 * All default values are based on `prettier@3`.
 */

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  printWidth: 90,
  tabWidth: 2, // Default.
  useTabs: false, // Default.
  semi: true, // Default.
  singleQuote: true,
  quoteProps: 'as-needed', // Default.
  jsxSingleQuote: false, // Default.
  trailingComma: 'all', // Default.
  bracketSpacing: true, // Default.
  bracketSameLine: false, // Default.
  arrowParens: 'avoid',
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'css', // Default.
  endOfLine: 'lf', // Default.
  singleAttributePerLine: false, // Default.
};
