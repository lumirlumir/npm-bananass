/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed in the following URL.
 *   - @see https://github.com/eslint/json?tab=readme-ov-file#rules
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.RulesRecord} */
export default {
  'json/no-duplicate-keys': 'error',

  'json/no-empty-keys': 'error',

  'json/no-unnormalized-keys': 'error',

  'json/no-unsafe-values': 'error',

  'json/sort-keys': 'off',

  'json/top-level-interop': 'error',
};
