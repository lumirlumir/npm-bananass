import type { Input, Output, Testcases } from 'bananass';

const testcases = [
  {
    input: `Fizz
Buzz
11`,
    output: `Fizz`,
  },
  {
    input: `980803
980804
FizzBuzz`,
    output: `980806`,
  },
] satisfies Testcases;

function solution(input: Input): Output {
  let result = 0;
  const splitedInput = input.trim().split('\n');

  splitedInput.forEach((str, idx) => {
    if (parseInt(str, 10) === Number(str)) {
      result = parseInt(str, 10) + 3 - idx;
    }
  });

  if (result % 3 === 0 && result % 5 === 0) {
    return 'FizzBuzz';
  } else if (result % 3 === 0) {
    return 'Fizz';
  } else if (result % 5 === 0) {
    return 'Buzz';
  }

  return result;
}

export default { solution, testcases };
