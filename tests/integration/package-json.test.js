/**
 * @fileoverview Test for `package.json` across the project.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { createRequire } from 'node:module';
import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const npmBananass = createRequire(import.meta.url)('../../package.json');
const bananass = createRequire(import.meta.url)('bananass/package.json');
const bananassUtilsConsole = createRequire(import.meta.url)(
  'bananass-utils-console/package.json',
);
const createBananass = createRequire(import.meta.url)('create-bananass/package.json');
const createBananassJsCjs = createRequire(import.meta.url)(
  'create-bananass/templates/javascript-cjs/package.json',
);
const createBananassJsEsm = createRequire(import.meta.url)(
  'create-bananass/templates/javascript-esm/package.json',
);
const createBananassTsCjs = createRequire(import.meta.url)(
  'create-bananass/templates/typescript-cjs/package.json',
);
const createBananassTSEsm = createRequire(import.meta.url)(
  'create-bananass/templates/typescript-esm/package.json',
);

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('package-json', () => {
  it('should have the same `engines.node` version', () => {
    strictEqual(
      new Set([
        npmBananass.engines.node,
        bananass.engines.node,
        bananassUtilsConsole.engines.node,
        createBananass.engines.node,
        createBananassJsCjs.engines.node,
        createBananassJsEsm.engines.node,
        createBananassTsCjs.engines.node,
        createBananassTSEsm.engines.node,
      ]).size,
      1,
    );
  });
});
