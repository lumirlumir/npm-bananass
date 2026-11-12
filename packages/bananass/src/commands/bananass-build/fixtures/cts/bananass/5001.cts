import path = require('node:path');

// eslint-disable-next-line typescript/no-namespace -- Test TypeScript namespace transformation.
namespace Answer {
  export enum Value {
    Three = 3,
  }
}

function solution(input: string): string {
  return `${path.basename(input.trim())}/${Answer.Value.Three}`;
}

export = { solution };
