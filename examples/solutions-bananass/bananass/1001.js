const { log } = require('node:console');

function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  log(a - b);
}

module.exports = solution;
