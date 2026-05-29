/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed in the following URL.
 *   - @see https://github.com/eslint/json?tab=readme-ov-file#rules
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import jsonPluginModule from '@eslint/json';

// --------------------------------------------------------------------------------
// Typedef
// --------------------------------------------------------------------------------

/**
 * @import { ESLint, Linter } from "eslint";
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {{'json': ESLint.Plugin}} */
export const jsonPlugin = { json: jsonPluginModule };

/** @type {Linter.RulesRecord} */
export const jsonRules = {
  'json/no-duplicate-keys': 'error',

  'json/no-empty-keys': 'error',

  'json/no-unnormalized-keys': 'error',

  'json/no-unsafe-values': 'error',

  'json/sort-keys': 'off',

  'json/top-level-interop': 'error',
};
