import { Testcase, Input, Output } from '../types';

const testcases: Testcase[] = [
  {
    input: '1 2',
    output: '3',
  },
  {
    input: '3 4',
    output: '7',
  },
];

function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}

module.exports = globalThis.IS_PROD ? { solution } : { solution, testcases };
