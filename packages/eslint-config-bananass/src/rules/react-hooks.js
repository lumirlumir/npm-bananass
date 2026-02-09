/**
 * @fileoverview This file follows:
 *
 * - The rules listed on `eslint-plugin-react-hooks`.
 *   - @see https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#eslint-plugin-react-hooks
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.RulesRecord} */
export default {
  /**
   * Verifies the list of dependencies for Hooks like `useEffect` and similar.
   * @description This rule uses 'error' instead of 'warn'.
   * @see https://github.com/facebook/react/blob/v19.0.0/packages/eslint-plugin-react-hooks/src/index.js#L18
   */
  'react-hooks/exhaustive-deps': 'error',

  /**
   * Enforces the Rules of Hooks.
   * @see https://github.com/facebook/react/blob/v19.0.0/packages/eslint-plugin-react-hooks/src/index.js#L17
   */
  'react-hooks/rules-of-hooks': 'error',

  'react-hooks/react-compiler': 'error',
};
