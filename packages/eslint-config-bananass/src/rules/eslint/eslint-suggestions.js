/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed in the 'Suggestions' section on eslint.org.
 *   - See, {@link https://eslint.org/docs/latest/rules#suggestions}.
 *
 * - The best practices outlined in `eslint-config-airbnb-base@19.0.4`.
 *   - See, {@link https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules}.
 *
 * - The rules disabled by `eslint-config-prettier@9.1.0`.
 *   - See, {@link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js}.
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.RulesRecord} */
export default {
  /**
   * Enforce getter and setter pairs in objects and classes.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/accessor-pairs}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L5}
   */
  'accessor-pairs': 'off',

  /**
   * Require braces around arrow function bodies.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/arrow-body-style}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L18-L20}
   */
  'arrow-body-style': [
    'error',
    'as-needed',
    {
      requireReturnForObjectLiteral: false,
    },
  ],

  /**
   * Enforce the use of variables within the scope they are defined.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/block-scoped-var}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L13}
   */
  'block-scoped-var': 'error',

  /**
   * Enforce camelcase naming convention.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/camelcase}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L24}
   */
  camelcase: [
    'error',
    {
      properties: 'never', // Does not check property names.
      ignoreDestructuring: true,
    },
  ],

  /**
   * Enforce or disallow capitalization of the first letter of a comment.
   *
   * @description I've deleted unnecessary options from airbnb-base since the rule is set to `'off'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/capitalized-comments}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L28-L39}
   */
  'capitalized-comments': 'off',

  /**
   * Enforce that class methods utilize `this`.
   *
   * @description I've deleted unnecessary options from airbnb-base.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/class-methods-use-this}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L21-L23}
   */
  'class-methods-use-this': 'error',

  /**
   * Enforce a maximum cyclomatic complexity allowed in a program.
   *
   * @description I've deleted unnecessary options from airbnb-base.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/complexity}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L17}
   */
  complexity: 'off',

  /**
   * Require `return` statements to either always or never specify values.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/consistent-return}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L27}
   */
  'consistent-return': 'error',

  /**
   * Enforce consistent naming when capturing the current execution context.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/consistent-this}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L74}
   */
  'consistent-this': 'off',

  /**
   * Enforce consistent brace style for all control statements.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/curly}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L31}
   * @link prettier: {@link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L13}
   */
  curly: 'off',

  /**
   * Require `default` cases in `switch` statements.
   *
   * @description I've deleted unnecessary options from airbnb-base.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/default-case}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L35}
   */
  'default-case': 'error',

  /**
   * Enforce `default` clauses in `switch` statements to be last.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/default-case-last}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L39}
   */
  'default-case-last': 'error',

  /**
   * Enforce default parameters to be last.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/default-param-last}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L42}
   */
  'default-param-last': 'error',

  /**
   * Enforce dot notation whenever possible.
   *
   * @description I've deleted unnecessary additional options from airbnb-base.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/dot-notation}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L46}
   */
  'dot-notation': 'error',

  /**
   * Require the use of `===` and `!==`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/eqeqeq}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L54}
   */
  eqeqeq: ['error', 'always', { null: 'ignore' }],

  /**
   * Require function names to match the name of the variable or property to which they are assigned.
   *
   * @description I've deleted unnecessary options from airbnb-base since the rule is set to `'off'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/func-name-matching}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L89-L92}
   */
  'func-name-matching': 'off',

  /**
   * Require or disallow named `function` expressions.
   *
   * @description I added `'as-needed'` option.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/func-names}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L96}
   */
  'func-names': ['warn', 'as-needed'],

  /**
   * Enforce the consistent use of either `function` declarations or expressions assigned to variables.
   *
   * @description I've deleted unnecessary options from airbnb-base since the rule is set to `'off'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/func-style}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L101}
   */
  'func-style': 'off',

  /**
   * Require grouped accessor pairs in object literals and classes.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/grouped-accessor-pairs}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L58}
   */
  'grouped-accessor-pairs': 'error',

  /**
   * Require `for`-`in` loops to include an `if` statement.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/guard-for-in}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L62}
   */
  'guard-for-in': 'error',

  /**
   * Disallow specified identifiers.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/id-denylist}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L109}
   */
  'id-denylist': 'off',

  /**
   * Enforce minimum and maximum identifier lengths.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/id-length}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L113}
   */
  'id-length': 'off',

  /**
   * Require identifiers to match a specified regular expression.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/id-match}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L116}
   */
  'id-match': 'off',

  /**
   * Require or disallow initialization in variable declarations.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/init-declarations}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/variables.js#L6}
   */
  'init-declarations': 'off',

  /**
   * Require or disallow logical assignment operator shorthand.
   *
   * @description This rule is not included in `airbnb-base@19.0.4`. Stylistic choice, so I set it to `'off'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/logical-assignment-operators}
   */
  'logical-assignment-operators': 'off',

  /**
   * Enforce a maximum number of classes per file.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/max-classes-per-file}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L66}
   */
  'max-classes-per-file': ['error', 1],

  /**
   * Enforce a maximum depth that blocks can be nested.
   *
   * @description I've deleted unnecessary options from airbnb-base since the rule is set to `'off'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/max-depth}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L195}
   */
  'max-depth': 'off',

  /**
   * Enforce a maximum number of lines per file.
   *
   * @description I've deleted unnecessary options from airbnb-base since the rule is set to `'off'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/max-lines}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L209-L213}
   */
  'max-lines': 'off',

  /**
   * Enforce a maximum number of lines of code in a function.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/max-lines-per-function}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L217-L222}
   */
  'max-lines-per-function': 'off',

  /**
   * Enforce a maximum depth that callbacks can be nested.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/max-nested-callbacks}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L225}
   */
  'max-nested-callbacks': 'off',

  /**
   * Enforce a maximum number of parameters in function definitions.
   *
   * @description I've deleted unnecessary options from airbnb-base since the rule is set to `'off'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/max-params}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L228}
   */
  'max-params': 'off',

  /**
   * Enforce a maximum number of statements allowed in function blocks.
   *
   * @description I've deleted unnecessary options from airbnb-base since the rule is set to `'off'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/max-statements}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L231}
   */
  'max-statements': 'off',

  /**
   * Require constructor names to begin with a capital letter.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/new-cap}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L247-L252}
   */
  'new-cap': [
    'error',
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    },
  ],

  /**
   * Disallow the use of `alert`, `confirm`, and `prompt`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-alert}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L70}
   */
  'no-alert': 'warn',

  /**
   * Disallow `Array` constructors.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-array-constructor}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L270}
   */
  'no-array-constructor': 'error',

  /**
   * Disallow bitwise operators.
   *
   * @description I've changed the rule to `'warn'` from `'error'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-bitwise}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L274}
   */
  'no-bitwise': 'warn',

  /**
   * Disallow the use of `arguments.caller` or `arguments.callee`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-caller}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L74}
   */
  'no-caller': 'error',

  /**
   * Disallow lexical declarations in `case` clauses.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-case-declarations}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L78}
   */
  'no-case-declarations': 'error',

  /**
   * Disallow the use of `console`.
   *
   * @description I've changed the rule to `'warn'` from `'error'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-console}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L27}
   */
  'no-console': 'warn',

  /**
   * Disallow `continue` statements.
   *
   * @description I've changed the rule to `'off'` from `'error'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-continue}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L278}
   */
  'no-continue': 'off',

  /**
   * Disallow deleting variables.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-delete-var}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/variables.js#L12}
   */
  'no-delete-var': 'error',

  /**
   * Disallow equal signs explicitly at the beginning of regular expressions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-div-regex}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L86}
   */
  'no-div-regex': 'off',

  /**
   * Disallow `else` blocks after `return` statements in `if` statements.
   *
   * @description I've changed the rule to `'off'` from `'error'`. I think this rule is more about stylistic choices. So, I don't want to enforce it.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-else-return}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L90}
   */
  'no-else-return': 'off',

  /**
   * Disallow empty block statements.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-empty}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L52}
   */
  'no-empty': 'error',

  /**
   * Disallow empty functions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-empty-function}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L94-L100}
   */
  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],

  /**
   * Disallow empty `static` blocks.
   *
   * @description This rule is not included in `airbnb-base@19.0.4`
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-empty-static-block}
   */
  'no-empty-static-block': 'error',

  /**
   * Disallow `null` comparisons without type-checking operators.
   *
   * @description This rule is subset of `eqeqeq` rule. `eqeqeq` already includes this rule.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-eq-null}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L108}
   */
  'no-eq-null': 'off',

  /**
   * Disallow the use of `eval()`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-eval}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L112}
   */
  'no-eval': 'error',

  /**
   * Disallow extending native types.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-extend-native}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L116}
   */
  'no-extend-native': 'error',

  /**
   * Disallow unnecessary calls to `.bind()`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-extra-bind}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L120}
   */
  'no-extra-bind': 'error',

  /**
   * Disallow unnecessary boolean casts.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-extra-boolean-cast}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L62}
   */
  'no-extra-boolean-cast': 'error',

  /**
   * Disallow unnecessary labels.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-extra-label}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L124}
   */
  'no-extra-label': 'error',

  /**
   * Disallow assignments to native objects or read-only global variables.
   *
   * @description I've deleted unnecessary options from `airbnb-base`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-global-assign}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L136}
   */
  'no-global-assign': 'error',

  /**
   * Disallow shorthand type conversions.
   *
   * @description I've deleted unnecessary options from airbnb-base since the rule is set to `'off'`. This rule is too tight to enforce.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-implicit-coercion}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L144-L149}
   */
  'no-implicit-coercion': 'off',

  /**
   * Disallow declarations in the global scope.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-implicit-globals}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L153}
   */
  'no-implicit-globals': 'off',

  /**
   * Disallow the use of `eval()`-like methods.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-implied-eval}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L157}
   */
  'no-implied-eval': 'error',

  /**
   * Disallow inline comments after code.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-inline-comments}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L281}
   */
  'no-inline-comments': 'off',

  /**
   * Disallow use of `this` in contexts where the value of `this` is `undefined`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-invalid-this}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L161}
   */
  'no-invalid-this': 'off',

  /**
   * Disallow the use of the `__iterator__` property.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-iterator}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L165}
   */
  'no-iterator': 'error',

  /**
   * Disallow labels that share a name with a variable.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-label-var}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/variables.js#L16}
   */
  'no-label-var': 'error',

  /**
   * Disallow labeled statements.
   *
   * @description I've deleted unnecessary options from `airbnb-base`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-labels}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L169}
   */
  'no-labels': 'error',

  /**
   * Disallow unnecessary nested blocks.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-lone-blocks}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L173}
   */
  'no-lone-blocks': 'error',

  /**
   * Disallow `if` statements as the only statement in `else` blocks.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-lonely-if}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L285}
   */
  'no-lonely-if': 'error',

  /**
   * Disallow function declarations that contain unsafe references inside loop statements.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-loop-func}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L177}
   */
  'no-loop-func': 'error',

  /**
   * Disallow magic numbers.
   *
   * @description I've deleted unnecessary options from airbnb-base since the rule is set to `'off'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-magic-numbers}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L181-L186}
   */
  'no-magic-numbers': 'off',

  /**
   * Disallow use of chained assignment expressions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-multi-assign}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L311}
   */
  'no-multi-assign': 'error',

  /**
   * Disallow multiline strings.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-multi-str}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L196}
   */
  'no-multi-str': 'error',

  /**
   * Disallow negated conditions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-negated-condition}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L319}
   */
  'no-negated-condition': 'off',

  /**
   * Disallow nested ternary expressions.
   *
   * @description I've changed the rule to `'off'` from `'error'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-nested-ternary}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L322}
   */
  'no-nested-ternary': 'off',

  /**
   * Disallow `new` operators outside of assignments or comparisons.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-new}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L200}
   */
  'no-new': 'error',

  /**
   * Disallow `new` operators with the `Function` object.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-new-func}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L204}
   */
  'no-new-func': 'error',

  /**
   * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-new-wrappers}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L208}
   */
  'no-new-wrappers': 'error',

  /**
   * Disallow `\8` and `\9` escape sequences in string literals.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L212}
   */
  'no-nonoctal-decimal-escape': 'error',

  /**
   * Disallow calls to the `Object` constructor without an argument.
   *
   * @description This rule is not included in `airbnb-base@19.0.4`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-object-constructor}
   */
  'no-object-constructor': 'error',

  /**
   * Disallow octal literals.
   *
   * @description I've changed the rule to `'warn'` from `'error'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-octal}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L216}
   */
  'no-octal': 'warn',

  /**
   * Disallow octal escape sequences in string literals.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-octal-escape}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L221}
   */
  'no-octal-escape': 'error',

  /**
   * Disallow reassigning `function` parameters.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-param-reassign}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L226-L241}
   */
  'no-param-reassign': ['error', { props: false }],

  /**
   * Disallow the unary operators `++` and `--`.
   *
   * @description I've changed the rule to `'off'` from `'error'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-plusplus}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L329}
   */
  'no-plusplus': 'off',

  /**
   * Disallow the use of the `__proto__` property.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-proto}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L245}
   */
  'no-proto': 'error',

  /**
   * Disallow variable redeclaration.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-redeclare}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L249}
   */
  'no-redeclare': 'error',

  /**
   * Disallow multiple spaces in regular expressions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-regex-spaces}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/errors.js#L112}
   */
  'no-regex-spaces': 'error',

  /**
   * Disallow specified names in exports.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-restricted-exports}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L65-L70}
   */
  'no-restricted-exports': [
    'error',
    {
      restrictedNamedExports: [
        'default', // use `export default` to provide a default export.
        'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions.
      ],
    },
  ],

  /**
   * Disallow specified global variables.
   *
   * @description I've deleted `confusingBrowserGlobals` to simplify the rule.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-restricted-globals}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/variables.js#L19-L31}
   */
  'no-restricted-globals': [
    'error',
    {
      name: 'isFinite',
      message:
        'Use `Number.isFinite` instead https://github.com/airbnb/javascript#standard-library--isfinite',
    },
    {
      name: 'isNaN',
      message:
        'Use `Number.isNaN` instead https://github.com/airbnb/javascript#standard-library--isnan',
    },
  ],

  /**
   * Disallow specified modules when loaded by import.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-restricted-imports}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L74-L77}
   */
  'no-restricted-imports': 'off',

  /**
   * Disallow certain properties on certain objects.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-restricted-properties}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L253-L291}
   */
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: '`arguments.callee` is deprecated',
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use `Number.isFinite` instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use `Number.isFinite` instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use `Number.isFinite` instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use `Number.isNaN` instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use `Number.isNaN` instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use `Number.isNaN` instead',
    },
    {
      property: '__defineGetter__',
      message: 'Please use `Object.defineProperty` instead.',
    },
    {
      property: '__defineSetter__',
      message: 'Please use `Object.defineProperty` instead.',
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (`**`) instead.',
    },
  ],

  /**
   * Disallow specified syntax.
   *
   * @description I've changed the rule to `'warn'` from `'error'`. I’ve also removed `LabeledStatement` and `WithStatement` since they are redundant, as `no-labels` and `no-with` already cover them.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-restricted-syntax}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L333-L351}
   */
  'no-restricted-syntax': [
    'warn',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use `Object.{keys,values,entries}`, and iterate over the resulting array.',
    },
  ],

  /**
   * Disallow assignment operators in `return` statements.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-return-assign}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L295}
   */
  'no-return-assign': ['error', 'always'],

  /**
   * Disallow `javascript:` URLs.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-script-url}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L303}
   */
  'no-script-url': 'error',

  /**
   * Disallow comma operators.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-sequences}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L317}
   */
  'no-sequences': 'error',

  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope.
   *
   * @description I've changed the rule to `'warn'` from `'error'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-shadow}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/variables.js#L34}
   */
  'no-shadow': 'warn',

  /**
   * Disallow identifiers from shadowing restricted names.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-shadow-restricted-names}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/variables.js#L37}
   */
  'no-shadow-restricted-names': 'error',

  /**
   * Disallow ternary operators.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-ternary}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L360}
   */
  'no-ternary': 'off',

  /**
   * Disallow throwing literals as exceptions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-throw-literal}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L321}
   */
  'no-throw-literal': 'error',

  /**
   * Disallow initializing variables to `undefined`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-undef-init}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/variables.js#L43}
   */
  'no-undef-init': 'error',

  /**
   * Disallow the use of `undefined` as an identifier.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-undefined}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/variables.js#L48}
   */
  'no-undefined': 'off',

  /**
   * Disallow dangling underscores in identifiers.
   *
   * @description I've turned this rule `'off'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-underscore-dangle}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L370-L375}
   */
  'no-underscore-dangle': 'off',

  /**
   * Disallow ternary operators when simpler alternatives exist.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-unneeded-ternary}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L380}
   */
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

  /**
   * Disallow unused expressions.
   *
   * @description I've deleted unnecessary options from `airbnb-base`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-unused-expressions}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L329-L333}
   */
  'no-unused-expressions': ['error', { enforceForJSX: true }],

  /**
   * Disallow unused labels.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-unused-labels}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L337}
   */
  'no-unused-labels': 'error',

  /**
   * Disallow unnecessary calls to `.call()` and `.apply()`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-call}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L341}
   */
  'no-useless-call': 'off',

  /**
   * Disallow unnecessary `catch` clauses.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-catch}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L345}
   */
  'no-useless-catch': 'error',

  /**
   * Disallow unnecessary computed property keys in objects and classes.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-computed-key}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L85}
   */
  'no-useless-computed-key': 'error',

  /**
   * Disallow unnecessary concatenation of literals or template literals.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-concat}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L349}
   */
  'no-useless-concat': 'error',

  /**
   * Disallow unnecessary constructors.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-constructor}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L89}
   */
  'no-useless-constructor': 'error',

  /**
   * Disallow unnecessary escape characters.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-escape}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L353}
   */
  'no-useless-escape': 'error',

  /**
   * Disallow renaming import, export, and destructured assignments to the same name.
   *
   * @description I've deleted unnecessary options from `airbnb-base`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-rename}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L93-L97}
   */
  'no-useless-rename': 'error',

  /**
   * Disallow redundant return statements.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-return}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L357}
   */
  'no-useless-return': 'error',

  /**
   * Require `let` or `const` instead of `var`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-var}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L100}
   */
  'no-var': 'error',

  /**
   * Disallow `void` operators.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-void}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L361}
   */
  'no-void': 'error',

  /**
   * Disallow specified warning terms in comments.
   *
   * @description I've deleted unnecessary options from airbnb-base since the rule is set to `'off'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-warning-comments}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L365}
   */
  'no-warning-comments': 'off',

  /**
   * Disallow `with` statements.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-with}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L369}
   */
  'no-with': 'error',

  /**
   * Require or disallow method and property shorthand syntax for object literals.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/object-shorthand}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L104-L107}
   */
  'object-shorthand': [
    'error',
    'always',
    {
      avoidQuotes: false,
      ignoreConstructors: false,
    },
  ],

  /**
   * Enforce variables to be declared either together or separately in functions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/one-var}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L409}
   */
  'one-var': ['error', 'never'],

  /**
   * Require or disallow assignment operator shorthand where possible.
   *
   * @description Turned this rule `'off'` since it's a stylistic choice.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/operator-assignment}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L417}
   */
  'operator-assignment': 'off',

  /**
   * Require using arrow functions for callbacks.
   *
   * @description I've deleted unnecessary options from `airbnb-base`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-arrow-callback}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L110-L113}
   */
  'prefer-arrow-callback': 'error',

  /**
   * Require `const` declarations for variables that are never reassigned after declared.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-const}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L116-L119}
   */
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    },
  ],

  /**
   * Require destructuring from arrays and/or objects.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-destructuring}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L123-L134}
   */
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],

  /**
   * Disallow the use of `Math.pow` in favor of the `**` operator.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-exponentiation-operator}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L438}
   */
  'prefer-exponentiation-operator': 'error',

  /**
   * Enforce using named capture group in regular expression.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-named-capture-group}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L377}
   */
  'prefer-named-capture-group': 'off',

  /**
   * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-numeric-literals}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L138}
   */
  'prefer-numeric-literals': 'error',

  /**
   * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-object-has-own}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L382}
   */
  'prefer-object-has-own': 'error',

  /**
   * Disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-object-spread}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L442}
   */
  'prefer-object-spread': 'error',

  /**
   * Require using `Error` objects as `Promise` rejection reasons.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-promise-reject-errors}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L373}
   */
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

  /**
   * Disallow use of the `RegExp` constructor in favor of regular expression literals.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-regex-literals}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L385-L387}
   */
  'prefer-regex-literals': [
    'error',
    {
      disallowRedundantWrapping: true,
    },
  ],

  /**
   * Require rest parameters instead of `arguments`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-rest-params}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L146}
   */
  'prefer-rest-params': 'error',

  /**
   * Require spread operators instead of `.apply()`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-spread}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L150}
   */
  'prefer-spread': 'error',

  /**
   * Require template literals instead of string concatenation.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-template}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L154}
   */
  'prefer-template': 'error',

  /**
   * Enforce the consistent use of the radix argument when using `parseInt()`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/radix}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L391}
   */
  radix: 'error',

  /**
   * Disallow async functions which have no `await` expression.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/require-await}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L395}
   */
  'require-await': 'off',

  /**
   * Enforce the use of `u` or `v` flag on `RegExp`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/require-unicode-regexp}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L399}
   */
  'require-unicode-regexp': 'off',

  /**
   * Require generator functions to contain `yield`.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/require-yield}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L158}
   */
  'require-yield': 'error',

  /**
   * Enforce sorted `import` declarations within modules.
   *
   * @description I've deleted unnecessary options from airbnb-base since the rule is set to `'off'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/sort-imports}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L166-L171}
   */
  'sort-imports': 'off',

  /**
   * Require object keys to be sorted.
   *
   * @description I've deleted unnecessary options from airbnb-base since the rule is set to `'off'`.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/sort-keys}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L466}
   */
  'sort-keys': 'off',

  /**
   * Require variables within the same declaration block to be sorted.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/sort-vars}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/style.js#L469}
   */
  'sort-vars': 'off',

  /**
   * Require or disallow strict mode directives.
   *
   * @description Babel inserts `'use strict';` for us.
   * @link eslint: {@link https://eslint.org/docs/latest/rules/strict}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/strict.js#L4}
   */
  strict: ['error', 'never'],

  /**
   * Require symbol descriptions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/symbol-description}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/es6.js#L175}
   */
  'symbol-description': 'error',

  /**
   * Require `var` declarations be placed at the top of their containing scope.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/vars-on-top}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L403}
   */
  'vars-on-top': 'error',

  /**
   * Require or disallow "Yoda" conditions.
   *
   * @link eslint: {@link https://eslint.org/docs/latest/rules/yoda}
   * @link airbnb-base: {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules/best-practices.js#L411}
   */
  yoda: 'error',
};
