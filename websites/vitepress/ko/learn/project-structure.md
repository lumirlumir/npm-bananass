# 프로젝트 구조 {#project-structure}

이번 챕터에서는 바나나 프레임워크 프로젝트의 구조와 설정에 대해 소개합니다!

바나나 프레임워크는 단순 라이브러리<sup>Library</sup>가 아닌 <strong>프레임워크<sup>Framework</sup></strong>로서, 사용자들이 따라야 할 모범적인 프로젝트 구조 및 설정이 존재합니다.

---

[[TOC]]

## 훑어보기 {#overview}

[`create-bananass`](../get-started/installation#getting-started-with-create-bananass) 명령어로 바나나 프레임워크를 처음 생성하셨다면, 다소 많은 폴더와 파일들에 당황하셨을 수 있습니다. `create-bananass`는 코드 퀄리티를 보장하고 에디터를 설정하기 위한 추가적인 설정 파일들을 포함하고 있어 그 구조가 복잡한 것으로, **실제 바나나 프레임워크의 구조는 매우 단순하고 간결합니다!**

이제, 바나나 프레임워크의 가장 기초적인 구조부터 시작하여, `create-bananass` 명령어로 생성한 프로젝트 구조까지 확장해가면서 하나씩 살펴보겠습니다!

## 처음부터 살펴보기 {#starting-from-scratch}

### 폴더 및 파일 구조 {#folder-and-file-conventions}

바나나 프레임워크의 가장 기본 구조는 뭘까요? `create-bananass`를 실행하면서 생성된 수 많은 설정 파일들이 꼭 필요할까요? 사실, 바나나 프레임워크를 사용하기 위해서는 **1개의 폴더**<sup>`bananass`</sup>, 그리고 **2개의 파일**<sup>`bananass/1000.js`, `package.json`</sup>로 충분합니다! 이 **3개**의 조합만으로도 바나나 프레임워크의 모든 기능들을 사용하실 수 있습니다. (이 3개의 조합은 바나나 프레임워크가 정상 동작하기 위한 최소한의 구조입니다!)

::: info `.bananass` 폴더와 `bananass.config.{js,mjs,cjs,ts,mts,cts}` 파일은 무엇인가요?

- `.bananass` 폴더는 [`build`](other-useful-cli-commands#build) 명령어 실행시 자동 생성되는 폴더입니다.
- [`bananass.config.{js,mjs,cjs,ts,mts,cts}`](writing-bananass-config-file) 파일은 바나나 프레임워크 설정 파일로, **선택 사항**입니다.

:::

```sh {3-4,7}
bananass-project/
├── .bananass/ # `build` 명령어 실행시 자동 생성됩니다!
├── bananass/ # [!code focus]
│   ├── 1000.js # [!code focus]
│   └── ...
├── bananass.config.{js,mjs,cjs,ts,mts,cts} # 바나나 프레임워크 설정 파일로, 선택 사항입니다!
├── package.json # [!code focus]
└── ...
```

### 최상위 폴더 {#top-level-folders}

반드시 프로젝트 최상단 루트에 위치해야 하는 폴더들입니다!

- [`bananass`](../get-started/quick-start#bananass-folder): **(필수)** 바나나 프레임워크를 통한 문제 풀이 파일이 위치할 폴더입니다! 이 폴더에 파일 혹은 폴더를 추가하여 문제를 풀고 제출할 코드를 작성해주세요.
- [`.bananass`](../get-started/quick-start#dot-bananass-folder): **(자동 생성)** `npm run build 1000` 혹은 `npx bananass build 1000` 등의 [`build`](../learn/other-useful-cli-commands.md#build) 명령어를 터미널에 입력하여 문제 풀이 파일을 빌드하였을 때, 자동으로 생성되는 폴더입니다.

### 최상위 파일 {#top-level-files}

반드시 프로젝트 최상단 루트에 위치해야 하는 파일들입니다!

- [`bananass.config.{js,mjs,cjs,ts,mts,cts}`](writing-bananass-config-file): **(선택)** 바나나 프레임워크 설정 파일로, **선택 사항**입니다! 이를 통해 바나나 프레임워크의 동작을 개별 설정할 수 있습니다.
- [`package.json`](https://docs.npmjs.com/cli/configuring-npm/package-json): **(필수)** 바나나 프레임워크가 [Node.js](https://nodejs.org/) 환경에서 동작하기 위한 설정을 담고 있는 파일입니다.

## 바나나 설정 파일 추가하기 {#adding-bananass-configuration-file}

바나나 프레임워크는 `bananass.config.{js,mjs,cjs,ts,mts,cts}` 파일 없이도 정상 동작하지만, 만약, 개별 설정을 진행하고 싶으시다면, 해당 파일을 프로젝트 **최상단 루트**에 추가한 후 원하는 설정을 추가해주세요! 해당 파일은 반드시 `package.json` 파일과 같은 레벨에 있어야 합니다.

## 다른 설정 파일들도 추가하기 {#adding-other-configuration-files}

이제, `create-bananass` 명령어로 생성된 다른 파일들을 살펴볼까요?

### GitHub 설정 파일 {#github-configuration-files}

- [`.gitattributes`](https://git-scm.com/docs/gitattributes): Git 저장소의 속성을 정의하는 파일입니다.
- [`.gitignore`](https://git-scm.com/docs/gitignore): Git이 무시할 파일 및 폴더를 지정하는 파일입니다.

### ESLint 설정 파일 {#eslint-configuration-files}

- [`eslint.config.{mjs,mts}`](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file): ESLint의 설정을 정의하는 파일입니다.

### Prettier 설정 파일 {#prettier-configuration-files}

- [`prettier.config.mjs`](https://prettier.io/docs/configuration): Prettier의 설정을 정의하는 파일입니다.

### 기타 등등 {#other-configuration-files}

- `README.md`: 프로젝트에 대한 설명을 작성하는 문서입니다.

## 마치며 {#conclusion}

이제 여러분들은 가장 기초부터 시작하여, `create-bananass` 명령어로 생성된 프로젝트까지 확장해가면서, 바나나 프레임워크 프로젝트 구조에 대해 이해하셨습니다!

다음 챕터에서는 문제 풀이 파일을 작성하는 방법에 대해 알아보겠습니다.:tada:
