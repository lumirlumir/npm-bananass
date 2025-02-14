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
  bug,
  build,
  clean,
  discussion,
  home,
  info,
  init,
  lint,
  login,
  open,
  random,
  repo,
  run,
  submit,
  testcase,
} from './cli/index.js';

// --------------------------------------------------------------------------------
// Commands
// --------------------------------------------------------------------------------

global(program);
add(program);
bug(program);
build(program);
clean(program);
discussion(program);
home(program);
info(program);
init(program);
lint(program);
login(program);
open(program);
random(program);
repo(program);
run(program);
submit(program);
testcase(program);

// --------------------------------------------------------------------------------
// Parse `commander`
// --------------------------------------------------------------------------------

program.parse();
