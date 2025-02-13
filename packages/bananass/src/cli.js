#!/usr/bin/env node

/**
 * @fileoverview Entry file for the `npx bananass` CLI command. See the `bin.bananass` property in `../package.json`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { program } from 'commander';
import {
  global,
  add,
  build,
  clean,
  home,
  info,
  init,
  lint,
  login,
  open,
  random,
  run,
  submit,
  testcase,
} from './cli/index.js';

// --------------------------------------------------------------------------------
// Commands
// --------------------------------------------------------------------------------

global(program);
add(program);
build(program);
clean(program);
home(program);
info(program);
init(program);
lint(program);
login(program);
open(program);
random(program);
run(program);
submit(program);
testcase(program);

// --------------------------------------------------------------------------------
// Parse `commander`
// --------------------------------------------------------------------------------

program.parse();
