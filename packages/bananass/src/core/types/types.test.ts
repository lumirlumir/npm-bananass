/**
 * @fileoverview Type test for `types.js`.
 */

/* eslint-disable -- Type test */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import type {
  ConfigObject,
  ConfigObjectBrowser,
  ConfigObjectConsole,
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
  // Input,
  // Output,
  // Testcase,
  // Testcases,
  // Solution,
} from './types.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObject

({}) as ConfigObject satisfies object;
({}) as ConfigObject['cwd'] satisfies string | undefined;
({}) as ConfigObject['entryDir'] satisfies string | undefined;
({}) as ConfigObject['outDir'] satisfies string | undefined;
({}) as ConfigObject['browser'] satisfies object | undefined;
({}) as ConfigObject['console'] satisfies object | undefined;
({}) as ConfigObject['add'] satisfies object | undefined;
({}) as ConfigObject['bug'] satisfies object | undefined;
({}) as ConfigObject['build'] satisfies object | undefined;
({}) as ConfigObject['discussion'] satisfies object | undefined;
({}) as ConfigObject['home'] satisfies object | undefined;
({}) as ConfigObject['info'] satisfies object | undefined;
({}) as ConfigObject['open'] satisfies object | undefined;
({}) as ConfigObject['repo'] satisfies object | undefined;
({}) as ConfigObject['run'] satisfies object | undefined;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
({}) as ConfigObject satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
({}) as ConfigObject satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
({}) as ConfigObject satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObject`.
({}) as ConfigObject satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObject`.
({}) as ConfigObject satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObject`.
({}) as ConfigObject satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObject`.
({}) as ConfigObject satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObject`.
({}) as ConfigObject satisfies Function;

let configObject: ConfigObject;

configObject = {};
configObject = {
  cwd: '/path/to/directory',
  entryDir: 'entry',
  outDir: 'out',

  browser: {
    browser: 'default',
    secret: false,
  },
  console: {
    debug: false,
  },

  build: {
    templateType: 'fs',
  },
};
configObject = {
  cwd: undefined,
  entryDir: undefined,
  outDir: undefined,

  browser: undefined,
  console: undefined,
};

configObject = {
  // @ts-expect-error -- `unknownProperty` does not exist in type `ConfigObject`.
  unknownProperty: 'Hello, World!',
};
// @ts-expect-error -- Cannot assign to 'cwd' because it is a read-only property.
configObject.cwd = 'foo';
// @ts-expect-error -- Cannot assign to 'entryDir' because it is a read-only property.
configObject.entryDir = 'foo';
// @ts-expect-error -- Cannot assign to 'outDir' because it is a read-only property.
configObject.outDir = 'foo';
// @ts-expect-error -- Cannot assign to 'build' because it is a read-only property.
configObject.build = undefined;
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
configObject = 0;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
configObject = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
configObject = true;

// #endregion ConfigObject
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectBrowser

({}) as ConfigObjectBrowser satisfies object;
({}) as ConfigObjectBrowser['browser'] satisfies string | undefined;
({}) as ConfigObjectBrowser['secret'] satisfies boolean | undefined;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBrowser satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBrowser satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBrowser satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBrowser satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBrowser satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBrowser satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBrowser satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBrowser satisfies Function;

let configObjectBrowser: ConfigObjectBrowser;

configObjectBrowser = {};
configObjectBrowser = {
  browser: 'chrome',
  secret: true,
};
configObjectBrowser = {
  browser: undefined,
  secret: undefined,
};

configObjectBrowser = {
  // @ts-expect-error -- `unknownProperty` does not exist in type `ConfigObject`.
  unknownProperty: 'Hello, World!',
};
configObjectBrowser = {
  // @ts-expect-error -- Type '"abc"' is not assignable.
  browser: 'abc',
};
// @ts-expect-error -- Cannot assign to 'browser' because it is a read-only property.
configObjectBrowser.browser = 'chrome';
// @ts-expect-error -- Cannot assign to 'secret' because it is a read-only property.
configObjectBrowser.secret = true;
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
configObjectBrowser = 0;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
configObjectBrowser = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
configObjectBrowser = true;

// #endregion ConfigObjectBrowser
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectConsole

({}) as ConfigObjectConsole satisfies object;
({}) as ConfigObjectConsole['debug'] satisfies boolean | undefined;
({}) as ConfigObjectConsole['quiet'] satisfies boolean | undefined;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
({}) as ConfigObjectConsole satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
({}) as ConfigObjectConsole satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
({}) as ConfigObjectConsole satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObject`.
({}) as ConfigObjectConsole satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObject`.
({}) as ConfigObjectConsole satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObject`.
({}) as ConfigObjectConsole satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObject`.
({}) as ConfigObjectConsole satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObject`.
({}) as ConfigObjectConsole satisfies Function;

