const solution = input => {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
};

module.exports = { solution };
