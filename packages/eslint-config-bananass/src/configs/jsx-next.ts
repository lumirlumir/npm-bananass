/**
 * @fileoverview Configuration applied when a user configuration extends from `jsx.next`.
 *
 * - Values not explicitly defined on the object will use their default values.
 * - Use the config inspector (`--inspect-config` in the CLI) to test which config objects apply to a specific file.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import type { Linter } from 'eslint';
import { js, jsx } from '../files.ts';
import { globals, parserOptions } from '../language-options.ts';
import { node, react } from '../settings.ts';
import { eslintRules } from '../rules/eslint.ts';
import { importPlugin, importRules } from '../rules/import.ts';
import { nodePlugin, nodeRules } from '../rules/node.ts';
import { stylisticPlugin, stylisticRules } from '../rules/stylistic.ts';
import { jsxA11yPlugin, jsxA11yRules } from '../rules/jsx-a11y.ts';
import { reactPlugin, reactRules } from '../rules/react.ts';
import { reactHooksPlugin, reactHooksRules } from '../rules/react-hooks.ts';
import { nextPlugin, nextRules } from '../rules/next.ts';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default {
  name: 'bananass/jsx-next',
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
    ...nextPlugin,
  },
  rules: {
    ...eslintRules,
    ...importRules,
    ...nodeRules,
    ...stylisticRules,
    ...jsxA11yRules,
    ...reactRules,
    ...reactHooksRules,
    ...nextRules,
  },
  settings: {
    node,
    react,
  },
} as const satisfies Linter.Config;
