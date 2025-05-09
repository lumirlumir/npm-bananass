import type { Testcases, Input, Output } from 'bananass';

const testcases = [
  {
    input: `3
ACDKJFOWIEGHE
O
AB`,
    output: `AE
OO
AB`,
  },
] satisfies Testcases;

function solution(input: Input): Output {
  const strings = input.trim().split('\n').splice(1);

  return strings.map(string => string[0] + string[string.length - 1]).join('\n');
}

module.exports = { solution, testcases };
