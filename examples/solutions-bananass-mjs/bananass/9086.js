const testcases = [
  {
    input: `3
ACDKJFOWIEGHE
O
AB`,
    output: `AE
OO
AB`,
  },
];

function solution(input) {
  const strings = input.trim().split('\n').splice(1);

  return strings.map(string => string[0] + string[string.length - 1]).join('\n');
}

export default { solution, testcases };
