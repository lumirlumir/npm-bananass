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
  ConfigObjectAdd,
  ConfigObjectBug,
  ConfigObjectBuild,
  ConfigObjectDiscussion,
  ConfigObjectHome,
  ConfigObjectInfo,
  ConfigObjectOpen,
  ConfigObjectRepo,
  ConfigObjectRun,
  Problem,
  Problems,
  Input,
  Output,
  Testcase,
  Testcases,
  Solution,
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

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectBrowser`.
({}) as ConfigObjectBrowser satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectBrowser`.
({}) as ConfigObjectBrowser satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectBrowser`.
({}) as ConfigObjectBrowser satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObjectBrowser`.
({}) as ConfigObjectBrowser satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObjectBrowser`.
({}) as ConfigObjectBrowser satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObjectBrowser`.
({}) as ConfigObjectBrowser satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObjectBrowser`.
({}) as ConfigObjectBrowser satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObjectBrowser`.
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
  // @ts-expect-error -- `unknownProperty` does not exist in type `ConfigObjectBrowser`.
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
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectBrowser`.
configObjectBrowser = 0;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectBrowser`.
configObjectBrowser = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectBrowser`.
configObjectBrowser = true;

// #endregion ConfigObjectBrowser
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectConsole

({}) as ConfigObjectConsole satisfies object;
({}) as ConfigObjectConsole['debug'] satisfies boolean | undefined;
({}) as ConfigObjectConsole['quiet'] satisfies boolean | undefined;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectConsole`.
({}) as ConfigObjectConsole satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectConsole`.
({}) as ConfigObjectConsole satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectConsole`.
({}) as ConfigObjectConsole satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObjectConsole`.
({}) as ConfigObjectConsole satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObjectConsole`.
({}) as ConfigObjectConsole satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObjectConsole`.
({}) as ConfigObjectConsole satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObjectConsole`.
({}) as ConfigObjectConsole satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObjectConsole`.
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
  // @ts-expect-error -- `unknownProperty` does not exist in type `ConfigObjectConsole`.
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
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectConsole`.
configObjectConsole = 0;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectConsole`.
configObjectConsole = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectConsole`.
configObjectConsole = true;

// #endregion ConfigObjectConsole
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectAdd

({}) as ConfigObjectAdd satisfies object;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectAdd`.
({}) as ConfigObjectAdd satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectAdd`.
({}) as ConfigObjectAdd satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectAdd`.
({}) as ConfigObjectAdd satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObjectAdd`.
({}) as ConfigObjectAdd satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObjectAdd`.
({}) as ConfigObjectAdd satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObjectAdd`.
({}) as ConfigObjectAdd satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObjectAdd`.
({}) as ConfigObjectAdd satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObjectAdd`.
({}) as ConfigObjectAdd satisfies Function;

let configObjectAdd: ConfigObjectAdd;

configObjectAdd = {};

configObjectAdd = {
  // @ts-expect-error -- `unknownProperty` does not exist in type `ConfigObjectAdd`.
  unknownProperty: 'Hello, World!',
};
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectAdd`.
configObjectAdd = 0;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectAdd`.
configObjectAdd = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectAdd`.
configObjectAdd = true;

// #endregion ConfigObjectAdd
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectBug

({}) as ConfigObjectBug satisfies object;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectBug`.
({}) as ConfigObjectBug satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectBug`.
({}) as ConfigObjectBug satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectBug`.
({}) as ConfigObjectBug satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObjectBug`.
({}) as ConfigObjectBug satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObjectBug`.
({}) as ConfigObjectBug satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObjectBug`.
({}) as ConfigObjectBug satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObjectBug`.
({}) as ConfigObjectBug satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObjectBug`.
({}) as ConfigObjectBug satisfies Function;

let configObjectBug: ConfigObjectBug;

configObjectBug = {};

configObjectBug = {
  // @ts-expect-error -- `unknownProperty` does not exist in type `ConfigObjectBug`.
  unknownProperty: 'Hello, World!',
};
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectBug`.
configObjectBug = 0;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectBug`.
configObjectBug = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectBug`.
configObjectBug = true;

// #endregion ConfigObjectBug
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectBuild

