# 질문과 답변 {#q-and-a}

## Q. 백준에 Node.js로 풀 수 없는 문제가 있나요? {#are-there-problems-that-cannot-be-solved-with-nodejs}

백준에는 '언어제한'이 존재합니다! 일부 문제들은 Node.js로 풀 수 없습니다.

이러한 상황에 대비하여 꼭 해당 문제의 '맞힌 사람'에 들어가서 Node.js로 맞힌 사람이 존재하는지 먼저 파악해 보는 것을 강력히 추천드립니다!

## Q. 윈도우<sup>Windows</sup> 환경인데, 개행 문자로 Line Feed (LF, `\n`)를 사용할 수 있나요? {#can-i-use-line-feed-lf-in-windows}

`create-bananass` 명령어를 통해 바나나 프레임워크를 설치하였을 시, 바나나 프레임워크는 `solution` 함수의 인자로 전달하는 모든 `input`에 대해, 줄 바꿈 (개행) 문자로 LF(`\n`)를 사용하도록 설정되어 있습니다. 따라서, 윈도우<sup>Windows</sup> 환경이라고 해서 줄 바꿈 문자를 구분할 때 CRLF(`\r\n`)를 사용할 필요는 없습니다!

## Q. `Error: spawn xdg-mime ENOENT`이나 `Error: spawn xdg-open ENOENT`가 발생하는 경우 {#error-spawn-xdg-mime-or-xdg-open-enoent}

이는 웹 브라우저를 실행하는 과정 중 리눅스 환경(또는 WSL)에서 `xdg-mime`과 `xdg-open` 명령어가 존재하지 않아 발생하는 오류입니다.

`sudo apt-get install xdg-utils`를 통해 해당 패키지를 설치하시면 이 문제를 해결할 수 있습니다.

## Q. WSL 환경에서 설치되어 있지 않은 브라우저로 시도하거나 또는 `Error: Wslview is not supported as a default browser` 같은 오류가 발생할 경우 {#wsl-browser-error}

이는 웹 브라우저를 실행하는 과정 중 WSL 환경에서 정확한 브라우저를 찾지 못해서 발생하는 오류입니다.

[현재 관련 이슈](https://github.com/sindresorhus/open/issues/357)를 제출해 해결 방안을 찾고 있습니다.

그동안은 사용하시는 브라우저를 아래와 같이 명령어에 정확하게 입력해주세요.

```log
npx bananass open 1000 --browser chrome
```
