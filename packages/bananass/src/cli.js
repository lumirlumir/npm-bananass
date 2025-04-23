#!/usr/bin/env node

/**
 * @fileoverview Entry file for the `npx bananass` CLI command. See the `bin` field in `../package.json`.
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
  lint,
  login,
  open,
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
lint(program);
login(program);
open(program);
repo(program);
run(program);
submit(program);
testcase(program);

// --------------------------------------------------------------------------------
// Parse `commander`
// --------------------------------------------------------------------------------

program.parse();