({}) as ConfigObjectBuild satisfies object;
({}) as ConfigObjectBuild['clean'] satisfies boolean | undefined;
({}) as ConfigObjectBuild['templateType'] satisfies string | undefined;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectBuild`.
({}) as ConfigObjectBuild satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectBuild`.
({}) as ConfigObjectBuild satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectBuild`.
({}) as ConfigObjectBuild satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObjectBuild`.
({}) as ConfigObjectBuild satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObjectBuild`.
({}) as ConfigObjectBuild satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObjectBuild`.
({}) as ConfigObjectBuild satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObjectBuild`.
({}) as ConfigObjectBuild satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObjectBuild`.
({}) as ConfigObjectBuild satisfies Function;

let configObjectBuild: ConfigObjectBuild;

configObjectBuild = {};
configObjectBuild = {
  clean: true,
  templateType: 'fs',
};
configObjectBuild = {
  clean: undefined,
  templateType: undefined,
};

configObjectBuild = {
  // @ts-expect-error -- `unknownProperty` does not exist in type `ConfigObjectBuild`.
  unknownProperty: 'Hello, World!',
};
configObjectBuild = {
  // @ts-expect-error -- Type 'string' is not assignable.
  clean: 'true',
};
// @ts-expect-error -- Cannot assign to 'clean' because it is a read-only property.
configObjectBuild.clean = true;
// @ts-expect-error -- Cannot assign to 'templateType' because it is a read-only property.
configObjectBuild.templateType = 'fs';
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectBuild`.
configObjectBuild = 0;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectBuild`.
configObjectBuild = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectBuild`.
configObjectBuild = true;

// #endregion ConfigObjectBuild
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectDiscussion

({}) as ConfigObjectDiscussion satisfies object;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectDiscussion`.
({}) as ConfigObjectDiscussion satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectDiscussion`.
({}) as ConfigObjectDiscussion satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectDiscussion`.
({}) as ConfigObjectDiscussion satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObjectDiscussion`.
({}) as ConfigObjectDiscussion satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObjectDiscussion`.
({}) as ConfigObjectDiscussion satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObjectDiscussion`.
({}) as ConfigObjectDiscussion satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObjectDiscussion`.
({}) as ConfigObjectDiscussion satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObjectDiscussion`.
({}) as ConfigObjectDiscussion satisfies Function;

let configObjectDiscussion: ConfigObjectDiscussion;

configObjectDiscussion = {};

configObjectDiscussion = {
  // @ts-expect-error -- `unknownProperty` does not exist in type `ConfigObjectDiscussion`.
  unknownProperty: 'Hello, World!',
};
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectDiscussion`.
configObjectDiscussion = 0;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectDiscussion`.
configObjectDiscussion = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectDiscussion`.
configObjectDiscussion = true;

// #endregion ConfigObjectDiscussion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectHome

({}) as ConfigObjectHome satisfies object;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectHome`.
({}) as ConfigObjectHome satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectHome`.
({}) as ConfigObjectHome satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectHome`.
({}) as ConfigObjectHome satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObjectHome`.
({}) as ConfigObjectHome satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObjectHome`.
({}) as ConfigObjectHome satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObjectHome`.
({}) as ConfigObjectHome satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObjectHome`.
({}) as ConfigObjectHome satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObjectHome`.
({}) as ConfigObjectHome satisfies Function;

let configObjectHome: ConfigObjectHome;

configObjectHome = {};

