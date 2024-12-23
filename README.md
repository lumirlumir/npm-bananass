# bananass

<kbd>한국어</kbd> | <kbd>[English](README.en.md)</kbd>

바나나<sup>Bananass, 🍌🍌🍌🍌</sup>: <kbd>명사</kbd> 자바스크립트를 위한 백준 프레임워크.

> [!IMPORTANT]
>
> ```js
> const whyBananass = {
>   banana: '🍌',
>   bananas: '🍌🍌',
>   bananass: '🍌🍌🍌🍌',
> }
> ```
>
> ```js
> console.log(('b' + 'a' + +'a' + 'a').toLowerCase() + (!(1/0) + [])[3].repeat(2));
> ```

<!-- markdownlint-disable-next-line md026 -->
## 안녕, 바나나!

바나나<sup>Bananass, 🍌🍌🍌🍌</sup> 프레임워크에 오신 것을 환영합니다.🎉

바나나 프레임워크는 [루밀<sup>LuMir</sup>](https://github.com/lumirlumir)이 제작한 **자바스크립트<sup>JavaScript</sup>를 위한 백준 프레임워크**로, 백준 Node.js 환경에서의 보다 편리한 문제풀이를 위해 설계되었습니다.

이제 더 이상 `readline` 혹은 `fs` 모듈을 이용한 템플릿<sup>Template</sup> 코드를 작성한 후, 일일이 복사 붙여넣기할 필요가 없습니다! 바나나 프레임워크를 통해 [**프로그래머스**](https://programmers.co.kr/)에서 하나의 솔루션 함수<sup>`function solution() {}`</sup>를 작성하듯 더욱 간편한 문제 풀이를 경험해보세요.

그런데, 백준 문제 풀이를 하는데 굳이 프레임워크까지 알아야 할까요? 아래에서 그 이유를 찾아보죠!

## 왜 바나나일까요?

왜 자바스크립트<sup>JavaScript</sup> 생태계의 수 많은 프레임워크 중 문제 풀이에 특화된 프레임워크는 없었을까요? 함께 자바스크립트를 이용한 [백준 1000번: A+B](https://www.acmicpc.net/problem/1000) 문제 풀이 예제를 살펴보죠!

- 전<sup>Before</sup>: 기존 방법을 통한 문제 풀이.

    ```js
    const readline = require('node:readline');
    const { EOL } = require('node:os');

    let inputStr = '';

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.on('line', line => {
      inputStr = `${inputStr}${line}${EOL}`;

    }).on('close', () => {
      console.log(solution(inputStr));

      process.exit(0);
    });

    function solution(inputStr) {
      const input = inputStr
        .trim()
        .split(' ')
        .map(val => Number(val));

      const [a, b] = input;

      return a + b;
    }
    ```

- 후<sup>After</sup>: 바나나 프레임워크를 이용한 문제 풀이.

    ```js
    function solution(input) {
      const [a, b] = input
        .trim()
        .split(' ')
        .map(Number);

      console.log(a + b);
    }

    module.exports = solution;
    ```

와우!😲 놀랍지 않나요? 이제 여러분들은 단순해진 코드와 더불어 알고리즘 로직에만 집중할 수 있습니다.

근데, 이게 전부냐고요? 물론 아닙니다!

- 백준 Node.js 환경에 구애받지 않는 ES2025 등 최신 문법의 사용
- 사용자 정의 모듈 및 `lodash` 등 외부 라이브러리의 사용
- ESLint 및 Prettier 자체 지원
- 풍부한 문서 및 커뮤니티 지원
- ...

어떤가요? 바나나 프레임워크를 통해 더욱 편리한 문제 풀이를 경험해보고 싶지 않으신가요?🤔

## 바나나로 시작하기

React의 `create-react-app`, Next.js의 `create-next-app` 처럼,

**바나나 프레임워크에서 제공하는 `create-bananass-app`으로 지금 바로 새로운 문제 풀이 패러다임을 경험해보세요!**

바나나 프레임워크는 `create-bananass-app`을 통해 즉시 설치하고 사용할 수 있습니다! (사실 앱<sup>App</sup>은 아니지만, 그건 중요한게 아닙니다...🤔)

```bash
npx create-bananass-app my-bananass-app --no-install
```

더욱 자세한 사용법은 [바나나 프레임워크 문서](https://bananass.lumir.page)를 참고해주세요.

## 바나나 프레임워크 문서

> <https://bananass.lumir.page>

바나나 프레임워크는 문서화를 가장 큰 가치로 여깁니다. 바나나 프레임워크의 모든 사용법과 기능은 [바나나 프레임워크 문서](https://bananass.lumir.page)에서 확인하실 수 있습니다.

## 기여(이슈<sup>Issue</sup>, 끌어오기 요청<sup>Pull Request</sup>, 토론<sup>Discussion</sup>)

바나나 프레임워크에 관심을 가져주셔서 감사합니다.🙇‍♂️ 저희는 여러분들의 소중한 시간을 바나나 프레임워크에 투자해주신 것에 대해 고마움을 가지고 있습니다.

모든 버그<sup>Bug</sup> 및 제안<sup>Suggestion</sup> 등 여러 주제에 대한 이슈<sup>Issue</sup>, 끌어오기 요청<sup>Pull Request</sup> 및 토론<sup>Discussion</sup> 등을 환영합니다.

다만, 올바른 커뮤니티 환경을 준수하고 더 나은 오픈소스를 만들기 위해, 바나나 프레임워크에 기여하기 전 반드시 아래 내용들을 확인해주세요.

- [기여자 행동 강령 규약](CODE_OF_CONDUCT.md)
- [기여하기](CONTRIBUTING.md)

## 버전 정책<sup>Versioning</sup>

바나나 프레임워크는 [유의적 버전 정책<sup>Sementic Versioning</sup>](https://semver.org/lang/ko/)을 따릅니다. 모든 릴리즈 버전은 `주(MAJOR).부(MINOR).수(PATCH)` 형식을 따릅니다.

## 기여자 행동 강령 규약<sup>Code of Conduct</sup>

커뮤니티에 기여하기 전, [기여자 행동 강령 규약](CODE_OF_CONDUCT.md)을 참고해주세요.

## 변경 사항<sup>Change Log</sup>

변경 사항에 대한 상세한 내용을 확인하려면, [변경 사항](CHANGELOG.md)을 참고해주세요.

## 보안<sup>Security</sup>

보안 문제를 발견하셨나요? [보안](SECURITY.md) 문서를 참고해주세요.

## 라이센스<sup>License</sup>

바나나 프레임워크는 MIT 라이센스를 따릅니다. [라이센스](LICENSE.md) 문서를 참고해주세요.
