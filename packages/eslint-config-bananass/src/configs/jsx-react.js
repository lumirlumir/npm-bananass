/**
 * @fileoverview Configuration applied when a user configuration extends from `jsx.react`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { js, jsx } from '../files.js';
import { globals, parserOptions } from '../language-options.js';
import { node, react } from '../settings.js';

import {
  importPlugin,
  nodePlugin,
  stylisticJsPlugin,
  jsxA11yPlugin,
  reactPlugin,
  reactCompilerPlugin,
  reactHooksPlugin,
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
} from '../rules/index.js';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.Config} */
export default {
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
