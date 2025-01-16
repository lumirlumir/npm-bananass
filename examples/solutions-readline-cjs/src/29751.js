/**
 * @fileoverview Baekjoon 29751
 * @see https://www.acmicpc.net/problem/29751
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { createInterface } = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { EOL } = require('node:os');
const { log } = require('node:console');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const rl = createInterface({ input, output });

let inputFile = '';

// --------------------------------------------------------------------------------
// Event Listening
// --------------------------------------------------------------------------------

rl.on('line', line => {
  inputFile += `${line}${EOL}`;
}).on('close', () => {
  solution(inputFile);
});

// --------------------------------------------------------------------------------
// Solution
// --------------------------------------------------------------------------------

// eslint-disable-next-line no-shadow
function solution(inputFile) {
  const [W, H] = inputFile
    .trim()
    .split(' ')
    .map(val => Number(val));

  const width = (W * H) / 2;

  log(width.toFixed(1));
}
