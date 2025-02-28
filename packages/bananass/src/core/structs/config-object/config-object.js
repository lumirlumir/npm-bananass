/**
 * @fileoverview `ConfigObject` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { object, string } from 'superstruct';

import ConfigObjectBrowser from '../config-object-browser/index.js';
import ConfigObjectConsole from '../config-object-console/index.js';

import ConfigObjectAdd from '../config-object-add/index.js';
import ConfigObjectBug from '../config-object-bug/index.js';
import ConfigObjectBuild from '../config-object-build/index.js';
import ConfigObjectClean from '../config-object-clean/index.js';
import ConfigObjectDiscussion from '../config-object-discussion/index.js';
import ConfigObjectHome from '../config-object-home/index.js';
import ConfigObjectInfo from '../config-object-info/index.js';
import ConfigObjectLint from '../config-object-lint/index.js';
import ConfigObjectLogin from '../config-object-login/index.js';
import ConfigObjectOpen from '../config-object-open/index.js';
import ConfigObjectRandom from '../config-object-random/index.js';
import ConfigObjectRepo from '../config-object-repo/index.js';
import ConfigObjectRun from '../config-object-run/index.js';
import ConfigObjectSubmit from '../config-object-submit/index.js';
import ConfigObjectTestcase from '../config-object-testcase/index.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types.js').ConfigObject} ConfigObject
 * @typedef {import('superstruct').Struct<ConfigObject>} ConfigObjectStruct
 */

// --------------------------------------------------------------------------------
// Type Struct
// --------------------------------------------------------------------------------

/**
 * `ConfigObject` type struct.
 *
 * @type {ConfigObjectStruct}
 */
const ConfigObject = object({
  cwd: string(),
  entryDir: string(),
  outDir: string(),

  browser: ConfigObjectBrowser,
  console: ConfigObjectConsole,

  add: ConfigObjectAdd,
  bug: ConfigObjectBug,
  build: ConfigObjectBuild,
  clean: ConfigObjectClean,
  discussion: ConfigObjectDiscussion,
  home: ConfigObjectHome,
  info: ConfigObjectInfo,
  lint: ConfigObjectLint,
  login: ConfigObjectLogin,
  open: ConfigObjectOpen,
  random: ConfigObjectRandom,
  repo: ConfigObjectRepo,
  run: ConfigObjectRun,
  submit: ConfigObjectSubmit,
  testcase: ConfigObjectTestcase,
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObject;
