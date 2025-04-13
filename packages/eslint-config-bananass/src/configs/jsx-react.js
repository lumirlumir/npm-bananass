/**
 * @fileoverview Configuration applied when a user configuration extends from `jsx.react`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { js, jsx } = require('../files');
const { globals, parserOptions } = require('../language-options');
const { node, react } = require('../settings');

const {
  importPlugin,
  nodePlugin,
  stylisticJsPlugin,
  jsxA11yPlugin,
  reactPlugin,
  reactCompilerPlugin,
  reactHooksPlugin,
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
} = require('../rules');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.Config} */
module.exports = {
  name: 'bananass/jsx-react',
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
  },
  settings: {
    node,
    react,
  },
};
