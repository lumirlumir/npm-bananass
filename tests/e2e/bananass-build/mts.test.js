/**
 * @fileoverview E2E tests for building MTS solutions using Bananass.
 *
 * NOTE: None of the files in the `fixtures` directory are based on actual Baekjoon problems.
 * They are simply A + B examples used for testing purposes.
 */

// TODO: Add tests for:
// - External libraries: npm

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual } from 'node:assert';
import { describe, it, afterEach } from 'node:test';
import { stripVTControlCharacters as stripAnsi } from 'node:util';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { existsSync, rmSync } from 'node:fs';

import { build } from 'bananass/commands';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const cwd = resolve(import.meta.dirname, './fixtures/mts');
const outDir = resolve(cwd, '.bananass');
const configObjectFS = { cwd, console: { quiet: true }, build: { templateType: 'fs' } };
const configObjectRL = { cwd, console: { quiet: true }, build: { templateType: 'rl' } };

/** @param {string} outFile @param {string} input */
function runOutFile(outFile, input) {
  const { status, stdout } = spawnSync(process.execPath, [outFile], {
    input,
    encoding: 'utf-8',
  });

  return { status, stdout: stripAnsi(stdout).trim() };
}

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

afterEach(() => {
  // Clean up the output directory after each test
  if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true });
});

