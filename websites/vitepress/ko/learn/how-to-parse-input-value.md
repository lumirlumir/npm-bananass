# 입력값 분해하기 {#how-to-parse-input-value}

이번 챕터에서는 `solution` 함수의 매개변수<sup>Parameter</sup> `input`을 통해 들어온 입력값을 분해<sup>파싱, Parsing</sup>하는 방법을 소개합니다!

::: warning 선행 학습 필수!

이번 챕터는 아래 목록에 존재하는 자바스크립트 내장 객체<sup>Built-in Object</sup> 및 메서드<sup>Method</sup>에 대한 이해가 필요합니다. 이에 대한 학습이 필요하다면, 아래 링크를 참고해 주세요!

- [`String.prototype.trim()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
- [`String.prototype.split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [`Array.prototype.map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [`Number()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)

:::

---

[[TOC]]

## 훑어보기 {#overview}

아래와 같은 `solution` 함수의 매개변수<sup>Parameter</sup> `input`에는 다양한 형식의 문자열이 들어올 수 있습니다.

> [!IMPORTANT] 중요합니다!
>
> `input`에는 항상 문자열 `string` 타입만 들어옵니다!
>
> 백준의 '예제 입력'이 숫자로 되어있을지라도, 항상 해당 숫자를 문자열 형태로 받아옵니다.

::: code-group

```js:line-numbers [1000.cjs]
// 백준 1000번 문제.

function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}

module.exports = { solution };
```

```js:line-numbers [1000.mjs]
// 백준 1000번 문제.

function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}

export default { solution };
```

```ts:line-numbers [1000.cts]
// 백준 1000번 문제.

import type { Input, Output } from 'bananass';

function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}

module.exports = { solution };
```

```ts:line-numbers [1000.mts]
// 백준 1000번 문제.

import type { Input, Output } from 'bananass';

function solution(input: Input): Output {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  return a + b;
}

export default { solution };
```

:::

그렇다면, 들어온 입력값 `input`을 어떻게 분해<sup>파싱, Parsing</sup>하여, 원하는 형태로 가공한 후 사용할 수 있을까요? 예제와 함께 하나씩 살펴봅시다!

## 1. 입력값이 하나일 경우 (문자열) {#1-when-the-input-value-is-a-single-string}

가장 단순한 경우입니다. 아래와 같은 입력값 `input`을 가정하겠습니다.

### 예제 입력 {#sample-input-1}

```txt
hello
```

가장 많이 사용하는 방식은 [`String.prototype.trim()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) 메서드를 이용하여, 혹시 모를 문자열의 앞 뒤 공백을 제거하는 것입니다!

::: danger 주의하세요!

단, 일부 문제에는 공백을 함부로 삭제하면 안되는 경우도 존재합니다. 이런 상황에서는 `trim()`을 사용해서는 안됩니다. 주의하세요!!

:::

### 분해 방법 1: `String.prototype.trim()`을 이용한 방식 {#method-1-using-string-prototype-trim}

```js
const inputParsed = input.trim();
```

### 분해 방법 2: `String.prototype.trim()`을 이용하지 않은 방식 {#method-2-without-using-string-prototype-trim}

```js
const inputParsed = input;
```

### `inputParsed`에 저장된 값 {#value-stored-in-inputparsed}

```js
'hello' // string
```

## 2. 입력값이 하나일 경우 (숫자) {#2-when-the-input-value-is-a-single-number}

앞서 '중요합니다!'에서 언급했듯, `input`에는 항상 문자열 `string` 타입만 들어옵니다. 백준의 '예제 입력'이 숫자로 되어있을지라도, 항상 해당 숫자를 문자열 형태로 받아옵니다.

이제 문자열<sup>`string`</sup> 타입으로 들어온 숫자를 다루기 쉽게 숫자<sup>`number`</sup> 타입으로 변환해 주어야 합니다! 아래와 같은 입력값 `input`을 가정하겠습니다.

### 예제 입력 {#sample-input-2}

```txt
3
```

그럼 문자열을 어떻게 숫자로 변환해 줄 수 있을까요? 아래와 같은 자바스크립트 빌트인 객체 `Number()`를 이용하면 됩니다!

> [!NOTE] 주목해주세요!
>
> `+input` 혹은 `parseInt(input)`을 사용하여 문자열 형태의 입력값을 숫자로 변환해 주어도 됩니다.
>
> 단, ESLint의 [`no-implicit-coercion`](https://eslint.org/docs/latest/rules/no-implicit-coercion) 규칙에서 권장하듯, 단축 형 변환<sup>Shorthand Type Conversions</sup> 대신 가능한 `Number()` 객체를 사용하는 것을 (개인적으로) 권장합니다.

### 분해 방법 {#parsing-method-2}

```js
const inputParsed = Number(input.trim());
```

### `inputParsed`에 저장된 값 {#value-stored-in-inputparsed-2}

```js
3 // number
```

## 3. 입력값이 띄어쓰기로 구분된 한 줄의 값들인 경우 (문자열) {#3-when-the-input-value-is-a-single-line-of-strings-separated-by-spaces}

이번에는 아래와 같은 입력값 `input`이 들어오면 어떨까요?

### 예제 입력 {#sample-input-3}

```txt
hello bananass
```

이런 경우 [`String.prototype.split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split) 메서드를 이용하여 띄어쓰기로 구분된 값들을 배열<sup>`array`</sup>로 만들어 줄 수 있습니다!

### 분해 방법 {#parsing-method-3}

```js
const inputParsed = input.trim().split(' ');
```

### `inputParsed`에 저장된 값 {#value-stored-in-inputparsed-3}

```js
['hello', 'bananass'] // string[]
```

## 4. 입력값이 띄어쓰기로 구분된 한 줄의 값들인 경우 (숫자) {#4-when-the-input-value-is-a-single-line-of-numbers-separated-by-spaces}

이제 슬슬 감이 오실까요? 아래 예제를 더 살펴보죠!

### 예제 입력 {#sample-input-4}

```txt
3 24 98
```

이런 경우 [`String.prototype.split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split) 메서드를 이용하여 띄어쓰기로 구분된 값들을 배열<sup>`array`</sup>로 만들어 준 후, [`Array.prototype.map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드를 이용하여 각 값들을 숫자로 변환해 주어야 합니다.

### 분해 방법 {#parsing-method-4}

```js
const inputParsed = input.trim().split(' ').map(val => Number(val));
```

또는

```js
const inputParsed = input.trim().split(' ').map(Number);
```

### `inputParsed`에 저장된 값 {#value-stored-in-inputparsed-4}

```js
[3, 24, 98] // number[]
```

## 5. 입력값이 여러 줄의 값들인 경우 (문자열) {#5-when-the-input-value-is-multiple-lines-of-strings}

이번에는 띄어쓰기가 아닌, 개행 문자(`\n`)로 구분된 여러 줄의 문자열 값들이 들어오는 경우를 살펴보겠습니다!

> [!IMPORTANT] 중요합니다!
>
> 백준의 Node.js 서버 환경은 리눅스<sup>Linux</sup>를 운영체제로 사용하므로, 개행 문자가 LF(`\n`)입니다.
>
> 바나나 프레임워크에서는 이러한 백준 Node.js 환경에 맞게, 윈도우<sup>Windows</sup>의 CRLF(`\r\n`) 혹은 POSIX(리눅스<sup>Linux</sup>, 맥<sup>macOS</sup>)의 LF(`\n`)를 구분하지 않고 `\n`으로 통일하여 입력값 `input`으로 사용할 수 있게 설계하였습니다. 즉, 개행 문자로 항상 `\n`을 사용하도록 만들어 두었으니, 편하게 `\n`을 통해 개행을 구분하시면 됩니다.

### 예제 입력 {#sample-input-5}

```txt
a
b
c
d
```

이런 경우에도 `String.prototype.split()` 메서드를 이용하여 개행 문자(`\n`)로 구분된 값들을 배열<sup>`array`</sup>로 만들어 줄 수 있습니다.

### 분해 방법 {#parsing-method-5}

```js
const inputParsed = input.trim().split('\n');
```

### `inputParsed`에 저장된 값 {#value-stored-in-inputparsed-5}

```js
['a', 'b', 'c', 'd'] // string[]
```

## 6. 입력값이 여러 줄의 값들인 경우 (숫자) {#6-when-the-input-value-is-multiple-lines-of-numbers}

이제 혼자서도 하실 수 있겠죠? 아래 예제를 살펴봅시다!

### 예제 입력 {#sample-input-6}

```txt
3
24
98
```

`String.prototype.split()` 메서드를 이용하여 개행 문자(`\n`)로 구분된 값들을 배열<sup>`array`</sup>로 만들어 준 후, `Array.prototype.map()` 메서드를 이용하여 각 값들을 숫자로 변환해 주어야 합니다.

### 분해 방법 {#parsing-method-6}

```js
const inputParsed = input.trim().split('\n').map(val => Number(val));
```

또는

```js
const inputParsed = input.trim().split('\n').map(Number);
```

### `inputParsed`에 저장된 값 {#value-stored-in-inputparsed-6}

```js
[3, 24, 98] // number[]
```

## 7. 입력값이 여러 줄의 값이고 띄어쓰기로 구분되어 있는 경우 (문자열) {#7-when-the-input-value-is-multiple-lines-of-strings-separated-by-spaces}

이번에는 좀 더 복잡한 경우를 살펴보겠습니다! 이제 풀이 방법이 떠오르실까요? 다음 예제를 봅시다.

### 예제 입력 {#sample-input-7}

```txt
ab cd
ef gh
my name is lumir
hello bananass
```

`String.prototype.split()` 메서드를 이용하여 개행 문자(`\n`)로 구분된 값들을 배열<sup>`array`</sup>로 만들어 준 후, `Array.prototype.map()` 메서드를 이용하여 각 값들을 띄어쓰기로 구분된 값들로 만들어 줄 수 있습니다!

### 분해 방법 {#parsing-method-7}

```js
const inputParsed = input.trim().split('\n').map(val => val.split(' '));
```

### `inputParsed`에 저장된 값 {#value-stored-in-inputparsed-7}

```js
[
  ['ab', 'cd'],
  ['ef', 'gh'],
  ['my', 'name', 'is', 'lumir'],
  ['hello', 'bananass']
] // string[][]
```

## 8. 입력값이 여러 줄의 값이고 띄어쓰기로 구분되어 있는 경우 (숫자) {#8-when-the-input-value-is-multiple-lines-of-numbers-separated-by-spaces}

마지막 예제입니다! 앞에서 설명한 모든 내용들을 적용하시면 됩니다. 아래 예제를 살펴보세요!

### 예제 입력 {#sample-input-8}

```txt
3 24
98 1
5 3 2 5
0 1 1 0
```

`String.prototype.split()` 메서드를 이용하여 개행 문자(`\n`)로 구분된 값들을 배열<sup>`array`</sup>로 만들어 준 후, `Array.prototype.map()` 메서드를 이용하여 각 값들을 띄어쓰기로 구분된 값들로 만들고, 다시 `Array.prototype.map()` 메서드를 이용하여 각 값들을 숫자로 변환해 주어야 합니다!

### 분해 방법 {#parsing-method-8}

```js
const inputParsed = input
  .trim()
  .split('\n')
  .map(val => val.split(' ').map(val => Number(val)));
```

### `inputParsed`에 저장된 값 {#value-stored-in-inputparsed-8}

```js
[
  [3, 24],
  [98, 1],
  [5, 3, 2, 5],
  [0, 1, 1, 0]
] // number[][]
```

## 마치며 {#conclusion}

지금까지 소개한 방법 이외에도 다양한 방식으로 `input`이 들어올 수 있습니다. 이번 챕터에서 소개한 방법들을 참고하여, 다양한 형태의 `input`을 분해하여 원하는 형태로 가공해 보세요! 이제 여러분들의 손에 달렸습니다.:raised_hands:
