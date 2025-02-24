/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed in the `typescript-eslint`.
 *   - See, {@link https://typescript-eslint.io/rules/?=xextension-stylistic-xtypeInformation}.
 *   - See, {@link https://github.com/typescript-eslint/typescript-eslint/blob/v8.24.1/packages/eslint-plugin/src/configs/stylistic.ts}.
 *
 * - This file doesn't include `extesion` rules. See `typescript-extension.js` for those.
 * - The rules below do not conflict with `prettier` and `eslint-config-prettier`.
 */

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  /**
   * @link https://typescript-eslint.io/rules/adjacent-overload-signatures
   */
  '@typescript-eslint/adjacent-overload-signatures': 'error',

  /**
   * @link https://typescript-eslint.io/rules/array-type
   */
  '@typescript-eslint/array-type': 'error',

  /**
   * @link https://typescript-eslint.io/rules/ban-tslint-comment
   */
  '@typescript-eslint/ban-tslint-comment': 'error',

  /**
   * @description I've disabled this rule since it's up to the developer's preference.
   * @link https://typescript-eslint.io/rules/class-literal-property-style
   */
  '@typescript-eslint/class-literal-property-style': 'off',

  /**
   * @link https://typescript-eslint.io/rules/consistent-generic-constructors
   */
  '@typescript-eslint/consistent-generic-constructors': 'error',

  /**
   * @link https://typescript-eslint.io/rules/consistent-indexed-object-style
   */
  '@typescript-eslint/consistent-indexed-object-style': 'warn',

  /**
   * @link https://typescript-eslint.io/rules/consistent-type-assertions
   */
  '@typescript-eslint/consistent-type-assertions': 'error',

  /**
   * @link https://typescript-eslint.io/rules/consistent-type-definitions
   */
  '@typescript-eslint/consistent-type-definitions': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-confusing-non-null-assertion
   */
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',

  /**
   * @link https://typescript-eslint.io/rules/no-inferrable-types
   */
  '@typescript-eslint/no-inferrable-types': 'error',

  /**
   * @description I've disabled this rule since it's up to the developer's preference.
   * @link https://typescript-eslint.io/rules/prefer-for-of
   */
  '@typescript-eslint/prefer-for-of': 'off',

  /**
   * @link https://typescript-eslint.io/rules/prefer-function-type
   */
  '@typescript-eslint/prefer-function-type': 'error',
};
