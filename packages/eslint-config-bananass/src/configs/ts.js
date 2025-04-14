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
// Import
// --------------------------------------------------------------------------------

import { ts } from '../files.js';
import { globals, parser } from '../language-options.js';
import { node } from '../settings.js';

import {
  importPlugin,
  nodePlugin,
  stylisticJsPlugin,
  typescriptPlugin,
} from '../plugins.js';

import {
  eslintRules,
  importRules,
  nodeRules,
  stylisticJsRules,
  typescriptRules,
} from '../rules/index.js';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.Config} */
// @ts-expect-error -- `typescriptPlugin` makes an error here, but it is a valid config.
export default {
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
