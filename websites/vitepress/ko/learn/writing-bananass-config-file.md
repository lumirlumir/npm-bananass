# `bananass.config` 파일 작성하기 {#writing-bananass-config-file}

<!-- @include: @/shared/wip.ko.md -->

::: warning CLI 명령어와 `bananass.config.*` 중 어떤 옵션이 우선시되나요?

옵션의 우선순위는 아래와 같습니다!

1. CLI 명령어에 입력한 옵션 (가장 높은 우선순위)
1. `bananass.config.*` 파일에 설정한 옵션
1. 바나나 프레임워크의 기본 옵션 (가장 낮은 우선순위)

:::

::: code-group

```js [bananass.config.mjs]
/** @type {import('bananass').ConfigObject} */
export default {
  cwd: findRootDir(),
  entryDir: 'bananass',
  outDir: '.bananass',

  browser: {
    browser: 'default',
    secretMode: false,
  },
  console: {
    debug: false,
    quiet: false,
  },

  add: {},
  bug: {},
  build: {
    clean: false,
    templateType: 'fs',
  },
  discussion: {},
  home: {},
  info: {
    all: false,
  },
  open: {},
  repo: {},
  run: {},
};
```

```js [bananass.config.cjs]
/** @type {import('bananass').ConfigObject} */
module.exports = {
  cwd: findRootDir(),
  entryDir: 'bananass',
  outDir: '.bananass',

  browser: {
    browser: 'default',
    secretMode: false,
  },
  console: {
    debug: false,
    quiet: false,
  },

  add: {},
  bug: {},
  build: {
    clean: false,
    templateType: 'fs',
  },
  discussion: {},
  home: {},
  info: {
    all: false,
  },
  open: {},
  repo: {},
  run: {},
};
```

```ts [bananass.config.mts]
import type { ConfigObject } from 'bananass';

export default {
  cwd: findRootDir(),
  entryDir: 'bananass',
  outDir: '.bananass',

  browser: {
    browser: 'default',
    secretMode: false,
  },
  console: {
    debug: false,
    quiet: false,
  },

  add: {},
  bug: {},
  build: {
    clean: false,
    templateType: 'fs',
  },
  discussion: {},
  home: {},
  info: {
    all: false,
  },
  open: {},
  repo: {},
  run: {},
} satisfies ConfigObject;
```

```ts [bananass.config.cts]
import type { ConfigObject } from 'bananass';

module.exports = {
  cwd: findRootDir(),
  entryDir: 'bananass',
  outDir: '.bananass',

  browser: {
    browser: 'default',
    secretMode: false,
  },
  console: {
    debug: false,
    quiet: false,
  },

  add: {},
  bug: {},
  build: {
    clean: false,
    templateType: 'fs',
  },
  discussion: {},
  home: {},
  info: {
    all: false,
  },
  open: {},
  repo: {},
  run: {},
} satisfies ConfigObject;
```

:::
