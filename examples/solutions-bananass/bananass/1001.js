const { log } = require('node:console');

module.exports = inputFile => {
  const [a, b] = inputFile
    .trim()
    .split(' ')
    .map(val => Number(val));

  log(a - b);
};
