/**
 * @fileoverview Baekjoon 1000
 * @see https://www.acmicpc.net/problem/1000
 *
 * This file runs well in the local environment.
 * However, if you submit this file to Baekjoon, it will result in a 'Runtime Error (Syntax Error)' in Baekjoon's Node.js environment.
 * This is because Baekjoon does not support ESM modules. so we need to use CJS modules instead.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { EOL } from 'node:os';
import { log } from 'node:console';

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
  const [a, b] = inputFile
    .trim()
    .split(' ')
    .map(val => Number(val));

  log(a + b);
}
