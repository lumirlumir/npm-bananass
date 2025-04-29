# 안녕, 바나나! {#hello-bananass}

바나나<sup>Bananass</sup> 프레임워크에 오신 것을 환영합니다!:banana::tada::confetti_ball::partying_face:

바나나는 **자바스크립트<sup>JavaScript</sup> 및 타입스크립트<sup>TypeScript</sup> 기반의 알고리즘 문제 풀이를 위한 프레임워크**로, [코드포스](https://codeforces.com/)ㆍ[백준](https://www.acmicpc.net/) 등 다양한 문제 풀이 플랫폼들의 Node.js 환경에서 반복적으로 마주치는 문제점들을 해결하며, 간결하고 편리한 사용자 경험을 제공합니다.

그렇다면, 왜 바나나일까요? 그리고 바나나 프레임워크는 기존의 불편함들을 어떻게 해결할까요?

## 자바스크립트<sup>JavaScript</sup> 및 타입스크립트<sup>TypeScript</sup> 지원 {#support-for-javascript-and-typescript}

현대<sup>Modern</sup> 자바스크립트 개발 환경에서, 타입스크립트는 빼놓을 수 없는 위치가 되었습니다.

## ESM<sup>ECMAScript Module</sup> 및 CommonJS 모듈 시스템 지원 {#support-for-esm-and-commonjs-module-systems}

## Node.js 환경에 구애받지 않는 ES16<sup>ES2025</sup> 등 최신 문법 지원 {#support-for-modern-syntax}

2024년 12월 기준, [백준의 Node.js 버전](https://help.acmicpc.net/language/info)은 `v16.13.1` 입니다. Node.js `v16.13.1`은 2021년 12월 1일에 발표되었고, 가장 최신의 Node.js `v16` 역시 2023년 08월 08일 부로 그 끝<sup>EOL, End of Life</sup>을 맞이했습니다. 매년 새로운 스펙을 발표하는 자바스크립트는 현재도 계속해서 ES14, ECMAScript2024<sup>ES2024, ES15</sup> ES15, ECMAScript2025<sup>ES2025, ES16</sup> 등의 새로운 표준을 매년 출시하고 있습니다.

Node.js 16.13.1 버전에서는 toSorted 메서드를 지원하지 않습니다. toSorted 메서드는 ECMAScript 2023에서 도입된 새로운 배열 메서드로, 원본 배열을 변경하지 않고 정렬된 새로운 배열을 반환합니다. 이러한 최신 ECMAScript 기능은 Node.js의 최신 버전에서 지원됩니다. 따라서 toSorted 메서드를 사용하려면 Node.js를 최신 버전으로 업그레이드하시는 것이 좋습니다. 최신 버전의 Node.js는 공식 웹사이트에서 다운로드하실 수 있습니다.
NODE.JS — RUN JAVASCRIPT EVERYWHERE

새로운 등장한 문법들을 사용하고 싶지만, 현실적 제약때문에 이를 망설였던 여러분들에게 바나나 프레임워크는 새로운 가능성을 제시합니다!

> [!TIP]
>
> 바나나 프레임워크는 내부적으로 [바벨<sup>Babel</sup>](https://babeljs.io/)을 통한 트랜스파일링<sup>Transpiling</sup>을 이용해 최신 사양의 문법들을 사용할 수 있게 해줍니다.

## 사용자 정의 모듈 및 `lodash` 등 외부 라이브러리 불러오기 지원 {#support-for-custom-modules-and-external-libraries-like-lodash}

일반적인 웹 개발 혹은 패키지 개발은 PS 문제 풀이와는 방향성이 다른 경우가 많습니다. 대부분 모듈들을 분리하여 별도의 파일에 넣고, 자주 사용되는 모듈들은 재사용성을 높여 활용하며, 다양한 곳에서 이를 불러와서 사용합니다.

기존 문제 풀이에서는 모든 함수들을 하나의 파일에 일괄적으로 작성해야만 하며, 자주 반복해서 사용되는 함수일지라도 매번 반복 작성하거나, 재사용성을 높인다 하더라도 일일이 복사 붙여넣기를 해야만 하는 번거로움이 따릅니다.

바나나 프레임워크는 이러한 불편함을 해소합니다. 외부 모듈을 불러와서 사용하며 재사용성을 높일 수 있으며, 심지어 [`lodash`](https://www.npmjs.com/package/lodash) 같은 유명 라이브러리를 npm을 통해 설치하여 사용할 수 있습니다.

자바스크립트의 빌트인<sup>Built-in</sup> 객체가 지원하지 않는 우선순위 큐<sup>Priority Queue</sup> 등의 라이브러리 등을 미리 만들어 두고 필요한 곳에 사용할 수 있습니다.

> [!TIP]
>
> 바나나 프레임워크는 내부적으로 [웹팩<sup>Webpack</sup>](https://webpack.js.org/)을 통한 모듈 번들링<sup>Module Bundling</sup>을 통해 사용자 정의 모듈 및 외부 라이브러리를 자유롭게 사용할 수 있게 해줍니다.

## 프로그래머스처럼 `solution` 함수 하나로 문제 풀이를 시작하세요

## 편리하게 테스트 케이스를 작성하고 실행하세요

## `create-bananass`로 지금 바로 시작하세요

## 같은 문제라도 더 빠르게 푸세요

> [!TIP]
>
> 바나나 프레임워크는 내부적으로 `readline` 모듈을 사용합니다! 아래 코드와 유사한 코드를 기본 템플릿으로 하여 웹팩<sup>Webpack</sup>을 통해 번들링을 진행한 후, 바벨<sup>Babel</sup>을 통한 트랜스파일링<sup>Transpiling</sup>을 거쳐, 빌드<sup>Build</sup> 결과물들을 생성합니다.

## 편의를 위한 다양한 CLI 명령어 지원

## 풍부하고 상세한 문서 지원

관심 있는 오픈소스가 있지만, 부실한 문서때문에 사용을 망설이신적이 있으신가요? 바나나 프레임워크는 풍부한 문서와 커뮤니티 지원을 통해 여러분들을 돕습니다!

바나나 프레임워크의 사용법을 자세히 알고 싶으신가요? [공식 문서](https://bananass.lumir.page)를 통해 바나나 프레임워크의 사용법을 자세히 알아보세요!

바나나 프레임워크를 이용한 백준 문제 풀이를 확인하고 싶으신가요? 백준 문제 풀이 예시를 통해 다른 사용자들이 어떻게 문제 풀이를 했나 확인해보세요!

바나나 프레임워크를 사용하면서 질문이 있으신가요? [토론<sup>Discussion</sup>](https://github.com/lumirlumir/npm-bananass/discussions)을 통해 다른 사용자들과 소통하고, 문제를 해결해보세요!

버그 수정 혹은 기능 제안을 하고 싶으신가요? [이슈<sup>Issue</sup>](https://github.com/lumirlumir/npm-bananass/issues) 및 [풀 리퀘스트<sup>Pull Request</sup>](https://github.com/lumirlumir/npm-bananass/pulls)를 통해 바나나 프레임워크를 함께 성장시키세요!

## ESLint 및 Prettier 자체 지원

백준 문제를 풀며, 자바스크립트 생태계에서 가장 유명한 에어비앤비<sup>Airbnb</sup> 코드 컨벤션을 따르는 ESLint 및 Prettier의 규칙을 따라가 보세요!

> [!TIP]
>
> 바나나 프레임워크는 최신 사양의 ESLint v9의 flat config를 활용합니다.

## 완전한 오픈소스

바나나<sup>Bananass</sup> 프레임워크는 MIT 라이센스를 따르는 완전한 오픈소스입니다!

수십개의 대형 오픈소스 기여를 통해 성장하며 배운 모든 내용들을 바나나 프레임워크에 녹여냈습니다. 바나나 프레임워크에서 사용하는 Babel, Webpack, ESLint 등의 기술들은 자바스크립트 개발의 핵심을 품고 있습니다.

바나나 프레임워크는 여러분 모두의 관심을 통해 점점 완벽해지고 성장할 수 있습니다. 기여를 통해 바나나 프레임워크를 성장시키고 오픈소스 세상, 그리고 기여자 목록<sup>Contributor List</sup>에 여러분의 발자취를 남기세요.

작게는 이슈 및 문서 기여부터, 핵심 코드 기여까지, 바나나 프레임워크는 모두의 도움으로 성장할 수 있습니다.
