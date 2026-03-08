import type { Testcase, Input, Output } from '../types';

const addition = require('../utils/add.ts');

const testcases = [
  {
    input: '1 2',
    output: '3',
  },
  {
    input: '3 4',
    output: '7',
  },
] satisfies Testcase[];

function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return addition(a, b);
}

module.exports = { solution, testcases };