describe('mts', () => {
  describe('When the entire solution is in a single file', () => {
    describe('`fs`(file system) template', () => {
      it('A single file with `solution` and `testcases` should build correctly', async () => {
        await build(['1000'], configObjectFS);

        const outFile = resolve(outDir, '1000.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('A single file with only `solution` should build correctly', async () => {
        await build(['1001'], configObjectFS);

        const outFile = resolve(outDir, '1001.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`file.cts` should build correctly', async () => {
        await build(['1002'], configObjectFS);

        const outFile = resolve(outDir, '1002.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`file.mts` with `export default` should build correctly', async () => {
        await build(['1003'], configObjectFS);

        const outFile = resolve(outDir, '1003.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`file.mts` with `export` should build correctly', async () => {
        await build(['1004'], configObjectFS);

        const outFile = resolve(outDir, '1004.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('User-created external modules using the `mts` format should build correctly', async () => {
        await build(['1005'], configObjectFS);

        const outFile = resolve(outDir, '1005.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });
    });

    describe('`rl`(readline) template', () => {
      it('A single file with `solution` and `testcases` should build correctly', async () => {
        await build(['1000'], configObjectRL);

        const outFile = resolve(outDir, '1000.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('A single file with only `solution` should build correctly', async () => {
        await build(['1001'], configObjectRL);

        const outFile = resolve(outDir, '1001.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`file.cts` should build correctly', async () => {
        await build(['1002'], configObjectRL);

        const outFile = resolve(outDir, '1002.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`file.mts` with `export default` should build correctly', async () => {
        await build(['1003'], configObjectRL);

        const outFile = resolve(outDir, '1003.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`file.mts` with `export` should build correctly', async () => {
        await build(['1004'], configObjectRL);

        const outFile = resolve(outDir, '1004.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('User-created external modules using the `mts` format should build correctly', async () => {
        await build(['1005'], configObjectRL);

        const outFile = resolve(outDir, '1005.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });
    });
  });

  describe('When the solution is in a single directory with multiple files', () => {
    describe('`fs`(file system) template', () => {
      it('A solution directory with `solution` and `testcases` should build correctly', async () => {
        await build(['2000'], configObjectFS);

        const outFile = resolve(outDir, '2000.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('A solution directory with only `solution` should build correctly', async () => {
        await build(['2001'], configObjectFS);

        const outFile = resolve(outDir, '2001.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`directory/index.cts` should build correctly', async () => {
        await build(['2002'], configObjectFS);

        const outFile = resolve(outDir, '2002.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`directory/index.mts` with `export default` should build correctly', async () => {
        await build(['2003'], configObjectFS);

        const outFile = resolve(outDir, '2003.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`directory/index.mts` with `export` should build correctly', async () => {
        await build(['2004'], configObjectFS);

        const outFile = resolve(outDir, '2004.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      /*

      it('User-created external modules using the `mjs` format should build correctly.', async () => {
        await build(['2005'], configObjectFS);

        const outFile = resolve(outDir, '2005.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      */
    });

    describe('`rl`(readline) template', () => {
      it('A solution directory with `solution` and `testcases` should build correctly', async () => {
        await build(['2000'], configObjectRL);

        const outFile = resolve(outDir, '2000.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('A solution directory with only `solution` should build correctly', async () => {
        await build(['2001'], configObjectRL);

        const outFile = resolve(outDir, '2001.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`directory/index.cts` should build correctly', async () => {
        await build(['2002'], configObjectRL);

        const outFile = resolve(outDir, '2002.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`directory/index.mts` with `export default` should build correctly', async () => {
        await build(['2003'], configObjectRL);

        const outFile = resolve(outDir, '2003.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`directory/index.mts` with `export` should build correctly', async () => {
        await build(['2004'], configObjectRL);

        const outFile = resolve(outDir, '2004.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      /*

      it('User-created external modules using the `mjs` format should build correctly.', async () => {
        await build(['2005'], configObjectRL);

        const outFile = resolve(outDir, '2005.cjs');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      */
    });
  });

  /*

  describe('Latest ECMAScript features with `@babel/preset-env` and custom plugins should be transpiled correctly', () => {
    describe('`fs`(file system) template', () => {
      it('ES2025 `regexp-modifiers` should be transpiled correctly', async () => {
        // https://babeljs.io/docs/babel-plugin-transform-regexp-modifiers

        await build(['3000'], configObjectFS);

        const outFile = resolve(outDir, '3000.cjs');
        ok(existsSync(outFile));

        const fileContent = readFileSync(outFile, 'utf-8');
        strictEqual(fileContent.includes('/(?:[Aa])a/'), true);
        strictEqual(fileContent.includes('/(?i:a)a/'), false);

        const result = runOutFile(outFile, '1 2');
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('Custom `transform-array-prototype-to-sorted` plugin should be applied correctly', async () => {
        await build(['3001'], configObjectFS);

        const outFile = resolve(outDir, '3001.cjs');
        ok(existsSync(outFile));

        const fileContent = readFileSync(outFile, 'utf-8');
        strictEqual(fileContent.includes('toSorted()'), false);

        const result = runOutFile(outFile, '1 2');
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('Custom `transform-array-prototype-to-reversed` plugin should be applied correctly', async () => {
        await build(['3002'], configObjectFS);

        const outFile = resolve(outDir, '3002.cjs');
        ok(existsSync(outFile));

        const fileContent = readFileSync(outFile, 'utf-8');
        strictEqual(fileContent.includes('toReversed()'), false);

        const result = runOutFile(outFile, '1 2');
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('Custom `transform-object-has-own` plugin should be applied correctly', async () => {
        await build(['3003'], configObjectFS);

        const outFile = resolve(outDir, '3003.cjs');
        ok(existsSync(outFile));

        const fileContent = readFileSync(outFile, 'utf-8');
        strictEqual(fileContent.includes('Object.hasOwn'), false);

        const result = runOutFile(outFile, '1 2');
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });
    });

    describe('`rl`(readline) template', () => {
      it('ES2025 `regexp-modifiers` should be transpiled correctly', async () => {
        // https://babeljs.io/docs/babel-plugin-transform-regexp-modifiers

        await build(['3000'], configObjectRL);

        const outFile = resolve(outDir, '3000.cjs');
        ok(existsSync(outFile));

        const fileContent = readFileSync(outFile, 'utf-8');
        strictEqual(fileContent.includes('/(?:[Aa])a/'), true);
        strictEqual(fileContent.includes('/(?i:a)a/'), false);

        const result = runOutFile(outFile, '1 2');
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('Custom `transform-array-prototype-to-sorted` plugin should be applied correctly', async () => {
        await build(['3001'], configObjectRL);

        const outFile = resolve(outDir, '3001.cjs');
        ok(existsSync(outFile));

        const fileContent = readFileSync(outFile, 'utf-8');
        strictEqual(fileContent.includes('toSorted()'), false);

        const result = runOutFile(outFile, '1 2');
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('Custom `transform-array-prototype-to-reversed` plugin should be applied correctly', async () => {
        await build(['3002'], configObjectRL);

        const outFile = resolve(outDir, '3002.cjs');
        ok(existsSync(outFile));

        const fileContent = readFileSync(outFile, 'utf-8');
        strictEqual(fileContent.includes('toReversed()'), false);

        const result = runOutFile(outFile, '1 2');
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('Custom `transform-object-has-own` plugin should be applied correctly', async () => {
        await build(['3003'], configObjectRL);

        const outFile = resolve(outDir, '3003.cjs');
        ok(existsSync(outFile));

        const fileContent = readFileSync(outFile, 'utf-8');
        strictEqual(fileContent.includes('Object.hasOwn'), false);

        const result = runOutFile(outFile, '1 2');
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });
    });
  });

  */

  describe('Multiple files', () => {
    it('Multiple files with `fs` template should build correctly', async () => {
      await build(['1000', '1001', '2000'], configObjectFS);

      const outFile1000 = resolve(outDir, '1000.cjs');
      const result1000 = runOutFile(outFile1000, '1 2');

      const outFile1001 = resolve(outDir, '1001.cjs');
      const result1001 = runOutFile(outFile1001, '1 2');

      const outFile2000 = resolve(outDir, '2000.cjs');
      const result2000 = runOutFile(outFile2000, '1 2');

      ok(existsSync(outFile1000));
      strictEqual(result1000.status, 0);
      strictEqual(result1000.stdout, '3');

      ok(existsSync(outFile1001));
      strictEqual(result1001.status, 0);
      strictEqual(result1001.stdout, '3');

      ok(existsSync(outFile2000));
      strictEqual(result2000.status, 0);
      strictEqual(result2000.stdout, '3');
    });

    it('Multiple files with `rl` template should build correctly', async () => {
      await build(['1000', '2000'], configObjectRL);

      const outFile1000 = resolve(outDir, '1000.cjs');
      const result1000 = runOutFile(outFile1000, '1 2');

      const outFile2000 = resolve(outDir, '2000.cjs');
      const result2000 = runOutFile(outFile2000, '1 2');

      ok(existsSync(outFile1000));
      strictEqual(result1000.status, 0);
      strictEqual(result1000.stdout, '3');

      ok(existsSync(outFile2000));
      strictEqual(result2000.status, 0);
      strictEqual(result2000.stdout, '3');
    });
  });
});
