/* eslint-disable import/prefer-default-export */

import add from '../../utils/add';
import type { Input, Output } from '../../types';

export function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return add(a, b);
}
