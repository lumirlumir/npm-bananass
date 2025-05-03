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

  if (!globalThis.IS_PROD) {
    console.log('This line should not be included in the production build'); // eslint-disable-line no-console
  }

  return a + b;
}

module.exports = globalThis.IS_PROD ? { solution } : { solution, testcases };