configObjectHome = {
  // @ts-expect-error -- `unknownProperty` does not exist in type `ConfigObjectHome`.
  unknownProperty: 'Hello, World!',
};
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectHome`.
configObjectHome = 0;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectHome`.
configObjectHome = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectHome`.
configObjectHome = true;

// #endregion ConfigObjectHome
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectInfo

({}) as ConfigObjectInfo satisfies object;
({}) as ConfigObjectInfo['all'] satisfies boolean | undefined;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectInfo`.
({}) as ConfigObjectInfo satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectInfo`.
({}) as ConfigObjectInfo satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectInfo`.
({}) as ConfigObjectInfo satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObjectInfo`.
({}) as ConfigObjectInfo satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObjectInfo`.
({}) as ConfigObjectInfo satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObjectInfo`.
({}) as ConfigObjectInfo satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObjectInfo`.
({}) as ConfigObjectInfo satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObjectInfo`.
({}) as ConfigObjectInfo satisfies Function;

let configObjectInfo: ConfigObjectInfo;

configObjectInfo = {};
configObjectInfo = {
  all: true,
};
configObjectInfo = {
  all: undefined,
};

configObjectInfo = {
  // @ts-expect-error -- `unknownProperty` does not exist in type `ConfigObjectInfo`.
  unknownProperty: 'Hello, World!',
};
configObjectInfo = {
  // @ts-expect-error -- Type 'string' is not assignable.
  all: 'abc',
};
// @ts-expect-error -- Cannot assign to 'all' because it is a read-only property.
configObjectInfo.all = true;
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectInfo`.
configObjectInfo = 0;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectInfo`.
configObjectInfo = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectInfo`.
configObjectInfo = true;

// #endregion ConfigObjectInfo
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectOpen

({}) as ConfigObjectOpen satisfies object;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectOpen`.
({}) as ConfigObjectOpen satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectOpen`.
({}) as ConfigObjectOpen satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectOpen`.
({}) as ConfigObjectOpen satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObjectOpen`.
({}) as ConfigObjectOpen satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObjectOpen`.
({}) as ConfigObjectOpen satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObjectOpen`.
({}) as ConfigObjectOpen satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObjectOpen`.
({}) as ConfigObjectOpen satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObjectOpen`.
({}) as ConfigObjectOpen satisfies Function;

let configObjectOpen: ConfigObjectOpen;

configObjectOpen = {};

configObjectOpen = {
  // @ts-expect-error -- `unknownProperty` does not exist in type `ConfigObjectOpen`.
  unknownProperty: 'Hello, World!',
};
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectOpen`.
configObjectOpen = 0;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectOpen`.
configObjectOpen = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectOpen`.
configObjectOpen = true;

// #endregion ConfigObjectOpen
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectRepo

({}) as ConfigObjectRepo satisfies object;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectRepo`.
({}) as ConfigObjectRepo satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectRepo`.
({}) as ConfigObjectRepo satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectRepo`.
({}) as ConfigObjectRepo satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObjectRepo`.
({}) as ConfigObjectRepo satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObjectRepo`.
({}) as ConfigObjectRepo satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObjectRepo`.
({}) as ConfigObjectRepo satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObjectRepo`.
({}) as ConfigObjectRepo satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObjectRepo`.
({}) as ConfigObjectRepo satisfies Function;

let configObjectRepo: ConfigObjectRepo;

configObjectRepo = {};

configObjectRepo = {
  // @ts-expect-error -- `unknownProperty` does not exist in type `ConfigObjectRepo`.
  unknownProperty: 'Hello, World!',
};
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectRepo`.
configObjectRepo = 0;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectRepo`.
configObjectRepo = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectRepo`.
configObjectRepo = true;

// #endregion ConfigObjectRepo
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region ConfigObjectRun

({}) as ConfigObjectRun satisfies object;

// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectRun`.
({}) as ConfigObjectRun satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectRun`.
({}) as ConfigObjectRun satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectRun`.
({}) as ConfigObjectRun satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `ConfigObjectRun`.
({}) as ConfigObjectRun satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `ConfigObjectRun`.
({}) as ConfigObjectRun satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `ConfigObjectRun`.
({}) as ConfigObjectRun satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `ConfigObjectRun`.
({}) as ConfigObjectRun satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `ConfigObjectRun`.
({}) as ConfigObjectRun satisfies Function;

let configObjectRun: ConfigObjectRun;

configObjectRun = {};

configObjectRun = {
  // @ts-expect-error -- `unknownProperty` does not exist in type `ConfigObjectRun`.
  unknownProperty: 'Hello, World!',
};
// @ts-expect-error -- Type `number` is not assignable to type `ConfigObjectRun`.
configObjectRun = 0;
// @ts-expect-error -- Type `string` is not assignable to type `ConfigObjectRun`.
configObjectRun = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `ConfigObjectRun`.
configObjectRun = true;

// #endregion ConfigObjectRun
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Problem

({}) as Problem satisfies string;

