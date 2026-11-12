class Answer {
  declare typeOnly: number;

  uninitialized!: number;

  constructor(public value: number) {}
}

function solution(input: string): string {
  const answer = new Answer(Number(input));
  const values: number[] = [answer.value, 1, 2];

  return [
    values.toSorted().toReversed().join(','),
    Object.hasOwn(answer, 'typeOnly'),
    Object.hasOwn(answer, 'uninitialized'),
  ].join(':');
}

export default { solution };
