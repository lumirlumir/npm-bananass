/*
 * This test is used to test the commands of the project.
 * It is executed by the `npm run test` command in `examples-solutions-bananass-*` directories.
 */

import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { build, run } from 'bananass/commands';

const cwd = import.meta.dirname;
const entryDir = resolve(cwd, 'bananass');
const solutions = readdirSync(entryDir).map(file => file.replace(/\.js$/, ''));

// Check that the solutions can be built with both template types.
await build(solutions, { cwd, build: { templateType: 'fs' } });
await build(solutions, { cwd, build: { templateType: 'rl' } });

// Check that the solutions can be run.
await run(solutions, { cwd });
