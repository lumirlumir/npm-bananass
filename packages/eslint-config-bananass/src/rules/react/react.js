/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed on `eslint-plugin-react`.
 *   - See, {@link https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules}.
 *
 * - The best practices outlined in `eslint-config-next@15.1.4`.
 *   - See, {@link https://github.com/vercel/next.js/blob/v15.1.4/packages/eslint-config-next/index.js#L57}.
 *
 * - The best practices outlined in `eslint-config-airbnb@19.0.4`.
 *   - See, {@link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js}.
 *
 * - The rules disabled by `eslint-config-prettier@9.1.0`.
 *   - See, {@link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L55-L69}.
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {import("eslint").Linter.RulesRecord} */
export default {
  /**
   * Enforces consistent naming for boolean props.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L420-L424
   */
  'react/boolean-prop-naming': 'off',

  /**
   * Disallow usage of `button` elements without an explicit `type` attribute.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L448-L452
   */
  'react/button-has-type': [
    'error',
    {
      button: true,
      submit: true,
      reset: false,
    },
  ],

  /**
   * Enforce using `onChange` or `readonly` attribute when checked is used.
   *
   * @description This rule does not exist in `eslint-config-airbnb@19.0.4`.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/checked-requires-onchange-or-readonly.md
   */
  'react/checked-requires-onchange-or-readonly': 'error',

  /**
   * Enforce all defaultProps have a corresponding non-required PropType.
   *
   * @description `prop-types` is now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
   */
  'react/default-props-match-prop-types': 'off',

  /**
   * Enforce consistent usage of destructuring assignment of props, state, and context.
   *
   * @description There are some cases that destructuring assignment is not necessary.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L440
   */
  'react/destructuring-assignment': 'off',

  /**
   * Disallow missing displayName in a React component definition.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
   * @link https://github.com/vercel/next.js/blob/v15.1.4/packages/eslint-config-next/index.js#L57
   */
  'react/display-name': 'error',

  /**
   * Disallow certain props on components.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L342
   */
  'react/forbid-component-props': 'off',

  /**
   * Disallow certain props on DOM Nodes.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L63
   */
  'react/forbid-dom-props': 'off',

  /**
   * Disallow certain elements.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L346
   */
  'react/forbid-elements': 'off',

  /**
   * Disallow using another component's propTypes.
   *
   * @description `prop-types` is now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
   */
  'react/forbid-foreign-prop-types': 'off',

  /**
   * Disallow certain propTypes.
   *
   * @description `prop-types` is now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
   */
  'react/forbid-prop-types': 'off',

  /**
   * Require all `forwardRef` components include a `ref` parameter.
   *
   * @description `forwardRef` is now deprecated since `react@19`.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forward-ref-uses-ref.md
   */
  'react/forward-ref-uses-ref': 'off',

  /**
   * Enforce a specific function type for function components.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L527-L530
   */
  'react/function-component-definition': [
    'error',
    {
      namedComponents: ['function-declaration', 'function-expression'],
      unnamedComponents: 'function-expression',
    },
  ],

  /**
   * Ensure destructuring and symmetric naming of `useState` hook value and setter variables.
   *
   * @description This rule does not exist in `eslint-config-airbnb@19.0.4`.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
   */
  'react/hook-use-state': ['error', { allowDestructuredState: true }],

  /**
   * Enforce sandbox attribute on iframe elements.
   *
   * @description This rule does not exist in `eslint-config-airbnb@19.0.4`.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
   */
  'react/iframe-missing-sandbox': 'warn',

  /**
   * Enforce boolean attributes notation in JSX.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L67
   */
  'react/jsx-boolean-value': ['error', 'never', { always: [] }],

  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
   * @link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L55
   */
  'react/jsx-child-element-spacing': 'off',

  /**
   * Enforce closing bracket location in JSX.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
   * @link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L56
   */
  'react/jsx-closing-bracket-location': 'off',

  /**
   * Enforce closing tag location for multiline JSX.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
   * @link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L57
   */
  'react/jsx-closing-tag-location': 'off',

  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L432
   */
  'react/jsx-curly-brace-presence': [
    'error',
    {
      props: 'never',
      children: 'never',
      propElementValues: 'ignore',
    },
  ],

  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
   * @link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L58
   */
  'react/jsx-curly-newline': 'off',

  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
   * @link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L59
   */
  'react/jsx-curly-spacing': 'off',

  /**
   * Enforce or disallow spaces around equal signs in JSX attributes.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
   * @link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L60
   */
  'react/jsx-equals-spacing': 'off',

  /**
   * Disallow file extensions that may contain JSX.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L322
   */
  'react/jsx-filename-extension': [
    'error',
    {
      allow: 'as-needed',
      extensions: ['.jsx', '.tsx'],
      ignoreFilesWithoutCode: true,
    },
  ],

  /**
   * Enforce proper position of the first property in JSX.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
   * @link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L61
   */
  'react/jsx-first-prop-new-line': 'off',

  /**
   * Enforce shorthand or standard form for React fragments.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L475
   */
  'react/jsx-fragments': ['error', 'syntax'],

  /**
   * Enforce event handler naming conventions in JSX.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L83-L86
   */
  'react/jsx-handler-names': 'off',

  /**
   * Enforce JSX indentation.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
   * @link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L61
   */
  'react/jsx-indent': 'off',

  /**
   * Enforce props indentation in JSX.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
   * @link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L63
   */
  'react/jsx-indent-props': 'off',

  /**
   * Disallow missing `key` props in iterators/collection literals.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
   * @link https://github.com/vercel/next.js/blob/v15.1.4/packages/eslint-config-next/index.js#L57
   */
  'react/jsx-key': [
    'error',
    {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
      warnOnDuplicates: false,
    },
  ],

  /**
   * Enforce JSX maximum depth.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L463
   */
  'react/jsx-max-depth': 'off',

  /**
   * Enforce maximum of props on a single line in JSX.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
   * @link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L63
   */
  'react/jsx-max-props-per-line': 'off',

  /**
   * Require or prevent a new line after jsx elements and expressions.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
   * @link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L65
   */
  'react/jsx-newline': 'off',

  /**
   * Disallow `.bind()` or arrow functions in JSX props.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L103-L109
   */
  'react/jsx-no-bind': [
    'error',
    {
      ignoreDOMComponents: true,
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
    },
  ],

  /**
   * Disallow comments from being inserted as text nodes.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L326
   */
  'react/jsx-no-comment-textnodes': 'error',

  /**
   * Disallows JSX context provider values from taking values that will cause needless rerenders.
   *
   * @description Importance of this rule became less significant after the introduction of React Compiler.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L538
   */
  'react/jsx-no-constructed-context-values': 'warn',

  /**
   * Disallow duplicate properties in JSX.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L113
   */
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

  /**
   * Disallow problematic leaked values from being rendered.
   *
   * @description This rule does not exist in `eslint-config-airbnb@19.0.4`.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
   */
  'react/jsx-no-leaked-render': 'warn',

  /**
   * Disallow usage of string literals in JSX.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L117
   */
  'react/jsx-no-literals': 'off',

  /**
   * Disallow usage of `javascript:` URLs.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L509-L514
   */
  'react/jsx-no-script-url': [
    'error',
    [
      {
        name: 'Link',
        props: ['to'],
      },
    ],
  ],

  /**
   * Disallow `target="_blank"` attribute without `rel="noreferrer"`.
   *
   * @description I've set this rule to `'warn'`.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L318
   * @link https://github.com/vercel/next.js/blob/v15.1.4/packages/eslint-config-next/index.js#L79
   */
  'react/jsx-no-target-blank': [
    'warn',
    {
      allowReferrer: false,
      enforceDynamicLinks: 'always',
      warnOnSpreadAttributes: true,
      links: true,
      forms: true,
    },
  ],

  /**
   * Disallow undeclared variables in JSX.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L121
   */
  'react/jsx-no-undef': 'error',

  /**
   * Disallow unnecessary fragments.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L518
   */
  'react/jsx-no-useless-fragment': 'error',

  /**
   * Require one JSX element per line.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
   * @link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L66
   */
  'react/jsx-one-expression-per-line': 'off',

  /**
   * Enforce PascalCase for user-defined JSX components.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L125-L128
   */
  'react/jsx-pascal-case': [
    'error',
    {
      allowAllCaps: true,
      allowLeadingUnderscore: false,
      allowNamespace: false,
      ignore: [],
    },
  ],

  /**
   * Disallow multiple spaces between inline JSX props.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
   * @link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L67
   */
  'react/jsx-props-no-multi-spaces': 'off',

  /**
   * Disallow JSX prop spreading the same identifier multiple times.
   *
   * @description This rule does not exist in `eslint-config-airbnb@19.0.4`.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md
   */
  'react/jsx-props-no-spread-multi': 'error',

  /**
   * Disallow JSX prop spreading.
   *
   * @description I've disabled this rule.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L496-L501
   */
  'react/jsx-props-no-spreading': 'off',

  /**
   * Enforce props alphabetical sorting.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L144-L151
   */
  'react/jsx-sort-props': 'off',

  /**
   * Enforce whitespace in and around the JSX opening and closing brackets.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
   * @link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L68
   */
  'react/jsx-tag-spacing': 'off',

  /**
   * Disallow React to be incorrectly marked as unused.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L161
   */
  'react/jsx-uses-react': 'error',

  /**
   * Disallow variables used in JSX to be incorrectly marked as unused.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L165
   */
  'react/jsx-uses-vars': 'error',

  /**
   * Disallow missing parentheses around multiline JSX.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
   * @link https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L69
   */
  'react/jsx-wrap-multilines': 'off',

  /**
   * Disallow when `this.state` is accessed within `setState`.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L444
   */
  'react/no-access-state-in-setstate': 'error',

  /**
   * Disallow adjacent inline elements not separated by whitespace.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L523
   */
  'react/no-adjacent-inline-elements': 'off',

  /**
   * Disallow usage of Array index in keys.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L388
   */
  'react/no-array-index-key': 'error',

  /**
   * Lifecycle methods should be methods on the prototype, not class fields.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
   */
  'react/no-arrow-function-lifecycle': 'off',

  /**
   * Disallow passing of children as props.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L370
   */
  'react/no-children-prop': 'error',

  /**
   * Disallow usage of dangerous JSX properties.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L169
   */
  'react/no-danger': 'warn',

  /**
   * Disallow when a DOM element is using both `children` and `dangerouslySetInnerHTML`.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L350
   */
  'react/no-danger-with-children': 'error',

  /**
   * Disallow usage of deprecated methods.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L173
   */
  'react/no-deprecated': 'error',

  /**
   * Disallow usage of `setState` in `componentDidMount`.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
   */
  'react/no-did-mount-set-state': 'off',

  /**
   * Disallow usage of `setState` in `componentDidUpdate`.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
   */
  'react/no-did-update-set-state': 'off',

  /**
   * Disallow direct mutation of `this.state`.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
   */
  'react/no-direct-mutation-state': 'off',

  /**
   * Disallow usage of `findDOMNode`.
   *
   * @description `findDOMNode` is now fully removed(deprecated) since `react@19`.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
   */
  'react/no-find-dom-node': 'off',

  /**
   * Disallow usage of invalid attributes.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L558
   */
  'react/no-invalid-html-attribute': 'error',

  /**
   * Disallow usage of `isMounted`.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
   */
  'react/no-is-mounted': 'off',

  /**
   * Disallow multiple component definition per file.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L198
   */
  'react/no-multi-comp': 'off',

  /**
   * Enforce that namespaces are not used in React elements.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L546
   */
  'react/no-namespace': 'error',

  /**
   * Disallow usage of referential-type variables as default param in functional component.
   *
   * @description This rule does not exist in `eslint-config-airbnb@19.0.4`.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md
   */
  'react/no-object-type-as-default-prop': 'off',

  /**
   * Disallow usage of `shouldComponentUpdate` when extending `React.PureComponent`.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
   */
  'react/no-redundant-should-component-update': 'off',

  /**
   * Disallow usage of the return value of `ReactDOM.render`.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L330
   */
  'react/no-render-return-value': 'error',

  /**
   * Disallow usage of `setState`.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L202
   */
  'react/no-set-state': 'off',

  /**
   * Disallow using string references.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L206
   */
  'react/no-string-refs': 'error',

  /**
   * Disallow `this` from being used in stateless functional components.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L459
   */
  'react/no-this-in-sfc': 'error',

  /**
   * Disallow common typos.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
   */
  'react/no-typos': 'off',

  /**
   * Disallow unescaped HTML entities from appearing in markup.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L366
   */
  'react/no-unescaped-entities': 'error',

  /**
   * Disallow usage of unknown DOM property.
   *
   * @description I've set this rule to `'warn'`.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L210
   * @link https://github.com/vercel/next.js/blob/v15.1.4/packages/eslint-config-next/index.js#L64
   */
  'react/no-unknown-property': 'warn',

  /**
   * Disallow usage of unsafe lifecycle methods.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L471
   */
  'react/no-unsafe': 'off',

  /**
   * Disallow creating unstable components inside components.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L542
   */
  'react/no-unstable-nested-components': 'error',

  /**
   * Disallow declaring unused methods of component class.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
   */
  'react/no-unused-class-component-methods': 'off',

  /**
   * Disallow definitions of unused `propTypes`.
   *
   * @description `prop-types` is now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
   */
  'react/no-unused-prop-types': 'off',

  /**
   * Disallow definitions of unused state.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
   */
  'react/no-unused-state': 'off',

  /**
   * Disallow usage of `setState` in `componentWillUpdate`.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
   */
  'react/no-will-update-set-state': 'off',

  /**
   * Enforce ES5 or ES6 class for React Components.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
   */
  'react/prefer-es6-class': 'off',

  /**
   * Prefer exact proptype definitions.
   *
   * @description `prop-types` is now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
   */
  'react/prefer-exact-props': 'off',

  /**
   * Enforce that props are read-only.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L505
   */
  'react/prefer-read-only-props': 'off',

  /**
   * Enforce stateless components to be written as a pure function.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L218
   */
  'react/prefer-stateless-function': 'error',

  /**
   * Disallow missing props validation in a React component definition.
   *
   * @description `prop-types` is now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
   * @link https://github.com/vercel/next.js/blob/v15.1.4/packages/eslint-config-next/index.js#L66
   */
  'react/prop-types': 'off',

  /**
   * Disallow missing React when using JSX.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L230
   * @link https://github.com/vercel/next.js/blob/v15.1.4/packages/eslint-config-next/index.js#L65
   */
  'react/react-in-jsx-scope': 'error',

  /**
   * Enforce a `defaultProps` definition for every prop that is not a required prop.
   *
   * @description `prop-types` is now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
   */
  'react/require-default-props': 'off',

  /**
   * Enforce React components to have a `shouldComponentUpdate` method.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
   */
  'react/require-optimization': 'off',

  /**
   * Enforce ES5 or ES6 class for returning value in `render` function.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L234
   */
  'react/require-render-return': 'error',

  /**
   * Disallow extra closing tags for components without children.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L238
   */
  'react/self-closing-comp': [
    'error',
    {
      component: true,
      html: true,
    },
  ],

  /**
   * Enforce component methods order.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
   */
  'react/sort-comp': 'off',

  /**
   * Enforce `defaultProps` declarations alphabetical sorting.
   *
   * @description `prop-types` is now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md
   */
  'react/sort-default-props': 'off',

  /**
   * Enforce propTypes declarations alphabetical sorting.
   *
   * @description `prop-types` is now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
   */
  'react/sort-prop-types': 'off',

  /**
   * Enforce class component state initialization style.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
   */
  'react/state-in-constructor': 'off',

  /**
   * Enforces where React component static properties should be positioned.
   *
   * @description Class compoenents are now deprecated.
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
   */
  'react/static-property-placement': 'off',

  /**
   * Enforce style prop value is an object.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L362
   */
  'react/style-prop-object': 'error',

  /**
   * Disallow void DOM elements (e.g. <img />, <br />) from receiving children.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react.js#L404
   */
  'react/void-dom-elements-no-children': 'error',
};
