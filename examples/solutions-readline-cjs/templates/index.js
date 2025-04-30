/**
 * @fileoverview Use this template in the `src` directory.
 */

/* eslint-disable -- Remove this line when under the `src` directory. */

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
  // Write down your solution here.
}
