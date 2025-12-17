/**
 * @fileoverview Test for `cli.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual, match } from 'node:assert';
import { describe, it, afterEach } from 'node:test';
import { stripVTControlCharacters } from 'node:util';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const outDir = mkdtempSync(join(tmpdir(), 'create-bananass-'));
const successMessage = /Successfully created a new Bananass framework project!/;
const skipArgs = ['--skip-vsc', '--skip-git', '--skip-install'];

/**
 * @param {string[]} [paths] Paths to check.
 */
function exists(...paths) {
  return existsSync(join(outDir, ...paths));
}

/**
 * @param {string[]} [args] Command line arguments.
 */
function runCreateBananass(...args) {
  const { status, stderr } = spawnSync('npx', ['create-bananass', outDir, ...args], {
    // If there is no interactive handling logic using `isInteractive()` in `cli.js`,
    // `consola` will throw an error when `input` is passed to `spawnSync`.
    // `spawnSync` assumes a non-interactive environment.
    input: '',
    encoding: 'utf-8',
    shell: true,
  });

  return { status, stderr: stripVTControlCharacters(stderr).trim() };
}

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('cli', () => {
  describe('e2e', () => {
    afterEach(() => {
      // Clean up the output directory after each test.
      if (exists()) rmSync(outDir, { recursive: true, force: true });
    });

    it('should create a JavaScript ESM project', () => {
      const result = runCreateBananass(...skipArgs);
      const packageJson = JSON.parse(readFileSync(join(outDir, 'package.json'), 'utf-8'));

      strictEqual(result.status, 0);
      match(result.stderr, successMessage);

      strictEqual(packageJson.private, true);
      strictEqual(packageJson.name, 'create-bananass-javascript-esm');
      strictEqual(packageJson.type, 'module');

      ok(exists('bananass', '1000.mjs'));
      ok(exists('.gitignore'));
      ok(exists('README.md'));
      ok(exists('bananass.config.mjs'));

      ok(!exists('.vscode'));
      ok(!exists('.git'));
      ok(!exists('node_modules'));
    });

    it('should create a JavaScript CJS project', () => {
      const result = runCreateBananass(...skipArgs, '--cjs');
      const packageJson = JSON.parse(readFileSync(join(outDir, 'package.json'), 'utf-8'));

      strictEqual(result.status, 0);
      match(result.stderr, successMessage);

      strictEqual(packageJson.private, true);
      strictEqual(packageJson.name, 'create-bananass-javascript-cjs');
      strictEqual(packageJson.type, 'commonjs');

      ok(exists('bananass', '1000.cjs'));
      ok(exists('.gitignore'));
      ok(exists('README.md'));
      ok(exists('bananass.config.cjs'));

      ok(!exists('.vscode'));
      ok(!exists('.git'));
      ok(!exists('node_modules'));
    });

    it('should create a TypeScript ESM project', () => {
      const result = runCreateBananass(...skipArgs, '--typescript');
      const packageJson = JSON.parse(readFileSync(join(outDir, 'package.json'), 'utf-8'));

      strictEqual(result.status, 0);
      match(result.stderr, successMessage);

      strictEqual(packageJson.private, true);
      strictEqual(packageJson.name, 'create-bananass-typescript-esm');
      strictEqual(packageJson.type, 'module');

      ok(exists('bananass', '1000.mts'));
      ok(exists('.gitignore'));
      ok(exists('README.md'));
      ok(exists('bananass.config.mts'));

      ok(!exists('.vscode'));
      ok(!exists('.git'));
      ok(!exists('node_modules'));
    });

    it('should create a TypeScript CJS project', () => {
      const result = runCreateBananass(...skipArgs, '--typescript', '--cjs');
      const packageJson = JSON.parse(readFileSync(join(outDir, 'package.json'), 'utf-8'));

      strictEqual(result.status, 0);
      match(result.stderr, successMessage);

      strictEqual(packageJson.private, true);
      strictEqual(packageJson.name, 'create-bananass-typescript-cjs');
      strictEqual(packageJson.type, 'commonjs');

      ok(exists('bananass', '1000.cts'));
      ok(exists('.gitignore'));
      ok(exists('README.md'));
      ok(exists('bananass.config.cts'));

      ok(!exists('.vscode'));
      ok(!exists('.git'));
      ok(!exists('node_modules'));
    });
  });
});
