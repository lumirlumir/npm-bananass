# 바나나<sup>Bananass</sup>

[![Lint](https://img.shields.io/github/actions/workflow/status/lumirlumir/npm-bananass/lint.yml?label=Lint&color=fff478&labelColor=333333&logo=github)](https://github.com/lumirlumir/npm-bananass/actions/workflows/lint.yml)
[![Test](https://img.shields.io/github/actions/workflow/status/lumirlumir/npm-bananass/test.yml?label=Test&color=fff478&labelColor=333333&logo=github)](https://github.com/lumirlumir/npm-bananass/actions/workflows/test.yml)
[![Codecov](https://img.shields.io/codecov/c/gh/lumirlumir/npm-bananass?token=2zUCHlMFT3&label=Codecov&color=fff478&labelColor=333333&logo=codecov)](https://codecov.io/gh/lumirlumir/npm-bananass)
![Node Current](https://img.shields.io/node/v/bananass?label=Node&color=fff478&labelColor=333333&logo=node.js)

[![npm package bananass latest version](https://img.shields.io/npm/v/bananass?label=bananass@latest&color=fff478&labelColor=333333&logo=npm)](https://www.npmjs.com/package/bananass)
[![npm package bananass next version](https://img.shields.io/npm/v/bananass/next?label=bananass@next&color=fff478&labelColor=333333&logo=npm)](https://www.npmjs.com/package/bananass)

<kbd>한국어</kbd> | <kbd>[English](README.en.md)</kbd>

백준 자바스크립트 프레임워크.

자바스크립트 알고리즘 문제 풀이의 새로운 패러다임.

> [!IMPORTANT]
>
> ```js
> const whyBananass = {
>   banana: '🍌',
>   bananas: '🍌🍌',
>   bananass: '🍌🍌🍌🍌',
> }
> ```
>
> ```js
> console.log(('b' + 'a' + +'a' + 'a').toLowerCase() + (!(1/0) + [])[3].repeat(2));
> ```

<!-- markdownlint-disable-next-line md026 -->
## 안녕, 바나나!

바나나<sup>Bananass</sup> 프레임워크에 오신 것을 환영합니다!

바나나는 **자바스크립트<sup>JavaScript</sup> 및 타입스크립트<sup>TypeScript</sup> 기반의 알고리즘 문제 풀이를 위한 백준 프레임워크**로, 백준 Node.js 환경에서 반복적으로 마주치는 문제점들을 해결하며, 간결하고 편리한 사용자 경험을 제공합니다.

- 타입스크립트<sup>TypeScript</sup> 지원이 필요하시다고요?
- ES16<sup>ES2025</sup> 등 자바스크립트 최신 문법을 쓰고 싶은데 막히셨나요?
- 외부 라이브러리를 사용하고 싶으신가요?
- 매번 `readline` / `fs` 템플릿 코드 복붙하기 지치셨나요?

이제 걱정하지 마세요! 바나나 프레임워크는 이런 문제점들을 모두 해결합니다.

## 왜 바나나일까요?

함께 자바스크립트를 이용한 [백준 1000번: A+B](https://www.acmicpc.net/problem/1000) 문제 풀이 예제를 살펴봅시다!

- 기존 방법을 통한 문제 풀이.

    ```js
    const readline = require('node:readline');
    const { EOL } = require('node:os');

    let inputStr = '';

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.on('line', line => {
      inputStr = `${inputStr}${line}${EOL}`;

    }).on('close', () => {
      console.log(solution(inputStr));

      process.exit(0);
    });

    function solution(inputStr) {
      const [a, b] = inputStr
        .trim()
        .split(' ')
        .map(val => Number(val));

      return a + b;
    }
    ```

- 바나나 프레임워크를 이용한 문제 풀이.

    ```js
    function solution(input) {
      const [a, b] = input
        .trim()
        .split(' ')
        .map(Number);

      return a + b;
    }

    export default { solution };
    ```

더 간결하고, 더 직관적인 코드! 입력 처리에 들이던 시간은 줄이고, 오직 알고리즘에만 집중할 수 있습니다.

## 이게 전부인가요?

물론, 아닙니다!

- 자바스크립트<sup>JavaScript</sup> 및 타입스크립트<sup>TypeScript</sup> 지원.
- ESM<sup>ECMAScript Module</sup> 및 CommonJS 모듈 시스템 지원.
- 백준 Node.js 환경에 구애받지 않는 ES16<sup>ES2025</sup> 등 최신 문법 지원.
- 사용자 정의 모듈 및 `lodash` 등 외부 라이브러리 불러오기 지원.
- 프로그래머스처럼 `solution` 함수 하나로 시작하기 지원.
- 테스트 케이스 작성 및 실행 지원.
- `create-bananass`로 시작하기 지원.
- `fs` 모듈을 사용한 더욱 빠른 입출력 지원.
- 편의를 위한 다양한 CLI 명령어 지원.
- 풍부하고 상세한 문서 지원.
- ESLint 및 Prettier 자체 지원.

어떤가요? 바나나 프레임워크를 통해 더욱 편리한 문제 풀이를 경험해보고 싶지 않으신가요?

## 바나나로 시작하기

[React](https://ko.react.dev)의 `create-react-app`, [Next.js](https://nextjs.org)의 `create-next-app` 처럼, 바나나 프레임워크에서 제공하는 `create-bananass`로 지금 바로 새로운 문제 풀이 패러다임을 경험해보세요!

바나나 프레임워크는 `create-bananass`를 통해 즉시 설치하고 사용할 수 있습니다.

```sh
npm create bananass@latest
```

더 자세한 사용법은 [바나나 프레임워크 문서](https://bananass.lumir.page)를 참고해주세요.

## 바나나 프레임워크 문서

> <https://bananass.lumir.page>

바나나 프레임워크는 문서화를 가장 큰 가치로 여깁니다. 바나나 프레임워크의 모든 사용법과 기능은 [바나나 프레임워크 문서](https://bananass.lumir.page)에서 확인하실 수 있습니다.

## 기여(이슈<sup>Issue</sup>, 끌어오기 요청<sup>Pull Request</sup>, 토론<sup>Discussion</sup>)

바나나 프레임워크 기여에 관심을 가져주셔서 감사합니다!

버그<sup>Bug</sup> 및 제안<sup>Suggestion</sup> 등 여러 주제에 대한 이슈<sup>Issue</sup>, 끌어오기 요청<sup>Pull Request</sup>, 토론<sup>Discussion</sup> 등을 모두 환영합니다.

다만, 올바른 커뮤니티 환경을 준수하고 더 나은 오픈 소스를 만들기 위해, 바나나 프레임워크에 기여하기 전 반드시 아래 내용들을 확인해주세요.

- [기여자 행동 강령 규약](CODE_OF_CONDUCT.md)
- [기여하기](CONTRIBUTING.md)

## 버전 정책<sup>Versioning</sup>

바나나 프레임워크는 [유의적 버전 정책<sup>Sementic Versioning</sup>](https://semver.org/lang/ko/)을 따릅니다. 모든 릴리즈 버전은 `주(MAJOR).부(MINOR).수(PATCH)` 형식을 따릅니다.

## 기여자 행동 강령 규약<sup>Code of Conduct</sup>

커뮤니티에 기여하기 전, [기여자 행동 강령 규약](CODE_OF_CONDUCT.md)을 참고해주세요.

## 변경 사항<sup>Change Log</sup>

변경 사항에 대한 상세한 내용을 확인하려면, [변경 사항](CHANGELOG.md)을 참고해주세요.

## 보안<sup>Security</sup>

보안 문제를 발견하셨나요? [보안](SECURITY.md) 문서를 참고해주세요.

## 라이선스<sup>License</sup>

바나나 프레임워크는 MIT 라이선스를 따릅니다. [라이선스](LICENSE.md) 문서를 참고해주세요.
