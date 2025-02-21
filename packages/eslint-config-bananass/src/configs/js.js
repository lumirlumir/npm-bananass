/**
 * @fileoverview Configuration applied when a user configuration extends from `js`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { globals } = require('../language-options');
const { importPlugin, nodePlugin, stylisticJsPlugin } = require('../plugins');
const { eslintRules, importRules, nodeRules, stylisticJsRules } = require('../rules');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  name: 'bananass/js',
  languageOptions: {
    globals,
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
