/**
 * @fileoverview Configuration applied when a user configuration extends from `json`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { json } from '../files.js';
import { json as jsonIgnores } from '../ignores.js';
import { jsonPlugin } from '../plugins.js';
import { jsonRules } from '../rules/index.js';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.Config} */
export default {
  name: 'bananass/json',
  files: [...json],
  ignores: [...jsonIgnores],
  language: 'json/json',
  plugins: {
    ...jsonPlugin,
  },
  rules: {
    ...jsonRules,
  },
};
