import type { Input, Output } from '../../types';

const add = require('../../utils/add');

module.exports = function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return add(a, b);
};
