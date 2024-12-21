const { log } = require('node:console');

function solution(input) {
  const [W, H] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  const width = (W * H) / 2;

  log(width.toFixed(1));
}

module.exports = solution;
