::: code-group <!-- markdownlint-disable-line -->

```js:line-numbers [1000.mjs]
// 백준 1000번 문제.

const testcases = [
  {
    input: '1 2',
    output: '3',
  },
  {
    input: '3 4',
    output: '7',
  },
  {
    input: '5 6',
    output: '11',
  },
];

function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}

export default { solution, testcases };
```

```js:line-numbers [1000.cjs]
// 백준 1000번 문제.

const testcases = [
  {
    input: '1 2',
    output: '3',
  },
  {
    input: '3 4',
    output: '7',
  },
  {
    input: '5 6',
    output: '11',
  },
];

function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}

module.exports = { solution, testcases };
```

```ts:line-numbers [1000.mts]
// 백준 1000번 문제.

import type { Testcases, Input, Output } from 'bananass';

const testcases = [
  {
    input: '1 2',
    output: '3',
  },
  {
    input: '3 4',
    output: '7',
  },
  {
    input: '5 6',
    output: '11',
  },
] satisfies Testcases;

function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}

export default { solution, testcases };
```

```ts:line-numbers [1000.cts]
// 백준 1000번 문제.

import type { Testcases, Input, Output } from 'bananass';

const testcases = [
  {
    input: '1 2',
    output: '3',
  },
  {
    input: '3 4',
    output: '7',
  },
  {
    input: '5 6',
    output: '11',
  },
] satisfies Testcases;

function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}

module.exports = { solution, testcases };
```

:::
