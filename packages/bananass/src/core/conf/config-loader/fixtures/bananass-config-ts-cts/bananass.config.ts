type Config = Record<number, Record<number, string>>;

const config: Config = {
  1: {
    1: 'a',
    2: 'b',
    3: 'c',
  },
  2: {
    1: 'd',
    2: 'e',
    3: 'f',
  },
  3: {
    1: 'g',
    2: 'h',
    3: 'i',
  },
};

module.exports = config;
