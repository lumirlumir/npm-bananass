import type { Input, Output } from 'bananass';

function solution(input: Input): Output {
  const [A, B] = input.trim().split('\n').map(Number);

  return A + B;
}

export default solution;
