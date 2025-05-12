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
  discussion,
  home,
  info,
  login,
  open,
  repo,
  run,
  submit,
} from './cli/index.js';

// --------------------------------------------------------------------------------
// Commands
// --------------------------------------------------------------------------------

global(program);
add(program);
bug(program);
build(program);
discussion(program);
home(program);
info(program);
login(program);
open(program);
repo(program);
run(program);
submit(program);

// --------------------------------------------------------------------------------
// Parse `commander`
// --------------------------------------------------------------------------------

program.parse();
