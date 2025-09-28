# 기여하기

<kbd>한국어</kbd> | <kbd>[English](https://github.com/lumirlumir/npm-bananass/blob/main/CONTRIBUTING.en.md)</kbd>

안녕하세요! 기여에 관심을 가져주셔서 감사합니다.

바나나 프레임워크는 문서, 웹사이트, 코드 개발 뿐만 아니라, 바나나 프레임워크를 통한 백준, 코드포스 문제 풀이 및 해설 등 다양한 방면에서 커뮤니티의 기여를 받고 있습니다. [바나나 프레임워크 리포지토리](https://github.com/lumirlumir/npm-bananass)에 다음과 같은 형태로 기여하실 수 있습니다.

1. 문서 기여: '바나나 프레임워크를 이용한 백준, 코드포스 문제 풀이 및 해설', '바나나 프레임워크 웹사이트 문서', '`README.md`' 등.
1. 웹사이트 기여: '웹사이트 디자인', '버그 수정', '기능 제안' 등.
1. 코드 기여: '코드 커버리지를 채우지 못한 부분에 대한 테스트 코드 추가', '버그 수정', '기능 제안' 등.

프로젝트 전반에 걸쳐 준수해야 하는 기본 규칙은 아래와 같습니다.

- 마크다운 문서(`**/*.md`)를 제외한 모든 코드 및 내부 주석들은 반드시 영문으로 작성해야 합니다.
- `LICENSE.md` 및 `CHANGELOG.md`를 제외한 모든 마크다운 문서들은 반드시 한글 문서(`.md`)와 영문 문서(`.en.md`) 2가지 종류를 작성해야 합니다.

## 문서 기여

바나나 프레임워크의 문서를 읽다 오탈자를 발견하셨다면, 수정 후 [끌어오기 요청<sup>Pull Request</sup>](https://github.com/lumirlumir/npm-bananass/pulls)을 보내주세요. 직접 수정이 어려우시다면, [이슈<sup>Issue</sup>](https://github.com/lumirlumir/npm-bananass/issues)를 작성하여 오탈자를 알려주시는 것만으로도 큰 도움이 됩니다.

바나나 프레임워크의 문서가 이해하기 어렵다고 느껴지신다면, 내용을 보다 명확하게 수정하거나 보완해주세요. 이는 많은 사용자들이 공통으로 겪는 불편함일 수 있습니다.

또한, 미번역된 문서 번역 등을 통해 더 넓은 커뮤니티에 도움을 주세요. 바나나 프레임워크는 한글과 영문 문서를 모두 지원하고 있어, 여러분의 기여를 통해 더 많은 사람들이 바나나 프레임워크를 이용할 수 있습니다.

## 프로젝트 구조

바나나 프레임워크는 [`npm workspaces`](https://docs.npmjs.com/cli/using-npm/workspaces)와 [`lerna`](https://lerna.js.org/)를 이용한 **모노레포<sup>monorepo</sup>** 구조로 구성되어 있습니다.

- 핵심 패키지인 `bananass` 패키지는 `packages/bananass` 폴더에 위치합니다.
- 그 외 패키지들도 `packages` 폴더 하위에 위치하고 있습니다.
- `README.md`, `CONTRIBUTING.md` 등의 커뮤니티 문서들은 프로젝트의 최상단에 위치합니다.
- 바나나 프레임워크 웹사이트 상의 문서들은 `websites/vitepress/ko` 및 `websites/vitepress/en` 폴더에 각각 위치하고 있습니다.

## 커밋 메시지

바나나 프레임워크는 모든 끌어오기 요청<sup>Pull Request</sup>의 제목에 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 규칙을 준수하고 있습니다.

## 설치하기

1. 저장소를 포크<sup>Fork</sup>합니다.

1. 로컬 디렉터리로 클론<sup>Clone</sup>합니다. ([Git](https://git-scm.com/downloads)이 필요합니다.)

    ```sh
    git clone https://github.com/lumirlumir/npm-bananass.git
    ```

1. `npm-bananass` 디렉터리로 이동합니다.

    ```sh
    cd npm-bananass
    ```

1. npm 패키지를 설치합니다. ([Node.js](https://nodejs.org/en)가 필요합니다.)

    ```sh
    npm install
    ```

1. 문서 혹은 코드를 수정합니다.

1. 새로운 분기<sup>Branch</sup>를 생성합니다.

    ```sh
    git switch -c my-branch
    ```

1. 변경 사항을 커밋합니다. (`husky` 및 `lint-staged`가 수정한 파일을 자동으로 포맷팅합니다.)

    ```sh
    git commit -am "<type>[optional scope]: <description>"
    ```

1. 원격 브랜치에 푸시<sup>Push</sup>합니다.

1. 끌어오기 요청<sup>Pull Request</sup>을 생성합니다.
