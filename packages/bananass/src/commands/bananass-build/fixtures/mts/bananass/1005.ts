import add from '../utils/add';
import { Testcase, Input, Output } from '../types';

export const testcases: Testcase[] = [
  {
    input: '1 2',
    output: '3',
  },
  {
    input: '3 4',
    output: '7',
  },
];

export function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return add(a, b);
}
