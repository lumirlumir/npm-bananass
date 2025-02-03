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
  bananassClean,
  bananassInfo,
  bananassInit,
  bananassLint,
  bananassLogin,
  bananassOpen,
  bananassRandom,
  bananassRun,
  bananassSubmit,
  bananassTestcase,
} from './cli/index.js';

// --------------------------------------------------------------------------------
// Commands
// --------------------------------------------------------------------------------

global(program);
bananassAdd(program);
// bananassBuild(program);
bananassClean(program);
bananassInfo(program);
bananassInit(program);
bananassLint(program);
bananassLogin(program);
bananassOpen(program);
bananassRandom(program);
bananassRun(program);
bananassSubmit(program);
bananassTestcase(program);

// --------------------------------------------------------------------------------
// Parse `commander`
// --------------------------------------------------------------------------------

program.parse();
