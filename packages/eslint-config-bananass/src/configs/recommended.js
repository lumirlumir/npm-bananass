/**
 * @fileoverview Configuration applied when a user configuration extends from `recommended`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { browser, builtin, es2025, node, jest, vitest, mocha } = require('globals');

const nodePlugin = require('eslint-plugin-n');
const importPlugin = require('eslint-plugin-import');
const stylisticPlugin = require('@stylistic/eslint-plugin-js');

const eslintLayoutFormatting = require('../rules/eslint-layout-formatting');
const eslintPossibleProblems = require('../rules/eslint-possible-problems');
const eslintSuggestions = require('../rules/eslint-suggestions');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  name: 'bananass/recommended',
  languageOptions: {
    globals: {
      ...browser,
      ...builtin,
      ...es2025,
      ...node,
      ...jest,
      ...vitest,
      ...mocha,
    },
  },
  plugins: {
    n: nodePlugin,
    import: importPlugin,
    stylistic: stylisticPlugin,
  },
  rules: {
    ...eslintLayoutFormatting,
    ...eslintPossibleProblems,
    ...eslintSuggestions,
  },
};
