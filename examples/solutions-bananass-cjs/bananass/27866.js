const testcases = [
  {
    input: `Sprout
3`,
    output: 'r',
  },
  {
    input: `shiftpsh
6`,
    output: 'p',
  },
  {
    input: `Baekjoon
4`,
    output: 'k',
  },
];

function solution(input) {
  const [S, i] = input.trim().split('\n'); // `i` is string.

  return S[Number(i) - 1];
}

module.exports = { testcases, solution };
