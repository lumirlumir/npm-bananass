/**
 * @fileoverview Test for `build.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, rejects } from 'node:assert';
import { describe, it, afterEach } from 'node:test';
import { resolve } from 'node:path';
import { existsSync, rmSync } from 'node:fs';

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
  });
});
