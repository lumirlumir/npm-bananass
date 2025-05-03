import type { Testcases, Input, Output } from 'bananass';

const testcases = [
  {
    input: '3 2\n',
    output: 1,
  },
  {
    input: '5 6\n',
    output: -1,
  },
  {
    input: '7 7\n',
    output: 0,
  },
] satisfies Testcases;

function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a - b;
}

export default { solution, testcases };