// @ts-expect-error -- Type `number` is not assignable to type `Problem`.
({}) as Problem satisfies number;
// @ts-expect-error -- Type `boolean` is not assignable to type `Problem`.
({}) as Problem satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `Problem`.
({}) as Problem satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `Problem`.
({}) as Problem satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `Problem`.
({}) as Problem satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `Problem`.
({}) as Problem satisfies bigint;
// @ts-expect-error -- Type `object` is not assignable to type `Problem`.
({}) as Problem satisfies object;
// @ts-expect-error -- Type `Function` is not assignable to type `Problem`.
({}) as Problem satisfies Function;

let problem: Problem;

problem = '1000';
problem = '2000';

// @ts-expect-error -- Type `number` is not assignable to type `Problem`.
problem = 0;
// @ts-expect-error -- Type `boolean` is not assignable to type `Problem`.
problem = true;

// #endregion Problem
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Problems

({}) as Problems satisfies object;
({}) as Problems satisfies readonly Problem[];

// @ts-expect-error -- Type `number` is not assignable to type `Problems`.
({}) as Problems satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `Problems`.
({}) as Problems satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `Problems`.
({}) as Problems satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `Problems`.
({}) as Problems satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `Problems`.
({}) as Problems satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `Problems`.
({}) as Problems satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `Problems`.
({}) as Problems satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `Problems`.
({}) as Problems satisfies Function;
// @ts-expect-error -- Type 'readonly Problem[]' does not satisfy the expected type 'Problem[]'.
({}) as Problems satisfies Problem[];

let problems: Problems;

problems = ['1000', '2000'];

// @ts-expect-error -- Type `number` is not assignable to type `Problems`.
problems = 0;
// @ts-expect-error -- Type `string` is not assignable to type `Problems`.
problems = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `Problems`.
problems = true;

// #endregion Problems
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Input

({}) as Input satisfies string | undefined;

// @ts-expect-error -- Type `number` is not assignable to type `Input`.
({}) as Input satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `Input`.
({}) as Input satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `Input`.
({}) as Input satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `Input`.
({}) as Input satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `Input`.
({}) as Input satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `Input`.
({}) as Input satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `Input`.
({}) as Input satisfies bigint;
// @ts-expect-error -- Type `object` is not assignable to type `Input`.
({}) as Input satisfies object;
// @ts-expect-error -- Type `Function` is not assignable to type `Input`.
({}) as Input satisfies Function;

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

({}) as Output satisfies string | number | boolean;

// @ts-expect-error -- Type `number` is not assignable to type `Output`.
({}) as Output satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `Output`.
({}) as Output satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `Output`.
({}) as Output satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `Output`.
({}) as Output satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `Output`.
({}) as Output satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `Output`.
({}) as Output satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `Output`.
({}) as Output satisfies bigint;
// @ts-expect-error -- Type `object` is not assignable to type `Output`.
({}) as Output satisfies object;
// @ts-expect-error -- Type `Function` is not assignable to type `Output`.
({}) as Output satisfies Function;

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

({}) as Testcase satisfies object;
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
testcase = {};
// @ts-expect-error -- `output` is required.
testcase = {
  input: 'string',
};
testcase = {
  // @ts-expect-error -- `unknownProperty` does not exist in type `Testcase`.
  unknownProperty: 'Hello, World!',
};
// @ts-expect-error -- Cannot assign to 'input' because it is a read-only property.
testcase.input = 'input';
// @ts-expect-error -- Cannot assign to 'output' because it is a read-only property.
testcase.output = 'output';
// @ts-expect-error -- Type `number` is not assignable to type `Testcase`.
testcase = 0;
// @ts-expect-error -- Type `string` is not assignable to type `Testcase`.
testcase = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `Testcase`.
testcase = true;

// #endregion Testcase
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Testcases

({}) as Testcases satisfies object;
({}) as Testcases satisfies readonly Testcase[];

