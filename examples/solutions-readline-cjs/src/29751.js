/**
 * @fileoverview Baekjoon 29751
 * @see https://www.acmicpc.net/problem/29751
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { createInterface } = require('node:readline');
const { stdin, stdout } = require('node:process');
const { EOL } = require('node:os');
const { log } = require('node:console');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const rl = createInterface({ input: stdin, output: stdout });

let inputStr = '';

// --------------------------------------------------------------------------------
// Event Listening
// --------------------------------------------------------------------------------

rl.on('line', line => {
  inputStr += `${line}${EOL}`;
}).on('close', () => {
  solution(inputStr);
});

// --------------------------------------------------------------------------------
// Solution
// --------------------------------------------------------------------------------

function solution(input) {
  const [W, H] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  const width = (W * H) / 2;

  log(width.toFixed(1));
}
