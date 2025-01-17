/**
 * @fileoverview This file follows:
 *
 * - The order of the rules listed on `eslint-plugin-react`.
 *   - See, {@link https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules}.
 */

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  /**
   * Enforces consistent naming for boolean props
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
   */
  'react/boolean-prop-naming': 'off',

  /**
   * Disallow usage of button elements without an explicit type attribute
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
   */
  'react/button-has-type': 'off',

  /**
   * Enforce using onChange or readonly attribute when checked is used
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/checked-requires-onchange-or-readonly.md
   */
  'react/checked-requires-onchange-or-readonly': 'off',

  /**
   * Enforce all defaultProps have a corresponding non-required PropType
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
   */
  'react/default-props-match-prop-types': 'off',

  /**
   * Enforce consistent usage of destructuring assignment of props, state, and context
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
   */
  'react/destructuring-assignment': 'off',

  /**
   * Disallow missing displayName in a React component definition
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
   */
  'react/display-name': 'off',

  /**
   * Disallow certain props on components
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
   */
  'react/forbid-component-props': 'off',

  /**
   * Disallow certain props on DOM Nodes
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
   */
  'react/forbid-dom-props': 'off',

  /**
   * Disallow certain elements
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
   */
  'react/forbid-elements': 'off',

  /**
   * Disallow using another component's propTypes
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
   */
  'react/forbid-foreign-prop-types': 'off',

  /**
   * Disallow certain propTypes
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
   */
  'react/forbid-prop-types': 'off',

  /**
   * Require all forwardRef components include a ref parameter
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forward-ref-uses-ref.md
   */
  'react/forward-ref-uses-ref': 'off',

  /**
   * Enforce a specific function type for function components
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
   */
  'react/function-component-definition': 'off',

  /**
   * Ensure destructuring and symmetric naming of useState hook value and setter variables
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
   */
  'react/hook-use-state': 'off',

  /**
   * Enforce sandbox attribute on iframe elements
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
   */
  'react/iframe-missing-sandbox': 'off',

  /**
   * Enforce boolean attributes notation in JSX
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
   */
  'react/jsx-boolean-value': 'off',

  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
   */
  'react/jsx-child-element-spacing': 'off',

  /**
   * Enforce closing bracket location in JSX
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
   */
  'react/jsx-closing-bracket-location': 'off',

  /**
   * Enforce closing tag location for multiline JSX
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
   */
  'react/jsx-closing-tag-location': 'off',

  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
   */
  'react/jsx-curly-brace-presence': 'off',

  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
   */
  'react/jsx-curly-newline': 'off',

  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
   */
  'react/jsx-curly-spacing': 'off',

  /**
   * Enforce or disallow spaces around equal signs in JSX attributes
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
   */
  'react/jsx-equals-spacing': 'off',

  /**
   * Disallow file extensions that may contain JSX
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
   */
  'react/jsx-filename-extension': 'off',

  /**
   * Enforce proper position of the first property in JSX
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
   */
  'react/jsx-first-prop-new-line': 'off',

  /**
   * Enforce shorthand or standard form for React fragments
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
   */
  'react/jsx-fragments': 'off',

  /**
   * Enforce event handler naming conventions in JSX
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
   */
  'react/jsx-handler-names': 'off',

  /**
   * Enforce JSX indentation
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
   */
  'react/jsx-indent': 'off',

  /**
   * Enforce props indentation in JSX
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
   */
  'react/jsx-indent-props': 'off',

  /**
   * Disallow missing key props in iterators/collection literals
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
   */
  'react/jsx-key': 'off',

  /**
   * Enforce JSX maximum depth
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
   */
  'react/jsx-max-depth': 'off',

  /**
   * Enforce maximum of props on a single line in JSX
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
   */
  'react/jsx-max-props-per-line': 'off',

  /**
   * Require or prevent a new line after jsx elements and expressions.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
   */
  'react/jsx-newline': 'off',

  /**
   * Disallow .bind() or arrow functions in JSX props
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
   */
  'react/jsx-no-bind': 'off',

  /**
   * Disallow comments from being inserted as text nodes
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
   */
  'react/jsx-no-comment-textnodes': 'off',

  /**
   * Disallows JSX context provider values from taking values that will cause needless rerenders
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
   */
  'react/jsx-no-constructed-context-values': 'off',

  /**
   * Disallow duplicate properties in JSX
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
   */
  'react/jsx-no-duplicate-props': 'off',

  /**
   * Disallow problematic leaked values from being rendered
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
   */
  'react/jsx-no-leaked-render': 'off',

  /**
   * Disallow usage of string literals in JSX
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
   */
  'react/jsx-no-literals': 'off',

  /**
   * Disallow usage of javascript: URLs
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
   */
  'react/jsx-no-script-url': 'off',

  /**
   * Disallow target="_blank" attribute without rel="noreferrer"
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
   */
  'react/jsx-no-target-blank': 'off',

  /**
   * Disallow undeclared variables in JSX
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
   */
  'react/jsx-no-undef': 'off',

  /**
   * Disallow unnecessary fragments
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
   */
  'react/jsx-no-useless-fragment': 'off',

  /**
   * Require one JSX element per line
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
   */
  'react/jsx-one-expression-per-line': 'off',

  /**
   * Enforce PascalCase for user-defined JSX components
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
   */
  'react/jsx-pascal-case': 'off',

  /**
   * Disallow multiple spaces between inline JSX props
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
   */
  'react/jsx-props-no-multi-spaces': 'off',

  /**
   * Disallow JSX prop spreading the same identifier multiple times
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md
   */
  'react/jsx-props-no-spread-multi': 'off',

  /**
   * Disallow JSX prop spreading
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
   */
  'react/jsx-props-no-spreading': 'off',

  /**
   * Enforce props alphabetical sorting
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
   */
  'react/jsx-sort-props': 'off',

  /**
   * Enforce whitespace in and around the JSX opening and closing brackets
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
   */
  'react/jsx-tag-spacing': 'off',

  /**
   * Disallow React to be incorrectly marked as unused
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
   */
  'react/jsx-uses-react': 'off',

  /**
   * Disallow variables used in JSX to be incorrectly marked as unused
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
   */
  'react/jsx-uses-vars': 'off',

  /**
   * Disallow missing parentheses around multiline JSX
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
   */
  'react/jsx-wrap-multilines': 'off',

  /**
   * Disallow when this.state is accessed within setState
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
   */
  'react/no-access-state-in-setstate': 'off',

  /**
   * Disallow adjacent inline elements not separated by whitespace.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
   */
  'react/no-adjacent-inline-elements': 'off',

  /**
   * Disallow usage of Array index in keys
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
   */
  'react/no-array-index-key': 'off',

  /**
   * Lifecycle methods should be methods on the prototype, not class fields
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
   */
  'react/no-arrow-function-lifecycle': 'off',

  /**
   * Disallow passing of children as props
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
   */
  'react/no-children-prop': 'off',

  /**
   * Disallow usage of dangerous JSX properties
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
   */
  'react/no-danger': 'off',

  /**
   * Disallow when a DOM element is using both children and dangerouslySetInnerHTML
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
   */
  'react/no-danger-with-children': 'off',

  /**
   * Disallow usage of deprecated methods
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
   */
  'react/no-deprecated': 'off',

  /**
   * Disallow usage of setState in componentDidMount
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
   */
  'react/no-did-mount-set-state': 'off',

  /**
   * Disallow usage of setState in componentDidUpdate
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
   */
  'react/no-did-update-set-state': 'off',

  /**
   * Disallow direct mutation of this.state
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
   */
  'react/no-direct-mutation-state': 'off',

  /**
   * Disallow usage of findDOMNode
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
   */
  'react/no-find-dom-node': 'off',

  /**
   * Disallow usage of invalid attributes
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
   */
  'react/no-invalid-html-attribute': 'off',

  /**
   * Disallow usage of isMounted
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
   */
  'react/no-is-mounted': 'off',

  /**
   * Disallow multiple component definition per file
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
   */
  'react/no-multi-comp': 'off',

  /**
   * Enforce that namespaces are not used in React elements
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
   */
  'react/no-namespace': 'off',

  /**
   * Disallow usage of referential-type variables as default param in functional component
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md
   */
  'react/no-object-type-as-default-prop': 'off',

  /**
   * Disallow usage of shouldComponentUpdate when extending React.PureComponent
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
   */
  'react/no-redundant-should-component-update': 'off',

  /**
   * Disallow usage of the return value of ReactDOM.render
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
   */
  'react/no-render-return-value': 'off',

  /**
   * Disallow usage of setState
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
   */
  'react/no-set-state': 'off',

  /**
   * Disallow using string references
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
   */
  'react/no-string-refs': 'off',

  /**
   * Disallow this from being used in stateless functional components
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
   */
  'react/no-this-in-sfc': 'off',

  /**
   * Disallow common typos
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
   */
  'react/no-typos': 'off',

  /**
   * Disallow unescaped HTML entities from appearing in markup
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
   */
  'react/no-unescaped-entities': 'off',

  /**
   * Disallow usage of unknown DOM property
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
   */
  'react/no-unknown-property': 'off',

  /**
   * Disallow usage of unsafe lifecycle methods
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
   */
  'react/no-unsafe': 'off',

  /**
   * Disallow creating unstable components inside components
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
   */
  'react/no-unstable-nested-components': 'off',

  /**
   * Disallow declaring unused methods of component class
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
   */
  'react/no-unused-class-component-methods': 'off',

  /**
   * Disallow definitions of unused propTypes
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
   */
  'react/no-unused-prop-types': 'off',

  /**
   * Disallow definitions of unused state
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
   */
  'react/no-unused-state': 'off',

  /**
   * Disallow usage of setState in componentWillUpdate
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
   */
  'react/no-will-update-set-state': 'off',

  /**
   * Enforce ES5 or ES6 class for React Components
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
   */
  'react/prefer-es6-class': 'off',

  /**
   * Prefer exact proptype definitions
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
   */
  'react/prefer-exact-props': 'off',

  /**
   * Enforce that props are read-only
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
   */
  'react/prefer-read-only-props': 'off',

  /**
   * Enforce stateless components to be written as a pure function
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
   */
  'react/prefer-stateless-function': 'off',

  /**
   * Disallow missing props validation in a React component definition
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
   */
  'react/prop-types': 'off',

  /**
   * Disallow missing React when using JSX
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
   */
  'react/react-in-jsx-scope': 'off',

  /**
   * Enforce a defaultProps definition for every prop that is not a required prop
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
   */
  'react/require-default-props': 'off',

  /**
   * Enforce React components to have a shouldComponentUpdate method
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
   */
  'react/require-optimization': 'off',

  /**
   * Enforce ES5 or ES6 class for returning value in render function
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
   */
  'react/require-render-return': 'off',

  /**
   * Disallow extra closing tags for components without children
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
   */
  'react/self-closing-comp': 'off',

  /**
   * Enforce component methods order
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
   */
  'react/sort-comp': 'off',

  /**
   * Enforce defaultProps declarations alphabetical sorting
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md
   */
  'react/sort-default-props': 'off',

  /**
   * Enforce propTypes declarations alphabetical sorting
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
   */
  'react/sort-prop-types': 'off',

  /**
   * Enforce class component state initialization style
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
   */
  'react/state-in-constructor': 'off',

  /**
   * Enforces where React component static properties should be positioned.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
   */
  'react/static-property-placement': 'off',

  /**
   * Enforce style prop value is an object
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
   */
  'react/style-prop-object': 'off',

  /**
   * Disallow void DOM elements (e.g. <img />, <br />) from receiving children
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
   */
  'react/void-dom-elements-no-children': 'off',
};
