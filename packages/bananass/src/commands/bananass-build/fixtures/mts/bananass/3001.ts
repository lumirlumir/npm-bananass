import type { Input, Output } from '../types';

function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val))
    // @ts-expect-error -- Needed to test
    .toSorted();

  return a + b;
}

export default { solution };
