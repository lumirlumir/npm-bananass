/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed in the `typescript-eslint`.
 *   - See, {@link https://typescript-eslint.io/rules/?=xdeprecated-extension-xtypeInformation}.
 */

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  /**
   *
   */
  'class-methods-use-this': 'off',
  '@typescript-eslint/class-methods-use-this': 'error',

  /**
   *
   */
  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': 'error',

  /**
   *
   */
  'init-declarations': 'off',
  '@typescript-eslint/init-declarations': 'off',

  /**
   *
   */
  'max-params': 'off',
  '@typescript-eslint/max-params': 'off',

  /**
   *
   */
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 'error',

  /**
   *
   */
  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': 'error',

  /**
   *
   */
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': [
    'error',
    { allow: ['arrowFunctions', 'functions', 'methods'] },
  ], // 'off' or 'warn' ?

  /**
   *
   */
  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': 'off',

  /**
   *
   */
  'no-loop-func': 'off',
  '@typescript-eslint/no-loop-func': 'error',

  /**
   *
   */
  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': 'off',

  /**
   *
   */
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': 'error',

  /**
   *
   */
  'no-restricted-imports': 'off',
  '@typescript-eslint/no-restricted-imports': 'off',

  /**
   *
   */
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': 'warn',

  /**
   *
   */
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': ['error', { enforceForJSX: true }],

  /**
   *
   */
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
  ],

  /**
   *
   */
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    { functions: false, classes: true, variables: true, allowNamedExports: false },
  ],

  /**
   *
   */
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': 'error',
};
