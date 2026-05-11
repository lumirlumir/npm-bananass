# 빠르게 시작하기 {#quick-start}

지금 바로 바나나 프레임워크를 만나볼 수 있는, **빠르게 시작하기** 문서에 오신 것을 환영합니다!

이번 챕터에서는 [`create-bananass`](installation#getting-started-with-create-bananass) 명령어를 이용하여 바나나 프레임워크를 설치하고, 예제로 추가되어 있는 [백준 1000번 문제](https://www.acmicpc.net/problem/1000)를 풀고 제출하는 방법에 대해 소개합니다!

::: danger 반드시 읽어주세요!

이번 챕터는 상세한 설치 방법 및 사용 방법을 설명하기 보다는, 쉽고 빠르게 바나나 프레임워크를 만나볼 수 있는 방법만을 소개합니다! 바나나 프레임워크의 상세한 사용 방법은 [학습하기](../learn/) 문서를 참고해주세요.

:::

---

[[TOC]]

## 빠르게 설치하기 {#quick-install}

::: info 주목해주세요!

다양한 환경에 대응하는 상세한 설치 방법은 [설치하기](installation.md) 문서를 참고해주세요!

:::

### 선행 설치 사항 {#prerequisites}

`create-bananass` 명령어를 실행하기 전, `^20.19.0 || ^22.13.0 || >=24.0.0` 범위에 해당하는 최신 버전의 [Node.js](https://nodejs.org/) 및 [Git](https://git-scm.com/)을 설치해주세요.

### `create-bananass`로 설치하기 {#install-with-create-bananass}

Node.js 및 Git을 설치하셨나요? 이제, 아래 명령어 중 하나를 터미널(CLI)에 입력해 `create-bananass`를 실행해주세요!

::: code-group

```sh [npm]
$ npx create-bananass@latest
# 또는
$ npm create bananass@latest
# 또는
$ npm init bananass@latest
```

:::

만약, 아래와 같은 메시지가 출력된다면, 키보드에서 `y` 키를 누르고 `Enter`를 눌러주세요. (`0.1.0`에 해당하는 패키지 버전은 달라질 수 있습니다.)

```sh
Need to install the following packages:
create-bananass@0.1.0
Ok to proceed? (y)
```

다음으로, 아래와 같은 질문에 답해주세요. 답변에 따라 바나나 프레임워크의 구성 및 설정이 달라집니다!

`○ Yes / ● No`의 경우, 키보드 화살표와 `Enter` 혹은 `y` 또는 `n` 키를 눌러 선택할 수 있습니다.

```sh
❯ Which directory should this project be located in?
.

❯ Would you like to use CommonJS module system?
○ Yes / ● No

❯ Would you like to use TypeScript?
○ Yes / ● No

❯ Would you like to skip initializing Visual Studio Code configurations?
○ Yes / ● No

❯ Would you like to skip initializing Git?
○ Yes / ● No

❯ Would you like to skip installing packages with npm?
○ Yes / ● No
```

모든 선택을 완료하면, 지정한 폴더에 자동으로 바나나 프레임워크 프로젝트가 생성되며, 성공적으로 설치하였을 경우 아래와 같은 메시지가 출력됩니다.

```sh
✓ Successfully created a new Bananass framework project!
```

## 빠르게 훑어보기 {#quick-overview}

::: info 주목해주세요!

더욱 자세한 프로젝트 구조에 대한 설명은 [프로젝트 구조](../learn/project-structure.md) 문서를 참고해주세요!

:::

이제, 바나나 프레임워크 프로젝트가 생성되었습니다! 생성된 프로젝트의 기본 구조는 아래와 같습니다.

```sh {2-3,7-8,20}
bananass-project/
├── .bananass/ # [!code focus] `build` 명령어 실행시 자동 생성됩니다!
│   ├── 1000.cjs # [!code focus] `npx bananass build 1000` 명령어를 실행하면 생성됩니다!
│   ├── 1001.cjs # `npx bananass build 1001` 명령어를 실행하면 생성됩니다!
│   ├── 2558.cjs # `npx bananass build 2558` 명령어를 실행하면 생성됩니다!
│   └── ...
├── bananass/ # [!code focus]
│   ├── 1000.{mjs,cjs,mts,cts} # [!code focus]
│   ├── 1001.{js,ts}
│   ├── 2558/
│   │   ├── index.{js,ts}
│   │   ├── solution.{js,ts}
│   │   └── testcases.{js,ts}
│   └── ...
├── .gitattributes
├── .gitignore
├── README.md
├── bananass.config.{js,mjs,cjs,ts,mts,cts}
├── eslint.config.{mjs,mts}
├── package.json # [!code focus]
├── prettier.config.mjs
└── ...
```

우선, 강조 표시된 폴더 및 파일에 집중해주세요! 이번 챕터에서 중요한 역할을 맡고 있습니다.

### `package.json` {#package-json}

`package.json`은 바나나 프레임워크가 [Node.js](https://nodejs.org/) 환경에서 동작하기 위한 설정들을 담고 있는 파일입니다!

`package.json`의 `scripts` 항목에는 여러 명령어가 추가되어 있습니다. `scripts`에 추가되어 있는 명령어들은 [`npm run build 1000`](../learn/building-a-solution-file.md), [`npm run run 1000`](../learn/running-a-solution-file.md), [`npm run open 1000`](../learn/submitting-a-solution-file.md) 등의 터미널(CLI) 명령어를 통해 실행할 수 있습니다.

`scripts`에 존재하는 여러 명령어들 중 `build`, `run`, `open` 명령어에 집중해주세요! 앞으로, 이 명령어들을 활용하여 함께 문제를 풀고 제출하려 합니다.

```json [package.json] {5,7,9}
{
  // ...
  "scripts": {
    // ...
    "build": "bananass build", // [!code focus]
    // ...
    "open": "bananass open", // [!code focus]
    // ...
    "run": "bananass run", // [!code focus]
    // ...
  }
  // ...
}
```

### `bananass` 폴더 {#bananass-folder}

`bananass` 폴더는 바나나 프레임워크를 통한 문제 풀이 파일이 위치할 폴더입니다! 이 폴더에 파일 혹은 폴더를 추가하여 문제를 풀고 제출할 코드를 작성해주세요.

현재는 예제로서, `bananass` 폴더에 `1000`번, `1001`번 문제 풀이 *파일* 및 `2558`번 문제 풀이 *폴더*가 미리 작성되어 있습니다.

문제 풀이 파일은 [하나의 파일에 모든 로직을 작성](../learn/writing-all-logic-in-a-single-file.md)할 수도 있고, [하나의 폴더에 모듈을 분리하여 로직을 작성](../learn/writing-modular-logic-in-a-single-folder.md)할 수도 있습니다. `1000`번 및 `1001`번 문제 풀이 파일은 **하나의 파일에 모든 로직을 작성**한 예시이며, `2558`번 문제 풀이 폴더는 **하나의 폴더에 모듈을 분리하여 로직을 작성**한 예시입니다.

### `.bananass` 폴더 {#dot-bananass-folder}

`.bananass` 폴더는 `npm run build 1000` 혹은 `npx bananass build 1000` 등의 [`build`](../learn/other-useful-cli-commands.md#build) 명령어를 터미널에 입력하여 문제 풀이 파일을 빌드하였을 때, 자동으로 생성되는 폴더입니다.

`bananass` 폴더에 위치한 `1000.mjs` 등의 문제 풀이 파일이 `.bananass` 폴더에 위치한 `1000.cjs` 등의 동일한 이름을 가진 파일로 변환됩니다! 변환된 파일은 [백준](https://www.acmicpc.net/), [코드포스](https://codeforces.com/) 등 문제 풀이 플랫폼들의 Node.js 환경과 호환되며, 해당 파일의 내용을 복사하여 홈페이지에 붙여넣기 하면 제출할 수 있습니다.

## 빠르게 풀어보기 {#quick-solve}

이제, 바나나 프레임워크를 통한 문제 풀이 시간입니다! 함께 [백준 1000번 문제](https://www.acmicpc.net/problem/1000)를 풀어보죠.

우선, `bananass` 폴더에 위치한 `1000.{mjs,cjs,mts,cts}` 파일을 열어주세요. 아래와 같이 작성되어 있습니다.

<!-- @include: @/shared/solution-file-example-full.ko.md -->

파일을 한번 살펴보셨을까요? 바나나 프레임워크 문제 풀이 파일의 핵심은 <u>**3가지**</u>입니다! [`testcases`](../learn/writing-test-cases.md), [`solution`](../learn/writing-a-solution-function.md) 그리고 [`export`](../learn/exporting-test-cases-and-solution-function.md). 기억하셨나요?

::: danger 반드시 읽어주세요!

중요한 내용이라, 한글로 풀어서 다시 한번 설명하겠습니다.  
**테스트 케이스**<sup>[`testcases`](../learn/writing-test-cases.md)</sup>, **문제 풀이 함수**<sup>[`solution`](../learn/writing-a-solution-function.md)</sup> 그리고 **내보내기**<sup>[`export`](../learn/exporting-test-cases-and-solution-function.md)</sup>!

:::

### `testcases` 변수 작성하기 {#writing-testcases}

`testcases`는 `solution` 함수의 입력값과 출력값을 담고 있는 객체들의 배열입니다! `input`과 `output`은 백준, 코드포스 등의 사이트에 명시되어 있는 입력값<sup>예제 입력</sup>과 출력값<sup>예제 출력</sup>을 의미하며, 이와 동일하게 작성하시면 됩니다.

`testcases`의 `input`에 해당하는 값을 `solution` 함수에 입력하면, `output`에 해당하는 값을 반환해야 합니다. `testcases`는 선택 사항이며, 작성하지 않아도 문제 풀이 빌드<sup>`build`</sup>에는 지장이 없습니다. 하지만, 작성할 경우 `npm run run` 혹은 `npx bananass run` 명령어를 통해 작성한 `solution` 함수가 올바르게 동작하는지 확인할 수 있습니다. 따라서, 문제 풀이를 작성하기 전, 먼저 `testcases`를 작성하여 `solution` 함수의 예상 동작을 정의하는 것을 추천합니다!

### `solution` 함수 작성하기 {#writing-solution}

`solution`은 문제 풀이를 위한 함수입니다. `input`을 인자로 받아, `output`에 해당하는 문제의 정답을 반환해야 합니다.

`input`은 항상 문자열로 주어지며, `output`은 문자열<sup>`string`</sup>, 숫자<sup>`number`</sup>, 불리언<sup>`boolean`</sup> 타입 중 하나를 반환해야 합니다.

입력값이 복잡할 경우, 문자열 `input`을 파싱하여 사용하기 편한 형태로 변환하는 과정을 거쳐야 합니다. 해당 내용에 대해서는 [입력값 분해하기](../learn/parsing-input-value.md) 문서를 참고해주세요!

### `testcases` 및 `solution` 내보내기 {#exporting-testcases-and-solution}

::: danger 반드시 읽어주세요!

`export default`<sup>ESM</sup> 및 `module.exports`<sup>CommonJS</sup> 등을 통하여 `testcases` 변수와 `solution` 함수를 내보낼 때, `testcases` 및 `solution`을 제외한 다른 이름을 사용하면 안됩니다!

이는, 바나나 프레임워크의 규칙으로, 모듈 내보내기를 진행할때는 반드시 `testcases`와 `solution`이라는 이름만을 사용해야 합니다.

:::

`testcases` 변수 및 `solution` 함수를 `export default` 및 `module.exports` 등을 통해 내보내야만, 바나나 프레임워크의 `build`, `run` 명령어들을 정상적으로 사용할 수 있습니다.

아래와 같이 `testcases` 및 `solution`을 하나의 객체로 묶어 내보내주세요!

```js
// ESM
export default { testcases, solution };

// CommonJS
module.exports = { testcases, solution };
```

## 빠르게 실행하기 {#quick-run}

::: info 주목해주세요!

`npx bananass` 명령어가 길어 불편하시다면, `bananass` 대신 `b`를 사용하셔도 됩니다! `npx b`는 `npx bananass`의 약어입니다.

:::

이제, 문제 풀이 함수 `solution`을 올바르게 작성했는지 확인할 시간입니다! 아래 명령어 중 하나를 터미널(CLI)에 입력하여 `solution` 함수가 올바르게 동작하는지 확인해보세요.

```sh
$ npm run run 1000
# 또는
$ npx bananass run 1000
# 또는
$ npx b run 1000
```

정상적으로 동작할 경우, `✓ Bananass run completed successfully`와 같은 메시지와 함께, 입력값과 출력값이 일치하는지 확인할 수 있는 여러 콘솔 메시지가 출력됩니다!

## 빠르게 빌드하기 {#quick-build}

`run` 명령어를 통해 결과를 확인하였을 때, `solution` 함수가 예상대로 동작한다면, 모든 준비가 완료된 것입니다! 이제, 아래 명령어 중 하나를 입력해 문제 풀이 파일을 빌드해보세요.

```sh
$ npm run build 1000
# 또는
$ npx bananass build 1000
# 또는
$ npx b build 1000
```

명령어를 실행하면, `.bananass` 폴더에 `1000.cjs` 파일이 생성됩니다! 코드가 압축되어 가독성은 떨어지지만, 바나나 프레임워크의 `build` 명령어를 통해 정상적으로 변환된 파일입니다. 아래와 같은 코드가 생성되면 성공적으로 빌드된 것입니다!

```js [.bananass/1000.cjs]
/**
 * This file was generated using the Baekjoon Framework for JavaScript 'Bananass🍌'
 *
 * Bananass Homepage: https://bananass.lumir.page
 * Bananass GitHub Repository: https://github.com/lumir/npm-bananass
 *
 * Released under the MIT License
 * Copyright © 2024-2025 lumir
 *
 * DO NOT DELETE THIS COMMENT
 */
(()=>{var t={24:t=>{"use strict";t.exports=require("node:fs")},534:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});const r={solution:function(t){const[e,o]=t.trim().split(" ").map((t=>Number(t)));return e+o},testcases:[{input:"1 2",output:"3"},{input:"3 4",output:"7"},{input:"5 6",output:"11"}]}}},e={};function o(r){var u=e[r];if(void 0!==u)return u.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,o),n.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};const{readFileSync:r}=o(24),u=o(534),{solution:n}=u?.default??u,i=r(0,"utf-8");console.log(n(i))})();
```

## 빠르게 제출하기 {#quick-submit}

이제, 마지막으로 문제 풀이 파일을 제출할 시간입니다! 아래 [`open`](../learn/other-useful-cli-commands#open)을 이용한 명령어 중 하나를 터미널(CLI)에 입력하여 백준 홈페이지를 열어주세요.

```sh
npm run open 1000
# 또는
npx bananass open 1000
# 또는
npx b open 1000
```

홈페이지가 열렸나요? 이제, `.bananass/1000.cjs` 파일의 내용을 복사하여 백준 홈페이지에 붙여넣기 하고 제출해주세요!

통과하셨나요? 축하드립니다! 이제, 바나나 프레임워크를 통해 문제를 풀고 제출하는 기본적인 방법을 익히셨습니다!

## 마치며 {#conclusion}

여러분들은 이제 바나나 프레임워크를 사용할 수 있는 기본 준비가 되었습니다. [학습하기](../learn/index.md) 문서를 통해 바나나 프레임워크의 더 많은 사용법과 다양한 기능들을 익혀보세요!

또한, [문제 풀이 해답](../solutions/index.md)을 통해 다른 사용자들이 어떻게 문제 풀이를 진행했나 확인해보세요.:partying_face:
