# `bananass.config` 파일 작성하기 {#writing-bananass-config-file}

이번 챕터에서는 바나나 프레임워크의 설정 파일인 `bananass.config.*` 파일을 작성하는 방법에 대해 소개합니다!

::: warning CLI 명령어와 `bananass.config.*` 중 어떤 옵션이 우선시되나요?

옵션의 우선순위는 아래와 같습니다!

1. CLI 명령어에 입력한 옵션 (가장 높은 우선순위)
1. `bananass.config.*` 파일에 설정한 옵션
1. 바나나 프레임워크의 기본 옵션 (가장 낮은 우선순위)

:::

---

[[TOC]]

## `bananass.config.*` 파일이 무엇인가요? {#what-is-bananass-config-file}

`bananass.config.*` 파일은 바나나 프레임워크의 설정 파일로, 바나나 프레임워크의 동작 방식을 설정할 수 있는 파일입니다! 이 파일을 통해 바나나 프레임워크의 동작 방식을 변경하거나, 자주 사용하는 CLI 옵션 등을 미리 설정해두고 사용할 수 있습니다. CLI에서 [`bananass`](other-useful-cli-commands) 명령어를 실행할 때, 바나나 프레임워크는 자동으로 [프로젝트 루트](#where-should-the-config-file-be-located)에 위치한 설정 파일을 읽어들여 바나나 프레임워크의 동작 방식을 결정합니다.

`bananass.config.*` 파일에 설정한 값은 기본값<sup>Default Value</sup>보다 높은 우선순위를 가지고 있기 때문에, 자주 사용하는 CLI 옵션 등을 매번 터미널에 타이핑 할 필요 없이 미리 설정해두고 사용할 수 있습니다. 단, CLI 명령어에 입력한 옵션이 가장 높은 우선순위를 가지므로, CLI 명령어에 입력한 값들은 `bananass.config.*` 파일에 설정한 값을 덮어씁니다.

`bananass.config.*` 파일은 ESLint의 [`eslint.config.js`](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), Prettier의 [`prettier.config.js`](https://prettier.io/docs/configuration), Next.js의 [`next.config.js`](https://nextjs.org/docs/app/api-reference/config/next-config-js), Vite의 [`vite.config.js`](https://ko.vite.dev/config/) 등의 설정 파일과 동일한 역할을 합니다!

## 설정 파일의 이름 및 확장자로 무엇을 사용해야 하나요? {#what-should-be-the-name-and-extension-of-config-file}

바나나 프레임워크 설정 파일의 이름으로는 항상 `bananass.config`를 사용해야 하며, 확장자로는 `.js`, `.mjs`, `.cjs`, `.ts`, `.mts`, `.cts`를 사용할 수 있습니다. 즉, 바나나 프레임워크의 설정 파일로 유효한 이름은 아래와 같은 6가지입니다!

- `bananass.config.js`
- `bananass.config.mjs`
- `bananass.config.cjs`
- `bananass.config.ts`
- `bananass.config.mts`
- `bananass.config.cts`

::: warning `.json`, `.yaml` 등의 확장자는 지원하지 않습니다!

[`.json`](https://ko.wikipedia.org/wiki/JSON), [`.yaml`](https://yaml.org/) 등의 확장자를 가진 설정 파일들은 코드 내에 자바스크립트 함수 등을 포함할 수 없어, 추후 확장이 제한적이기 때문에 지원하지 않습니다.

:::

## 설정 파일은 어디에 위치해야 하나요? {#where-should-the-config-file-be-located}

바나나 프레임워크 설정 파일은 [`package.json`](https://docs.npmjs.com/cli/configuring-npm/package-json) 파일이 위치한, 바나나 프레임워크 프로젝트 **최상위 루트 디렉터리**에 위치해야 합니다! 일반적으로 아래와 같은 구조 상에 위치합니다.

```sh {4}
bananass-project/
├── .bananass/
├── bananass/
├── bananass.config.{js,mjs,cjs,ts,mts,cts}
├── package.json
└── ...
```

## 설정 파일은 어떻게 작성하나요? {#how-to-write-config-file}

`bananass.config.*` 파일을 생성하여 아래와 같이 하나의 객체를 작성한 후, 언어 및 모듈 시스템에 따라 `export default` 또는 `module.exports`로 내보내주세요.

::: warning 바나나 프레임워크는 설정 파일에 타입을 작성할 수 있도록 타입스크립트를 지원합니다!

- *자바스크립트*의 경우, `/** @type {import('bananass').ConfigObject} */`를 통해 `ConfigObject` 타입을 불러와서 [JSDoc](https://jsdoc.app/)을 통한 타입 추론을 지원받을 수 있습니다.
- *타입스크립트*의 경우, `import type { ConfigObject } from 'bananass';`를 통해 `ConfigObject` 타입을 불러와서 `satisfies ConfigObject`를 통한 타입 추론을 지원받을 수 있습니다.

:::

::: code-group

```js [bananass.config.mjs]
/** @type {import('bananass').ConfigObject} */
export default {
  // ...
};
```

```js [bananass.config.cjs]
/** @type {import('bananass').ConfigObject} */
module.exports = {
  // ...
};
```

```ts [bananass.config.mts]
import type { ConfigObject } from 'bananass';

export default {
  // ...
} satisfies ConfigObject;
```

```ts [bananass.config.cts]
import type { ConfigObject } from 'bananass';

module.exports = {
  // ...
} satisfies ConfigObject;
```

:::

이제 내보내기 한 객체 안에 바나나 프레임워크의 설정 값들을 작성하면 됩니다! 설정 가능한 값들은 ['설정 파일의 기본값은 무엇인가요?'](#what-is-the-default-config-file)를 참고해주세요!

## 설정 파일의 기본값은 무엇인가요? {#what-is-the-default-config-file}

바나나 프레임워크 설정 파일의 기본값들은 아래와 같습니다!

::: info 주목해주세요!

`add: {}`와 같은 빈 객체는 아직 **사용 가능한 옵션이 없음**을 의미합니다! 추후 바나나 프레임워크의 기능이 확장되면서 해당 옵션이 추가될 수 있으며, 빈 객체로 설정해두거나 아예 생략하여도 무방합니다.

:::

::: code-group

```js [bananass.config.mjs]
/** @type {import('bananass').ConfigObject} */
export default {
  cwd: findRootDir(), // 명령어를 실행할 현재 작업 디렉토리를 설정합니다. 기본값 `findRootDir()`는 바나나 프레임워크의 루트 디렉터리를 찾는 함수입니다.
  entryDir: 'bananass', // 문제 풀이 파일들이 위치할 엔트리 디렉토리를 설정합니다.
  outDir: '.bananass', // 빌드 결과물들을 저장할 출력 디렉토리를 설정합니다.

  browser: {
    browser: 'default', // 브라우저를 설정합니다. `'chrome'`, `'edge'`, `'firefox'`, `'default'` 중 하나를 인자로 전달할 수 있습니다.
    secret: false, // 브라우저의 시크릿 모드를 활성화합니다.
  },
  console: {
    debug: false, // 디버그 모드를 활성화하여 추가 정보를 출력합니다.
    quiet: false, // 출력 로그를 최소화하는 조용한 모드를 실행합니다.
  },

  add: {},
  bug: {},
  build: {
    clean: false, // 빌드 전에 기존 출력 디렉토리를 삭제하여 정리합니다.
    templateType: 'fs', // 웹팩(Webpack)의 엔트리 파일로 사용할 템플릿 타입을 설정합니다. `'fs'`(File System) 혹은 `'rl'`(Read Line) 중 하나를 선택할 수 있습니다.
  },
  discussion: {},
  home: {},
  info: {
    all: false, // `not found`를 포함한 모든 정보를 출력합니다.
  },
  open: {},
  repo: {},
  run: {},
};
```

```js [bananass.config.cjs]
/** @type {import('bananass').ConfigObject} */
module.exports = {
  cwd: findRootDir(), // 명령어를 실행할 현재 작업 디렉토리를 설정합니다. 기본값 `findRootDir()`는 바나나 프레임워크의 루트 디렉터리를 찾는 함수입니다.
  entryDir: 'bananass', // 문제 풀이 파일들이 위치할 엔트리 디렉토리를 설정합니다.
  outDir: '.bananass', // 빌드 결과물들을 저장할 출력 디렉토리를 설정합니다.

  browser: {
    browser: 'default', // 브라우저를 설정합니다. `'chrome'`, `'edge'`, `'firefox'`, `'default'` 중 하나를 인자로 전달할 수 있습니다.
    secret: false, // 브라우저의 시크릿 모드를 활성화합니다.
  },
  console: {
    debug: false, // 디버그 모드를 활성화하여 추가 정보를 출력합니다.
    quiet: false, // 출력 로그를 최소화하는 조용한 모드를 실행합니다.
  },

  add: {},
  bug: {},
  build: {
    clean: false, // 빌드 전에 기존 출력 디렉토리를 삭제하여 정리합니다.
    templateType: 'fs', // 웹팩(Webpack)의 엔트리 파일로 사용할 템플릿 타입을 설정합니다. `'fs'`(File System) 혹은 `'rl'`(Read Line) 중 하나를 선택할 수 있습니다.
  },
  discussion: {},
  home: {},
  info: {
    all: false, // `not found`를 포함한 모든 정보를 출력합니다.
  },
  open: {},
  repo: {},
  run: {},
};
```

```ts [bananass.config.mts]
import type { ConfigObject } from 'bananass';

export default {
  cwd: findRootDir(), // 명령어를 실행할 현재 작업 디렉토리를 설정합니다. 기본값 `findRootDir()`는 바나나 프레임워크의 루트 디렉터리를 찾는 함수입니다.
  entryDir: 'bananass', // 문제 풀이 파일들이 위치할 엔트리 디렉토리를 설정합니다.
  outDir: '.bananass', // 빌드 결과물들을 저장할 출력 디렉토리를 설정합니다.

  browser: {
    browser: 'default', // 브라우저를 설정합니다. `'chrome'`, `'edge'`, `'firefox'`, `'default'` 중 하나를 인자로 전달할 수 있습니다.
    secret: false, // 브라우저의 시크릿 모드를 활성화합니다.
  },
  console: {
    debug: false, // 디버그 모드를 활성화하여 추가 정보를 출력합니다.
    quiet: false, // 출력 로그를 최소화하는 조용한 모드를 실행합니다.
  },

  add: {},
  bug: {},
  build: {
    clean: false, // 빌드 전에 기존 출력 디렉토리를 삭제하여 정리합니다.
    templateType: 'fs', // 웹팩(Webpack)의 엔트리 파일로 사용할 템플릿 타입을 설정합니다. `'fs'`(File System) 혹은 `'rl'`(Read Line) 중 하나를 선택할 수 있습니다.
  },
  discussion: {},
  home: {},
  info: {
    all: false, // `not found`를 포함한 모든 정보를 출력합니다.
  },
  open: {},
  repo: {},
  run: {},
} satisfies ConfigObject;
```

```ts [bananass.config.cts]
import type { ConfigObject } from 'bananass';

module.exports = {
  cwd: findRootDir(), // 명령어를 실행할 현재 작업 디렉토리를 설정합니다. 기본값 `findRootDir()`는 바나나 프레임워크의 루트 디렉터리를 찾는 함수입니다.
  entryDir: 'bananass', // 문제 풀이 파일들이 위치할 엔트리 디렉토리를 설정합니다.
  outDir: '.bananass', // 빌드 결과물들을 저장할 출력 디렉토리를 설정합니다.

  browser: {
    browser: 'default', // 브라우저를 설정합니다. `'chrome'`, `'edge'`, `'firefox'`, `'default'` 중 하나를 인자로 전달할 수 있습니다.
    secret: false, // 브라우저의 시크릿 모드를 활성화합니다.
  },
  console: {
    debug: false, // 디버그 모드를 활성화하여 추가 정보를 출력합니다.
    quiet: false, // 출력 로그를 최소화하는 조용한 모드를 실행합니다.
  },

  add: {},
  bug: {},
  build: {
    clean: false, // 빌드 전에 기존 출력 디렉토리를 삭제하여 정리합니다.
    templateType: 'fs', // 웹팩(Webpack)의 엔트리 파일로 사용할 템플릿 타입을 설정합니다. `'fs'`(File System) 혹은 `'rl'`(Read Line) 중 하나를 선택할 수 있습니다.
  },
  discussion: {},
  home: {},
  info: {
    all: false, // `not found`를 포함한 모든 정보를 출력합니다.
  },
  open: {},
  repo: {},
  run: {},
} satisfies ConfigObject;
```

:::
