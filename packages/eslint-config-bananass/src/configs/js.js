/**
 * @fileoverview Configuration applied when a user configuration extends from `js`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { js } from '../files.js';
import { globals } from '../language-options.js';
import { importPlugin, nodePlugin, stylisticPlugin } from '../plugins.js';
import { eslintRules, importRules, nodeRules, stylisticRules } from '../rules/index.js';
import { node } from '../settings.js';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.Config} */
export default {
  name: 'bananass/js',
  files: [...js],
  languageOptions: {
    globals,
  },
  plugins: {
    ...importPlugin,
    ...nodePlugin,
    ...stylisticPlugin,
  },
  rules: {
    ...eslintRules,
    ...importRules,
    ...nodeRules,
    ...stylisticRules,
  },
  settings: {
    node,
  },
};
