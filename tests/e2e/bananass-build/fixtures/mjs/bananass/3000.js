function solution(input) {
  const test = /(?i:a)a/.test('aa');

  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return test ? a + b : a + b;
}

export default { solution };
