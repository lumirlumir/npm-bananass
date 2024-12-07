/**
 * This file follows:
 *
 * - The order of the rules listed in the 'Suggestions' section on eslint.org.
 *   - See, {@link https://eslint.org/docs/latest/rules#suggestions}.
 *
 * - The best practices outlined in `eslint-config-airbnb-base@19.0.4`.
 *   - See, {@link https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/rules}.
 */
module.exports = {
  /**
   * Enforce getter and setter pairs in objects and classes.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/accessor-pairs}
   * @link airbnb-base: {@link }
   */
  'accessor-pairs': '',

  /**
   * Require braces around arrow function bodies.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/arrow-body-style}
   * @link airbnb-base: {@link }
   */
  'arrow-body-style': '',

  /**
   * Enforce the use of variables within the scope they are defined.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/block-scoped-var}
   * @link airbnb-base: {@link }
   */
  'block-scoped-var': '',

  /**
   * Enforce camelcase naming convention.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/camelcase}
   * @link airbnb-base: {@link }
   */
  camelcase: '',

  /**
   * Enforce or disallow capitalization of the first letter of a comment.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/capitalized-comments}
   * @link airbnb-base: {@link }
   */
  'capitalized-comments': '',

  /**
   * Enforce that class methods utilize `this`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/class-methods-use-this}
   * @link airbnb-base: {@link }
   */
  'class-methods-use-this': '',

  /**
   * Enforce a maximum cyclomatic complexity allowed in a program.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/complexity}
   * @link airbnb-base: {@link }
   */
  complexity: '',

  /**
   * Require `return` statements to either always or never specify values.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/consistent-return}
   * @link airbnb-base: {@link }
   */
  'consistent-return': '',

  /**
   * Enforce consistent naming when capturing the current execution context.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/consistent-this}
   * @link airbnb-base: {@link }
   */
  'consistent-this': '',

  /**
   * Enforce consistent brace style for all control statements.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/curly}
   * @link airbnb-base: {@link }
   *
   * @todo disable it on bananass.
   */
  curly: '',

  /**
   * Require `default` cases in `switch` statements.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/default-case}
   * @link airbnb-base: {@link }
   */
  'default-case': '',

  /**
   * Enforce `default` clauses in switch statements to be last.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/default-case-last}
   * @link airbnb-base: {@link }
   */
  'default-case-last': '',

  /**
   * Enforce default parameters to be last.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/default-param-last}
   * @link airbnb-base: {@link }
   */
  'default-param-last': '',

  /**
   * Enforce dot notation whenever possible.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/dot-notation}
   * @link airbnb-base: {@link }
   */
  'dot-notation': '',

  /**
   * Require the use of `===` and `!==`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/eqeqeq}
   * @link airbnb-base: {@link }
   */
  eqeqeq: '',

  /**
   * Require function names to match the name of the variable or property to which they are assigned.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/func-name-matching}
   * @link airbnb-base: {@link }
   */
  'func-name-matching': '',

  /**
   * Require or disallow named `function` expressions.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/func-names}
   * @link airbnb-base: {@link }
   */
  'func-names': '',

  /**
   * Enforce the consistent use of either `function` declarations or expressions assigned to variables.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/func-style}
   * @link airbnb-base: {@link }
   */
  'func-style': '',

  /**
   * Require grouped accessor pairs in object literals and classes.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/grouped-accessor-pairs}
   * @link airbnb-base: {@link }
   */
  'grouped-accessor-pairs': '',

  /**
   * Require `for`-`in` loops to include an `if` statement.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/guard-for-in}
   * @link airbnb-base: {@link }
   */
  'guard-for-in': '',

  /**
   * Disallow specified identifiers.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/id-denylist}
   * @link airbnb-base: {@link }
   */
  'id-denylist': '',

  /**
   * Enforce minimum and maximum identifier lengths.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/id-length}
   * @link airbnb-base: {@link }
   */
  'id-length': '',

  /**
   * Require identifiers to match a specified regular expression.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/id-match}
   * @link airbnb-base: {@link }
   */
  'id-match': '',

  /**
   * Require or disallow initialization in variable declarations.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/init-declarations}
   * @link airbnb-base: {@link }
   */
  'init-declarations': '',

  /**
   * Require or disallow logical assignment operator shorthand.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/logical-assignment-operators}
   * @link airbnb-base: {@link }
   */
  'logical-assignment-operators': '',

  /**
   * Enforce a maximum number of classes per file.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/max-classes-per-file}
   * @link airbnb-base: {@link }
   */
  'max-classes-per-file': '',

  /**
   * Enforce a maximum depth that blocks can be nested.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/max-depth}
   * @link airbnb-base: {@link }
   */
  'max-depth': '',

  /**
   * Enforce a maximum number of lines per file.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/max-lines}
   * @link airbnb-base: {@link }
   */
  'max-lines': '',

  /**
   * Enforce a maximum number of lines of code in a function.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/max-lines-per-function}
   * @link airbnb-base: {@link }
   */
  'max-lines-per-function': '',

  /**
   * Enforce a maximum depth that callbacks can be nested.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/max-nested-callbacks}
   * @link airbnb-base: {@link }
   */
  'max-nested-callbacks': '',

  /**
   * Enforce a maximum number of parameters in function definitions.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/max-params}
   * @link airbnb-base: {@link }
   */
  'max-params': '',

  /**
   * Enforce a maximum number of statements allowed in function blocks.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/max-statements}
   * @link airbnb-base: {@link }
   */
  'max-statements': '',

  /**
   * Require constructor names to begin with a capital letter.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/new-cap}
   * @link airbnb-base: {@link }
   */
  'new-cap': '',

  /**
   * Disallow the use of `alert`, `confirm`, and `prompt`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-alert}
   * @link airbnb-base: {@link }
   */
  'no-alert': '',

  /**
   * Disallow `Array` constructors.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-array-constructor}
   * @link airbnb-base: {@link }
   */
  'no-array-constructor': '',

  /**
   * Disallow bitwise operators.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-bitwise}
   * @link airbnb-base: {@link }
   *
   * @todo Disable it on bananass.
   */
  'no-bitwise': '',

  /**
   * Disallow the use of `arguments.caller` or `arguments.callee`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-caller}
   * @link airbnb-base: {@link }
   */
  'no-caller': '',

  /**
   * Disallow lexical declarations in `case` clauses.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-case-declarations}
   * @link airbnb-base: {@link }
   */
  'no-case-declarations': '',

  /**
   * Disallow the use of `console`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-console}
   * @link airbnb-base: {@link }
   *
   * @todo Disable it on bananass.
   */
  'no-console': '',

  /**
   * Disallow `continue` statements.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-continue}
   * @link airbnb-base: {@link }
   *
   * @todo Disable it on bananass.
   */
  'no-continue': '',

  /**
   * Disallow deleting variables.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-delete-var}
   * @link airbnb-base: {@link }
   */
  'no-delete-var': '',

  /**
   * Disallow equal signs explicitly at the beginning of regular expressions.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-div-regex}
   * @link airbnb-base: {@link }
   */
  'no-div-regex': '',

  /**
   * Disallow `else` blocks after `return` statements in `if` statements.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-else-return}
   * @link airbnb-base: {@link }
   */
  'no-else-return': '',

  /**
   * Disallow empty block statements.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-empty}
   * @link airbnb-base: {@link }
   */
  'no-empty': '',

  /**
   * Disallow empty functions.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-empty-function}
   * @link airbnb-base: {@link }
   */
  'no-empty-function': '',

  /**
   * Disallow empty `static` blocks.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-empty-static-block}
   * @link airbnb-base: {@link }
   */
  'no-empty-static-block': '',

  /**
   * Disallow `null` comparisons without type-checking operators.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-eq-null}
   * @link airbnb-base: {@link }
   */
  'no-eq-null': '',

  /**
   * Disallow the use of `eval()`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-eval}
   * @link airbnb-base: {@link }
   */
  'no-eval': '',

  /**
   * Disallow extending native types.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-extend-native}
   * @link airbnb-base: {@link }
   */
  'no-extend-native': '',

  /**
   * Disallow unnecessary calls to `.bind()`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-extra-bind}
   * @link airbnb-base: {@link }
   */
  'no-extra-bind': '',

  /**
   * Disallow unnecessary boolean casts.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-extra-boolean-cast}
   * @link airbnb-base: {@link }
   */
  'no-extra-boolean-cast': '',

  /**
   * Disallow unnecessary labels.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-extra-label}
   * @link airbnb-base: {@link }
   */
  'no-extra-label': '',

  /**
   * Disallow assignments to native objects or read-only global variables.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-global-assign}
   * @link airbnb-base: {@link }
   */
  'no-global-assign': '',

  /**
   * Disallow shorthand type conversions.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-implicit-coercion}
   * @link airbnb-base: {@link }
   */
  'no-implicit-coercion': '',

  /**
   * Disallow declarations in the global scope.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-implicit-globals}
   * @link airbnb-base: {@link }
   */
  'no-implicit-globals': '',

  /**
   * Disallow the use of `eval()`-like methods.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-implied-eval}
   * @link airbnb-base: {@link }
   */
  'no-implied-eval': '',

  /**
   * Disallow inline comments after code.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-inline-comments}
   * @link airbnb-base: {@link }
   *
   * @todo Disable it on bananass.
   */
  'no-inline-comments': '',

  /**
   * Disallow use of `this` in contexts where the value of `this` is `undefined`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-invalid-this}
   * @link airbnb-base: {@link }
   */
  'no-invalid-this': '',

  /**
   * Disallow the use of the `__iterator__` property.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-iterator}
   * @link airbnb-base: {@link }
   */
  'no-iterator': '',

  /**
   * Disallow labels that share a name with a variable.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-label-var}
   * @link airbnb-base: {@link }
   */
  'no-label-var': '',

  /**
   * Disallow labeled statements.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-labels}
   * @link airbnb-base: {@link }
   */
  'no-labels': '',

  /**
   * Disallow unnecessary nested blocks.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-lone-blocks}
   * @link airbnb-base: {@link }
   */
  'no-lone-blocks': '',

  /**
   * Disallow `if` statements as the only statement in `else` blocks.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-lonely-if}
   * @link airbnb-base: {@link }
   */
  'no-lonely-if': '',

  /**
   * Disallow function declarations that contain unsafe references inside loop statements.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-loop-func}
   * @link airbnb-base: {@link }
   */
  'no-loop-func': '',

  /**
   * Disallow magic numbers.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-magic-numbers}
   * @link airbnb-base: {@link }
   */
  'no-magic-numbers': '',

  /**
   * Disallow use of chained assignment expressions.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-multi-assign}
   * @link airbnb-base: {@link }
   *
   * @todo Disable it on bananass.
   */
  'no-multi-assign': '',

  /**
   * Disallow multiline strings.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-multi-str}
   * @link airbnb-base: {@link }
   */
  'no-multi-str': '',

  /**
   * Disallow negated conditions.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-negated-condition}
   * @link airbnb-base: {@link }
   */
  'no-negated-condition': '',

  /**
   * Disallow nested ternary expressions.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-nested-ternary}
   * @link airbnb-base: {@link }
   */
  'no-nested-ternary': '',

  /**
   * Disallow `new` operators outside of assignments or comparisons.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-new}
   * @link airbnb-base: {@link }
   */
  'no-new': '',

  /**
   * Disallow `new` operators with the `Function` object.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-new-func}
   * @link airbnb-base: {@link }
   */
  'no-new-func': '',

  /**
   * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-new-wrappers}
   * @link airbnb-base: {@link }
   */
  'no-new-wrappers': '',

  /**
   * Disallow `\8` and `\9` escape sequences in string literals.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape}
   * @link airbnb-base: {@link }
   */
  'no-nonoctal-decimal-escape': '',

  /**
   * Disallow calls to the `Object` constructor without an argument.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-object-constructor}
   * @link airbnb-base: {@link }
   */
  'no-object-constructor': '',

  /**
   * Disallow octal literals.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-octal}
   * @link airbnb-base: {@link }
   *
   * @description Disable it on bananass.
   */
  'no-octal': '',

  /**
   * Disallow octal escape sequences in string literals.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-octal-escape}
   * @link airbnb-base: {@link }
   */
  'no-octal-escape': '',

  /**
   * Disallow reassigning `function` parameters.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-param-reassign}
   * @link airbnb-base: {@link }
   */
  'no-param-reassign': '',

  /**
   * Disallow the unary operators `++` and `--`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-plusplus}
   * @link airbnb-base: {@link }
   *
   * @description Disable it on bananass.
   */
  'no-plusplus': '',

  /**
   * Disallow the use of the `__proto__` property.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-proto}
   * @link airbnb-base: {@link }
   */
  'no-proto': '',

  /**
   * Disallow variable redeclaration.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-redeclare}
   * @link airbnb-base: {@link }
   */
  'no-redeclare': '',

  /**
   * Disallow multiple spaces in regular expressions.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-regex-spaces}
   * @link airbnb-base: {@link }
   */
  'no-regex-spaces': '',

  /**
   * Disallow specified names in exports.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-restricted-exports}
   * @link airbnb-base: {@link }
   */
  'no-restricted-exports': '',

  /**
   * Disallow specified global variables.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-restricted-globals}
   * @link airbnb-base: {@link }
   */
  'no-restricted-globals': '',

  /**
   * Disallow specified modules when loaded by import.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-restricted-imports}
   * @link airbnb-base: {@link }
   */
  'no-restricted-imports': '',

  /**
   * Disallow certain properties on certain objects.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-restricted-properties}
   * @link airbnb-base: {@link }
   */
  'no-restricted-properties': '',

  /**
   * Disallow specified syntax.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-restricted-syntax}
   * @link airbnb-base: {@link }
   */
  'no-restricted-syntax': '',

  /**
   * Disallow assignment operators in `return` statements.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-return-assign}
   * @link airbnb-base: {@link }
   */
  'no-return-assign': '',

  /**
   * Disallow `javascript:` URLs.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-script-url}
   * @link airbnb-base: {@link }
   */
  'no-script-url': '',

  /**
   * Disallow comma operators.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-sequences}
   * @link airbnb-base: {@link }
   */
  'no-sequences': '',

  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-shadow}
   * @link airbnb-base: {@link }
   */
  'no-shadow': '',

  /**
   * Disallow identifiers from shadowing restricted names.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-shadow-restricted-names}
   * @link airbnb-base: {@link }
   */
  'no-shadow-restricted-names': '',

  /**
   * Disallow ternary operators.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-ternary}
   * @link airbnb-base: {@link }
   *
   * @todo Disable it on bananass.
   */
  'no-ternary': '',

  /**
   * Disallow throwing literals as exceptions.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-throw-literal}
   * @link airbnb-base: {@link }
   */
  'no-throw-literal': '',

  /**
   * Disallow initializing variables to `undefined`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-undef-init}
   * @link airbnb-base: {@link }
   */
  'no-undef-init': '',

  /**
   * Disallow the use of `undefined` as an identifier.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-undefined}
   * @link airbnb-base: {@link }
   */
  'no-undefined': '',

  /**
   * Disallow dangling underscores in identifiers.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-underscore-dangle}
   * @link airbnb-base: {@link }
   *
   * @todo Disable it on bananass.
   */
  'no-underscore-dangle': '',

  /**
   * Disallow ternary operators when simpler alternatives exist.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-unneeded-ternary}
   * @link airbnb-base: {@link }
   */
  'no-unneeded-ternary': '',

  /**
   * Disallow unused expressions.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-unused-expressions}
   * @link airbnb-base: {@link }
   */
  'no-unused-expressions': '',

  /**
   * Disallow unused labels.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-unused-labels}
   * @link airbnb-base: {@link }
   */
  'no-unused-labels': '',

  /**
   * Disallow unnecessary calls to `.call()` and `.apply()`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-call}
   * @link airbnb-base: {@link }
   */
  'no-useless-call': '',

  /**
   * Disallow unnecessary `catch` clauses.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-catch}
   * @link airbnb-base: {@link }
   */
  'no-useless-catch': '',

  /**
   * Disallow unnecessary computed property keys in objects and classes.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-computed-key}
   * @link airbnb-base: {@link }
   */
  'no-useless-computed-key': '',

  /**
   * Disallow unnecessary concatenation of literals or template literals.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-concat}
   * @link airbnb-base: {@link }
   */
  'no-useless-concat': '',

  /**
   * Disallow unnecessary constructors.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-constructor}
   * @link airbnb-base: {@link }
   */
  'no-useless-constructor': '',

  /**
   * Disallow unnecessary escape characters.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-escape}
   * @link airbnb-base: {@link }
   */
  'no-useless-escape': '',

  /**
   * Disallow renaming import, export, and destructured assignments to the same name.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-rename}
   * @link airbnb-base: {@link }
   */
  'no-useless-rename': '',

  /**
   * Disallow redundant return statements.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-useless-return}
   * @link airbnb-base: {@link }
   */
  'no-useless-return': '',

  /**
   * Require `let` or `const` instead of `var`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-var}
   * @link airbnb-base: {@link }
   */
  'no-var': '',

  /**
   * Disallow `void` operators.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-void}
   * @link airbnb-base: {@link }
   */
  'no-void': '',

  /**
   * Disallow specified warning terms in comments.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-warning-comments}
   * @link airbnb-base: {@link }
   */
  'no-warning-comments': '',

  /**
   * Disallow `with` statements.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/no-with}
   * @link airbnb-base: {@link }
   */
  'no-with': '',

  /**
   * Require or disallow method and property shorthand syntax for object literals.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/object-shorthand}
   * @link airbnb-base: {@link }
   */
  'object-shorthand': '',

  /**
   * Enforce variables to be declared either together or separately in functions.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/one-var}
   * @link airbnb-base: {@link }
   */
  'one-var': '',

  /**
   * Require or disallow assignment operator shorthand where possible.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/operator-assignment}
   * @link airbnb-base: {@link }
   *
   * @todo consider to disable this option in bananass.
   */
  'operator-assignment': '',

  /**
   * Require using arrow functions for callbacks.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-arrow-callback}
   * @link airbnb-base: {@link }
   */
  'prefer-arrow-callback': '',

  /**
   * Require `const` declarations for variables that are never reassigned after declared.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-const}
   * @link airbnb-base: {@link }
   */
  'prefer-const': '',

  /**
   * Require destructuring from arrays and/or objects.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-destructuring}
   * @link airbnb-base: {@link }
   */
  'prefer-destructuring': '',

  /**
   * Disallow the use of `Math.pow` in favor of the `**` operator.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-exponentiation-operator}
   * @link airbnb-base: {@link }
   */
  'prefer-exponentiation-operator': '',

  /**
   * Enforce using named capture group in regular expression.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-named-capture-group}
   * @link airbnb-base: {@link }
   */
  'prefer-named-capture-group': '',

  /**
   * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-numeric-literals}
   * @link airbnb-base: {@link }
   */
  'prefer-numeric-literals': '',

  /**
   * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-object-has-own}
   * @link airbnb-base: {@link }
   */
  'prefer-object-has-own': '',

  /**
   * Disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-object-spread}
   * @link airbnb-base: {@link }
   */
  'prefer-object-spread': '',

  /**
   * Require using `Error` objects as `Promise` rejection reasons.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-promise-reject-errors}
   * @link airbnb-base: {@link }
   */
  'prefer-promise-reject-errors': '',

  /**
   * Disallow use of the `RegExp` constructor in favor of regular expression literals.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-regex-literals}
   * @link airbnb-base: {@link }
   */
  'prefer-regex-literals': '',

  /**
   * Require rest parameters instead of `arguments`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-rest-params}
   * @link airbnb-base: {@link }
   */
  'prefer-rest-params': '',

  /**
   * Require spread operators instead of `.apply()`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-spread}
   * @link airbnb-base: {@link }
   */
  'prefer-spread': '',

  /**
   * Require template literals instead of string concatenation.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/prefer-template}
   * @link airbnb-base: {@link }
   */
  'prefer-template': '',

  /**
   * Enforce the consistent use of the radix argument when using `parseInt()`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/radix}
   * @link airbnb-base: {@link }
   */
  radix: '',

  /**
   * Disallow async functions which have no `await` expression.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/require-await}
   * @link airbnb-base: {@link }
   */
  'require-await': '',

  /**
   * Enforce the use of `u` or `v` flag on `RegExp`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/require-unicode-regexp}
   * @link airbnb-base: {@link }
   */
  'require-unicode-regexp': '',

  /**
   * Require generator functions to contain `yield`.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/require-yield}
   * @link airbnb-base: {@link }
   */
  'require-yield': '',

  /**
   * Enforce sorted `import` declarations within modules.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/sort-imports}
   * @link airbnb-base: {@link }
   */
  'sort-imports': '',

  /**
   * Require object keys to be sorted.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/sort-keys}
   * @link airbnb-base: {@link }
   */
  'sort-keys': '',

  /**
   * Require variables within the same declaration block to be sorted.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/sort-vars}
   * @link airbnb-base: {@link }
   */
  'sort-vars': '',

  /**
   * Require or disallow strict mode directives.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/strict}
   * @link airbnb-base: {@link }
   */
  strict: '',

  /**
   * Require symbol descriptions.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/symbol-description}
   * @link airbnb-base: {@link }
   */
  'symbol-description': '',

  /**
   * Require `var` declarations be placed at the top of their containing scope.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/vars-on-top}
   * @link airbnb-base: {@link }
   */
  'vars-on-top': '',

  /**
   * Require or disallow "Yoda" conditions.
   *
   * @description
   * @link eslint: {@link https://eslint.org/docs/latest/rules/yoda}
   * @link airbnb-base: {@link }
   */
  yoda: '',
};
