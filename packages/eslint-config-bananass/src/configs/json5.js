/**
 * @fileoverview Configuration applied when a user configuration extends from `json5`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { json5 } from '../files.js';
import { jsonPlugin } from '../plugins.js';
import { jsonRules } from '../rules/index.js';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.Config} */
export default {
  name: 'bananass/json5',
  files: [...json5],
  language: 'json/json5',
  plugins: {
    ...jsonPlugin,
  },
  rules: {
    ...jsonRules,
  },
};
