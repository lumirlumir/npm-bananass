# 이외의 유용한 CLI 명령어들 {#other-useful-cli-commands}

이번 챕터에서는 바나나 프레임워크에서 제공하는 모든 CLI 명령어들을 소개합니다!

바나나 프레임워크의 [`build`](#build), [`run`](#run), [`open`](#open) 등의 모든 CLI 명령어들은 `npx bananass` 혹은 `npx b` 명령어를 통해 실행할 수 있습니다.

- `-v, --version` 옵션을 통해 현재 설치된 바나나 프레임워크의 버전을 확인할 수 있습니다.
- `-h, --help` 옵션을 통해 사용 가능한 모든 명령어와 옵션을 확인할 수 있습니다.

```sh
npx bananass [options] [command]
# 또는
npx b [options] [command]
```

::: danger 반드시 읽어주세요!

**사용 예시** 및 **옵션**에서 사용하는 꺾쇠 괄호(`<>`) 및 대괄호(`[]`)의 의미는 다음과 같습니다.

- 꺾쇠 괄호(`<>`)는 *필수* 인자를 의미합니다.
- 대괄호(`[]`)는 *선택적* 인자를 의미합니다.
- **꺾쇠 괄호** 및 **대괄호**와 함께 사용된 점점점(`...`)은 *여러 개*의 인자를 의미합니다.

또한, <strong>별칭<sup>Alias</sup></strong>은 해당 명령어를 실행할 수 있는 다른 이름을 의미합니다. 예를 들어, `bananass` 명령어의 별칭이 `b`이므로, `npx bananass` 대신 `npx b`를 사용하여 명령어를 실행할 수도 있습니다.

:::

::: warning :bulb:매번 CLI에 옵션을 입력하기 귀찮으신가요?:bulb:

CLI 명령어를 입력할 때마다 자주 사용하는 옵션을 매번 입력하기 귀찮으신가요? 그럴 땐 [`bananass.config.*`](writing-bananass-config-file) 파일에 자주 사용하는 옵션을 미리 설정해두면, 매번 입력하지 않아도 됩니다!

자세한 내용은 [`bananass.config` 파일 작성하기](writing-bananass-config-file) 문서를 참고해주세요!

:::

::: warning CLI 명령어와 [`bananass.config.*`](writing-bananass-config-file) 중 어떤 옵션이 우선시되나요?

옵션의 우선순위는 아래와 같습니다!

1. CLI 명령어에 입력한 옵션 (가장 높은 우선순위)
1. [`bananass.config.*`](writing-bananass-config-file) 파일에 설정한 옵션
1. 바나나 프레임워크의 기본 옵션 (가장 낮은 우선순위)

:::

---

[[TOC]]

## `add` {#add}

> 별칭: `create`

<!-- @include: @/shared/wip.ko.md -->

## `bug` {#bug}

> 별칭: `bugs`, `issue`, `issues`

브라우저에서 [깃허브 이슈<sup>GitHub Issues</sup>](https://github.com/lumirlumir/npm-bananass/issues) 웹 페이지를 열어줍니다.

바나나 프레임워크와 관련된 버그를 제보하거나, 기능 개선 요청 등의 피드백을 남기고 싶을 때 유용하게 사용할 수 있습니다!

### 사용 예시 {#bug-example}

```sh
npx bananass bug [options]
```

### 옵션 `[options]` {#bug-options}

| 옵션                    | 인자         | 기본값     | 설명                                                                                                 |
| ----------------------- | ----------- | --------- | --------------------------------------------------------------------------------------------------- |
| `-b`, `--browser`       | `<browser>` | `default` | 브라우저를 설정합니다. `chrome`, `edge`, `firefox`, `brave`, `default` 중 하나를 인자로 전달할 수 있습니다. |
| `-s`, `--secret`        | X           | `false`   | 브라우저의 시크릿 모드를 활성화합니다.                                                                   |
| `-d`, `--debug`         | X           | `false`   | 디버그 모드를 활성화하여 추가 정보를 출력합니다.                                                           |
| `-q`, `--quiet`         | X           | `false`   | 출력 로그를 최소화하는 조용한 모드를 실행합니다.                                                           |
| `-h`, `--help`          | X           |           | 사용 가능한 옵션과 도움말 정보를 표시합니다.                                                              |

## `build` {#build}

> 별칭: 없음

[웹팩<sup>Webpack</sup>](https://webpack.js.org/) 및 [바벨<sup>Babel</sup>](https://babeljs.io/)을 사용하여, `bananass` 폴더에 존재하는 문제 풀이 파일들을 `.bananass` 폴더에 번들링하여 빌드합니다.

### 사용 예시 {#build-example}

```sh
npx bananass build [options] <problems...>
```

### 인자 `<problems...>` {#build-args}

::: warning :bulb:개선 예정입니다!:bulb:

현재, `<problems...>` 인자에는 1000 이상의 숫자로 된 문제 풀이 파일 번호만 입력할 수 있습니다. 예를 들어, 백준 1000번 문제는 `1000`으로, 1001번 문제는 `1001`로 입력합니다.

추후, 숫자가 아닌 일반적인 문제 풀이 파일 이름도 입력할 수 있도록 개선할 예정입니다.

:::

`<problems...>` 인자로 문제 풀이 파일 번호를 입력합니다. 예를 들어, 백준 1000번 문제는 `1000`으로, 1001번 문제는 `1001`로 입력합니다. `npx bananass build 1000 1001`과 같이 여러 개의 문제 풀이 파일 번호를 입력할 수도 있습니다.

### 옵션 `[options]` {#build-options}

| 옵션                    | 인자      | 기본값           | 설명                                                                                                                                                |
| ----------------------- | -------- | ----------------| -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-c`, `--cwd`           | `<dir>`  | `findRootDir()` | 명령어를 실행할 현재 작업 디렉토리를 설정합니다.                                                                                                          |
| `-e`, `--entry-dir`     | `<dir>`  | `bananass`      | 문제 풀이 파일들이 위치할 엔트리 디렉토리를 설정합니다.                                                                                                    |
| `-o`, `--out-dir`       | `<dir>`  | `.bananass`     | 빌드 결과물들을 저장할 출력 디렉토리를 설정합니다.                                                                                                        |
| `-d`, `--debug`         | X        | `false`         | 디버그 모드를 활성화하여 추가 정보를 출력합니다.                                                                                                          |
| `-q`, `--quiet`         | X        | `false`         | 출력 로그를 최소화하는 조용한 모드를 실행합니다.                                                                                                          |
| `-C`, `--clean`         | X        | `false`         | 빌드 전에 기존 출력 디렉토리를 삭제하여 정리합니다.                                                                                                       |
| `-t`, `--template-type` | `<type>` | `fs`            | 웹팩<sup>Webpack</sup>의 엔트리 파일로 사용할 템플릿 타입을 설정합니다. `fs`<sup>File System</sup> 혹은 `rl`<sup>Read Line</sup> 중 하나를 선택할 수 있습니다. |
| `-h`, `--help`          | X        |                 | 사용 가능한 옵션과 도움말 정보를 표시합니다.                                                                                                             |

## `discussion` {#discussion}

> 별칭: `discussions`, `discuss`, `disc`, `question`, `questions`

브라우저에서 [깃허브 디스커션<sup>GitHub Discussions</sup>](https://github.com/lumirlumir/npm-bananass/discussions) 웹 페이지를 열어줍니다.

바나나 프레임워크와 관련된 질문, 답변, 토론 등을 남기고 싶을 때 유용하게 사용할 수 있습니다!

### 사용 예시 {#discussion-example}

```sh
npx bananass discussion [options]
```

### 옵션 `[options]` {#discussion-options}

| 옵션                    | 인자         | 기본값     | 설명                                                                                                 |
| ----------------------- | ----------- | --------- | --------------------------------------------------------------------------------------------------- |
| `-b`, `--browser`       | `<browser>` | `default` | 브라우저를 설정합니다. `chrome`, `edge`, `firefox`, `brave`, `default` 중 하나를 인자로 전달할 수 있습니다. |
| `-s`, `--secret`        | X           | `false`   | 브라우저의 시크릿 모드를 활성화합니다.                                                                   |
| `-d`, `--debug`         | X           | `false`   | 디버그 모드를 활성화하여 추가 정보를 출력합니다.                                                           |
| `-q`, `--quiet`         | X           | `false`   | 출력 로그를 최소화하는 조용한 모드를 실행합니다.                                                           |
| `-h`, `--help`          | X           |           | 사용 가능한 옵션과 도움말 정보를 표시합니다.                                                              |

## `home` {#home}

> 별칭: 없음

브라우저에서 [바나나 프레임워크 공식 문서](https://bananass.lumir.page) 웹 페이지를 열어줍니다.

### 사용 예시 {#home-example}

```sh
npx bananass home [options]
```

### 옵션 `[options]` {#home-options}

| 옵션                    | 인자         | 기본값     | 설명                                                                                                 |
| ----------------------- | ----------- | --------- | --------------------------------------------------------------------------------------------------- |
| `-b`, `--browser`       | `<browser>` | `default` | 브라우저를 설정합니다. `chrome`, `edge`, `firefox`, `brave`, `default` 중 하나를 인자로 전달할 수 있습니다. |
| `-s`, `--secret`        | X           | `false`   | 브라우저의 시크릿 모드를 활성화합니다.                                                                   |
| `-d`, `--debug`         | X           | `false`   | 디버그 모드를 활성화하여 추가 정보를 출력합니다.                                                           |
| `-q`, `--quiet`         | X           | `false`   | 출력 로그를 최소화하는 조용한 모드를 실행합니다.                                                           |
| `-h`, `--help`          | X           |           | 사용 가능한 옵션과 도움말 정보를 표시합니다.                                                              |

## `info` {#info}

> 별칭: 없음

버그를 보고할 때 사용할 수 있는 현재 시스템에 대한 세부 정보를 출력합니다.

### 사용 예시 {#info-example}

```sh
npx bananass info [options]
```

### 옵션 `[options]` {#info-options}

| 옵션                    | 인자         | 기본값     | 설명                                                                                        |
| ----------------------- | ----------- | --------- | ------------------------------------------------------------------------------------------ |
| `-d`, `--debug`         | X           | `false`   | 디버그 모드를 활성화하여 추가 정보를 출력합니다.                                                  |
| `-q`, `--quiet`         | X           | `false`   | 출력 로그를 최소화하는 조용한 모드를 실행합니다.                                                  |
| `-a`, `--all`           | X           | `false`   | `not found`를 포함한 모든 정보를 출력합니다.                                                    |
| `-h`, `--help`          | X           |           | 사용 가능한 옵션과 도움말 정보를 표시합니다.                                                     |

## `open` {#open}

> 별칭: 없음

브라우저에서 백준 문제 번호에 해당하는 웹 페이지를 열어줍니다.

### 사용 예시 {#open-example}

```sh
npx bananass open [options] <problems...>
```

### 인자 `<problems...>` {#open-args}

`<problems...>` 인자로 문제 풀이 파일 번호를 입력합니다. 예를 들어, 백준 1000번 문제는 `1000`으로, 1001번 문제는 `1001`로 입력합니다. `npx bananass open 1000 1001`과 같이 여러 개의 문제 풀이 파일 번호를 입력할 수도 있습니다.

### 옵션 `[options]` {#open-options}

| 옵션                    | 인자         | 기본값     | 설명                                                                                                 |
| ----------------------- | ----------- | --------- | --------------------------------------------------------------------------------------------------- |
| `-b`, `--browser`       | `<browser>` | `default` | 브라우저를 설정합니다. `chrome`, `edge`, `firefox`, `brave`, `default` 중 하나를 인자로 전달할 수 있습니다. |
| `-s`, `--secret`        | X           | `false`   | 브라우저의 시크릿 모드를 활성화합니다.                                                                   |
| `-d`, `--debug`         | X           | `false`   | 디버그 모드를 활성화하여 추가 정보를 출력합니다.                                                           |
| `-q`, `--quiet`         | X           | `false`   | 출력 로그를 최소화하는 조용한 모드를 실행합니다.                                                           |
| `-h`, `--help`          | X           |           | 사용 가능한 옵션과 도움말 정보를 표시합니다.                                                              |

## `repo` {#repo}

> 별칭: 없음

브라우저에서 [바나나 프레임워크 깃허브 리포지토리](https://github.com/lumirlumir/npm-bananass) 웹 페이지를 열어줍니다.

### 사용 예시 {#repo-example}

```sh
npx bananass repo [options]
```

### 옵션 `[options]` {#repo-options}

| 옵션                    | 인자         | 기본값     | 설명                                                                                                 |
| ----------------------- | ----------- | --------- | --------------------------------------------------------------------------------------------------- |
| `-b`, `--browser`       | `<browser>` | `default` | 브라우저를 설정합니다. `chrome`, `edge`, `firefox`, `brave`, `default` 중 하나를 인자로 전달할 수 있습니다. |
| `-s`, `--secret`        | X           | `false`   | 브라우저의 시크릿 모드를 활성화합니다.                                                                   |
| `-d`, `--debug`         | X           | `false`   | 디버그 모드를 활성화하여 추가 정보를 출력합니다.                                                           |
| `-q`, `--quiet`         | X           | `false`   | 출력 로그를 최소화하는 조용한 모드를 실행합니다.                                                           |
| `-h`, `--help`          | X           |           | 사용 가능한 옵션과 도움말 정보를 표시합니다.                                                              |

## `run` {#run}

> 별칭: 없음

[문제 풀이 파일의 테스트 케이스](writing-test-cases.md)를 실행하고 예상 출력값과 비교합니다.

### 사용 예시 {#run-example}

```sh
npx bananass run [options] <problems...>
```

### 인자 `<problems...>` {#run-args}

`<problems...>` 인자로 문제 풀이 파일 번호를 입력합니다. 예를 들어, 백준 1000번 문제는 `1000`으로, 1001번 문제는 `1001`로 입력합니다. `npx bananass run 1000 1001`과 같이 여러 개의 문제 풀이 파일 번호를 입력할 수도 있습니다.

### 옵션 `[options]` {#run-options}

| 옵션                    | 인자         | 기본값           | 설명                                             |
| ----------------------- | ----------- | --------------- | ----------------------------------------------- |
| `-c`, `--cwd`           | `<dir>`     | `findRootDir()` | 명령어를 실행할 현재 작업 디렉토리를 설정합니다.       |
| `-e`, `--entry-dir`     | `<dir>`     | `bananass`      | 문제 풀이 파일들이 위치할 엔트리 디렉토리를 설정합니다. |
| `-d`, `--debug`         | X           | `false`         | 디버그 모드를 활성화하여 추가 정보를 출력합니다.       |
| `-q`, `--quiet`         | X           | `false`         | 출력 로그를 최소화하는 조용한 모드를 실행합니다.       |
| `-h`, `--help`          | X           |                 | 사용 가능한 옵션과 도움말 정보를 표시합니다.          |

## `help` {#help}

> 별칭: 없음

바나나 프레임워크의 CLI 명령어에 대한 도움말을 출력합니다.

### 사용 예시 {#help-example}

```sh
npx bananass help [command]
```
