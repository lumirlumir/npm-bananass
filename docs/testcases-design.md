# Testcases Design

```js
import { readFileSync } from 'node:fs';

const a = [
  {
    input: `1 2 3
4 5 6
7 8 9`,
    output: `1 2 3
4 5 6
7 8 9`,
  },
  {
    // input: readFileSync('./input.txt', 'utf-8'), // TODO: make a utility function to read file
    // output: readFileSync('./output.txt', 'utf-8'),
  },
];

console.log(a);
```
