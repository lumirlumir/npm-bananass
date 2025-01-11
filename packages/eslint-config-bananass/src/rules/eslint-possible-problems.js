/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed in the 'Possible Problems' section on eslint.org.
 *   - See, {@link https://eslint.org/docs/latest/rules#possible-problems}.
 *
 * - The best practices outlined in `eslint-config-airbnb-base@19.0.4`.
 *   - See, {@link https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules}.
 *
 * - The rules disabled by `eslint-config-prettier@9.1.0`.
 *   - See, {@link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js}.
 */

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  /**
   * Enforce `return` statements in callbacks of array methods.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/array-callback-return}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L9}
   */
  'array-callback-return': ['error', { allowImplicit: true }],

  /**
   * Require `super()` calls in constructors.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/constructor-super}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L31}
   */
  'constructor-super': 'error',

  /**
   * Enforce `for` loop update clause moving the counter in the right direction.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/for-direction}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L5}
   */
  'for-direction': 'error',

  /**
   * Enforce return statements in getters.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/getter-return}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L9}
   */
  'getter-return': ['error', { allowImplicit: true }],

  /**
   * Disallow using an async function as a Promise executor.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-async-promise-executor}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L13}
   */
  'no-async-promise-executor': 'error',

  /**
   * Disallow `await` inside of loops.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-await-in-loop}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L17}
   */
  'no-await-in-loop': 'error',

  /**
   * Disallow reassigning class members.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-class-assign}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L39}
   */
  'no-class-assign': 'error',

  /**
   * Disallow comparing against `-0`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-compare-neg-zero}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L21}
   */
  'no-compare-neg-zero': 'error',

  /**
   * Disallow assignment operators in conditional expressions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-cond-assign}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L24}
   */
  'no-cond-assign': ['error', 'always'],

  /**
   * Disallow reassigning `const` variables.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-const-assign}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L48}
   */
  'no-const-assign': 'error',

  /**
   * Disallow expressions where the operation doesn't affect the value.
   *
   * @description This rule is not included in `airbnb-base`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-constant-binary-expression}
   */
  'no-constant-binary-expression': 'error',

  /**
   * Disallow constant expressions in conditions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-constant-condition}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L30}
   */
  'no-constant-condition': 'warn',

  /**
   * Disallow returning value from constructor.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-constructor-return}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L82}
   */
  'no-constructor-return': 'error',

  /**
   * Disallow control characters in regular expressions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-control-regex}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L33}
   */
  'no-control-regex': 'error',

  /**
   * Disallow the use of debugger.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-debugger}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L36}
   */
  'no-debugger': 'error',

  /**
   * Disallow duplicate arguments in function definitions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-dupe-args}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L39}
   */
  'no-dupe-args': 'error',

  /**
   * Disallow duplicate class members.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-dupe-class-members}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L52}
   */
  'no-dupe-class-members': 'error',

  /**
   * Disallow duplicate conditions in if-else-if chains.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-dupe-else-if}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L43}
   */
  'no-dupe-else-if': 'error',

  /**
   * Disallow duplicate keys in object literals.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-dupe-keys}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L46}
   */
  'no-dupe-keys': 'error',

  /**
   * Disallow duplicate case labels.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-duplicate-case}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L49}
   */
  'no-duplicate-case': 'error',

  /**
   * Disallow duplicate module imports.
   *
   * @description Replaced by [import/no-duplicates](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md). Note that it's `'off'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-duplicate-imports}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L57}
   */
  'no-duplicate-imports': 'off',

  /**
   * Disallow empty character classes in regular expressions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-empty-character-class}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L55}
   */
  'no-empty-character-class': 'error',

  /**
   * Disallow empty destructuring patterns.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-empty-pattern}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L104}
   */
  'no-empty-pattern': 'error',

  /**
   * Disallow reassigning exceptions in `catch` clauses.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-ex-assign}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L58}
   */
  'no-ex-assign': 'error',

  /**
   * Disallow fallthrough of `case` statements.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-fallthrough}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L128}
   */
  'no-fallthrough': 'error',

  /**
   * Disallow reassigning `function` declarations.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-func-assign}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L78}
   */
  'no-func-assign': 'error',

  /**
   * Disallow assigning to imported bindings.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-import-assign}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L81}
   */
  'no-import-assign': 'error',

  /**
   * Disallow variable or `function` declarations in nested blocks.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-inner-declarations}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L84}
   */
  'no-inner-declarations': 'error',

  /**
   * Disallow invalid regular expression strings in `RegExp` constructors.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-invalid-regexp}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L87}
   */
  'no-invalid-regexp': 'error',

  /**
   * Disallow irregular whitespace.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-irregular-whitespace}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L90}
   */
  'no-irregular-whitespace': 'error',

  /**
   * Disallow literal numbers that lose precision.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-loss-of-precision}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L94}
   */
  'no-loss-of-precision': 'error',

  /**
   * Disallow characters which are made with multiple code points in character class syntax.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-misleading-character-class}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L98}
   */
  'no-misleading-character-class': 'error',

  /**
   * Disallow `new` operators with global non-constructor functions.
   *
   * @description This rule is not included in `airbnb-base`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-new-native-nonconstructor}
   */
  'no-new-native-nonconstructor': 'error',

  /**
   * Disallow calling global object properties as functions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-obj-calls}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L101}
   */
  'no-obj-calls': 'error',

  /**
   * Disallow returning values from Promise executor functions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-promise-executor-return}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L105}
   */
  'no-promise-executor-return': 'error',

  /**
   * Disallow calling some `Object.prototype` methods directly on objects.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-prototype-builtins}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L109}
   */
  'no-prototype-builtins': 'error',

  /**
   * Disallow assignments where both sides are exactly the same.
   * - `props` - if this is `true`, `no-self-assign` rule warns self-assignments of properties. Default is `true`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-self-assign}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L307-L309}
   */
  'no-self-assign': 'error',

  /**
   * Disallow comparisons where both sides are exactly the same.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-self-compare}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L313}
   */
  'no-self-compare': 'error',

  /**
   * Disallow returning values from setters.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-setter-return}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L116}
   */
  'no-setter-return': 'error',

  /**
   * Disallow sparse arrays.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-sparse-arrays}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L119}
   */
  'no-sparse-arrays': 'error',

  /**
   * Disallow template literal placeholder syntax in regular strings.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-template-curly-in-string}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L123}
   */
  'no-template-curly-in-string': 'error',

  /**
   * Disallow `this`/`super` before calling `super()` in constructors.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-this-before-super}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L81}
   */
  'no-this-before-super': 'error',

  /**
   * Disallow the use of undeclared variables unless mentioned in global comments.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-undef}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/variables.js#L40}
   */
  'no-undef': 'error',

  /**
   * Disallow confusing multiline expressions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-unexpected-multiline}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L127}
   * @link prettier: {@link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L14}
   */
  'no-unexpected-multiline': 'off',

  /**
   * Disallow unmodified loop conditions.
   *
   * @description Note that it's `'off'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-unmodified-loop-condition}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L325}
   */
  'no-unmodified-loop-condition': 'off',

  /**
   * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-unreachable}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L130}
   */
  'no-unreachable': 'error',

  /**
   * Disallow loops with a body that allows only one iteration.
   * - "ignore" - an optional array of loop types that will be ignored by this rule.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-unreachable-loop}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L134-L136}
   */
  'no-unreachable-loop': 'error',

  /**
   * Disallow control flow statements in `finally` blocks.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-unsafe-finally}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L140}
   */
  'no-unsafe-finally': 'error',

  /**
   * Disallow negating the left operand of relational operators.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-unsafe-negation}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L144}
   */
  'no-unsafe-negation': 'error',

  /**
   * Disallow use of optional chaining in contexts where the `undefined` value is not allowed.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L148}
   */
  'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

  /**
   * Disallow unused private class members.
   *
   * @description See `todo` comments in airbnb-base. original: `'off'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-unused-private-class-members}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L153}
   */
  'no-unused-private-class-members': 'error',

  /**
   * Disallow unused variables.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-unused-vars}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/variables.js#L51}
   */
  'no-unused-vars': [
    'error',
    { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
  ],

  /**
   * Disallow the use of variables before they are defined.
   *
   * @description Different from `airbnb-base` which has `functions: true`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-use-before-define}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/variables.js#L54}
   */
  'no-use-before-define': [
    'error',
    { functions: false, classes: true, variables: true, allowNamedExports: false },
  ],

  /**
   * Disallow variable assignments when the value is not used.
   *
   * @description This rule is not included in `airbnb-base`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-assignment}
   */
  'no-useless-assignment': 'error',

  /**
   * Disallow useless backreferences in regular expressions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-backreference}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L157}
   */
  'no-useless-backreference': 'error',

  /**
   * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
   *
   * @description Note that it's `'off'`. (`airbnb-base` says "not enabled because it is very buggy".)
   * @link eslint: {@link https://eslint.org/docs/latest/rules/require-atomic-updates}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L166}
   */
  'require-atomic-updates': 'off',

  /**
   * Require calls to `isNaN()` when checking for `NaN`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/use-isnan}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L169}
   */
  'use-isnan': 'error',

  /**
   * Enforce comparing typeof expressions against `valid` strings
   * - `"requireStringLiterals"`: `true` allows the comparison of `typeof` expressions with only string literals or other `typeof` expressions, and disallows comparisons to any other value. Default is `false`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/valid-typeof}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L177}
   */
  'valid-typeof': ['error', { requireStringLiterals: true }],
};
