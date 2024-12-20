const { log } = require('node:console');

module.exports = inputFile => {
  const [W, H] = inputFile
    .trim()
    .split(' ')
    .map(val => Number(val));

  const width = (W * H) / 2;

  log(width.toFixed(1));
};
