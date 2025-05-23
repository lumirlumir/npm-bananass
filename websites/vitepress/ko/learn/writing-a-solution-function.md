# 문제 풀이 함수 작성하기 {#writing-a-solution-function}

<!-- @include: @/shared/wip.ko.md -->

이번 챕터에서는 문제 풀이 함수 `solution`을 작성하는 방법에 대해 소개합니다!

---

[[TOC]]

## 훑어보기 {#overview}

`solution` 함수는 문제를 해결하기 위한 코드가 담긴 함수입니다! 이 함수는 알고리즘 문제를 해결하기 위해 필요한 모든 로직을 포함하고 있고, 또 포함해야만 합니다.

문제 풀이 파일에서 [`testcases`](writing-test-cases)를 제외한 일반적인 `solution` 함수의 모습은 아래와 같습니다.

<!-- @include: @/shared/solution-file-example-min.ko.md -->

## `solution` 함수의 입력값은 무엇인가요? {#what-is-the-input-of-solution-function}

## `solution` 함수의 출력값은 무엇인가요? {#what-is-the-output-of-solution-function}

## `solution` 함수는 어떤 형태로 작성할 수 있나요? {#how-to-write-solution-function}

문제 풀이 함수 `solution`은 아래와 같은 모든 함수 형태로 작성할 수 있습니다!

- [함수 선언문<sup>Function Declaration</sup>](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/function)
- [함수 표현식<sup>Function Expression</sup>](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/function)
- [화살표 함수<sup>Arrow Function</sup>](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## `solution` 함수 내부에 `console.log`를 사용해도 되나요? {#can-i-use-console-log-in-solution-function}
