# 문제 풀이 파일 실행하기 {#running-a-solution-file}

[10699번: 오늘 날짜](https://www.acmicpc.net/problem/10699)와 같은 일부 문제들의 경우, `input`과 `output`을 통해 결과를 비교하기 어려운 경우들이 있습니다.

이럴 때, `bananass run 1000 --dry-run` 혹은 `bananass run 1000 -d` 명령어를 통해, 결과 비교 없이 `solution` 함수를 단순히 한번 실행하여 결과를 출력해 볼 수 있습니다.

`--dry-run` 옵션은 `return`을 통한 `solution` 함수의 반환값을 `console.log`를 통해 출력하지 않습니다! `--dry-run` 옵션은 `bananass run` 명령어를 통한 결과 비교 전, 중간 과정 디버깅 목적으로 활용하도록 설계한 것이며, 반드시 `solution` 함수 내부에 `console.log`를 작성하여 올바른 값이 출력되는지 디버깅한 후, `console.log`를 삭제하여 제출해야 합니다. (바나나 프레임워크에서 제공한 ESLint을 사용하신다면, `console.log` 사용 시, 경고 메시지가 표시될 것입니다.)
