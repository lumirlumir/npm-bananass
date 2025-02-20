/**
 * @fileoverview Configuration applied when a user configuration extends from `jsx.react`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const reactPlugin = require('eslint-plugin-react');
const reactCompilerPlugin = require('eslint-plugin-react-compiler');
const reactHooksPlugin = require('eslint-plugin-react-hooks');

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

    react: reactPlugin,
    'react-compiler': reactCompilerPlugin,
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    ...js.rules,

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
