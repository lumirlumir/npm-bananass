const add = require('../utils/add');

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

  return add(a, b);
}

module.exports = { solution, testcases };
