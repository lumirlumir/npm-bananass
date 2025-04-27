// Baekjoon Problem Solving using **ES Module**.

const testcases = [
  {
    input: '3 2\n',
    output: 1,
  },
  {
    input: '5 6\n',
    output: -1,
  },
  {
    input: '7 7\n',
    output: 0,
  },
];

function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a - b;
}

// You can also write default export like this: `export default { solution, testcases };`
export default globalThis.IS_PROD ? { solution } : { solution, testcases };
