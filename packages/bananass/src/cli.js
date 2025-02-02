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
  bananassAdd,
  bananassCase,
  bananassClean,
  bananassInfo,
  bananassInit,
  bananassLint,
  bananassLogin,
  bananassOpen,
} from './cli/index.js';

// --------------------------------------------------------------------------------
// Commands
// --------------------------------------------------------------------------------

global(program);
bananassAdd(program);
// bananassBuild(program);
bananassCase(program);
bananassClean(program);
bananassInfo(program);
bananassInit(program);
bananassLint(program);
bananassLogin(program);
bananassOpen(program);
// bananassRandom(program);
// bananassRun(program);
// bananassSubmit(program);

// --------------------------------------------------------------------------------
// Parse `commander`
// --------------------------------------------------------------------------------

program.parse();
