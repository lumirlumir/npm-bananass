/**
 * @fileoverview E2E tests for building CJS solutions using Bananass.
 *
 * NOTE: None of the files in the `fixtures` directory are based on actual Baekjoon problems.
 * They are simply A + B examples used for testing purposes.
 */

// TODO: Add tests for:
// - templateType: 'rl',
// - External libraries: local
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

const cwd = resolve(import.meta.dirname, './fixtures/cjs');
const outDir = resolve(cwd, '.bananass');
const configObjectFS = { cwd, console: { quiet: true }, build: { templateType: 'fs' } };

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

describe('cjs', () => {
  describe('When the entire solution is in a single file', () => {
    describe('`fs`(file system) template', () => {
      it('A single file with `solution` and `testcases` should build correctly', async () => {
        await build(['1000'], configObjectFS);

        const outFile = resolve(outDir, '1000.js');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('A single file with only `solution` should build correctly', async () => {
        await build(['1001'], configObjectFS);

        const outFile = resolve(outDir, '1001.js');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`file.cjs` should build correctly', async () => {
        await build(['1002'], configObjectFS);

        const outFile = resolve(outDir, '1002.js');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`file.mjs` with `export default` should build correctly', async () => {
        await build(['1003'], configObjectFS);

        const outFile = resolve(outDir, '1003.js');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`file.mjs` with `export` should build correctly', async () => {
        await build(['1004'], configObjectFS);

        const outFile = resolve(outDir, '1004.js');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('User-created external modules using the `cjs` format should build correctly.', async () => {
        await build(['1005'], configObjectFS);

        const outFile = resolve(outDir, '1005.js');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });
    });

    describe('`rl`(readline) template', () => {});
  });

  describe('When the solution is in a single directory with multiple files', () => {
    describe('`fs`(file system) template', () => {
      it('A solution directory with `solution` and `testcases` should build correctly', async () => {
        await build(['2000'], configObjectFS);

        const outFile = resolve(outDir, '2000.js');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('A solution directory with only `solution` should build correctly', async () => {
        await build(['2001'], configObjectFS);

        const outFile = resolve(outDir, '2001.js');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`directory/index.cjs` should build correctly', async () => {
        await build(['2002'], configObjectFS);

        const outFile = resolve(outDir, '2002.js');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`directory/index.mjs` with `export default` should build correctly', async () => {
        await build(['2003'], configObjectFS);

        const outFile = resolve(outDir, '2003.js');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('`directory/index.mjs` with `export` should build correctly', async () => {
        await build(['2004'], configObjectFS);

        const outFile = resolve(outDir, '2004.js');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it('User-created external modules using the `cjs` format should build correctly.', async () => {
        await build(['2005'], configObjectFS);

        const outFile = resolve(outDir, '2005.js');
        const result = runOutFile(outFile, '1 2');

        ok(existsSync(outFile));
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });
    });

    describe('`rl`(readline) template', () => {});
  });

  describe('Multiple files', () => {
    it('Multiple files with `fs` template should build correctly', async () => {
      await build(['1000', '1001', '2000'], configObjectFS);

      const outFile1000 = resolve(outDir, '1000.js');
      const result1000 = runOutFile(outFile1000, '1 2');

      const outFile1001 = resolve(outDir, '1001.js');
      const result1001 = runOutFile(outFile1001, '1 2');

      const outFile2000 = resolve(outDir, '2000.js');
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

    it('Multiple files with `rl` template should build correctly', async () => {});
  });
});
