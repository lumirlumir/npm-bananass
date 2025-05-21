# `bananass.config` 파일 작성하기 {#writing-bananass-config-file}

<!-- @include: @/shared/wip.ko.md -->

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
