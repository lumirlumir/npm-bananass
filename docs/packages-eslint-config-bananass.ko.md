# eslint-config-bananass

- `eslint-config-prettier`가 필요 없습니다. prettier 관련 스타일 옵션들은 `eslint@9`로 넘어오면서 대부분 비활성화 되었고, 남아 있는 일부 옵션들도 개별적으로 모두 제거 해두었기 때문에, `create-bananass-app`을 통한 옵션에서는 Prettier와 ESLint의 충돌이 발생하지 않습니다.

## `eslint@8`에서 `eslint@9`로 넘어가며 이동한 규칙들

### to [`@stylistic/eslint-plugin-js`](https://github.com/eslint-stylistic/eslint-stylistic)

1. [`dot-location`](https://eslint.org/docs/latest/rules/dot-location)
    - airbnb-base: `['error', 'property']`
    - airbnb-base file: `best-practices.js`

1. [`no-floating-decimal`](https://eslint.org/docs/latest/rules/no-floating-decimal)
    - airbnb-base: `'error'`
    - airbnb-base file: `best-practices.js`

1. [`no-multi-spaces`](https://eslint.org/docs/latest/rules/no-multi-spaces)
    - airbnb-base: `['error', { ignoreEOLComments: false }]`
    - airbnb-base file: `best-practices.js`

1. [`wrap-iife`](https://eslint.org/docs/latest/rules/wrap-iife)
    - airbnb-base: `['error', 'outside', { functionPrototypeMethods: false }]`
    - airbnb-base file: `best-practices.js`

1. [`no-extra-parens`](https://eslint.org/docs/latest/rules/no-extra-parens)
    - airbnb-base: `['off', 'all', { conditionalAssign: true, nestedBinaryExpressions: false, returnAssign: false, ignoreJSX: 'all', enforceForArrowConditionals: false }]`
    - airbnb-base file: `errors.js`

1. [`no-extra-semi`](https://eslint.org/docs/latest/rules/no-extra-semi)
    - airbnb-base: `'error'`
    - airbnb-base file: `errors.js`

1. [`arrow-parens`](https://eslint.org/docs/latest/rules/arrow-parens)
    - airbnb-base: `['error', 'always']`
    - airbnb-base file: `es6.js`

1. [`arrow-spacing`](https://eslint.org/docs/latest/rules/arrow-spacing)
    - airbnb-base: `['error', { before: true, after: true }]`
    - airbnb-base file: `es6.js`

1. [`generator-star-spacing`](https://eslint.org/docs/latest/rules/generator-star-spacing)
    - airbnb-base: `['error', { before: false, after: true }]`
    - airbnb-base file: `es6.js`

1. [`no-confusing-arrow`](https://eslint.org/docs/latest/rules/no-confusing-arrow)
    - airbnb-base: `['error', { allowParens: true }]`
    - airbnb-base file: `es6.js`

1. [`rest-spread-spacing`](https://eslint.org/docs/latest/rules/rest-spread-spacing)
    - airbnb-base: `['error', 'never']`
    - airbnb-base file: `es6.js`

1. [`template-curly-spacing`](https://eslint.org/docs/latest/rules/template-curly-spacing)
    - airbnb-base: `'error'`
    - airbnb-base file: `es6.js`

1. [`yield-star-spacing`](https://eslint.org/docs/latest/rules/yield-star-spacing)
    - airbnb-base: `['error', 'after']`
    - airbnb-base file: `es6.js`

1. [`array-bracket-newline`](https://eslint.org/docs/latest/rules/array-bracket-newline)
    - airbnb-base: `['off', 'consistent']`
    - airbnb-base file: `style.js`

1. [`array-element-newline`](https://eslint.org/docs/latest/rules/array-element-newline)
    - airbnb-base: `['off', { multiline: true, minItems: 3 }]`
    - airbnb-base file: `style.js`

1. [`array-bracket-spacing`](https://eslint.org/docs/latest/rules/array-bracket-spacing)
    - airbnb-base: `['error', 'never']`
    - airbnb-base file: `style.js`

1. [`block-spacing`](https://eslint.org/docs/latest/rules/block-spacing)
    - airbnb-base: `['error', 'always']`
    - airbnb-base file: `style.js`

1. [`brace-style`](https://eslint.org/docs/latest/rules/brace-style)
    - airbnb-base: `['error', '1tbs', { allowSingleLine: true }]`
    - airbnb-base file: `style.js`

1. [`comma-dangle`](https://eslint.org/docs/latest/rules/comma-dangle)
    - airbnb-base: `['error', { arrays: 'always-multiline', objects: 'always-multiline', imports: 'always-multiline', exports: 'always-multiline', functions: 'always-multiline' }]`
    - airbnb-base file: `style.js`

1. [`comma-spacing`](https://eslint.org/docs/latest/rules/comma-spacing)
    - airbnb-base: `['error', { before: false, after: true }]`
    - airbnb-base file: `style.js`

1. [`comma-style`](https://eslint.org/docs/latest/rules/comma-style)
    - airbnb-base: `['error', 'last', { exceptions: { ArrayExpression: false, ArrayPattern: false, ArrowFunctionExpression: false, CallExpression: false, FunctionDeclaration: false, FunctionExpression: false, ImportDeclaration: false, ObjectExpression: false, ObjectPattern: false, VariableDeclaration: false, NewExpression: false } }]`
    - airbnb-base file: `style.js`

1. [`computed-property-spacing`](https://eslint.org/docs/latest/rules/computed-property-spacing)
    - airbnb-base: `['error', 'never']`
    - airbnb-base file: `style.js`

1. [`eol-last`](https://eslint.org/docs/latest/rules/eol-last)
    - airbnb-base: `['error', 'always']`
    - airbnb-base file: `style.js`

1. [`function-call-argument-newline`](https://eslint.org/docs/latest/rules/function-call-argument-newline)
    - airbnb-base: `['error', 'consistent']`
    - airbnb-base file: `style.js`

1. [`func-call-spacing`](https://eslint.org/docs/latest/rules/func-call-spacing)
    - airbnb-base: `['error', 'never']`
    - airbnb-base file: `style.js`

1. [`function-paren-newline`](https://eslint.org/docs/latest/rules/function-paren-newline)
    - airbnb-base: `['error', 'multiline-arguments']`
    - airbnb-base file: `style.js`

1. [`implicit-arrow-linebreak`](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak)
    - airbnb-base: `['error', 'beside']`
    - airbnb-base file: `style.js`

1. [`indent`](https://eslint.org/docs/latest/rules/indent)
    - airbnb-base: `['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1, FunctionDeclaration: { parameters: 1, body: 1 }, FunctionExpression: { parameters: 1, body: 1 }, CallExpression: { arguments: 1 }, ArrayExpression: 1, ObjectExpression: 1, ImportDeclaration: 1, flatTernaryExpressions: false, ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'], ignoreComments: false }]`
    - airbnb-base file: `style.js`

1. [`jsx-quotes`](https://eslint.org/docs/latest/rules/jsx-quotes)
    - airbnb-base: `['off', 'prefer-double']`
    - airbnb-base file: `style.js`

1. [`key-spacing`](https://eslint.org/docs/latest/rules/key-spacing)
    - airbnb-base: `['error', { beforeColon: false, afterColon: true }]`
    - airbnb-base file: `style.js`

1. [`keyword-spacing`](https://eslint.org/docs/latest/rules/keyword-spacing)
    - airbnb-base: `['error', { before: true, after: true, overrides: { return: { after: true }, throw: { after: true }, case: { after: true } } }]`
    - airbnb-base file: `style.js`

1. [`line-comment-position`](https://eslint.org/docs/latest/rules/line-comment-position)
    - airbnb-base: `['off', { position: 'above', ignorePattern: '', applyDefaultPatterns: true }]`
    - airbnb-base file: `style.js`

1. [`linebreak-style`](https://eslint.org/docs/latest/rules/linebreak-style)
    - airbnb-base: `['error', 'unix']`
    - airbnb-base file: `style.js`

1. [`lines-between-class-members`](https://eslint.org/docs/latest/rules/lines-between-class-members)
    - airbnb-base: `['error', 'always', { exceptAfterSingleLine: false }]`
    - airbnb-base file: `style.js`

1. [`lines-around-comment`](https://eslint.org/docs/latest/rules/lines-around-comment)
    - airbnb-base: `'off'`
    - airbnb-base file: `style.js`

1. [`max-len`](https://eslint.org/docs/latest/rules/max-len)
    - airbnb-base: `['error', 100, 2, { ignoreUrls: true, ignoreComments: false, ignoreRegExpLiterals: true, ignoreStrings: true, ignoreTemplateLiterals: true }]`
    - airbnb-base file: `style.js`

1. [`max-statements-per-line`](https://eslint.org/docs/latest/rules/max-statements-per-line)
    - airbnb-base: `['off', { max: 1 }]`
    - airbnb-base file: `style.js`

1. [`multiline-comment-style`](https://eslint.org/docs/latest/rules/multiline-comment-style)
    - airbnb-base: `['off', 'starred-block']`
    - airbnb-base file: `style.js`

1. [`multiline-ternary`](https://eslint.org/docs/latest/rules/multiline-ternary)
    - airbnb-base: `['off', 'never']`
    - airbnb-base file: `style.js`

1. [`new-parens`](https://eslint.org/docs/latest/rules/new-parens)
    - airbnb-base: `'error'`
    - airbnb-base file: `style.js`

1. [`newline-per-chained-call`](https://eslint.org/docs/latest/rules/newline-per-chained-call)
    - airbnb-base: `['error', { ignoreChainWithDepth: 4 }]`
    - airbnb-base file: `style.js`

1. [`no-mixed-operators`](https://eslint.org/docs/latest/rules/no-mixed-operators)
    - airbnb-base: `['error', { groups: [['%', '**'], ['%', '+'], ['%', '-'], ['%', '*'], ['%', '/'], ['/', '*'], ['&', '|', '<<', '>>', '>>>'], ['==', '!=', '===', '!=='], ['&&', '||']], allowSamePrecedence: false }]`
    - airbnb-base file: `style.js`

1. [`no-mixed-spaces-and-tabs`](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs)
    - airbnb-base: `'error'`
    - airbnb-base file: `style.js`

1. [`no-multiple-empty-lines`](https://eslint.org/docs/latest/rules/no-multiple-empty-lines)
    - airbnb-base: `['error', { max: 1, maxBOF: 0, maxEOF: 0 }]`
    - airbnb-base file: `style.js`

1. [`no-tabs`](https://eslint.org/docs/latest/rules/no-tabs)
    - airbnb-base: `'error'`
    - airbnb-base file: `style.js`

1. [`no-trailing-spaces`](https://eslint.org/docs/latest/rules/no-trailing-spaces)
    - airbnb-base: `['error', { skipBlankLines: false, ignoreComments: false }]`
    - airbnb-base file: `style.js`

1. [`no-whitespace-before-property`](https://eslint.org/docs/latest/rules/no-whitespace-before-property)
    - airbnb-base: `'error'`
    - airbnb-base file: `style.js`

1. [`nonblock-statement-body-position`](https://eslint.org/docs/latest/rules/nonblock-statement-body-position)
    - airbnb-base: `['error', 'beside', { overrides: {} }]`
    - airbnb-base file: `style.js`

1. [`object-curly-spacing`](https://eslint.org/docs/latest/rules/object-curly-spacing)
    - airbnb-base: `['error', 'always']`
    - airbnb-base file: `style.js`

1. [`object-curly-newline`](https://eslint.org/docs/latest/rules/object-curly-newline)
    - airbnb-base: `['error', { ObjectExpression: { minProperties: 4, multiline: true, consistent: true }, ObjectPattern: { minProperties: 4, multiline: true, consistent: true }, ImportDeclaration: { minProperties: 4, multiline: true, consistent: true }, ExportDeclaration: { minProperties: 4, multiline: true, consistent: true } }]`
    - airbnb-base file: `style.js`

1. [`object-property-newline`](https://eslint.org/docs/latest/rules/object-property-newline)
    - airbnb-base: `['error', { allowAllPropertiesOnSameLine: true }]`
    - airbnb-base file: `style.js`

1. [`one-var-declaration-per-line`](https://eslint.org/docs/latest/rules/one-var-declaration-per-line)
    - airbnb-base: `['error', 'always']`
    - airbnb-base file: `style.js`

1. [`operator-linebreak`](https://eslint.org/docs/latest/rules/operator-linebreak)
    - airbnb-base: `['error', 'before', { overrides: { '=': 'none' } }]`
    - airbnb-base file: `style.js`

1. [`padded-blocks`](https://eslint.org/docs/latest/rules/padded-blocks)
    - airbnb-base: `['error', { blocks: 'never', classes: 'never', switches: 'never' }, { allowSingleLineBlocks: true }]`
    - airbnb-base file: `style.js`

1. [`padding-line-between-statements`](https://eslint.org/docs/latest/rules/padding-line-between-statements)
    - airbnb-base: `'off'`
    - airbnb-base file: `style.js`

1. [`quote-props`](https://eslint.org/docs/latest/rules/quote-props)
    - airbnb-base: `['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }]`
    - airbnb-base file: `style.js`

1. [`quotes`](https://eslint.org/docs/latest/rules/quotes)
    - airbnb-base: `['error', 'single', { avoidEscape: true }]`
    - airbnb-base file: `style.js`

1. [`semi`](https://eslint.org/docs/latest/rules/semi)
    - airbnb-base: `['error', 'always']`
    - airbnb-base file: `style.js`

1. [`semi-spacing`](https://eslint.org/docs/latest/rules/semi-spacing)
    - airbnb-base: `['error', { before: false, after: true }]`
    - airbnb-base file: `style.js`

1. [`semi-style`](https://eslint.org/docs/latest/rules/semi-style)
    - airbnb-base: `['error', 'last']`
    - airbnb-base file: `style.js`

1. [`space-before-blocks`](https://eslint.org/docs/latest/rules/space-before-blocks)
    - airbnb-base: `'error'`
    - airbnb-base file: `style.js`

1. [`space-before-function-paren`](https://eslint.org/docs/latest/rules/space-before-function-paren)
    - airbnb-base: `['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }]`
    - airbnb-base file: `style.js`

1. [`space-in-parens`](https://eslint.org/docs/latest/rules/space-in-parens)
    - airbnb-base: `['error', 'never']`
    - airbnb-base file: `style.js`

1. [`space-infix-ops`](https://eslint.org/docs/latest/rules/space-infix-ops)
    - airbnb-base: `'error'`
    - airbnb-base file: `style.js`

1. [`space-unary-ops`](https://eslint.org/docs/latest/rules/space-unary-ops)
    - airbnb-base: `['error', { words: true, nonwords: false, overrides: {} }]`
    - airbnb-base file: `style.js`

1. [`spaced-comment`](https://eslint.org/docs/latest/rules/spaced-comment)
    - airbnb-base: `['error', 'always', { line: { exceptions: ['-', '+'], markers: ['=', '!', '/'] }, block: { exceptions: ['-', '+'], markers: ['=', '!', ':', '::'], balanced: true } }]`
    - airbnb-base file: `style.js`

1. [`switch-colon-spacing`](https://eslint.org/docs/latest/rules/switch-colon-spacing)
    - airbnb-base: `['error', { after: true, before: false }]`
    - airbnb-base file: `style.js`

1. [`template-tag-spacing`](https://eslint.org/docs/latest/rules/template-tag-spacing)
    - airbnb-base: `['error', 'never']`
    - airbnb-base file: `style.js`

1. [`wrap-regex`](https://eslint.org/docs/latest/rules/wrap-regex)
    - airbnb-base: `'off'`
    - airbnb-base file: `style.js`

1. [`no-spaced-func`(`func-call-spacing`)](https://eslint.org/docs/latest/rules/no-spaced-func)
    - airbnb-base: `'error'`
    - airbnb-base file: `style.js`

### to [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)

1. [`valid-jsdoc`](https://eslint.org/docs/latest/rules/valid-jsdoc)
    - airbnb-base: `'off'`
    - airbnb-base file: `errors.js`

1. [`require-jsdoc`](https://eslint.org/docs/latest/rules/require-jsdoc)
    - airbnb-base: `'off'`
    - airbnb-base file: `style.js`

### to [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n)

1. [`callback-return`](https://eslint.org/docs/latest/rules/callback-return)
    - airbnb-base: `'off'`
    - airbnb-base file: `node.js`

1. [`global-require`](https://eslint.org/docs/latest/rules/global-require)
    - airbnb-base: `'error'`
    - airbnb-base file: `node.js`

1. [`handle-callback-err`](https://eslint.org/docs/latest/rules/handle-callback-err)
    - airbnb-base: `'off'`
    - airbnb-base file: `node.js`

1. [`no-buffer-constructor`](https://eslint.org/docs/latest/rules/no-buffer-constructor)
    - airbnb-base: `'error'`
    - airbnb-base file: `node.js`

1. [`no-mixed-requires`](https://eslint.org/docs/latest/rules/no-mixed-requires)
    - airbnb-base: `['off', false]`
    - airbnb-base file: `node.js`

1. [`no-new-require`](https://eslint.org/docs/latest/rules/no-new-require)
    - airbnb-base: `'error'`
    - airbnb-base file: `node.js`

1. [`no-path-concat`](https://eslint.org/docs/latest/rules/no-path-concat)
    - airbnb-base: `'error'`
    - airbnb-base file: `node.js`

1. [`no-process-env`](https://eslint.org/docs/latest/rules/no-process-env)
    - airbnb-base: `'off'`
    - airbnb-base file: `node.js`

1. [`no-process-exit`](https://eslint.org/docs/latest/rules/no-process-exit)
    - airbnb-base: `'off'`
    - airbnb-base file: `node.js`

1. [`no-restricted-modules`](https://eslint.org/docs/latest/rules/no-restricted-modules)
    - airbnb-base: `'off'`
    - airbnb-base file: `node.js`

1. [`no-sync`](https://eslint.org/docs/latest/rules/no-sync)
    - airbnb-base: `'off'`
    - airbnb-base file: `node.js`

1. [`newline-before-return`(`padding-line-between-statements`)](https://eslint.org/docs/latest/rules/newline-before-return)
    - airbnb-base: `'off'`
    - airbnb-base file: `style.js`

1. [`newline-after-var`(`padding-line-between-statements`)](https://eslint.org/docs/latest/rules/newline-after-var)
    - airbnb-base: `'off'`
    - airbnb-base file: `style.js`

1. [`lines-around-directive`(`padding-line-between-statements`)](https://eslint.org/docs/latest/rules/lines-around-directive)
    - airbnb-base: `['error', { before: 'always', after: 'always' }]`
    - airbnb-base file: `style.js`

### Deprecated and replaced by another ESLint rule

1. [`no-native-reassign`](https://eslint.org/docs/latest/rules/no-native-reassign)
    - airbnb-base: `'off'`
    - airbnb-base file: `best-practices.js`
    - Replaced by [`no-global-assign`](https://eslint.org/docs/latest/rules/no-global-assign)

1. [`no-negated-in-lhs`](https://eslint.org/docs/latest/rules/no-negated-in-lhs)
    - airbnb-base: `'off'`
    - airbnb-base file: `errors.js`
    - Replaced by [`no-unsafe-negation`](https://eslint.org/docs/latest/rules/no-unsafe-negation)

1. [`no-new-symbol`](https://eslint.org/docs/latest/rules/no-new-symbol)
    - airbnb-base: `'error'`
    - airbnb-base file: `es6.js`
    - Replaced by [`no-new-native-nonconstructor`](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor)

1. [`no-new-object`](https://eslint.org/docs/latest/rules/no-new-object)
    - airbnb-base: `'error'`
    - airbnb-base file: `style.js`
    - Replaced by [`no-object-constructor`](https://eslint.org/docs/latest/rules/no-object-constructor)

### Only Deprecated

1. [`no-return-await`](https://eslint.org/docs/latest/rules/no-return-await)
    - airbnb-base: `'error'`
    - airbnb-base file: `best-practices.js`

1. [`prefer-reflect`](https://eslint.org/docs/latest/rules/prefer-reflect)
    - airbnb-base: `'off'`
    - airbnb-base file: `es6.js`

1. [`no-catch-shadow`](https://eslint.org/docs/latest/rules/no-catch-shadow)
    - airbnb-base: `'off'`
    - airbnb-base file: `variables.js`
