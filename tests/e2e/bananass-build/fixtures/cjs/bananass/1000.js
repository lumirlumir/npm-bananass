const testcases = [
  {
    input: '1 2',
    output: '3',
  },
  {
    input: '3 4',
    output: '7',
  },
];

function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}

module.exports = globalThis.IS_PROD ? { solution } : { solution, testcases };
