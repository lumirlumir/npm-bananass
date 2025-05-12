# 최종 빌드 파일에서 특정 코드 제외하기 {#excluding-specific-code-from-the-final-build-file}

<!-- @include: @/shared/wip.ko.md -->

```js
module.exports = globalThis.IS_PROD ? { solution } : { solution, testcases };
```
