const { createInterface } = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { EOL } = require('node:os');
const { log } = require('node:console');

const rl = createInterface({ input, output });

let inputFile = '';

// eslint-disable-next-line no-shadow
function solution(inputFile) {
  const [a, b] = inputFile
    .trim()
    .split(' ')
    .map(val => Number(val));

  log(a + b);
}

rl.on('line', line => {
  inputFile += `${line}${EOL}`;
}).on('close', () => {
  solution(inputFile);
});
