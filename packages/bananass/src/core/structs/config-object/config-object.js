/**
 * @fileoverview `ConfigObject` type struct.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { object, string, optional } from 'superstruct';

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
  cwd: optional(string()),
  entryDir: optional(string()),
  outDir: optional(string()),

  browser: optional(ConfigObjectBrowser),
  console: optional(ConfigObjectConsole),

  add: optional(ConfigObjectAdd),
  bug: optional(ConfigObjectBug),
  build: optional(ConfigObjectBuild),
  clean: optional(ConfigObjectClean),
  discussion: optional(ConfigObjectDiscussion),
  home: optional(ConfigObjectHome),
  info: optional(ConfigObjectInfo),
  lint: optional(ConfigObjectLint),
  login: optional(ConfigObjectLogin),
  open: optional(ConfigObjectOpen),
  random: optional(ConfigObjectRandom),
  repo: optional(ConfigObjectRepo),
  run: optional(ConfigObjectRun),
  submit: optional(ConfigObjectSubmit),
  testcase: optional(ConfigObjectTestcase),
});

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default ConfigObject;
