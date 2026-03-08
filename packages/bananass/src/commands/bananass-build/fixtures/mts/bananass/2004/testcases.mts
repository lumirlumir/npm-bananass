/* eslint-disable import/prefer-default-export */

import type { Testcase } from '../../types';

export const testcases = [
  {
    input: '1 2',
    output: '3',
  },
  {
    input: '3 4',
    output: '7',
  },
] satisfies Testcase[];
