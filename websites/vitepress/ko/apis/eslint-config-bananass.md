# `eslint-config-bananass` {#eslint-config-bananass}

<!-- @include: @/shared/wip.ko.md -->

코딩 테스트 관련 해서 자주 쓰이는 문법에 대한 규칙은 해제.

`airbnb-base` 보다 훨씬 느슨하다.

## 설정 방법 {#configurations}

```js
import bananass from 'eslint-config-bananass';

export default [
  bananass.configs.js
];
```

---

<!-- eslint-disable mark/heading-id, mark/no-emoji -- TODO: Remove it later -->

## 참고 문서

- `eslint-config-prettier`가 필요 없습니다. prettier 관련 스타일 옵션들은 `eslint@9`로 넘어오면서 대부분 비활성화 되었고, 남아 있는 일부 옵션들도 개별적으로 모두 제거 해두었기 때문에, `create-bananass-app`을 통한 옵션에서는 Prettier와 ESLint의 충돌이 발생하지 않습니다.

## 참고한 ESLint 외부 플러그인 또는 설정 파일들

- `eslint-config-prettier`
  - 코드: <https://github.com/prettier/eslint-config-prettier/blob/main/index.js>
  - 리포지토리: <https://github.com/prettier/eslint-config-prettier>

- `eslint-plugin-n`
  - 코드: <https://github.com/eslint-community/eslint-plugin-n/blob/master/lib/index.js>
  - 리포지토리: <https://github.com/eslint-community/eslint-plugin-n>

- `eslint-plugin-import`
  - 코드: <https://github.com/import-js/eslint-plugin-import/blob/main/src/index.js>
  - 리포지토리: <https://github.com/import-js/eslint-plugin-import>

- `@stylistic/eslint-plugin-js`
  - 코드: <https://github.com/eslint-stylistic/eslint-stylistic/tree/main/packages/eslint-plugin-js>
  - 리포지토리: <https://github.com/eslint-stylistic/eslint-stylistic>
  - 문서: <https://eslint.style>

## `eslint@8`에서 `eslint@9`로 넘어가며 이동한 규칙들

> (`airbnb-base`에는 포함되어 있지만, `eslint-config-bananass`에서는 비활성화된 규칙들.)

### to [`@stylistic/eslint-plugin-js`](https://github.com/eslint-stylistic/eslint-stylistic)

모든 규칙이 Prettier와 충돌을 일으킵니다.

스타일관련 규칙들은 ESLint가 아닌, Prettier가 관리하도록 하는게 좋다는 입장이라, 아래 규칙들은 모두 추가하지 않았습니다.

물론, Prettier를 사용하지 않는 분들을 위해 아래 규칙들을 모두 켜두고 `eslint-config-prettier`를 통해 해당 규칙들을 모두 비활성화하는 방법도 있지만, 이렇게 하면 너무 비효율적이라 해당 방식으로는 진행하지 않았습니다.

따라서, 스타일 포맷팅을 진행하고 싶으시다면 Prettier를 이용해 주세요.

1. [`dot-location`](https://eslint.org/docs/latest/rules/dot-location) ❌
    - airbnb-base: `['error', 'property']`
    - airbnb-base file: `best-practices.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L158) ❌

1. [`no-floating-decimal`](https://eslint.org/docs/latest/rules/no-floating-decimal) ❌
    - airbnb-base: `'error'`
    - airbnb-base file: `best-practices.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L179) ❌

1. [`no-multi-spaces`](https://eslint.org/docs/latest/rules/no-multi-spaces) ❌
    - airbnb-base: `['error', { ignoreEOLComments: false }]`
    - airbnb-base file: `best-practices.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L182) ❌

1. [`wrap-iife`](https://eslint.org/docs/latest/rules/wrap-iife) ❌
    - airbnb-base: `['error', 'outside', { functionPrototypeMethods: false }]`
    - airbnb-base file: `best-practices.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L208) ❌

1. [`no-extra-parens`](https://eslint.org/docs/latest/rules/no-extra-parens) ❌
    - airbnb-base: `['off', 'all', { conditionalAssign: true, nestedBinaryExpressions: false, returnAssign: false, ignoreJSX: 'all', enforceForArrowConditionals: false }]`
    - airbnb-base file: `errors.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L177) ❌

1. [`no-extra-semi`](https://eslint.org/docs/latest/rules/no-extra-semi) ❌
    - airbnb-base: `'error'`
    - airbnb-base file: `errors.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L178) ❌

