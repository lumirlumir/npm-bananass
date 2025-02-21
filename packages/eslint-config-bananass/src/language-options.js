/**
 * @fileoverview ESLint language options.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { browser, builtin, es2025, node, jest, vitest, mocha } = require('globals');
const typescriptParser = require('@typescript-eslint/parser');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports.globals = {
  ...browser,
  ...builtin,
  ...es2025,
  ...node,
  ...jest,
  ...vitest,
  ...mocha,
};

module.exports.parser = typescriptParser;

module.exports.parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
};
