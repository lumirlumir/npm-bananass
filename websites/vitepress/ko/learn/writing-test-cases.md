# 테스트 케이스 작성하기 {#writing-test-cases}

```js
import type {
  Testcase,
  Input,
  Output,
} from '../types' with { 'resolution-mode': 'require' };

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
] satisfies Testcase[];

const solution = (input: Input): Output => {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
};

module.exports = globalThis.IS_PROD ? { solution } : { solution, testcases };
```

```js
import type {
  Testcases,
  Solution,
  SolutionWithTestcases,
} from 'bananass' with { 'resolution-mode': 'require' };

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

const solution: Solution = input => {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
};

module.exports = globalThis.IS_PROD
  ? { solution }
  : ({ solution, testcases } satisfies SolutionWithTestcases);
```
