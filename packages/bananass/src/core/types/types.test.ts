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
  Solution,
} from './types.js';

// --------------------------------------------------------------------------------
// Test: Config Object
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObject

declare let configObject: ConfigObject;

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
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
configObject = 1;

// #endregion ConfigObject
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// Test: Solution
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Input

declare let input: Input;

input = 'string';
input = undefined;

input satisfies string | undefined;

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

declare let output: Output;

output = 'string';
output = 1;
output = true;

output satisfies string | number | boolean;

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

declare let testcase: Testcase;

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

testcase satisfies {
  input?: Input;
  output: Output;
};
testcase satisfies {
  output: Output;
};

// @ts-expect-error -- `output` is required.
testcase = {
  input: 'string',
};

// @ts-expect-error -- `input` is optional.
testcase satisfies {
  input: Input;
  output: Output;
};

// #endregion Testcase
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Solution

declare const solution: Solution;

solution() satisfies Output;
solution(undefined) satisfies Output;
solution('string') satisfies Output;

// @ts-expect-error -- Expected 0-1 arguments, but got 2.
solution('string', 'extra');
// @ts-expect-error -- Expected 0-1 arguments, but got 3.
solution('string', 'extra1', 'extra2');

// #endregion Testcase
// --------------------------------------------------------------------------------
