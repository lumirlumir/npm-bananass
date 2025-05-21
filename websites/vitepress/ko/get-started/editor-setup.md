# 에디터 설정하기 {#editor-setup}

이번 챕터에서는 바나나 프레임워크를 사용하기 위한, [코드 에디터<sup>Code Editor</sup>](https://ko.wikipedia.org/wiki/%EC%86%8C%EC%8A%A4_%EC%BD%94%EB%93%9C_%ED%8E%B8%EC%A7%91%EA%B8%B0)를 설정하는 방법에 대해 소개합니다!

적절한 개발 환경은 코드의 가독성 및 개발 속도를 높여주며, 심지어 코드를 작성하는 과정에서 버그를 찾아줄 수도 있습니다! 코드 에디터를 설치하는 것이 이번이 처음이거나, 현재 사용하는 에디터의 설정을 개선하고 싶으시다면, 아래에서 몇 가지를 추천 사항들을 소개합니다.

---

[[TOC]]

## 에디터 {#editor}

[VS Code](https://code.visualstudio.com/)는 가장 많이 사용하는 에디터 중 하나로, 바나나 프레임워크는 VS Code의 사용을 권장합니다! VS Code에 설치할 수 있는 [확장<sup>Extension</sup>](https://marketplace.visualstudio.com/vscode)의 종류는 무수히 많으며, [깃허브<sup>GitHub</sup>](https://github.com)와 같은 외부 서비스와의 연동도 지원합니다. 아래에서 추천하는 기능들은 대부분 확장<sup>Extension</sup>으로 존재하며, VS Code의 설정을 다양한 방식으로 쉽게 변경할 수 있습니다.

이외에 자주 사용하는 에디터들은 다음과 같습니다.

- [IntelliJ IDEA](https://www.jetbrains.com/ko-kr/idea/): 자바스크립트/타입스크립트 스마트 코드 완성, [ESLint](https://eslint.org/)/[Prettier](https://prettier.io/) 통합, 디버깅 및 리팩토링 기능을 지원하며, 대규모 프로젝트 개발에 최적화된 환경을 제공합니다.
- [Sublime Text](https://www.sublimetext.com/): 자바스크립트/타입스크립트를 지원하며, 문법 강조 및 자동 완성 기능을 내장하고 있습니다.
- [WebStorm](https://www.jetbrains.com/ko-kr/webstorm/): 자바스크립트/타입스크립트 개발에 특화된 통합 개발 환경입니다.
- [Vim](https://www.vim.org/): 모든 종류의 텍스트를 효율적으로 생성하고 변경할 수 있는 텍스트 편집기입니다. 대부분의 UNIX 시스템과 Apple OS X에 `vi`로 포함되어 있습니다.

## 에디터 기능 추천 {#recommended-text-editor-features}

아래에서 추천하는 기능들을 기본으로 포함하고 있는 에디터들도 있지만, 별도의 확장<sup>Extension</sup> 추가가 필요한 경우도 존재합니다. 현재 사용 중인 에디터에서 어떠한 기능들을 지원하는지 한번 확인해 보세요!

::: info 주목해주세요!

VS Code 환경에서 [`create-bananass`](installation.md#getting-started-with-create-bananass)를 통해 바나나 프레임워크를 설치한 경우, 아래에서 설명하는 모든 기능들을 기본적으로 포함하고 있습니다!

:::

### 린팅<sup>Linting</sup> {#linting}

코드 린터<sup>Linter</sup>는 [정적 분석<sup>Static Analysis</sup>](https://ko.wikipedia.org/wiki/%EC%A0%95%EC%A0%81_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8_%EB%B6%84%EC%84%9D)을 통해, 코드를 작성하는 동안 실시간으로 문제를 찾아 빠른 문제 해결을 도와줍니다. 자바스크립트를 위한 오픈 소스 린터<sup>Linter</sup>로, [ESLint](https://eslint.org)를 가장 많이 사용합니다.

::: warning 바나나 프레임워크에서 권장하는 ESLint 설정

바나나 프레임워크는 [`eslint-config-bananass`](../apis/eslint-config-bananass.md)라는 ESLint 설정 파일 패키지를 제공하고 있습니다!

이 패키지는 바나나 프레임워크에서 권장하는 규칙들을 포함하고 있으며, [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript?tab=readme-ov-file#airbnb-javascript-style-guide-)를 기반으로 하여, 실제 개발 환경에서도 사용할 수 있는 설정 파일입니다.

:::

#### VS Code에서 ESLint 설치하기 {#installing-eslint-in-vscode}

다음과 같은 단계를 통해 [VS Code의 ESLint 확장<sup>Extension</sup>](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)을 설치할 수 있습니다.

1. VS Code 실행하기
1. 퀵 오픈 사용하기 (`Ctrl`/`Cmd` + `P` 누르기)
1. `ext install dbaeumer.vscode-eslint` 입력하기
1. `Enter` 누르기

#### 저장 시점에 린팅하기 {#linting-on-save}

저장할 때마다 코드를 린팅하는 것이 가장 이상적일 것입니다. 이러한 설정은 VS Code에 자체적으로 내장되어 있습니다!

1. VS Code에서 `CTRL/CMD + SHIFT + P` 누르기
1. "settings" 입력하기
1. 엔터 누르기
1. 검색 창에서 "format on save" 입력하기
1. "format on save" 옵션 체크하기

### 포맷팅<sup>Formatting</sup> {#formatting}

다른 개발자들과 협업할 때 가장 피하고 싶은 것은 [탭 vs 공백](https://www.google.com/search?q=tabs+vs+spaces)에 대한 논쟁일 것입니다. 다행히 [Prettier](https://prettier.io/)를 사용하면 직접 지정해 놓은 규칙들에 부합하도록 코드의 형식을 깔끔하게 정리할 수 있습니다. Prettier를 실행하면 모든 탭은 공백으로 전환될 뿐만 아니라 들여쓰기, 따옴표 형식과 같은 요소들이 전부 설정에 부합하도록 수정될 것입니다.

::: warning 바나나 프레임워크에서 권장하는 Prettier 설정

바나나 프레임워크는 [`prettier-config-bananass`](../apis/prettier-config-bananass.md)라는 Prettier 설정 파일 패키지를 제공하고 있습니다!

이 패키지는 바나나 프레임워크에서 권장하는 규칙들을 포함하고 있으며, [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript?tab=readme-ov-file#airbnb-javascript-style-guide-)를 기반으로 하여, 실제 개발 환경에서도 사용할 수 있는 설정 파일입니다.

:::

#### VS Code에서 Prettier 설치하기 {#installing-prettier-in-vscode}

다음과 같은 단계를 통해 [VS Code의 Prettier 확장<sup>Extension</sup>](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)을 설치할 수 있습니다.

1. VS Code 실행하기
1. 퀵 오픈 사용하기 (`Ctrl`/`Cmd` + `P` 누르기)
1. `ext install esbenp.prettier-vscode` 입력하기
1. `Enter` 누르기

#### 저장 시점에 포맷팅하기 {#formatting-on-save}

저장할 때마다 코드를 포맷팅하는 것이 가장 이상적일 것입니다. 이러한 설정은 VS Code에 자체적으로 내장되어 있습니다!

1. VS Code에서 `CTRL/CMD + SHIFT + P` 누르기
1. "settings" 입력하기
1. 엔터 누르기
1. 검색 창에서 "format on save" 입력하기
1. "format on save" 옵션 체크하기
