import type { Input, Output } from '../types';

class Answer {
  declare typeOnly: number;

  uninitialized!: number;

  constructor(public value: number) {}
}

function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val))
    .toSorted()
    .toReversed();

  const answer = new Answer(a + b);

  return !Object.hasOwn(answer, 'typeOnly') && Object.hasOwn(answer, 'uninitialized')
    ? answer.value
    : a - b;
}

export default { solution };
