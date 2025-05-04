const testcases = [
  {
    input: `3
4
5
`,
    output: `2
29
`,
  },
];

function solution(input) {
  const [A, B, C] = input.trim().split('\n');

  const number = Number(A) + Number(B) - Number(C);
  const string = Number(A + B) - Number(C);

  return [number, string].join('\n');
}

export default { testcases, solution };
