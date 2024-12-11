/**
 * @fileoverview Use this template in the `src` directory.
 */

/* eslint-disable */ // Remove this line when under the `src` directory.

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
  // eslint-disable-next-line no-use-before-define
  solution(inputFile);
});

// --------------------------------------------------------------------------------
// Solution
// --------------------------------------------------------------------------------

// eslint-disable-next-line no-shadow
function solution(inputFile) {
  // Write down your solution here.
}
