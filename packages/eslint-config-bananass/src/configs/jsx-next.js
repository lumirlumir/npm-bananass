/**
 * @fileoverview Configuration applied when a user configuration extends from `jsx.next`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { js, jsx } = require('../files');
const { globals, parserOptions } = require('../language-options');
const { react } = require('../settings');

const {
  importPlugin,
  nodePlugin,
  stylisticJsPlugin,
  jsxA11yPlugin,
  reactPlugin,
  reactCompilerPlugin,
  reactHooksPlugin,
  nextPlugin,
} = require('../plugins');

const {
  eslintRules,
  importRules,
  nodeRules,
  stylisticJsRules,
  jsxA11yRules,
  reactRules,
  reactCompilerRules,
  reactHooksRules,
  nextRules,
} = require('../rules');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  name: 'bananass/jsx-next',
  files: [...js, ...jsx],
  languageOptions: {
    globals,
    parserOptions,
  },
  plugins: {
    ...importPlugin,
    ...nodePlugin,
    ...stylisticJsPlugin,
    ...jsxA11yPlugin,
    ...reactPlugin,
    ...reactCompilerPlugin,
    ...reactHooksPlugin,
    ...nextPlugin,
  },
  rules: {
    ...eslintRules,
    ...importRules,
    ...nodeRules,
    ...stylisticJsRules,
    ...jsxA11yRules,
    ...reactRules,
    ...reactCompilerRules,
    ...reactHooksRules,
    ...nextRules,

    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react,
  },
};
