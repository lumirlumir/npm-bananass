# 프로젝트 구조 {#project-structure}

<!-- @include: @/shared/wip.ko.md -->

이번 챕터에서는 바나나 프레임워크 프로젝트의 구조와 설정에 대해 소개합니다!

바나나 프레임워크는 단순 라이브러리<sup>Library</sup>가 아닌 <strong>프레임워크<sup>Framework</sup></strong>로서, 사용자들이 따라야 할 모범적인 프로젝트 구조 및 설정이 존재합니다.

---

[[TOC]]

## 폴더 및 파일 구조 {#folder-and-file-conventions}

```sh
bananass-project/
├── .bananass/
│   ├── 1000.cjs
│   ├── 1001.cjs
│   ├── 1002.cjs
│   └── ...
├── bananass/
│   ├── 1000.js
│   ├── 1001.mjs
│   ├── 1002.cjs
│   ├── 1003.ts
│   ├── 1004.mts
│   ├── 1005.cts
│   └── ...
├── .gitignore
├── bananass.config.{js,mjs,cjs,ts,mts,cts}
├── package.json
└── ...
```

### 최상위 폴더 {#top-level-folder}
