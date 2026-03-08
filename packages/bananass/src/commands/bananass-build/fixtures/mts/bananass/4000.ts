import { Testcase, Input, Output } from '../types';

const testcases: Testcase[] = [
  {
    input: '1 2',
    output: '3',
  },
  {
    input: '3 4',
    output: '7',
  },
  {
    input: '5 6',
    output: '11',
  },
];

function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  if (!globalThis.IS_PROD) {
    console.log('This line should not be included in the production build'); // eslint-disable-line no-console
  }

  return a + b;
}

export default globalThis.IS_PROD ? { solution } : { solution, testcases };
