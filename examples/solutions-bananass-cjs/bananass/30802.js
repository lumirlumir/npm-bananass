const testcases = [
  {
    input: '23\n3 1 4 1 5 9\n5 7',
    output: '7\n3 2',
  },
];

function solution(input) {
  const inputParsed = input
    .trim()
    .split('\n')
    .map(val => val.split(' ').map(Number));

  let lineIdx = 0;
  const [N] = inputParsed[lineIdx++];
  const sizes = inputParsed[lineIdx++];
  const [T, P] = inputParsed[lineIdx];

  const result = [];

  let tShirtsBundleCnt = 0;
  sizes.forEach(size => {
    tShirtsBundleCnt += Math.ceil(size / T);
  });
  result.push(tShirtsBundleCnt);

  const penBundleCnt = Math.floor(N / P);
  const penCnt = N % P;
  result.push(`${penBundleCnt} ${penCnt}`);

  return result.join('\n');
}

module.exports = { solution, testcases };
