import { Input, Output } from '../types';

interface Answer {
  value: number;
}

export { Answer };

export function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  const answer: Answer = { value: a + b };

  return answer.value;
}
