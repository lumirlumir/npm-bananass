import { Input, Output } from '../types';

const solution = (input: Input): Output => {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
};

module.exports = { solution };
