---
title: '바나나 프레임워크 없이 백준 Node.js 환경에서 자바스크립트로 문제 풀기'
description: '' # TODO
difficulty: 'advanced'
author:
  - 'lumirlumir'
---

이번 챕터에서는 바나나 프레임워크 없이 백준 Node.js 환경에서 자바스크립트로 문제 풀이하는 방법 2가지를 소개합니다. 바나나 프레임워크만을 사용하고 싶으신 분들은 뒤로 가기를 눌러도 좋습니다!

아래 예제는 모두 [백준 1000번: A+B](https://www.acmicpc.net/problem/1000) 문제를 예시로 설명합니다.

## `readline` 모듈 이용하기

`readline` 모듈을 이용한 방식은 `stdin`으로부터 데이터를 읽어오고 `stdout`으로 출력하는 방식입니다. `readline` 모듈에 대한 설명은 아래 링크에 자세히 설명되어 있습니다.

- [`readline`](https://nodejs.org/api/readline.html)
- [`readline.createInterface(options)`](https://nodejs.org/api/readline.html#readlinecreateinterfaceoptions)
- [Event `'close'`](https://nodejs.org/api/readline.html#event-close)
- [Event `'line'`](https://nodejs.org/api/readline.html#event-line)

문제 풀이를 위한 코드 템플릿은 기본적으로 아래와 같습니다. 바나나 프레임워크를 사용하던 방식과 동일하게 `solution` 함수에 문제 풀이를 위한 로직을 작성하면 됩니다.

> [!TIP]
>
> 바나나 프레임워크는 내부적으로 `readline` 모듈을 사용합니다! 아래 코드와 유사한 코드를 기본 템플릿으로 하여 웹팩<sup>Webpack</sup>을 통해 번들링을 진행한 후, 바벨<sup>Babel</sup>을 통한 트랜스파일링<sup>Transpiling</sup>을 거쳐, 빌드<sup>Build</sup> 결과물들을 생성합니다.

```js
const { createInterface } = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { EOL } = require('node:os');
const { log } = require('node:console');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const rl = createInterface({ input, output });

let inputFile = '';

// --------------------------------------------------------------------------------
// Event Listening
// --------------------------------------------------------------------------------

rl.on('line', line => {
  inputFile += `${line}${EOL}`;
}).on('close', () => {
  solution(inputFile);
});

// --------------------------------------------------------------------------------
// Solution
// --------------------------------------------------------------------------------

function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  log(a + b);
}
```

## `fs` 모듈 이용하기

> [!CAUTION]
>
> 🚧WIP: 개발 중🚧
>
> `fs` 모듈을 이용한 방식은 `readline`을 이용한 방식보다 메모리가 적게 소요되고, 시간이 훨씬 빠르다는 장점이 있습니다!
>
> 일례로, `readline` 모듈을 이용한 1000번 문제 풀이는 대략적으로 메모리 `9660KB` 내외, 시간 `124ms` 내외가 소모되는 반면, `fs` 모듈의 경우 메모리 `9340KB` 내외, 시간 `96ms` 내외가 소모됩니다.
>
> 바나나 프레임워크는 더 적은 메모리 사용과 시간 단축을 위해, 현재 `fs` 모듈을 사용한 방식을 개발 중에 있으니 참고 바랍니다.

`fs` 모듈을 이용한 방식에는 크게 2가지 종류가 있습니다.

첫 번째로, 입력 파일의 경로로 `/dev/stdin`을 사용한 방식이 있고,

두 번째로, 입력 파일의 경로 대신 표준 입력<sup>`stdin`</sup>을 나타내는 파일 디스크립터<sup>File Descriptor</sup> `0`을 사용하여 파일을 읽어오는 방식이 있습니다.

우선, 첫 번째 방식을 살펴볼까요?

### 1. `readFileSync('/dev/stdin')` 사용

1000번 문제를 푸는 예제는 아래와 같습니다.

```js
const [A, B] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(A + B);
```

하지만, 이 방식은 추천하지 않습니다! 왜냐고요? 이유는 아래와 같습니다.

1. 첫째, `/dev/stdin`을 이용한 방식은 백준 서버 환경에 의존적입니다. `stdin`을 통해 입력값을 받아오는 일반적인 방식이 아닌, 특정 경로에 위치한 파일에 대해 파일 시스템을 통해 입력값을 받아오기 때문이죠. 일례로, 백준의 서버 환경이 수정되어 입력 파일의 위치가 변경되면 어떨까요? (물론, 그럴리는 없겠지만 말이죠!) 이에 맞춰 기존 경로들이 모두 수정되어야 할 것입니다. 이는 범용적인 방식이 아닌 특정 환경에만 의존적인 방식으로, 범용적인 `stdin`을 사용한 방식을 두고 `/dev/stdin` 경로를 사용한다는 것은 바람직하지 않다 할 수 있습니다.

1. 둘째, `/dev/stdin` 경로를 사용하면 일부 문제에서 런타임 에러(EACCES)가 발생하는 경우가 존재합니다. 자세한 내용은 ['Node.js 사용 시 런타임 에러(EACCES)가 발생한다면?'](https://www.acmicpc.net/board/view/137718) 게시글을 참고하세요!

따라서, `fs` 모듈을 사용하고자 한다면, 위 게시글에 언급된 아래 두 번째 방식을 이용하는 것이 좋습니다.

### 2. `readFileSync(0, 'utf-8')` 사용

1000번 문제를 푸는 예제는 아래와 같습니다.

```js
const [A, B] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

console.log(A + B);
```

`readFileSync(0, 'utf-8')`에서 `0`은 파일 디스크립터를 의미합니다. 파일 디스크립터 `0`은 표준 입력(`stdin`)을 나타냅니다. 따라서, 이 코드는 표준 입력으로부터 데이터를 읽어오는 것이죠.

이 방식은 `/dev/stdin`을 사용한 방식과 달리, 표준 입력을 사용하므로 백준 서버 환경에 의존적이지 않고 런타임 에러(EACCES)도 발생하지 않습니다. 따라서, `fs` 모듈을 사용할 경우 이 방식을 사용하는 것이 바람직합니다.
