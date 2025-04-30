::: code-group <!-- markdownlint-disable-line -->

```js:line-numbers [1000.mjs]
// 백준 1000번 문제.

function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}

export default { solution };
```

```js:line-numbers [1000.cjs]
// 백준 1000번 문제.

function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}

module.exports = { solution };
```

```ts:line-numbers [1000.mts]
// 백준 1000번 문제.

import type { Input, Output } from 'bananass';

function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}

export default { solution };
```

```ts:line-numbers [1000.cts]
// 백준 1000번 문제.

import type { Input, Output } from 'bananass';

function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}

module.exports = { solution };
```

:::
