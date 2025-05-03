import type { Testcases, Input, Output } from 'bananass';

const testcases = [
  {
    input: '1\n2\n',
    output: '3',
  },
  {
    input: '3\n4\n',
    output: '7',
  },
] satisfies Testcases;

function solution(input: Input): Output {
  const [A, B] = input.trim().split('\n').map(Number);

  return A + B;
}

module.exports = { solution, testcases };