1. [`arrow-parens`](https://eslint.org/docs/latest/rules/arrow-parens) ❌
    - airbnb-base: `['error', 'always']`
    - airbnb-base file: `es6.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L150) ❌

1. [`arrow-spacing`](https://eslint.org/docs/latest/rules/arrow-spacing) ❌
    - airbnb-base: `['error', { before: true, after: true }]`
    - airbnb-base file: `es6.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L151) ❌

1. [`generator-star-spacing`](https://eslint.org/docs/latest/rules/generator-star-spacing) ❌
    - airbnb-base: `['error', { before: false, after: true }]`
    - airbnb-base file: `es6.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L163) ❌

1. [`no-confusing-arrow`](https://eslint.org/docs/latest/rules/no-confusing-arrow) ❌
    - airbnb-base: `['error', { allowParens: true }]`
    - airbnb-base file: `es6.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L176) ❌

1. [`rest-spread-spacing`](https://eslint.org/docs/latest/rules/rest-spread-spacing) ❌
    - airbnb-base: `['error', 'never']`
    - airbnb-base file: `es6.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L196) ❌

1. [`template-curly-spacing`](https://eslint.org/docs/latest/rules/template-curly-spacing) ❌
    - airbnb-base: `'error'`
    - airbnb-base file: `es6.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L206) ❌

1. [`yield-star-spacing`](https://eslint.org/docs/latest/rules/yield-star-spacing) ❌
    - airbnb-base: `['error', 'after']`
    - airbnb-base file: `es6.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L210) ❌

1. [`array-bracket-newline`](https://eslint.org/docs/latest/rules/array-bracket-newline) ❌
    - airbnb-base: `['off', 'consistent']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L147) ❌

1. [`array-element-newline`](https://eslint.org/docs/latest/rules/array-element-newline) ❌
    - airbnb-base: `['off', { multiline: true, minItems: 3 }]`
    - airbnb-base file: `style.js` ❌
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L149) ❌

1. [`array-bracket-spacing`](https://eslint.org/docs/latest/rules/array-bracket-spacing) ❌
    - airbnb-base: `['error', 'never']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L148) ❌

1. [`block-spacing`](https://eslint.org/docs/latest/rules/block-spacing) ❌
    - airbnb-base: `['error', 'always']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L152) ❌

