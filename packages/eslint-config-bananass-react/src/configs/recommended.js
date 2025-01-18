/**
 * @fileoverview Configuration applied when a user configuration extends from `recommended`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const bananass = require('eslint-config-bananass');

const reactCompilerPlugin = require('eslint-plugin-react-compiler');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const reactPlugin = require('eslint-plugin-react');

const reactCompiler = require('../rules/react-compiler');
const reactHooks = require('../rules/react-hooks');
const react = require('../rules/react');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  name: 'bananass-react/recommended',
  files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx'],
  languageOptions: {
    ...bananass.configs.recommended.languageOptions,

    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    ...bananass.configs.recommended.plugins,

    'react-compiler': reactCompilerPlugin,
    'react-hooks': reactHooksPlugin,
    react: reactPlugin,
  },
  rules: {
    ...bananass.configs.recommended.rules,

    ...reactCompiler,
    ...reactHooks,
    ...react,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
