---
title: '`input`에 들어온 입력값을 파싱<sup>Parsing</sup>하는 방법'
description: '' # TODO
difficulty: 'basic'
author:
  - 'lumirlumir'
---

이번 챕터에서는 `input`에 들어온 입력값을 파싱하는 방법을 소개합니다!

## 훑어보기

아래와 같은 `solution` 함수의 매개변수<sup>Parameter</sup> `input`에는 다양한 형식의 문자열이 들어올 수 있습니다.

> [!IMPORTANT]
>
> `input`에는 항상 문자열<sup>`string`</sup> 타입만 들어옵니다!
>
> 백준의 '예제 입력'이 숫자로 되어있을지라도, 항상 해당 숫자를 문자열 형태로 받아옵니다.

```js
// 백준 1000번 문제.

function solution(input) {
  const [a, b] = input
    .trim()
    .split(' ')
    .map(val => Number(val));

  console.log(a + b);
}

module.exports = solution;
```

그렇다면, 들어온 입력값 `input`을 어떻게 파싱<sup>Parsing</sup>하여 원하는 형태로 가공한 후 사용할 수 있을까요? 예제와 함께 하나씩 살펴봅시다!

## 1. 입력값이 하나일 경우(문자열)

가장 단순한 경우입니다! 아래와 같은 입력값을 가정하겠습니다.

### 예제 입력

```txt
hello
```

가장 많이 사용되는 방식은 `string.prototype.trim()` 메서드를 이용하여, 혹시 모를 문자열의 앞 뒤 공백을 제거하는 것입니다! **단, 일부 문제에는 공백을 함부로 삭제하면 안되는 경우도 존재합니다. 이런 상황에서는 `trim()`을 사용해서는 안됩니다. 주의하세요!!**

### 파싱 방법 1: `string.prototype.trim()`을 이용한 방식

```js
const inputParsed = input.trim();
```

### 파싱 방법 2: `string.prototype.trim()`을 이용하지 않은 방식

```js
const inputParsed = input;
```

### `inputParsed`에 저장된 값

```js
'hello' // string
```

## 2. 입력값이 하나일 경우(숫자)

이제 문자열<sup>`string`</sup> 타입으로 들어온 숫자를 다루기 쉽게 숫자<sup>`number`</sup> 타입으로 변환해 주어야 합니다! 아래와 같은 입력값을 가정하겠습니다.

### 예제 입력

```txt
3
```

그럼 문자열을 어떻게 숫자로 변환해 줄 수 있을까요? 아래와 같은 자바스크립트 빌트인 함수 `Number()`를 이용하면 됩니다!

