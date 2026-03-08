import type { Input, Output } from '../types';

function solution(input: Input): Output {
  const obj = { prop: 1 };

  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return Object.hasOwn(obj, 'prop') ? a + b : a - b;
}

export default { solution };
