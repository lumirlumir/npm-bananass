/**
 * @fileoverview Configuration applied when a user configuration extends from `js`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import type { Linter } from 'eslint';
import { js } from '../files.ts';
import { globals } from '../language-options.ts';
import { node } from '../settings.ts';
import { eslintRules } from '../rules/eslint.ts';
import { importPlugin, importRules } from '../rules/import.ts';
import { nodePlugin, nodeRules } from '../rules/node.ts';
import { stylisticPlugin, stylisticRules } from '../rules/stylistic.ts';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

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
} as const satisfies Linter.Config;
