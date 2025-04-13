/**
 * @fileoverview Configuration applied when a user configuration extends from `ts`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 *
 * @see https://eslint.org/docs/latest/use/configure/parser#configure-a-custom-parser
 * @see https://eslint.org/docs/latest/use/command-line-interface#--parser
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { ts } = require('../files');
const { globals, parser } = require('../language-options');
const { node } = require('../settings');

const {
  importPlugin,
  nodePlugin,
  stylisticJsPlugin,
  typescriptPlugin,
} = require('../plugins');

const {
  eslintRules,
  importRules,
  nodeRules,
  stylisticJsRules,
  typescriptRules,
} = require('../rules');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.Config} */
module.exports = {
  name: 'bananass/ts',
  files: ts,
  languageOptions: {
    globals,
    parser,
  },
  plugins: {
    ...importPlugin,
    ...nodePlugin,
    ...stylisticJsPlugin,
    ...typescriptPlugin,
  },
  rules: {
    ...eslintRules,
    ...importRules,
    ...nodeRules,
    ...stylisticJsRules,
    ...typescriptRules,
  },
  settings: {
    node,
  },
};
