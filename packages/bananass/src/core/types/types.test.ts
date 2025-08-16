/**
 * @fileoverview Type test for `types.js`.
 */

/* eslint-disable -- Type test */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import type {
  ConfigObject,
  // ConfigObjectBrowser,
  // ConfigObjectConsole,
  // ConfigObjectAdd,
  // ConfigObjectBug,
  // ConfigObjectBuild,
  // ConfigObjectDiscussion,
  // ConfigObjectHome,
  // ConfigObjectInfo,
  // ConfigObjectOpen,
  // ConfigObjectRepo,
  // ConfigObjectRun,
  // Problem,
  // Problems,
  Input,
  Output,
  Testcase,
  // Testcases,
  Solution,
} from './types.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObject

({}) as ConfigObject satisfies object;

// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
({}) as ConfigObject satisfies boolean;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
({}) as ConfigObject satisfies string;
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
({}) as ConfigObject satisfies number;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObject`.
({}) as ConfigObject satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObject`.
({}) as ConfigObject satisfies null;

let configObject: ConfigObject;

configObject = {};
configObject = {
  entryDir: 'src',
};
configObject = {
  build: {
    templateType: 'fs',
  },
};

configObject = {
  // @ts-expect-error -- `unknownProperty` does not exist in type `ConfigObject`.
  unknownProperty: 'unknown',
};
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
configObject = 'string';
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
configObject = 1;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
configObject = true;

// #endregion ConfigObject
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Input

null as unknown as Input satisfies string | undefined;

// @ts-expect-error -- Type `string | undefined` does not satisfy the expected type `undefined`.
null as unknown as Input satisfies string;
// @ts-expect-error -- Type `string | undefined` does not satisfy the expected type `undefined`.
null as unknown as Input satisfies undefined;

let input: Input;

input = 'string';
input = undefined;

// @ts-expect-error -- Type `number` is not assignable to type `Input`.
input = 1;
// @ts-expect-error -- Type `boolean` is not assignable to type `Input`.
input = true;
// @ts-expect-error -- Type `null` is not assignable to type `Input`.
input = null;
// @ts-expect-error -- Type `symbol` is not assignable to type `Input`.
input = Symbol('symbol');
// @ts-expect-error -- Type `bigint` is not assignable to type `Input`.
input = BigInt(1);
// @ts-expect-error -- Type `object` is not assignable to type `Input`.
input = { key: 'value' };
// @ts-expect-error -- Type `Function` is not assignable to type `Input`.
input = () => 'function';

// #endregion Input
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Output

null as unknown as Output satisfies string | number | boolean;

// @ts-expect-error -- Type 'string | number | boolean' does not satisfy the expected type 'string'.
null as unknown as Output satisfies string;
// @ts-expect-error -- Type 'string | number | boolean' does not satisfy the expected type 'string'.
null as unknown as Output satisfies number;
// @ts-expect-error -- Type 'string | number | boolean' does not satisfy the expected type 'string'.
null as unknown as Output satisfies boolean;

let output: Output;

output = 'string';
output = 1;
output = true;

// @ts-expect-error -- Type `undefined` is not assignable to type `Output`.
output = undefined;
// @ts-expect-error -- Type `null` is not assignable to type `Output`.
output = null;
// @ts-expect-error -- Type `symbol` is not assignable to type `Output`.
output = Symbol('symbol');
// @ts-expect-error -- Type `bigint` is not assignable to type `Output`.
output = BigInt(1);
// @ts-expect-error -- Type `object` is not assignable to type `Output`.
output = { key: 'value' };
// @ts-expect-error -- Type `Function` is not assignable to type `Output`.
output = () => 'function';

// #endregion Output
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Testcase

({}) as Testcase satisfies {
  input?: Input;
  output: Output;
};
({}) as Testcase satisfies {
  output: Output;
};

// @ts-expect-error -- `input` is optional.
({}) as Testcase satisfies {
  input: Input;
  output: Output;
};

let testcase: Testcase;

testcase = {
  output: 'string',
};
testcase = {
  input: undefined,
  output: 'string',
};
testcase = {
  input: 'string',
  output: 'string',
};
testcase = {
  input: 'string',
  output: 123,
};
testcase = {
  input: 'string',
  output: true,
};

// @ts-expect-error -- `output` is required.
testcase = {
  input: 'string',
};

// #endregion Testcase
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Solution

null as unknown as Solution satisfies (input: Input) => Output;
null as unknown as Solution satisfies (input: string) => Output;
null as unknown as Solution satisfies (input?: Input) => Output;
null as unknown as Solution satisfies (input: undefined) => Output;
null as unknown as Solution satisfies (input: string | undefined) => Output;
null as unknown as Solution satisfies () => Output;
null as unknown as ReturnType<Solution> satisfies Output;
null as unknown as Parameters<Solution> satisfies [(string | undefined)?];

// @ts-expect-error -- Type '(args_0?: string | undefined) => string | number | boolean' does not satisfy the expected type '(input: boolean) => string | number | boolean'.
null as unknown as Solution satisfies (input: boolean) => Output;
// @ts-expect-error -- Type 'string | number | boolean' does not satisfy the expected type 'string'.
null as unknown as ReturnType<Solution> satisfies string;
// @ts-expect-error -- Type '[(string | undefined)?]' does not satisfy the expected type '[string]'.
null as unknown as Parameters<Solution> satisfies [string];

let solution: Solution;

solution = function solution(input: Input): Output {
  return null as unknown as Output;
};
solution = function solution(input: Input) {
  return null as unknown as string;
};
solution = function solution(input: Input) {
  return null as unknown as number;
};
solution = function solution(input: Input) {
  return null as unknown as boolean;
};
solution = function solution(input?: string): Output {
  return null as unknown as string;
};
solution = function solution(input?: string) {
  return input!;
};
solution = function solution(input: string | undefined) {
  return input!;
};
solution = function solution() {
  return 'abc';
};

// @ts-expect-error -- Type '(input: string) => string | number | boolean' is not assignable to type '(args_0?: string | undefined) => string | number | boolean'.
solution = function solution(input: string): Output {
  return null as unknown as Output;
};
// @ts-expect-error -- Argument of type 'number' is not assignable to parameter of type 'string'.
solution = function solution(input?: number): Output {
  return null as unknown as Output;
};
// @ts-expect-error -- Expected 2 or more arguments, but got 1.
solution = function solution(input1: Input, input2: Input): Output {
  return null as unknown as Output;
};
// @ts-expect-error -- Expected 3 or more arguments, but got 1.
solution = function solution(input1: Input, input2: Input, input3: Input): Output {
  return null as unknown as Output;
};

// #endregion Testcase
// --------------------------------------------------------------------------------
