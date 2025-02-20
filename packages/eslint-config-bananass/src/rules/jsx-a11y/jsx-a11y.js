/**
 * Airbnb + recommended
 *
 * I've set almost every `'error'` rules to `'warn'` because I don't want to enforce them.
 */

module.exports = {
  /**
   * Enforce all elements that require alternative text have meaningful information to relay back to end user.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L21-L27
   */
  'jsx-a11y/alt-text': 'warn',

  /**
   * Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".
   *
   * @description This rule is not included in `airbnb-base`.
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-ambiguous-text.md
   */
  'jsx-a11y/anchor-ambiguous-text': 'off',

  /**
   * Enforce all anchors to contain accessible content.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L31
   */
  'jsx-a11y/anchor-has-content': 'warn',

  /**
   * Enforce all anchors are valid, navigable elements.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L35-L39
   */
  'jsx-a11y/anchor-is-valid': [
    'warn',
    {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    },
  ],

  /**
   * Enforce elements with `aria-activedescendant` are tabbable.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L43
   */
  'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',

  /**
   * Enforce all `aria-*` props are valid.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L47
   */
  'jsx-a11y/aria-props': 'error',

  /**
   * Enforce ARIA state and property values are valid.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L51
   */
  'jsx-a11y/aria-proptypes': 'error',

  /**
   * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L55
   */
  'jsx-a11y/aria-role': ['error', { ignoreNonDOM: false }],

  /**
   * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L60
   */
  'jsx-a11y/aria-unsupported-elements': 'error',

  /**
   * Enforce that autocomplete attributes are used correctly.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/autocomplete-valid.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L64-L66
   */
  'jsx-a11y/autocomplete-valid': 'off',

  /**
   * Enforce a clickable non-interactive element has at least one keyboard event listener.
   *
   * @description I've set this rule to `'off'`.
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L70
   */
  'jsx-a11y/click-events-have-key-events': 'off',

  /**
   * Enforce that a control (an interactive element) has a text label.
   *
   * @description I've set this rule to `'off'`.
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L74-L99
   */
  'jsx-a11y/control-has-associated-label': 'off',

  /**
   * Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L103
   */
  'jsx-a11y/heading-has-content': 'error',

  /**
   * Enforce `<html>` element has lang prop.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L107
   */
  'jsx-a11y/html-has-lang': 'warn',

  /**
   * Enforce iframe elements have a title attribute.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L111
   */
  'jsx-a11y/iframe-has-title': 'warn',

  /**
   * Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L115
   */
  'jsx-a11y/img-redundant-alt': 'warn',

  /**
   * Enforce that elements with interactive handlers like `onClick` must be focusable.
   *
   * @description I've set this rule to `'off'`.
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L119
   */
  'jsx-a11y/interactive-supports-focus': 'off',

  /**
   * Enforce that a `label` tag has a text label and an associated control.
   *
   * @description I've set this rule to `'off'`.
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L123-L129
   */
  'jsx-a11y/label-has-associated-control': 'off',

  /**
   * Enforce `lang` attribute has a valid value.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/lang.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L133
   */
  'jsx-a11y/lang': 'error',

  /**
   * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L137-L141
   */
  'jsx-a11y/media-has-caption': 'warn',

  /**
   * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L145
   */
  'jsx-a11y/mouse-events-have-key-events': '',

  /**
   * Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screen reader.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L149
   */
  'jsx-a11y/no-access-key': '',

  /**
   * Disallow `aria-hidden="true"` from being set on focusable elements.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-aria-hidden-on-focusable.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L153
   */
  'jsx-a11y/no-aria-hidden-on-focusable': '',

  /**
   * Enforce autoFocus prop is not enabled.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L153
   */
  'jsx-a11y/no-autofocus': '',

  /**
   * Enforce distracting elements are not used.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L157-L159
   */
  'jsx-a11y/no-distracting-elements': '',

  /**
   * Interactive elements should not be assigned non-interactive roles.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L163-L165
   */
  'jsx-a11y/no-interactive-element-to-noninteractive-role': '',

  /**
   * Non-interactive elements should not be assigned mouse or keyboard event listeners.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L169-L178
   */
  'jsx-a11y/no-noninteractive-element-interactions': '',

  /**
   * Non-interactive elements should not be assigned interactive roles.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L182-L188
   */
  'jsx-a11y/no-noninteractive-element-to-interactive-role': '',

  /**
   * `tabIndex` should only be declared on interactive elements.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L192-L195
   */
  'jsx-a11y/no-noninteractive-tabindex': '',

  /**
   * Enforce explicit role property is not the same as implicit/default role property on element.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L203
   */
  'jsx-a11y/no-redundant-roles': '',

  /**
   * Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L207-L216
   */
  'jsx-a11y/no-static-element-interactions': '',

  /**
   * Enforces using semantic DOM elements over the ARIA `role` property.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/prefer-tag-over-role.md
   */
  'jsx-a11y/prefer-tag-over-role': '',

  /**
   * Enforce that elements with ARIA roles must have all required attributes for that role.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L221
   */
  'jsx-a11y/role-has-required-aria-props': '',

  /**
   * Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L226
   */
  'jsx-a11y/role-supports-aria-props': '',

  /**
   * Enforce `scope` prop is only used on `<th>` elements.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L230
   */
  'jsx-a11y/scope': '',

  /**
   * Enforce `tabIndex` value is not greater than zero.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md
   * @link https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb/rules/react-a11y.js#L234
   */
  'jsx-a11y/tabindex-no-positive': '',
};
