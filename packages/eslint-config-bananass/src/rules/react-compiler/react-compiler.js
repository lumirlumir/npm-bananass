/**
 * @fileoverview This file follows:
 *
 * - The rules listed on `eslint-plugin-react-compiler`.
 *   - See, {@link https://github.com/facebook/react/tree/main/compiler/packages/eslint-plugin-react-compiler#eslint-plugin-react-compiler}.
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.RulesRecord} */
export default {
  /**
   * Surfaces diagnostics from React Forget.
   */
  'react-compiler/react-compiler': 'error',
};
