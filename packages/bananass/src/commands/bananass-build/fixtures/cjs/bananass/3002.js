function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val))
    .toReversed();

  return a + b;
}

module.exports = { solution };