let configObjectConsole: ConfigObjectConsole;

configObjectConsole = {};
configObjectConsole = {
  debug: true,
  quiet: false,
};
configObjectConsole = {
  debug: undefined,
  quiet: undefined,
};

configObjectConsole = {
  // @ts-expect-error -- `unknownProperty` does not exist in type `ConfigObject`.
  unknownProperty: 'Hello, World!',
};
configObjectConsole = {
  // @ts-expect-error -- Type 'string' is not assignable.
  debug: 'true',
};
// @ts-expect-error -- Cannot assign to 'debug' because it is a read-only property.
configObjectConsole.debug = true;
// @ts-expect-error -- Cannot assign to 'quiet' because it is a read-only property.
configObjectConsole.quiet = false;
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
configObjectConsole = 0;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
configObjectConsole = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
configObjectConsole = true;

// #endregion ConfigObjectConsole
// --------------------------------------------------------------------------------

/*

// --------------------------------------------------------------------------------
// #region ConfigObjectAdd

({}) as ConfigObjectAdd satisfies object;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
({}) as ConfigObjectAdd satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
({}) as ConfigObjectAdd satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
({}) as ConfigObjectAdd satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObject`.
({}) as ConfigObjectAdd satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObject`.
({}) as ConfigObjectAdd satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObject`.
({}) as ConfigObjectAdd satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObject`.
({}) as ConfigObjectAdd satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObject`.
({}) as ConfigObjectAdd satisfies Function;

let configObjectAdd: ConfigObjectAdd;

configObjectAdd = {};

// #endregion ConfigObjectAdd
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectBug

({}) as ConfigObjectBug satisfies object;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBug satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBug satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBug satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBug satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBug satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBug satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBug satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBug satisfies Function;

let configObjectBug: ConfigObjectBug;

configObjectBug = {};

// #endregion ConfigObjectBug
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectBuild

({}) as ConfigObjectBuild satisfies object;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBuild satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBuild satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBuild satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBuild satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBuild satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBuild satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBuild satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObject`.
({}) as ConfigObjectBuild satisfies Function;

let configObjectBuild: ConfigObjectBuild;

configObjectBuild = {};

// #endregion ConfigObjectBuild
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectDiscussion

({}) as ConfigObjectDiscussion satisfies object;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
({}) as ConfigObjectDiscussion satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
({}) as ConfigObjectDiscussion satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
({}) as ConfigObjectDiscussion satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObject`.
({}) as ConfigObjectDiscussion satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObject`.
({}) as ConfigObjectDiscussion satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObject`.
({}) as ConfigObjectDiscussion satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObject`.
({}) as ConfigObjectDiscussion satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObject`.
({}) as ConfigObjectDiscussion satisfies Function;

let configObjectDiscussion: ConfigObjectDiscussion;

configObjectDiscussion = {};

// #endregion ConfigObjectDiscussion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectHome

({}) as ConfigObjectHome satisfies object;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
({}) as ConfigObjectHome satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
({}) as ConfigObjectHome satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
({}) as ConfigObjectHome satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObject`.
({}) as ConfigObjectHome satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObject`.
({}) as ConfigObjectHome satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObject`.
({}) as ConfigObjectHome satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObject`.
({}) as ConfigObjectHome satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObject`.
({}) as ConfigObjectHome satisfies Function;

let configObjectHome: ConfigObjectHome;

configObjectHome = {};

// #endregion ConfigObjectHome
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectInfo

({}) as ConfigObjectInfo satisfies object;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
({}) as ConfigObjectInfo satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
({}) as ConfigObjectInfo satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
({}) as ConfigObjectInfo satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObject`.
({}) as ConfigObjectInfo satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObject`.
({}) as ConfigObjectInfo satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObject`.
({}) as ConfigObjectInfo satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObject`.
({}) as ConfigObjectInfo satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObject`.
({}) as ConfigObjectInfo satisfies Function;

let configObjectInfo: ConfigObjectInfo;

configObjectInfo = {};

// #endregion ConfigObjectInfo
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectOpen

({}) as ConfigObjectOpen satisfies object;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
({}) as ConfigObjectOpen satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
({}) as ConfigObjectOpen satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
({}) as ConfigObjectOpen satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObject`.
({}) as ConfigObjectOpen satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObject`.
({}) as ConfigObjectOpen satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObject`.
({}) as ConfigObjectOpen satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObject`.
({}) as ConfigObjectOpen satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObject`.
({}) as ConfigObjectOpen satisfies Function;

let configObjectOpen: ConfigObjectOpen;

configObjectOpen = {};

// #endregion ConfigObjectOpen
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectRepo

({}) as ConfigObjectRepo satisfies object;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
({}) as ConfigObjectRepo satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
({}) as ConfigObjectRepo satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
({}) as ConfigObjectRepo satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObject`.
({}) as ConfigObjectRepo satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObject`.
({}) as ConfigObjectRepo satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObject`.
({}) as ConfigObjectRepo satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObject`.
({}) as ConfigObjectRepo satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObject`.
({}) as ConfigObjectRepo satisfies Function;

let configObjectRepo: ConfigObjectRepo;

configObjectRepo = {};

// #endregion ConfigObjectRepo
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectRun

({}) as ConfigObjectRun satisfies object;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
({}) as ConfigObjectRun satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObject`.
({}) as ConfigObjectRun satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
({}) as ConfigObjectRun satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObject`.
({}) as ConfigObjectRun satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObject`.
({}) as ConfigObjectRun satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObject`.
({}) as ConfigObjectRun satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObject`.
({}) as ConfigObjectRun satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObject`.
({}) as ConfigObjectRun satisfies Function;

let configObjectRun: ConfigObjectRun;

configObjectRun = {};

// #endregion ConfigObjectRun
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Problem

({}) as Problem satisfies string;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
({}) as Problem satisfies number;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
({}) as Problem satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObject`.
({}) as Problem satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObject`.
({}) as Problem satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObject`.
({}) as Problem satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObject`.
({}) as Problem satisfies bigint;
// @ts-expect-error -- Type `object` is not assignable to type `ConfigObject`.
({}) as Problem satisfies object;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObject`.
({}) as Problem satisfies Function;

let problem: Problem;

problem = '1000';

// #endregion Problem
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Problems

({}) as Problems satisfies object;
({}) as Problems satisfies readonly string[];

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObject`.
({}) as Problems satisfies number;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObject`.
({}) as Problems satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObject`.
({}) as Problems satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObject`.
({}) as Problems satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObject`.
({}) as Problems satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObject`.
({}) as Problems satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObject`.
({}) as Problems satisfies Function;
// @ts-expect-error -- Type 'readonly string[]' does not satisfy the expected type 'string[]'.
({}) as Problems satisfies string[];

let problems: Problems;

problems = ['1000', '2000'];

// #endregion Problems
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
// #region Testcases

({}) as Testcases satisfies readonly Testcase[];

// @ts-expect-error -- Type 'readonly Testcase[]' does not satisfy the expected type 'Testcase[]'.
({}) as Testcases satisfies Testcase[];

// #endregion Testcases
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

*/
