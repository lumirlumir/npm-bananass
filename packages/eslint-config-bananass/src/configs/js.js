/**
 * @fileoverview Configuration applied when a user configuration extends from `js`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { browser, builtin, es2025, node, jest, vitest, mocha } = require('globals');
const { importPlugin, nodePlugin, stylisticJsPlugin } = require('../plugins');
const { eslintRules, importRules, nodeRules, stylisticJsRules } = require('../rules');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  name: 'bananass/js',
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
    ...importPlugin,
    ...nodePlugin,
    ...stylisticJsPlugin,
  },
  rules: {
    ...eslintRules,
    ...importRules,
    ...nodeRules,
    ...stylisticJsRules,
  },
};
