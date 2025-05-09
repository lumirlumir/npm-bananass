import type { Testcases, Input, Output } from 'bananass';

const testcases = [
  {
    input: '4 3\n',
    output: 7,
  },
  {
    input: '3 4\n',
    output: -7,
  },
] satisfies Testcases;

function solution(input: Input): Output {
  const [A, B] = input.trim().split(' ').map(Number);

  return (A + B) * (A - B);
}

module.exports = { solution, testcases };
