# 하나의 파일에 모든 로직 작성하기 {#writing-all-logic-in-a-single-file}

<!-- @include: @/shared/wip.ko.md -->

## 파일 작성하기 {#writing-a-file}

바나나 프레임워크는 문제 풀이 파일의 확장자로 `.js`, `.mjs`, `.cjs`, `.ts`, `.mts`, `.cts` 중 하나를 선택할 수 있습니다.

파일 이름은 문제 번호에 따라 작성하면 됩니다. 예를 들어, 백준 1000번 문제는 `bananass/1000.js` 혹은 `bananass/1000.ts` 파일에 작성하면 됩니다. 만약, 문제 풀이 파일을 `bananass/1000.ts`로 작성하였다면, `npm run build 1000` 혹은 `npx bananass build 1000` 명령어를 통해 빌드할 수 있습니다.
