import type {
  Testcases,
  Solution,
  SolutionWithTestcases,
} from 'bananass' with { 'resolution-mode': 'require' };

const testcases = [
  {
    input: '1 1',
    output: '0.5',
  },
  {
    input: '2 3',
    output: '3.0',
  },
  {
    input: '4 5',
    output: '10.0',
  },
] satisfies Testcases;

const solution: Solution = input => {
  const [W, H] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  const width = (W * H) / 2;

  return width.toFixed(1); // `toFixed` returns a string.
};

module.exports = globalThis.IS_PROD
  ? { solution }
  : ({ solution, testcases } satisfies SolutionWithTestcases);
