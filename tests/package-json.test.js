/**
 * @fileoverview Test for `package.json` across the project.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { deepStrictEqual, strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import bananass from 'bananass/package.json' with { type: 'json' };
import bananassUtilsConsole from 'bananass-utils-console/package.json' with { type: 'json' };
import createBananass from 'create-bananass/package.json' with { type: 'json' };
import createBananassJsCjs from 'create-bananass/templates/javascript-cjs/package.json' with { type: 'json' };
import createBananassJsEsm from 'create-bananass/templates/javascript-esm/package.json' with { type: 'json' };
import createBananassTsCjs from 'create-bananass/templates/typescript-cjs/package.json' with { type: 'json' };
import createBananassTsEsm from 'create-bananass/templates/typescript-esm/package.json' with { type: 'json' };
import eslintConfigBananass from 'eslint-config-bananass/package.json' with { type: 'json' };
import npmBananass from '../package.json' with { type: 'json' }; // eslint-disable-line import/no-relative-packages

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
        createBananassTsEsm.engines.node,
        eslintConfigBananass.engines.node,
      ]).size,
      1,
    );
  });

  it('should have correct `exports` field order: `types` before `default`', () => {
    const expectedExportsKeys = ['types', 'default'];

    // `bananass`
    deepStrictEqual(Object.keys(bananass.exports['./commands']), expectedExportsKeys);
    deepStrictEqual(
      Object.keys(bananass.exports['./core/constants']),
      expectedExportsKeys,
    );
    deepStrictEqual(Object.keys(bananass.exports['./core/types']), expectedExportsKeys);

    // `bananass-utils-console`
    deepStrictEqual(
      Object.keys(bananassUtilsConsole.exports['./icons']),
      expectedExportsKeys,
    );
    deepStrictEqual(
      Object.keys(bananassUtilsConsole.exports['./is-interactive']),
      expectedExportsKeys,
    );
    deepStrictEqual(
      Object.keys(bananassUtilsConsole.exports['./is-unicode-supported']),
      expectedExportsKeys,
    );
    deepStrictEqual(
      Object.keys(bananassUtilsConsole.exports['./logger']),
      expectedExportsKeys,
    );
    deepStrictEqual(
      Object.keys(bananassUtilsConsole.exports['./spinner']),
      expectedExportsKeys,
    );
    deepStrictEqual(
      Object.keys(bananassUtilsConsole.exports['./theme']),
      expectedExportsKeys,
    );

    // `eslint-config-bananass`
    deepStrictEqual(Object.keys(eslintConfigBananass.exports['.']), expectedExportsKeys);
  });
});
