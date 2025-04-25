import type { Input, Output } from '../types';

function solution(input: Input): Output {
  const test = /(?i:a)a/.test('aa');

  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return test ? a + b : a + b;
}

module.exports = { solution };
