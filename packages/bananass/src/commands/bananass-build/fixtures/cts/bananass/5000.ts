import { Input, Output } from '../types';

interface Answer {
  value: number;
}

export { Answer };

export function solution(input: Input): Output {
  const answer: Answer = { value: Number(input) };
  return answer.value;
}
