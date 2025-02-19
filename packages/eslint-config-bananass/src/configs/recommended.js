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

const importPlugin = require('eslint-plugin-import');
const nodePlugin = require('eslint-plugin-n');
const stylisticJsPlugin = require('@stylistic/eslint-plugin-js');

const eslintRules = require('../rules/eslint');
const importRules = require('../rules/import');
const nodeRules = require('../rules/node');
const stylisticJsRules = require('../rules/stylistic-js');

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
    '@stylistic/js': stylisticJsPlugin,
  },
  rules: {
    ...eslintRules,
    ...importRules,
    ...nodeRules,
    ...stylisticJsRules,
  },
};
