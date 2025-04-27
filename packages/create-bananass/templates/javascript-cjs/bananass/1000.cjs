// Baekjoon Problem Solving using **CommonJS Module**.

const testcases = [
  {
    input: '1 2',
    output: '3',
  },
  {
    input: '3 4',
    output: '7',
  },
  {
    input: '5 6',
    output: '11',
  },
];

function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}

// You can also write default export like this: `module.exports = { solution, testcases };`
module.exports = globalThis.IS_PROD ? { solution } : { solution, testcases };
