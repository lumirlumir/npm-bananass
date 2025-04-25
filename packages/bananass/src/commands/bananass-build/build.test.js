/**
 * @fileoverview Test for `build.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { match, ok, rejects } from 'node:assert';
import { describe, it, afterEach, mock } from 'node:test';
import { resolve } from 'node:path';
import { existsSync, rmSync, readFileSync } from 'node:fs';
import fsPromises from 'node:fs/promises';

import build from './build.js';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const cwd = resolve(import.meta.dirname, './fixtures');
const outDir = resolve(cwd, '.bananass');
const configObject = { cwd, console: { quiet: true } };

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

afterEach(() => {
  // Clean up the output directory after each test
  if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true });
});

describe('build.js', () => {
  // ------------------------------------------------------------------------------
  // Test
  // ------------------------------------------------------------------------------

  describe('should use default parameters correctly', () => {
    it('should use default parameters when only `cwd` is provided', async () => {
      await build(['1000'], { cwd });
    });

    it('should use default parameters when empty console object is provided', async () => {
      await build(['1000'], { cwd, console: {} });
    });

    it('should use default parameters when empty build object is provided', async () => {
      await build(['1000'], { cwd, build: {} });
    });
  });

  describe('should work as expected', () => {
    it('should reject when invalid values are provided', async () => {
      await rejects(() => build(['999']));
      await rejects(() => build(['1000'], { invalid: 'invalid' }));
    });

    it('should create output directory and file', async () => {
      await build(['1000'], configObject);

      ok(existsSync(outDir));
      ok(existsSync(resolve(outDir, '1000.cjs')));
    });

    it('should throw an error when solution file does not exist', async () => {
      await rejects(() => build(['9999'], configObject), /doesn't exist/);
    });

    it('`webpack.BannerPlugin` should work as expected', async () => {
      await build(['1000'], configObject);

      const outFile = resolve(outDir, '1000.cjs');
      ok(existsSync(outFile));

      const fileContent = readFileSync(outFile, 'utf-8');
      match(fileContent, /DO NOT DELETE THIS COMMENT/u);
    });
  });

  describe('options should work as expected', () => {
    it('`entryDir` and `outDir` should work as expected', async () => {
      const customEntryDir = resolve(cwd, 'src');
      const customOutDir = resolve(cwd, 'build');

      await build(['2000'], {
        ...configObject,
        entryDir: customEntryDir,
        outDir: customOutDir,
      });

      ok(existsSync(customOutDir));
      ok(existsSync(resolve(customOutDir, '2000.cjs')));

      if (existsSync(customOutDir))
        rmSync(customOutDir, { recursive: true, force: true });
    });

    it('`clean` should work as expected', async () => {
      await build(['1000'], configObject);
      ok(existsSync(resolve(outDir, '1000.cjs')));

      await build(['1001'], configObject);
      ok(existsSync(resolve(outDir, '1001.cjs')));

      await build(['1002'], { ...configObject, build: { clean: true } });
      ok(!existsSync(resolve(outDir, '1000.cjs')));
      ok(!existsSync(resolve(outDir, '1001.cjs')));
      ok(existsSync(resolve(outDir, '1002.cjs')));
    });

    it('`clean` should throw an error for some reason', async () => {
      mock.method(fsPromises, 'rm', () => {
        throw new Error('Dummy error message');
      });

      await rejects(
        () => build(['1000'], { ...configObject, build: { clean: true } }),
        /Dummy error message/,
      );
    });

    it("`templateType: 'fs'` should work as expected", async () => {
      await build(['1000'], {
        ...configObject,
        build: {
          templateType: 'fs',
        },
      });

      const outFile = resolve(outDir, '1000.cjs');
      ok(existsSync(outFile));

      const fileContent = readFileSync(outFile, 'utf-8');
      match(fileContent, /require\("node:fs"\)/u);
    });

    it("`templateType: 'rl'` should work as expected", async () => {
      await build(['1000'], {
        ...configObject,
        build: {
          templateType: 'rl',
        },
      });

      const outFile = resolve(outDir, '1000.cjs');
      ok(existsSync(outFile));

      const fileContent = readFileSync(outFile, 'utf-8');
      match(fileContent, /require\("node:readline"\)/u);
    });
  });
});
