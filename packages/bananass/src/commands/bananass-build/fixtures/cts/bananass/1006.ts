import { Input, Output } from '../types';

const solution = function (input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
};

module.exports = { solution };
