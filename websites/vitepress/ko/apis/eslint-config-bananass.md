# `eslint-config-bananass` {#eslint-config-bananass}

[![npm package eslint-config-bananass latest version](https://img.shields.io/npm/v/eslint-config-bananass?label=eslint-config-bananass@latest&color=fff478&labelColor=333333&logo=npm)](https://www.npmjs.com/package/eslint-config-bananass)&nbsp;
[![npm package eslint-config-bananass next version](https://img.shields.io/npm/v/eslint-config-bananass/next?label=eslint-config-bananass@next&color=fff478&labelColor=333333&logo=npm)](https://www.npmjs.com/package/eslint-config-bananass)&nbsp;
![Node Current](https://img.shields.io/node/v/eslint-config-bananass?label=Node&color=fff478&labelColor=333333&logo=node.js)

`eslint-config-bananass`는 [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnb) 및 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript?tab=readme-ov-file#airbnb-javascript-style-guide-)를 기반으로 하는 [ESLint](https://eslint.org) 설정 파일 패키지입니다.

코딩 테스트 관련하여 자주 쓰이는 문법 및 사용자에 따라 호불호가 나뉠 수 있는 일부 규칙들을 해제하였기에, [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnb) 및 [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base#eslint-config-airbnb-base-) 보다 훨씬 느슨한 규칙들을 만나보실 수 있습니다.

`eslint-config-bananass`에 포함된 정확한 규칙들은 [ESLint Config Inspector](https://eslint-config-bananass.lumir.page)를 참고해주세요.

::: danger 반드시 읽어주세요!

- `eslint-config-bananass`는 최신 사양의 [ESLint v9 Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files)만 지원하며, ESM 모듈 시스템만<sup>ESM Only</sup> 지원합니다.
- `eslint-config-bananass`는 스타일 관련 규칙들을 포함하지 않습니다. 스타일 포맷팅을 진행하고 싶으시다면 [Prettier](https://prettier.io/)를 이용해 주세요.

:::

---

[[TOC]]

## 설치하기 {#installation}

::: code-group

```sh [npm]
npm install -D eslint eslint-config-bananass
```

```sh [pnpm]
pnpm add -D eslint eslint-config-bananass
```

```sh [yarn]
yarn add --dev eslint eslint-config-bananass
```

```sh [bun]
bun add -d eslint eslint-config-bananass
```

:::

## API 참고서 {#apis}

```ts
// Only supports default export
import bananass from 'eslint-config-bananass';
import type bananass from 'eslint-config-bananass';

// JSON import only supports default export
import pkg from 'eslint-config-bananass/package.json' assert { type: 'json' };
```

---

### `bananass` {#bananass}

> 타입: `object`

정확한 구성은 [깃허브 리포지토리](https://github.com/lumirlumir/npm-bananass/blob/main/packages/eslint-config-bananass/src/index.js)를 참고해주세요.

### `pkg` {#pkg}

> 타입: `object`

정확한 구성은 [깃허브 리포지토리](https://github.com/lumirlumir/npm-bananass/blob/main/packages/eslint-config-bananass/package.json)를 참고해주세요.

## ESLint Config 설정 방법 {#eslint-config-setting}

`eslint-config-bananass`는 아래와 같은 6가지 설정<sup>Config</sup>을 지원합니다. 필요에 따라 아래 설정 중 하나 혹은 여러개를 선택하여 사용해주세요.

각각의 구성에 포함된 정확한 규칙들은 [ESLint Config Inspector](https://eslint-config-bananass.lumir.page)를 참고해주세요.

- `js`: 자바스크립트
- `jsxReact`: 자바스크립트 + React
- `jsxNext`: 자바스크립트 + React + Next.js
- `ts`: 타입스크립트
- `tsxReact`: 타입스크립트 + React
- `tsxNext`: 타입스크립트 + React + Next.js

```js [eslint.config.mjs]
import { defineConfig } from 'eslint/config';
import bananass from 'eslint-config-bananass';

export default defineConfig([
  bananass.configs.js, // JavaScript
  bananass.configs.jsxReact, // JavaScript + React
  bananass.configs.jsxNext, // JavaScript + React + Next.js
  bananass.configs.ts, // TypeScript
  bananass.configs.tsxReact, // TypeScript + React
  bananass.configs.tsxNext, // TypeScript + React + Next.js
]);
```

## 참고 사항 {#additional-notes}

- `eslint-config-bananass`는 스타일 관련 규칙들을 포함하지 않기 때문에, Prettier와 충돌을 일으키는 스타일 관련 규칙들을 모두 끄는 [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)가 필요하지 않습니다.
- 스타일 포맷팅을 진행하고 싶으시다면 [Prettier](https://prettier.io/)를 이용해 주세요.
