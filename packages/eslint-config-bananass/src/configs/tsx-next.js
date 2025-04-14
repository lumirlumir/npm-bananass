/**
 * @fileoverview Configuration applied when a user configuration extends from `tsx.next`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ts, tsx } from '../files.js';
import { globals, parser, parserOptions } from '../language-options.js';
import { node, react } from '../settings.js';

import {
  importPlugin,
  nodePlugin,
  stylisticJsPlugin,
  jsxA11yPlugin,
  reactPlugin,
  reactCompilerPlugin,
  reactHooksPlugin,
  nextPlugin,
  typescriptPlugin,
} from '../plugins.js';

import {
  eslintRules,
  importRules,
  nodeRules,
  stylisticJsRules,
  jsxA11yRules,
  reactRules,
  reactCompilerRules,
  reactHooksRules,
  nextRules,
  typescriptRules,
} from '../rules/index.js';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.Config} */
// @ts-expect-error -- TODO: `typescriptPlugin` makes an error here, but it is a valid config.
export default {
  name: 'bananass/tsx-next',
  files: [...ts, ...tsx],
  languageOptions: {
    globals,
    parser,
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
    ...typescriptPlugin,
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
    ...typescriptRules,

    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    node,
    react,
  },
};
