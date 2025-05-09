const testcases = [
  {
    input: '4 3\n',
    output: 7,
  },
  {
    input: '3 4\n',
    output: -7,
  },
];

function solution(input) {
  const [A, B] = input.trim().split(' ').map(Number);

  return (A + B) * (A - B);
}

export default { solution, testcases };