> [!NOTE]
>
> `+input` 혹은 `parseInt(input)`을 사용하여 문자열 형태의 입력값을 숫자로 변환해 주어도 됩니다.
>
> 단, ESLint의 [`no-implicit-coercion`](https://eslint.org/docs/latest/rules/no-implicit-coercion) 규칙에서 권장하듯, 위에서 언급한 암묵적 타입 변환 방법 대신 `Number()` 함수를 사용하는 것이 좋습니다.
>
> 또한 `create-bananass-app`에 포함된 ESLint 규칙을 사용하고 있다면 `Number()` 함수를 사용하는 것을 권장하니 참고해 주세요!

### 파싱 방법

```js
const inputParsed = Number(input.trim());
```

### `inputParsed`에 저장된 값

```js
3 // number
```

## 3. 입력값이 띄어쓰기로 구분된 한 줄의 값들인 경우(문자열)

이번에는 아래와 같은 입력값이 들어오면 어떨까요?

### 예제 입력

```txt
hello bananass
```

이런 경우 `string.prototype.split()` 메서드를 이용하여 띄어쓰기로 구분된 값들을 배열<sup>`array`</sup>로 만들어 줄 수 있습니다!

### 파싱 방법

```js
const inputParsed = input.trim().split(' ');
```

### `inputParsed`에 저장된 값

```js
['hello', 'bananass'] // string[]
```

## 4. 입력값이 띄어쓰기로 구분된 한 줄의 값들인 경우(숫자)

이제 슬슬 감이 오시나요? 아래 예제를 더 살펴보죠!

### 예제 입력

```txt
3 24 98
```

이런 경우 `string.prototype.split()` 메서드를 이용하여 띄어쓰기로 구분된 값들을 배열<sup>`array`</sup>로 만들어 준 후, `array.prototype.map()` 메서드를 이용하여 각 값들을 숫자로 변환해 주어야 합니다!

### 파싱 방법

```js
const inputParsed = input.trim().split(' ').map(val => Number(val));
```

or

```js
const inputParsed = input.trim().split(' ').map(Number);
```

### `inputParsed`에 저장된 값

```js
[3, 24, 98] // number[]
```

## 5. 입력값이 여러 줄의 값들인 경우(문자열)

이번에는 띄어쓰기가 아닌, 개행 문자(`\n`)로 구분된 여러 줄의 문자열 값들이 들어오는 경우를 살펴보겠습니다!

> [!IMPORTANT]
>
> 백준의 Node.js 환경은 리눅스를 사용하므로, 개행 문자가 LF(`\n`)입니다.
>
> 바나나 프레임워크에서는 이러한 백준 Node.js 환경에 맞게, 윈도우<sup>Windows</sup>의 CRLF(`\r\n`) 혹은 POSIX(리눅스<sup>Linux</sup>, 맥<sup>macOS</sup>)의 LF(`\n`)를 구분하지 않고 `\n`으로 통일하여 입력값(`input`)으로 제공합니다. 즉, 개행 문자로 항상 `\n`을 사용하도록 만들어 두었으니, 편하게 `\n`을 통해 개행을 구분하시면 됩니다!

### 예제 입력

```txt
a
b
c
d
```

이런 경우에도 `string.prototype.split()` 메서드를 이용하여 개행 문자(`\n`)로 구분된 값들을 배열<sup>`array`</sup>로 만들어 줄 수 있습니다!

### 파싱 방법

```js
const inputParsed = input.trim().split('\n');
```

### `inputParsed`에 저장된 값

```js
['a', 'b', 'c', 'd'] // string[]
```

## 6. 입력값이 여러 줄의 값들인 경우(숫자)

이제 혼자서도 하실 수 있겠죠? 아래 예제를 살펴보세요!

### 예제 입력

```txt
3
24
98
```

`string.prototype.split()` 메서드를 이용하여 개행 문자(`\n`)로 구분된 값들을 배열<sup>`array`</sup>로 만들어 준 후, `array.prototype.map()` 메서드를 이용하여 각 값들을 숫자로 변환해 주어야 합니다!

### 파싱 방법

```js
const inputParsed = input.trim().split('\n').map(val => Number(val));
```

or

```js
const inputParsed = input.trim().split('\n').map(Number);
```

### `inputParsed`에 저장된 값

```js
[3, 24, 98] // number[]
```

## 7. 입력값이 여러 줄의 값이고 띄어쓰기로 구분되어 있는 경우(문자열)

이번에는 좀 더 복잡한 경우를 살펴보겠습니다! 이제 방법이 떠오르시나요? 다음 예제를 봅시다.

### 예제 입력

```txt
ab cd
ef gh
my name is lumir
hello bananass
```

`string.prototype.split()` 메서드를 이용하여 개행 문자(`\n`)로 구분된 값들을 배열<sup>`array`</sup>로 만들어 준 후, `array.prototype.map()` 메서드를 이용하여 각 값들을 띄어쓰기로 구분된 값들로 만들어 줄 수 있습니다!

### 파싱 방법

```js
const inputParsed = input.trim().split('\n').map(val => val.split(' '));
```

### `inputParsed`에 저장된 값

```js
[
  ['ab', 'cd'],
  ['ef', 'gh'],
  ['my', 'name', 'is', 'lumir'],
  ['hello', 'bananass']
] // string[][]
```

## 8. 입력값이 여러 줄의 값이고 띄어쓰기로 구분되어 있는 경우(숫자)

마지막 예제입니다! 앞에서 설명한 모든 내용들을 적용하면 됩니다. 아래 예제를 살펴보세요!

### 예제 입력

```txt
3 24
98 1
5 3 2 5
0 1 1 0
```

`string.prototype.split()` 메서드를 이용하여 개행 문자(`\n`)로 구분된 값들을 배열<sup>`array`</sup>로 만들어 준 후, `array.prototype.map()` 메서드를 이용하여 각 값들을 띄어쓰기로 구분된 값들로 만들고, 다시 `array.prototype.map()` 메서드를 이용하여 각 값들을 숫자로 변환해 주어야 합니다!

### 파싱 방법

```js
const inputParsed = input
  .trim()
  .split('\n')
  .map(val => val.split(' ').map(val => Number(val)));
```

### `inputParsed`에 저장된 값

```js
[
  [3, 24],
  [98, 1],
  [5, 3, 2, 5],
  [0, 1, 1, 0]
] // number[][]
```

## 마치며

지금까지 소개한 방법 이외에도 다양한 방식으로 `input`이 들어올 수 있습니다. 이번 챕터에서 소개한 방법들을 참고하여, 다양한 형태의 `input`을 파싱하여 원하는 형태로 가공해 보세요! 이제 여러분들의 손에 달렸습니다.🙌
