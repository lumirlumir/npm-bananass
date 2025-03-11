# 바나나 프레임워크 없이 백준 Node.js 환경에서 자바스크립트로 문제 풀기 {#solving-problems-in-baekjoon-nodejs-environment-without-bananass-framework}

::: danger 참고하세요!

이번 챕터는 바나나 프레임워크 자체에 집중하기 보다는, 백준 Node.js 환경에서 자바스크립트로 문제 풀이를 하는 일반적인 방법을 소개합니다. **바나나 프레임워크만을 사용하고 싶으신 분들은 뒤로 가기를 눌러도 좋습니다!**

:::

이번 챕터에서는 바나나 프레임워크 없이 백준 Node.js 환경에서 자바스크립트로 문제 풀이하는 방법 두 가지를 소개합니다.

아래 예제는 모두 [백준 1000번: A+B](https://www.acmicpc.net/problem/1000) 문제를 예시로 설명합니다.

::: info 주목해주세요!

바나나 프레임워크는 문제 풀이 파일 빌드<sup>Build</sup> 과정에서, 입출력<sup>I/O</sup> 속도가 더 빠른 `fs` 모듈을 기본 템플릿으로 사용합니다.

CLI 옵션 및 `bananass.config.*` 파일에서, 빌드 과정에서 사용할 템플릿을 `fs` 모듈 대신 `readline` 모듈로 변경할 수 있습니다. 자세한 내용은 CLI 옵션 및 바나나 프레임워크 설정 파일 문서를 참고해주세요!

:::

---

[[TOC]]

## `fs` 모듈 이용하기 {#using-fs-module}

::: info 주목해주세요!

`fs` 모듈을 이용한 방식은 `readline`을 이용한 방식보다 메모리가 적게 소요되고, 시간이 훨씬 빠르다는 장점이 있습니다.

일례로, `readline` 모듈을 이용한 백준 1000번 문제 풀이는 대략적으로 메모리 `9660KB` 내외, 시간 `124ms` 내외를 소요하는 반면, `fs` 모듈의 경우 메모리 `9340KB` 내외, 시간 `96ms` 내외를 소요합니다.

이러한 성능상의 이유로, 바나나 프레임워크에서는 특별한 예외 상황을 제외하고는 항상 `fs` 모듈을 사용할 것을 권장합니다.

:::

`fs` 모듈을 이용한 방식에는 크게 2가지 종류가 있습니다.

첫 번째로, 입력 파일의 경로로 `/dev/stdin`을 사용한 방식이 있고,

두 번째로, 입력 파일의 경로 대신, 표준 입력<sup>`stdin`</sup>을 나타내는 파일 디스크립터<sup>File Descriptor</sup> `0`을 사용하여 파일을 읽어오는 방식이 있습니다.

우선, 첫 번째 방식을 살펴볼까요?

### `readFileSync('/dev/stdin')` 사용 {#using-readfilesync-dev-stdin}

1000번 문제를 푸는 예제는 아래와 같습니다.

이는, 여러 블로그 등의 문서에서 자바스크립트를 통한 백준 문제 풀이를 설명할 때 주로 사용하는 방식 중 하나입니다.

```js {2} [1000-raw-fs.cjs]
const [a, b] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(a + b);
```

하지만, 이 방식은 아래와 같은 이유로 추천하지 않습니다.

`/dev/stdin`을 이용한 방식은 백준 서버 환경에 의존적입니다. 표준 입력 `stdin`을 통해 입력값을 받아오는 일반적인 방식이 아닌, 특정 경로에 위치한 파일에 대해 파일 시스템을 통해 입력값을 읽어오기 때문입니다. 일례로, 백준 서버 환경에서의 일부 문제들은 입력 파일의 경로가 `/dev/stdin`이 아닐 수 있습니다. 이로 인해, `/dev/stdin` 경로를 사용하면 일부 문제에서 런타임 에러(EACCES)가 발생합니다. (자세한 내용은 ['Node.js 사용 시 런타임 에러(EACCES)가 발생한다면?'](https://www.acmicpc.net/board/view/137718) 게시글을 참고해주세요.)

따라서, `readFileSync('/dev/stdin')`는 범용적인 방식이 아닌 특정 환경에만 의존적인 방식으로, `fs` 모듈을 사용하고자 한다면, 아래에서 소개할 `readFileSync(0, 'utf-8')`을 이용하는 것을 권장합니다.

### `readFileSync(0, 'utf-8')` 사용 {#using-readfilesync-0-utf-8}

1000번 문제를 푸는 예제는 아래와 같습니다.

```js {2} [1000-raw-fs.cjs]
const [A, B] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split(' ')
  .map(Number);

console.log(A + B);
```

`readFileSync(0, 'utf-8')`에서 `0`은 파일 디스크립터<sup>File Descriptor</sup>를 의미합니다. 파일 디스크립터 `0`은 표준 입력 `stdin`을 나타냅니다. 따라서, 이 코드는 표준 입력 `stdin`으로부터 데이터를 읽어오는 것이죠.

이 방식은 `/dev/stdin`을 사용한 방식과 달리, 표준 입력을 사용하므로 백준 서버 환경에 의존적이지 않고 런타임 에러(EACCES)도 발생하지 않습니다. 따라서, `fs` 모듈을 사용할 경우 이 방식을 사용하는 것이 바람직합니다.

## `readline` 모듈 이용하기 {#using-readline-module}

`readline` 모듈을 이용한 방식은 `stdin`으로부터 데이터를 읽어오고 `stdout`으로 출력하는 방식입니다. `readline` 모듈에 대한 설명은 아래 링크에 자세히 설명되어 있습니다.

- [`readline`](https://nodejs.org/api/readline.html)
- [`readline.createInterface(options)`](https://nodejs.org/api/readline.html#readlinecreateinterfaceoptions)
- [Event `'close'`](https://nodejs.org/api/readline.html#event-close)
- [Event `'line'`](https://nodejs.org/api/readline.html#event-line)

문제 풀이를 위한 코드 템플릿은 기본적으로 아래와 같습니다. 바나나 프레임워크를 사용하던 방식과 동일하게 `solution` 함수에 문제 풀이를 위한 로직을 작성하면 됩니다.

```js [1000-raw-rl.cjs]
const { createInterface } = require('readline');
const { stdin: input, stdout: output } = require('process');
const { EOL } = require('os');

const rl = createInterface({ input, output });
let inputFile = '';

rl.on('line', line => {
  inputFile += `${line}${EOL}`;
}).on('close', () => {
  console.log(solution(inputFile));
});

function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}
```

`readline` 모듈을 이용한 방식은 `fs` 모듈을 이용한 방식보다 다소 어렵고 복잡하게 느껴집니다! 다만, [프로그래머스](https://programmers.co.kr/)의 일부 자바스크립트 문제들은 위와 같은 `readline` 모듈을 이용하는 경우가 종종 있으므로, `readline` 모듈을 이용한 방식도 익혀두시기를 권장합니다!
