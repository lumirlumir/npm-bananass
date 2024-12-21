# `examples-solutions-readline-esm`

<kbd>한국어</kbd> | <kbd>[English](README.en.md)</kbd>

이 예제는 백준 Node.js 환경에서의 ESM 모듈 ***미지원***을 확인하기 위한, ESM 환경에서의 `readline` 모듈을 이용한 백준 문제 풀이 예제입니다.

아래의 [시작하기](#시작하기)를 따라 예제를 실행하면 해당 파일이 로컬 환경에서 정상 작동함을 확인할 수 있습니다. 그러나 해당 파일을 백준에 제출하면 백준의 Node.js 환경에서는 'Runtime Error (Syntax Error)'가 발생합니다. 이는 백준이 ESM 모듈을 지원하지 않기 때문에 발생하는 것으로, 백준 문제풀이에는 CJS 모듈을 사용해야만 함을 알 수 있습니다.

> [!IMPORTANT]
>
> 해당 예제에는 문제 풀이 예제를 더 이상 추가하고 있지 않습니다. 문제 풀이 예제를 추가하려면 바나나<sup>Bananass</sup> 프레임워크를 이용한 `examples/solutions-bananass` 디렉토리를 참조하세요.

## 시작하기

다음 두 가지 방법 중 하나를 선택하여 예제를 실행할 수 있습니다.

### 루트에서 실행

루트 디렉토리에서 다음 명령어를 실행하여 예제를 시작할 수 있습니다.

```sh
npm run start:1000 -w examples/solutions-readline-esm # 1000번 문제
```

### 디렉토리로 이동하여 실행

`examples/solutions-readline-esm` 디렉토리로 이동한 후, 다음 명령어를 실행하여 예제를 시작할 수 있습니다.

```sh
cd examples/solutions-readline-esm

npm run start:1000 # 1000번 문제
```

이제 예제가 실행되면, 터미널에 백준 예제를 입력하고, <kbd>Enter</kbd>를 누른 후, <kbd>Ctrl</kbd>+<kbd>c</kbd> 혹은 <kbd>Command</kbd>+<kbd>c</kbd>를 눌러, 예제 출력이 나타나는 것을 확인할 수 있습니다.
