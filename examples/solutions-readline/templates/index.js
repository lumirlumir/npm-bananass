/* eslint-disable */
const { createInterface } = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { EOL } = require('node:os');
const { log } = require('node:console');

const rl = createInterface({ input, output });

let inputFile = '';

// eslint-disable-next-line no-shadow
function solution(inputFile) {
  // Solution
}

rl.on('line', line => {
  inputFile += `${line}${EOL}`;
}).on('close', () => {
  solution(inputFile);
});
