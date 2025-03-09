import type { Input, Output } from 'bananass';

export default function solution(input: Input): Output {
  const [A, B] = input.trim().split('\n').map(Number);

  return A + B;
}
