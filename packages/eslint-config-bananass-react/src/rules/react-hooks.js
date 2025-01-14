/**
 * @fileoverview This file follows:
 *
 * - The recommended rules listed on 'eslint-plugin-react-hooks'.
 *   - See, {@link https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#eslint-plugin-react-hooks}.
 */

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  /**
   * Verifies the list of dependencies for Hooks like `useEffect` and similar.
   *
   * @link react-hooks: {@link https://github.com/facebook/react/blob/v19.0.0/packages/eslint-plugin-react-hooks/src/index.js#L18}
   */
  'react-hooks/exhaustive-deps': 'warn',

  /**
   * Enforces the Rules of Hooks.
   *
   * @link react-hooks: {@link https://github.com/facebook/react/blob/v19.0.0/packages/eslint-plugin-react-hooks/src/index.js#L17}
   */
  'react-hooks/rules-of-hooks': 'error',
};
