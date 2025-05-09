const testcases = [
  {
    input: 'WrongAnswer',
    output: 'wRONGaNSWER',
  },
  {
    input: 'Abc',
    output: 'aBC',
  },
];

function solution(input) {
  let output = '';

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char.toLowerCase() === char) {
      output += char.toUpperCase(); // Lowercase
    } else {
      output += char.toLowerCase(); // Uppercase
    }
  }

  return output;
}

module.exports = { testcases, solution };
