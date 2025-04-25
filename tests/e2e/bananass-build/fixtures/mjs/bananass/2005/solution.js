/* eslint-disable import/prefer-default-export */

import add from '../../utils/add.js';

export function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return add(a, b);
}
