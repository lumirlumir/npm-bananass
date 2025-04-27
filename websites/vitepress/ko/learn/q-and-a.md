# 질문과 답변 {#q-and-a}

## Q. 백준에 Node.js로 풀 수 없는 문제가 있나요? {#are-there-problems-that-cannot-be-solved-with-nodejs}

백준에는 '언어제한'이 존재합니다! 일부 문제들은 Node.js로 풀 수 없습니다.

이러한 상황에 대비하여 꼭 해당 문제의 '맞힌 사람'에 들어가서 Node.js로 맞힌 사람이 존재하는지 먼저 파악해 보는 것을 강력히 추천드립니다!

## Q. 윈도우<sup>Windows</sup> 환경인데, 개행 문자로 Line Feed (LF, `\n`)를 사용할 수 있나요? {#can-i-use-line-feed-lf-in-windows}

`create-bananass` 명령어를 통해 바나나 프레임워크를 설치하였을 시, 바나나 프레임워크는 `solution` 함수의 인자로 전달하는 모든 `input`에 대해, 줄 바꿈 (개행) 문자로 LF(`\n`)를 사용하도록 설정되어 있습니다. 따라서, 윈도우<sup>Windows</sup> 환경이라고 해서 줄 바꿈 문자를 구분할 때 CRLF(`\r\n`)를 사용할 필요는 없습니다!
