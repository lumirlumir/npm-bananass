# 백준에서 자바스크립트 사용하기 (심화)

이번 챕터는 바나나 프레임워크 없이 백준 문제 풀이 하는 2가지 방법을 설명합니다.

바나나 프레임워크만을 사용하고 싶은 여러분들은 뒤로 가기를 눌러도 좋습니다!

아래 예시는 모두 [백준 1000번](https://www.acmicpc.net/problem/1000) 문제를 예시로 설명합니다.

## `readline` 모듈 이용하기

```javascript
const readline = require('node:readline');
const { EOL } = require('node:os');

let inputStr = '';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  inputStr = `${inputStr}${line}${EOL}`;

  // console.log(input);
}).on('close', () => {
  console.log(solution(inputStr));

  process.exit(0);
});

function solution(inputStr) {
  // console.log(inputStr);

  const input = inputStr
    .trim()
    .split(' ')
    .map(val => Number(val));
  // console.log(input);

  const [a, b] = input;

  return a + b;
}
```

```javascript
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){ //이 안에 솔루션 코드 작성
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    console.log(A+B);
    process.exit();
});
```

```js
//readline 모듈 불러오기
const readline = require('readline');
//인터페이스 객체 생성하기
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//입출력 처리하는 코드
rl.on('line', function (line) {
    //입력 처리하는 코드
    console.log(line);//입력 출력
    rl.close();
}).on('close', function () {
//입력을 받은 뒤 실행할 코드
    process.exit();//종료문
});
```

## `fs` (`fs:node`) 모듈 이용하기

사실 이 방법은 추천하지 않습니다! `/dev/stdin`을 사용한 이 방법을 사용하면 런타임 에러가 발생한다는 얘기가 있기에, 첫번째로 언급한 `readline`을 사용하는 것을 권장합니다.

그럼에도 설명하는 이유는 모르는 것 보다는 아는게 더 좋잖아요?🤔

(fs모듈(File System module)은 파일 처리와 관련된 전반적인 작업을 하는 모듈을 말한다. 해당 방법이 readline으로 받아오는 속도보다 빠르고 백준에서도 공식적으로 권장되는 방법이기 때문에 fs모듈로 연습하는 것을 추천한다.)

```javascript
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A+B);
```

```js
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number)
```

-> `.toString()`은 .앞의 내용을 문자열로 받겠다는 뜻이다. 그럼 입력이 숫자면 안 써도 되지 않느냐라고 할 수 있는데 그럼 오류가 발생한다. readFileSync의 인코딩 방법을 정해주지 않아 Buffer 객체로 반환되기 때문에 toString()을 무조건 써주도록 하자.

```js
입력값이 하나일 경우(문자)

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

//input: hello
//output: hello
```

```js
입력값이 하나일 경우(숫자)

방법1)
const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

방법2)
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();
let num = +input; 또는 parseInt(input) 또는 Number(input)

//input: 8
//output: 8
```

```js
입력값이 띄어쓰기로 구분된 한 줄의 값들인 경우(문자)

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

//input: hello world
//output: ['hello', 'world']
```

```js
입력값이 띄어쓰기로 구분된 한 줄의 값들인 경우(숫자)

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

//input: 8 7 56
//output: [8, 7, 56]
```

```js
입력값이 여러 줄의 값들인 경우(문자)

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//input:
//a
//b
//c
//d
//output: ['a', 'b', 'c', 'd']
```

```js
입력값이 여러 줄의 값들이 띄어쓰기로 구분되어 있는 경우(문자)

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

//input:
//ab cd
//ef gh
//my name is minjoon
//hi hello
//output: [
//  [ 'ab', 'cd' ],
//  [ 'ef', 'gh' ],
//  [ 'my', 'name', 'is', 'minjoon' ],
//  [ 'hi', 'hello' ]
//]
```

```js
입력값이 여러 줄의 값들이 띄어쓰기로 구분되어 있는 경우(모두 숫자)

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

//input:
//3
//1 2
//3 4 5 6
//5 3 2 5
//0 1 1 0
//output: [ [ 3 ], [ 1, 2 ], [ 3, 4, 5, 6 ], [ 5, 3, 2, 5 ], [ 0, 1, 1, 0 ] ]
```
