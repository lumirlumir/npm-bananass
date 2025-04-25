const add = require('../../utils/add');

function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return add(a, b);
}

module.exports = solution;
