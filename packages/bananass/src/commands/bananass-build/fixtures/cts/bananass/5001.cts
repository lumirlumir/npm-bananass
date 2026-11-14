import path = require('node:path');

import type { Input, Output } from '../types';

// eslint-disable-next-line typescript/no-namespace -- Test TypeScript namespace transformation.
namespace Operand {
  export enum Index {
    A = 0,
    B = 1,
  }
}

function solution(input: Input): Output {
  const values = path
    .basename(input)
    .trim()
    .split(' ')
    .map(val => Number(val));

  return values[Operand.Index.A] + values[Operand.Index.B];
}

export = { solution };
