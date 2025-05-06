import type { Testcases, Input, Output } from 'bananass';

const testcases = [
  {
    input: '-2 5\n',
    output: 7,
  },
  {
    input: '5 3\n',
    output: 2,
  },
  {
    input: '-5 -3\n',
    output: 2,
  },
] satisfies Testcases;

function solution(input: Input): Output {
  const [N, M] = input.trim().split(' ').map(Number);

  return Math.abs(N - M);
}

export default { testcases, solution };
