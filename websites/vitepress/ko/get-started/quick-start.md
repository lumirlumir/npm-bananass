# 빠르게 시작하기 {#quick-start}

::: danger 반드시 읽어주세요!

이번 챕터는 상세한 설치 방법 및 사용 방법을 설명하기 보다는, 쉽고 빠르게 바나나 프레임워크를 만나볼 수 있는 방법만을 소개합니다! 바나나 프레임워크의 상세한 사용 방법은 [학습하기](../learn/) 문서를 참고해주세요.

:::

지금 바로 바나나 프레임워크를 만나볼 수 있는, 빠르게 시작하기 문서에 오신 것을 환영합니다!

이번 챕터에서는 `create-bananass` 명령어를 이용하여 바나나 프레임워크를 설치하고, 예제로 추가되어 있는 [백준 1000번 문제](https://www.acmicpc.net/problem/1000)를 풀고 제출하는 방법에 대해 소개합니다!

---

[[TOC]]

## 빠르게 설치하기 {#quick-install}

::: info 주목해주세요!

다양한 환경에 대응하는 상세한 설치 방법은 [설치하기](installation.md) 문서를 참고해주세요!

:::

### 선행 설치 사항 {#prerequisites}

`create-bananass` 명령어를 실행하기 전, `^20.18.0 || >= 22.3.0` 범위에 해당하는 최신 버전의 [Node.js](https://nodejs.org/) 및 [Git](https://git-scm.com/)을 설치해주세요.

### `create-bananass`로 설치하기 {#install-with-create-bananass}

Node.js 및 Git을 설치하셨나요? 이제, 아래 명령어 중 하나를 통해 `create-bananass`를 실행해주세요!

::: code-group

```sh [npm]
$ npx create-bananass@latest
# 또는
$ npm create bananass@latest
# 또는
$ npm init bananass@latest
```

:::

다음으로, 아래와 같은 질문에 답해주세요. 답변에 따라 바나나 프레임워크의 구성 및 설정이 달라집니다!

`○ Yes / ● No`의 경우, 키보드 화살표와 엔터키 혹은 `y` 또는 `n` 키를 눌러 선택할 수 있습니다.

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

모든 선택을 완료하면 자동으로 바나나 프레임워크 프로젝트가 생성되며, 성공적으로 설치하였을 경우 아래와 같은 메시지가 출력됩니다.

```sh
✓ Successfully created a new Bananass framework project!
```

## 빠르게 훑어보기 {#quick-overview}

이제, 바나나 프레임워크 프로젝트가 생성되었습니다! 생성된 프로젝트의 기본 구조는 아래와 같습니다.

```sh {2-3,6-7,14}
bananass-project/
├── .bananass/ # [!code focus] `build` 명령어 실행시 생성됩니다!
│   ├── 1000.cjs # [!code focus] `npx bananass build 1000` 명령어를 실행하면 생성됩니다!
│   ├── 1001.cjs # `npx bananass build 1001` 명령어를 실행하면 생성됩니다!
│   └── ...
├── bananass/ # [!code focus] 
│   ├── 1000.{js,mjs,cjs,ts,mts,cts} # [!code focus] 
│   ├── 1001.{js,mjs,cjs,ts,mts,cts}
│   └── ...
├── .gitattributes
├── .gitignore
├── bananass.config.{js,mjs,cjs,ts,mts,cts}
├── eslint.config.{mjs,mts}
├── package.json # [!code focus] 
├── prettier.config.mjs
├── README.en.md
├── README.ko.md
└── ...
```

강조 표시된 폴더 및 파일에 집중해주세요! 이번 챕터에서 중요한 역할을 맡고 있습니다.

### `package.json` {#package-json}

`package.json`은 바나나 프레임워크의 설정을 담고 있는 파일입니다!

`package.json`의 `scripts` 항목에는 여러 명령어가 추가되어 있습니다. `scripts`에 추가되어 있는 명령어들은 `npm run build`, `npm run run`, `npm run open` 등의 터미널(CLI) 명령어를 통해 실행할 수 있습니다.

이 중 `build`, `run`, `open` 명령어에 집중해주세요! 앞으로, 이 명령어들을 활용하여 함께 문제를 풀고 제출하려 합니다.

```json {4,6,8}
{
  // ...
  "scripts": {
    "build": "bananass build",
    // ...
    "open": "bananass open",
    // ...
    "run": "bananass run",
  }
  // ...
}
```

### `bananass` 폴더 {#bananass-folder}

`bananass` 폴더는 바나나 프레임워크를 통한 문제 풀이 파일이 위치할 폴더입니다! 이 폴더에 파일을 만들어 문제를 풀고 제출할 코드를 작성해주세요.

1000번 문제의 경우 `1000.js`라는 파일 이름으로 작성하면 되고, 1001번 문제는 `1001.js`, 12345번 문제는 `12345.js` 파일로 작성하면 됩니다! 현재는 예제로서, `1000.js`, `1001.js` 등의 문제 풀이 파일이 미리 작성되어 있습니다.

### `.bananass` 폴더 {#dot-bananass-folder}

`.bananass` 폴더는 `npm run build 1000` 혹은 `npx bananass build 1000` 등의 `build` 명령어를 터미널에 입력하였을 때, 자동으로 생성되는 폴더입니다.

`bananass` 폴더에 위치한 `1000.js` 등의 문제 풀이 파일이 `.bananass` 폴더에 위치한 `1000.cjs` 등 동일한 이름을 가진 파일로 변환됩니다! 변환된 파일은 백준 Node.js 환경과 100% 호환되며, 해당 파일의 내용을 복사하여 백준 홈페이지에 붙여넣기 하면 제출할 수 있습니다.

## 빠르게 풀어보기 {#quick-solve}

이제, 바나나 프레임워크를 통해 문제를 풀어보겠습니다. 함께 [백준 1000번 문제](https://www.acmicpc.net/problem/1000)를 풀어보죠!

우선, `bananass` 폴더에 위치한 `1000.js` 혹은 `1000.ts` 파일을 열어주세요. 아래와 같이 작성되어 있습니다.

<!-- @include: @/shared/solution-file-example-full.ko.md -->

파일을 한번 살펴보셨나요? 바나나 프레임워크 문제 풀이 파일의 핵심은 **3가지**입니다! `testcases`, `solution` 그리고 `export`. 기억하셨나요?

다시 한번 설명하겠습니다. `testcases`, `solution` 그리고 `export`!

### `testcases` 변수 작성하기 {#writing-testcases}

`testcases`는 `solution` 함수의 입력값과 출력값을 담고 있는 배열입니다! `input`과 `output`은 백준, 코드포스 등의 사이트에 명시되어 있는 입력값<sup>예제 입력</sup>과 출력값<sup>예제 출력</sup>을 의미하며, 이와 동일하게 작성하면 됩니다.

`testcases`의 `input`에 해당하는 값을 `solution` 함수에 입력하면, `output`에 해당하는 값을 반환해야 합니다. `testcases`는 선택 사항이며, 작성하지 않아도 문제 풀이에는 지장이 없습니다. 하지만, 작성할 경우 `npm run run` 혹은 `npx bananass run` 명령어를 통해 작성한 `solution` 함수가 올바르게 동작하는지 확인할 수 있습니다. 따라서, 문제 풀이를 작성하기 전, 먼저 `testcases`를 작성하여 `solution` 함수의 예상 동작을 정의하는 것을 추천합니다!

### `solution` 함수 작성하기 {#writing-solution}

`solution`은 문제 풀이를 위한 함수입니다. `input`을 인자로 받아, `output`에 해당하는 문제의 정답을 반환해야 합니다.

`input`은 항상 문자열로 주어지며, `output`은 문자열<sup>`string`</sup>, 숫자<sup>`number`</sup>, 불리언<sup>`boolean`</sup> 타입 중 하나를 반환해야 합니다.

### `testcases` 및 `solution` 내보내기 {#exporting-testcases-and-solution}

::: danger 반드시 읽어주세요!

`module.exports` 및 `export default` 등을 통하여 `solution` 함수와 `testcases` 변수를 내보낼 때, `solution` 및 `testcases`를 제외한 다른 이름을 사용하면 안됩니다!

이는, 바나나 프레임워크의 규칙으로, 모듈 내보내기를 진행할때는 반드시 `solution`과 `testcases`라는 이름을 사용해야만 합니다.

:::

`testcases` 및 `solution` 함수는 `module.exports` 혹은 `export default`를 통해 내보내야 합니다.

## 빠르게 실행하기 {#quick-run}

<!-- @include: @/shared/wip.ko.md -->

## 빠르게 빌드하기 {#quick-build}

<!-- @include: @/shared/wip.ko.md -->

## 빠르게 제출하기 {#quick-submit}

<!-- @include: @/shared/wip.ko.md -->
