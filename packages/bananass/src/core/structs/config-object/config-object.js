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
import ConfigObjectBuild from '../config-object-build/index.js';
import ConfigObjectClean from '../config-object-clean/index.js';
import ConfigObjectInfo from '../config-object-info/index.js';
import ConfigObjectInit from '../config-object-init/index.js';
import ConfigObjectLint from '../config-object-lint/index.js';
import ConfigObjectLogin from '../config-object-login/index.js';
import ConfigObjectOpen from '../config-object-open/index.js';
import ConfigObjectRandom from '../config-object-random/index.js';
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
  build: ConfigObjectBuild,
  clean: ConfigObjectClean,
  info: ConfigObjectInfo,
  init: ConfigObjectInit,
  lint: ConfigObjectLint,
  login: ConfigObjectLogin,
  open: ConfigObjectOpen,
  random: ConfigObjectRandom,
  run: ConfigObjectRun,
  submit: ConfigObjectSubmit,
  testcase: ConfigObjectTestcase,
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObject;
