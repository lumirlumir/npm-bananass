import type { Testcases, Input, Output } from 'bananass';

const testcases = [
  {
    input: `Hello
Baekjoon
Online Judge`,
    output: `Hello
Baekjoon
Online Judge`,
  },
] satisfies Testcases;

function solution(input: Input): Output {
  return input;
}

export default { testcases, solution };
