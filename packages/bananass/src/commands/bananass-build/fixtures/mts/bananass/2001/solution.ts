import type { Input, Output } from '../../types.d.ts';

export default function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}
