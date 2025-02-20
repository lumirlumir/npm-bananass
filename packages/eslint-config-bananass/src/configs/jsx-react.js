/**
 * @fileoverview Configuration applied when a user configuration extends from `jsx.react`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const reactPlugin = require('eslint-plugin-react');
const reactCompilerPlugin = require('eslint-plugin-react-compiler');
const reactHooksPlugin = require('eslint-plugin-react-hooks');

const jsxA11yRules = require('../rules/jsx-a11y');
const reactRules = require('../rules/react');
const reactCompilerRules = require('../rules/react-compiler');
const reactHooksRules = require('../rules/react-hooks');

const js = require('./js');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  name: 'bananass/jsx-react',
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

    'jsx-a11y': jsxA11yPlugin,
    react: reactPlugin,
    'react-compiler': reactCompilerPlugin,
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    ...js.rules,

    ...jsxA11yRules,
    ...reactRules,
    ...reactCompilerRules,
    ...reactHooksRules,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
