// Baekjoon Problem Solving using **CommonJS Module**.
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

// You can also write default export like this:
// `module.exports = { solution, testcases } satisfies SolutionWithTestcases;`
module.exports = globalThis.IS_PROD
  ? { solution }
  : ({ solution, testcases } satisfies SolutionWithTestcases);
