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
  stylisticPlugin,
  jsxA11yPlugin,
  reactPlugin,
  reactHooksPlugin,
} from '../plugins.js';

import {
  eslintRules,
  importRules,
  nodeRules,
  stylisticRules,
  jsxA11yRules,
  reactRules,
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
    ...stylisticPlugin,
    ...jsxA11yPlugin,
    ...reactPlugin,
    ...reactHooksPlugin,
  },
  rules: {
    ...eslintRules,
    ...importRules,
    ...nodeRules,
    ...stylisticRules,
    ...jsxA11yRules,
    ...reactRules,
    ...reactHooksRules,
  },
  settings: {
    node,
    react,
  },
};