// @ts-expect-error -- Type `number` is not assignable to type `Testcases`.
({}) as Testcases satisfies number;
// @ts-expect-error -- Type `string` is not assignable to type `Testcases`.
({}) as Testcases satisfies string;
// @ts-expect-error -- Type `boolean` is not assignable to type `Testcases`.
({}) as Testcases satisfies boolean;
// @ts-expect-error -- Type `undefined` is not assignable to type `Testcases`.
({}) as Testcases satisfies undefined;
// @ts-expect-error -- Type `null` is not assignable to type `Testcases`.
({}) as Testcases satisfies null;
// @ts-expect-error -- Type `symbol` is not assignable to type `Testcases`.
({}) as Testcases satisfies symbol;
// @ts-expect-error -- Type `bigint` is not assignable to type `Testcases`.
({}) as Testcases satisfies bigint;
// @ts-expect-error -- Type `Function` is not assignable to type `Testcases`.
({}) as Testcases satisfies Function;
// @ts-expect-error -- Type 'readonly Testcase[]' does not satisfy the expected type 'Testcase[]'.
({}) as Testcases satisfies Testcase[];

let testcases: Testcases;

testcases = [
  {
    output: 'string',
  },
  {
    input: undefined,
    output: 'string',
  },
  {
    input: 'string',
    output: 'string',
  },
  {
    input: 'string',
    output: 123,
  },
  {
    input: 'string',
    output: true,
  },
];

// @ts-expect-error -- Property 'output' is missing in type '{}'.
testcases = [{}];
testcases = [
  // @ts-expect-error -- Property 'output' is missing in type '{ input: string; }'
  {
    input: 'string',
  },
];
// @ts-expect-error -- Type `number` is not assignable to type `Testcases`.
testcase = 0;
// @ts-expect-error -- Type `string` is not assignable to type `Testcases`.
testcase = 'string';
// @ts-expect-error -- Type `boolean` is not assignable to type `Testcases`.
testcase = true;

// #endregion Testcases
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Solution

({}) as Solution satisfies Function;
({}) as ReturnType<Solution> satisfies Output;
({}) as Parameters<Solution>[0] satisfies Input;

// @ts-expect-error -- Type '(args_0?: string | undefined) => string | number | boolean' does not satisfy the expected type '(input: boolean) => string | number | boolean'.
({}) as Solution satisfies (input: boolean) => Output;
// @ts-expect-error -- Type 'string | number | boolean' does not satisfy the expected type 'string'.
({}) as ReturnType<Solution> satisfies string;
// @ts-expect-error -- Type 'string | undefined' does not satisfy the expected type 'string'.
({}) as Parameters<Solution>[0] satisfies string;

let solution: Solution;

solution = function solution(input: Input): Output {
  return {} as Output;
};
solution = function solution(input?: Input): Output {
  return {} as Output;
};
solution = function solution(input: string | undefined): Output {
  return {} as Output;
};
solution = function solution(input?: string | undefined): Output {
  return {} as Output;
};
solution = function solution(input?: string): Output {
  return {} as Output;
};
solution = function solution(input: Input): number {
  return {} as number;
};
solution = function solution(input: Input): string {
  return {} as string;
};
solution = function solution(input: Input): boolean {
  return {} as boolean;
};
solution = function solution(input?: string) {
  return input!;
};
solution = function solution(input: string | undefined) {
  return input!;
};
solution = function solution() {
  return 1;
};
solution = function solution() {
  return 'abc';
};
solution = function solution() {
  return true;
};

// @ts-expect-error -- Type '(input: string) => string | number | boolean' is not assignable to type '(args_0?: string | undefined) => string | number | boolean'.
solution = function solution(input: string): Output {
  return {} as Output;
};
// @ts-expect-error -- Type '(input: undefined) => string | number | boolean' is not assignable to type '(args_0?: string | undefined) => string | number | boolean'.
solution = function solution(input: undefined): Output {
  return {} as Output;
};
// @ts-expect-error -- Type '(input?: undefined) => string | number | boolean' is not assignable to type '(args_0?: string | undefined) => string | number | boolean'.
solution = function solution(input?: undefined): Output {
  return {} as Output;
};
// @ts-expect-error -- Argument of type 'number' is not assignable to parameter of type 'string'.
solution = function solution(input?: number): Output {
  return {} as Output;
};
// @ts-expect-error -- Expected 2 or more arguments, but got 1.
solution = function solution(input1: Input, input2: Input): Output {
  return {} as Output;
};
// @ts-expect-error -- Expected 3 or more arguments, but got 1.
solution = function solution(input1: Input, input2: Input, input3: Input): Output {
  return {} as Output;
};

// #endregion Testcase
// --------------------------------------------------------------------------------