1. [`brace-style`](https://eslint.org/docs/latest/rules/brace-style) ❌
    - airbnb-base: `['error', '1tbs', { allowSingleLine: true }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L153) ❌

1. [`comma-dangle`](https://eslint.org/docs/latest/rules/comma-dangle) ❌
    - airbnb-base: `['error', { arrays: 'always-multiline', objects: 'always-multiline', imports: 'always-multiline', exports: 'always-multiline', functions: 'always-multiline' }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L154) ❌

1. [`comma-spacing`](https://eslint.org/docs/latest/rules/comma-spacing) ❌
    - airbnb-base: `['error', { before: false, after: true }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L155) ❌

1. [`comma-style`](https://eslint.org/docs/latest/rules/comma-style) ❌
    - airbnb-base: `['error', 'last', { exceptions: { ArrayExpression: false, ArrayPattern: false, ArrowFunctionExpression: false, CallExpression: false, FunctionDeclaration: false, FunctionExpression: false, ImportDeclaration: false, ObjectExpression: false, ObjectPattern: false, VariableDeclaration: false, NewExpression: false } }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L156) ❌

1. [`computed-property-spacing`](https://eslint.org/docs/latest/rules/computed-property-spacing) ❌
    - airbnb-base: `['error', 'never']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L157) ❌

1. [`eol-last`](https://eslint.org/docs/latest/rules/eol-last) ❌
    - airbnb-base: `['error', 'always']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L159) ❌

1. [`function-call-argument-newline`](https://eslint.org/docs/latest/rules/function-call-argument-newline) ❌
    - airbnb-base: `['error', 'consistent']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L161) ❌

1. [`func-call-spacing`](https://eslint.org/docs/latest/rules/func-call-spacing) ❌
    - airbnb-base: `['error', 'never']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L160) ❌

1. [`function-paren-newline`](https://eslint.org/docs/latest/rules/function-paren-newline) ❌
    - airbnb-base: `['error', 'multiline-arguments']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L162) ❌

1. [`implicit-arrow-linebreak`](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak) ❌
    - airbnb-base: `['error', 'beside']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L164) ❌

1. [`indent`](https://eslint.org/docs/latest/rules/indent) ❌
    - airbnb-base: `['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1, FunctionDeclaration: { parameters: 1, body: 1 }, FunctionExpression: { parameters: 1, body: 1 }, CallExpression: { arguments: 1 }, ArrayExpression: 1, ObjectExpression: 1, ImportDeclaration: 1, flatTernaryExpressions: false, ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'], ignoreComments: false }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L165) ❌

1. [`jsx-quotes`](https://eslint.org/docs/latest/rules/jsx-quotes) ❌
    - airbnb-base: `['off', 'prefer-double']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L166) ❌

1. [`key-spacing`](https://eslint.org/docs/latest/rules/key-spacing) ❌
    - airbnb-base: `['error', { beforeColon: false, afterColon: true }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L167) ❌

1. [`keyword-spacing`](https://eslint.org/docs/latest/rules/keyword-spacing) ❌
    - airbnb-base: `['error', { before: true, after: true, overrides: { return: { after: true }, throw: { after: true }, case: { after: true } } }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L168) ❌

1. [`line-comment-position`](https://eslint.org/docs/latest/rules/line-comment-position) ❌
    - airbnb-base: `['off', { position: 'above', ignorePattern: '', applyDefaultPatterns: true }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: Not metioned.

1. [`linebreak-style`](https://eslint.org/docs/latest/rules/linebreak-style) ❌
    - airbnb-base: `['error', 'unix']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L169) ❌

1. [`lines-between-class-members`](https://eslint.org/docs/latest/rules/lines-between-class-members) ✅
    - airbnb-base: `['error', 'always', { exceptAfterSingleLine: false }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: Not metioned.

1. [`lines-around-comment`](https://eslint.org/docs/latest/rules/lines-around-comment) ❌
    - airbnb-base: `'off'`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L170) ❌

1. [`max-len`](https://eslint.org/docs/latest/rules/max-len) ❌
    - airbnb-base: `['error', 100, 2, { ignoreUrls: true, ignoreComments: false, ignoreRegExpLiterals: true, ignoreStrings: true, ignoreTemplateLiterals: true }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L171) ❌

1. [`max-statements-per-line`](https://eslint.org/docs/latest/rules/max-statements-per-line) ❌
    - airbnb-base: `['off', { max: 1 }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L172) ❌

1. [`multiline-comment-style`](https://eslint.org/docs/latest/rules/multiline-comment-style) ❌
    - airbnb-base: `['off', 'starred-block']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: Not metioned.

1. [`multiline-ternary`](https://eslint.org/docs/latest/rules/multiline-ternary) ❌
    - airbnb-base: `['off', 'never']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L173) ❌

1. [`new-parens`](https://eslint.org/docs/latest/rules/new-parens) ❌
    - airbnb-base: `'error'`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L174) ❌

1. [`newline-per-chained-call`](https://eslint.org/docs/latest/rules/newline-per-chained-call) ❌
    - airbnb-base: `['error', { ignoreChainWithDepth: 4 }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L175) ❌

1. [`no-mixed-operators`](https://eslint.org/docs/latest/rules/no-mixed-operators) ❌
    - airbnb-base: `['error', { groups: [['%', '**'], ['%', '+'], ['%', '-'], ['%', '*'], ['%', '/'], ['/', '*'], ['&', '|', '<<', '>>', '>>>'], ['==', '!=', '===', '!=='], ['&&', '||']], allowSamePrecedence: false }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L180) ❌

1. [`no-mixed-spaces-and-tabs`](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs) ❌
    - airbnb-base: `'error'`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L181) ❌

1. [`no-multiple-empty-lines`](https://eslint.org/docs/latest/rules/no-multiple-empty-lines) ❌
    - airbnb-base: `['error', { max: 1, maxBOF: 0, maxEOF: 0 }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L183) ❌

1. [`no-tabs`](https://eslint.org/docs/latest/rules/no-tabs) ❌
    - airbnb-base: `'error'`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L184) ❌

1. [`no-trailing-spaces`](https://eslint.org/docs/latest/rules/no-trailing-spaces) ❌
    - airbnb-base: `['error', { skipBlankLines: false, ignoreComments: false }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L185) ❌

1. [`no-whitespace-before-property`](https://eslint.org/docs/latest/rules/no-whitespace-before-property) ❌
    - airbnb-base: `'error'`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L186) ❌

1. [`nonblock-statement-body-position`](https://eslint.org/docs/latest/rules/nonblock-statement-body-position) ❌
    - airbnb-base: `['error', 'beside', { overrides: {} }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L187) ❌

1. [`object-curly-spacing`](https://eslint.org/docs/latest/rules/object-curly-spacing) ❌
    - airbnb-base: `['error', 'always']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L189) ❌

1. [`object-curly-newline`](https://eslint.org/docs/latest/rules/object-curly-newline) ❌
    - airbnb-base: `['error', { ObjectExpression: { minProperties: 4, multiline: true, consistent: true }, ObjectPattern: { minProperties: 4, multiline: true, consistent: true }, ImportDeclaration: { minProperties: 4, multiline: true, consistent: true }, ExportDeclaration: { minProperties: 4, multiline: true, consistent: true } }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L188) ❌

1. [`object-property-newline`](https://eslint.org/docs/latest/rules/object-property-newline) ❌
    - airbnb-base: `['error', { allowAllPropertiesOnSameLine: true }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L190) ❌

1. [`one-var-declaration-per-line`](https://eslint.org/docs/latest/rules/one-var-declaration-per-line) ❌
    - airbnb-base: `['error', 'always']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L191) ❌

1. [`operator-linebreak`](https://eslint.org/docs/latest/rules/operator-linebreak) ❌
    - airbnb-base: `['error', 'before', { overrides: { '=': 'none' } }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L192) ❌

1. [`padded-blocks`](https://eslint.org/docs/latest/rules/padded-blocks) ❌
    - airbnb-base: `['error', { blocks: 'never', classes: 'never', switches: 'never' }, { allowSingleLineBlocks: true }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L193) ❌

1. [`padding-line-between-statements`](https://eslint.org/docs/latest/rules/padding-line-between-statements) ❌
    - airbnb-base: `'off'`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: Not metioned.

1. [`quote-props`](https://eslint.org/docs/latest/rules/quote-props) ❌
    - airbnb-base: `['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L194) ❌

1. [`quotes`](https://eslint.org/docs/latest/rules/quotes) ❌
    - airbnb-base: `['error', 'single', { avoidEscape: true }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L195) ❌

1. [`semi`](https://eslint.org/docs/latest/rules/semi) ❌
    - airbnb-base: `['error', 'always']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L197) ❌

1. [`semi-spacing`](https://eslint.org/docs/latest/rules/semi-spacing) ❌
    - airbnb-base: `['error', { before: false, after: true }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L198) ❌

1. [`semi-style`](https://eslint.org/docs/latest/rules/semi-style) ❌
    - airbnb-base: `['error', 'last']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L199) ❌

1. [`space-before-blocks`](https://eslint.org/docs/latest/rules/space-before-blocks) ❌
    - airbnb-base: `'error'`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L200) ❌

1. [`space-before-function-paren`](https://eslint.org/docs/latest/rules/space-before-function-paren) ❌
    - airbnb-base: `['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L201) ❌

1. [`space-in-parens`](https://eslint.org/docs/latest/rules/space-in-parens) ❌
    - airbnb-base: `['error', 'never']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L202) ❌

1. [`space-infix-ops`](https://eslint.org/docs/latest/rules/space-infix-ops) ❌
    - airbnb-base: `'error'`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L203) ❌

1. [`space-unary-ops`](https://eslint.org/docs/latest/rules/space-unary-ops) ❌
    - airbnb-base: `['error', { words: true, nonwords: false, overrides: {} }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L204) ❌

1. [`spaced-comment`](https://eslint.org/docs/latest/rules/spaced-comment) ✅
    - airbnb-base: `['error', 'always', { line: { exceptions: ['-', '+'], markers: ['=', '!', '/'] }, block: { exceptions: ['-', '+'], markers: ['=', '!', ':', '::'], balanced: true } }]`
    - airbnb-base file: `style.js`

1. [`switch-colon-spacing`](https://eslint.org/docs/latest/rules/switch-colon-spacing) ❌
    - airbnb-base: `['error', { after: true, before: false }]`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L205) ❌

1. [`template-tag-spacing`](https://eslint.org/docs/latest/rules/template-tag-spacing) ❌
    - airbnb-base: `['error', 'never']`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L207) ❌

1. [`wrap-regex`](https://eslint.org/docs/latest/rules/wrap-regex) ❌
    - airbnb-base: `'off'`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L209) ❌

1. [`no-spaced-func`(`func-call-spacing`)](https://eslint.org/docs/latest/rules/no-spaced-func) ❌
    - airbnb-base: `'error'`
    - airbnb-base file: `style.js`
    - eslint-config-prettier: [`'off'`](https://github.com/prettier/eslint-config-prettier/blob/v9.1.0/index.js#L139) ❌

### to [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc) ❌

1. [`valid-jsdoc`](https://eslint.org/docs/latest/rules/valid-jsdoc) ❌
    - airbnb-base: `'off'`
    - airbnb-base file: `errors.js`

1. [`require-jsdoc`](https://eslint.org/docs/latest/rules/require-jsdoc) ❌
    - airbnb-base: `'off'`
    - airbnb-base file: `style.js`

### to [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n)

1. [`callback-return`](https://eslint.org/docs/latest/rules/callback-return) ❌
    - airbnb-base: `'off'`
    - airbnb-base file: `node.js`

1. [`global-require`](https://eslint.org/docs/latest/rules/global-require) ✅
    - airbnb-base: `'error'`
    - airbnb-base file: `node.js`

1. [`handle-callback-err`](https://eslint.org/docs/latest/rules/handle-callback-err) ❌
    - airbnb-base: `'off'`
    - airbnb-base file: `node.js`

1. [`no-buffer-constructor`](https://eslint.org/docs/latest/rules/no-buffer-constructor) ❌
    - airbnb-base: `'error'`
    - airbnb-base file: `node.js`
    - eslint-plugin-n 상에 해당 규칙이 존재하지 않음.

1. [`no-mixed-requires`](https://eslint.org/docs/latest/rules/no-mixed-requires) ❌
    - airbnb-base: `['off', false]`
    - airbnb-base file: `node.js`

1. [`no-new-require`](https://eslint.org/docs/latest/rules/no-new-require) ✅
    - airbnb-base: `'error'`
    - airbnb-base file: `node.js`

1. [`no-path-concat`](https://eslint.org/docs/latest/rules/no-path-concat) ✅
    - airbnb-base: `'error'`
    - airbnb-base file: `node.js`

1. [`no-process-env`](https://eslint.org/docs/latest/rules/no-process-env) ❌
    - airbnb-base: `'off'`
    - airbnb-base file: `node.js`

1. [`no-process-exit`](https://eslint.org/docs/latest/rules/no-process-exit) ❌
    - airbnb-base: `'off'`
    - airbnb-base file: `node.js`

1. [`no-restricted-modules`](https://eslint.org/docs/latest/rules/no-restricted-modules) ❌
    - airbnb-base: `'off'`
    - airbnb-base file: `node.js`

1. [`no-sync`](https://eslint.org/docs/latest/rules/no-sync) ❌
    - airbnb-base: `'off'`
    - airbnb-base file: `node.js`

1. [`newline-before-return`(`padding-line-between-statements`)](https://eslint.org/docs/latest/rules/newline-before-return) ❌
    - airbnb-base: `'off'`
    - airbnb-base file: `style.js`

1. [`newline-after-var`(`padding-line-between-statements`)](https://eslint.org/docs/latest/rules/newline-after-var) ❌
    - airbnb-base: `'off'`
    - airbnb-base file: `style.js`

1. [`lines-around-directive`(`padding-line-between-statements`)](https://eslint.org/docs/latest/rules/lines-around-directive) ❌
    - airbnb-base: `['error', { before: 'always', after: 'always' }]`
    - airbnb-base file: `style.js`
    - stylistic/js에서 off 되어있음.

### Deprecated and replaced by another ESLint rule ✅

1. [`no-native-reassign`](https://eslint.org/docs/latest/rules/no-native-reassign) ✅
    - airbnb-base: `'off'`
    - airbnb-base file: `best-practices.js`
    - Replaced by [`no-global-assign`](https://eslint.org/docs/latest/rules/no-global-assign)

1. [`no-negated-in-lhs`](https://eslint.org/docs/latest/rules/no-negated-in-lhs) ✅
    - airbnb-base: `'off'`
    - airbnb-base file: `errors.js`
    - Replaced by [`no-unsafe-negation`](https://eslint.org/docs/latest/rules/no-unsafe-negation)

1. [`no-new-symbol`](https://eslint.org/docs/latest/rules/no-new-symbol) ✅
    - airbnb-base: `'error'`
    - airbnb-base file: `es6.js`
    - Replaced by [`no-new-native-nonconstructor`](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor)

1. [`no-new-object`](https://eslint.org/docs/latest/rules/no-new-object) ✅
    - airbnb-base: `'error'`
    - airbnb-base file: `style.js`
    - Replaced by [`no-object-constructor`](https://eslint.org/docs/latest/rules/no-object-constructor)

### Only Deprecated ❌

1. [`no-return-await`](https://eslint.org/docs/latest/rules/no-return-await) ❌
    - airbnb-base: `'error'`
    - airbnb-base file: `best-practices.js`

1. [`prefer-reflect`](https://eslint.org/docs/latest/rules/prefer-reflect) ❌
    - airbnb-base: `'off'`
    - airbnb-base file: `es6.js`

1. [`no-catch-shadow`](https://eslint.org/docs/latest/rules/no-catch-shadow) ❌
    - airbnb-base: `'off'`
    - airbnb-base file: `variables.js`
