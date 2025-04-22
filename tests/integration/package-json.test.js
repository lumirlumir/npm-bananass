/**
 * @fileoverview Test for `package.json` across the project.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { createRequire } from 'node:module';
import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

const npmBananass = createRequire(import.meta.url)('../../package.json');
const bananass = createRequire(import.meta.url)('bananass/package.json');
const bananassUtilsConsole = createRequire(import.meta.url)(
  'bananass-utils-console/package.json',
);
const createBananass = createRequire(import.meta.url)('create-bananass/package.json');
const createBananassJS = createRequire(import.meta.url)(
  'create-bananass/templates/javascript/package.json',
);
const createBananassTS = createRequire(import.meta.url)(
  'create-bananass/templates/typescript/package.json',
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
        createBananassJS.engines.node,
        createBananassTS.engines.node,
      ]).size,
      1,
    );
  });
});
