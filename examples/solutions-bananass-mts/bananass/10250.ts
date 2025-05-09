import type { Testcases, Input, Output } from 'bananass';

const testcases = [
  {
    input: `2
6 12 10
30 50 72`,
    output: `402
1203`,
  },
  {
    input: `1
6 12 10`,
    output: `402`,
  },
  {
    input: `1
1 1 1`,
    output: `101`,
  }, // Edge case
] satisfies Testcases;

function solution(input: Input): Output {
  return input
    .trim()
    .split('\n')
    .slice(1)
    .map(str => str.split(' '))
    .map(([_H, , _N]) => {
      const H = Number(_H);
      const N = Number(_N);

      const X = String(Math.floor((N - 1) / H) + 1);
      const Y = String(((N - 1) % H) + 1);

      return Y + (X.length === 1 ? `0${X}` : X);
    })
    .join('\n');
}

export default { testcases, solution };
