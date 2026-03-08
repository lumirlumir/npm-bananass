function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val))
    .toSorted();

  return a + b;
}

module.exports = { solution };
