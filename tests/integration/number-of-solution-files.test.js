/**
 * @fileoverview Test to verify that the number of solution files in the `examples/solutions-bananass-*` folders
 * matches the number of corresponding explanation files for those solutions in the `websites/vitepress` folder.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { deepStrictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import { readdirSync } from 'node:fs';
import { parse } from 'node:path';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const examplesSolutionsBananassCjs = readdirSync(
  new URL('../../examples/solutions-bananass-cjs/bananass', import.meta.url),
).map(file => parse(file).name);
const examplesSolutionsBananassCts = readdirSync(
  new URL('../../examples/solutions-bananass-cts/bananass', import.meta.url),
).map(file => parse(file).name);
const examplesSolutionsBananassMjs = readdirSync(
  new URL('../../examples/solutions-bananass-mjs/bananass', import.meta.url),
).map(file => parse(file).name);
const examplesSolutionsBananassMts = readdirSync(
  new URL('../../examples/solutions-bananass-mts/bananass', import.meta.url),
).map(file => parse(file).name);
const websitesVitepressKo = readdirSync(
  new URL('../../websites/vitepress/ko/solutions/baekjoon', import.meta.url),
).map(file => parse(file).name);
const websitesVitepressEn = readdirSync(
  new URL('../../websites/vitepress/en/solutions/baekjoon', import.meta.url),
).map(file => parse(file).name);

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('number-of-solution-files', () => {
  it('should have the same number of solution files across the project', () => {
    deepStrictEqual(examplesSolutionsBananassCjs, examplesSolutionsBananassCts);
    deepStrictEqual(examplesSolutionsBananassCjs, examplesSolutionsBananassMjs);
    deepStrictEqual(examplesSolutionsBananassCjs, examplesSolutionsBananassMts);
    deepStrictEqual(examplesSolutionsBananassCjs, websitesVitepressKo);
    deepStrictEqual(examplesSolutionsBananassCjs, websitesVitepressEn);
  });
});
