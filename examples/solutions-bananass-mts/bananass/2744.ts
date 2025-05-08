import type { Testcases, Input, Output } from 'bananass';

const testcases = [
  {
    input: 'WrongAnswer',
    output: 'wRONGaNSWER',
  },
  {
    input: 'Abc',
    output: 'aBC',
  },
] satisfies Testcases;

function solution(input: Input): Output {
  let output = '';

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char.toLowerCase() === char) {
      output += char.toUpperCase(); // Lowercase
    } else {
      output += char.toLowerCase(); // Uppercase
    }
  }

  return output;
}

export default { testcases, solution };
