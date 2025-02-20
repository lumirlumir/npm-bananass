module.exports = {
  /**
   * Enforce all elements that require alternative text have meaningful information to relay back to end user.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
   */
  'jsx-a11y/alt-text': '',

  /**
   * Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-ambiguous-text.md
   */
  'jsx-a11y/anchor-ambiguous-text': '',

  /**
   * Enforce all anchors to contain accessible content.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md
   */
  'jsx-a11y/anchor-has-content': '',

  /**
   * Enforce all anchors are valid, navigable elements.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
   */
  'jsx-a11y/anchor-is-valid': '',

  /**
   * Enforce elements with aria-activedescendant are tabbable.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
   */
  'jsx-a11y/aria-activedescendant-has-tabindex': '',

  /**
   * Enforce all `aria-*` props are valid.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md
   */
  'jsx-a11y/aria-props': '',

  /**
   * Enforce ARIA state and property values are valid.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md
   */
  'jsx-a11y/aria-proptypes': '',

  /**
   * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
   */
  'jsx-a11y/aria-role': '',

  /**
   * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md
   */
  'jsx-a11y/aria-unsupported-elements': '',

  /**
   * Enforce that autocomplete attributes are used correctly.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/autocomplete-valid.md
   */
  'jsx-a11y/autocomplete-valid': '',

  /**
   * Enforce a clickable non-interactive element has at least one keyboard event listener.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
   */
  'jsx-a11y/click-events-have-key-events': '',

  /**
   * Enforce that a control (an interactive element) has a text label.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md
   */
  'jsx-a11y/control-has-associated-label': '',

  /**
   * Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md
   */
  'jsx-a11y/heading-has-content': '',

  /**
   * Enforce <html> element has lang prop.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md
   */
  'jsx-a11y/html-has-lang': '',

  /**
   * Enforce iframe elements have a title attribute.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md
   */
  'jsx-a11y/iframe-has-title': '',

  /**
   * Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
   */
  'jsx-a11y/img-redundant-alt': '',

  /**
   * Enforce that elements with interactive handlers like `onClick` must be focusable.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md
   */
  'jsx-a11y/interactive-supports-focus': '',

  /**
   * Enforce that a `label` tag has a text label and an associated control.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
   */
  'jsx-a11y/label-has-associated-control': '',

  /**
   * Enforce `lang` attribute has a valid value.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/lang.md
   */
  'jsx-a11y/lang': '',

  /**
   * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md
   */
  'jsx-a11y/media-has-caption': '',

  /**
   * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md
   */
  'jsx-a11y/mouse-events-have-key-events': '',

  /**
   * Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screen reader.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
   */
  'jsx-a11y/no-access-key': '',

  /**
   * Disallow `aria-hidden="true"` from being set on focusable elements.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-aria-hidden-on-focusable.md
   */
  'jsx-a11y/no-aria-hidden-on-focusable': '',

  /**
   * Enforce autoFocus prop is not enabled.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md
   */
  'jsx-a11y/no-autofocus': '',

  /**
   * Enforce distracting elements are not used.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md
   */
  'jsx-a11y/no-distracting-elements': '',

  /**
   * Interactive elements should not be assigned non-interactive roles.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md
   */
  'jsx-a11y/no-interactive-element-to-noninteractive-role': '',

  /**
   * Non-interactive elements should not be assigned mouse or keyboard event listeners.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md
   */
  'jsx-a11y/no-noninteractive-element-interactions': '',

  /**
   * Non-interactive elements should not be assigned interactive roles.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
   */
  'jsx-a11y/no-noninteractive-element-to-interactive-role': '',

  /**
   * `tabIndex` should only be declared on interactive elements.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md
   */
  'jsx-a11y/no-noninteractive-tabindex': '',

  /**
   * Enforce explicit role property is not the same as implicit/default role property on element.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md
   */
  'jsx-a11y/no-redundant-roles': '',

  /**
   * Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md
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
   */
  'jsx-a11y/role-has-required-aria-props': '',

  /**
   * Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md
   */
  'jsx-a11y/role-supports-aria-props': '',

  /**
   * Enforce `scope` prop is only used on `<th>` elements.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md
   */
  'jsx-a11y/scope': '',

  /**
   * Enforce `tabIndex` value is not greater than zero.
   *
   * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md
   */
  'jsx-a11y/tabindex-no-positive': '',
};
