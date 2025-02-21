/**
 * @fileoverview Configuration applied when a user configuration extends from `jsx.next`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const {
  jsxA11yPlugin,
  reactPlugin,
  reactCompilerPlugin,
  reactHooksPlugin,
  nextPlugin,
} = require('../plugins');

const {
  jsxA11yRules,
  reactRules,
  reactCompilerRules,
  reactHooksRules,
  nextRules,
} = require('../rules');

const js = require('./js');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  name: 'bananass/jsx-next',
  files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx'],
  languageOptions: {
    ...js.languageOptions,

    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    ...js.plugins,

    ...jsxA11yPlugin,
    ...reactPlugin,
    ...reactCompilerPlugin,
    ...reactHooksPlugin,
    ...nextPlugin,
  },
  rules: {
    ...js.rules,

    ...jsxA11yRules,
    ...reactRules,
    ...reactCompilerRules,
    ...reactHooksRules,
    ...nextRules,

    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
