/**
 * @fileoverview E2E tests for `create-bananass` CLI command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual, match } from 'node:assert';
import { describe, it, afterEach } from 'node:test';
import { stripVTControlCharacters as stripAnsi } from 'node:util';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { existsSync, rmSync, readFileSync } from 'node:fs';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const tempDirName = 'temp';
const outDir = resolve(import.meta.dirname, tempDirName);
const successMessage = /Successfully created a new Bananass framework project!/;
const skipArgs = ['--skip-vsc', '--skip-git', '--skip-install'];

/**
 * @param {string[]} [args] Command line arguments.
 */
function runCreateBananass(args = []) {
  const { status, stderr } = spawnSync(
    'npx',
    ['create-bananass', `create-bananass/${tempDirName}`, ...args],
    {
      cwd: import.meta.dirname,
      // If there is no interactive handling logic using `isInteractive()` in `cli.js`,
      // `consola` will throw an error when `input` is passed to `spawnSync`.
      // `spawnSync` assumes a non-interactive environment.
      input: '',
      encoding: 'utf-8',
      shell: true,
      timeout: 5_000, // 5 seconds.
    },
  );

  return { status, stderr: stripAnsi(stderr).trim() };
}

/**
 * @param  {...string} paths Paths to check.
 */
function isExists(...paths) {
  return existsSync(resolve(outDir, ...paths));
}

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

afterEach(() => {
  // Clean up the output directory after each test
  if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true });
});

describe('cli', () => {
  describe('should create a correct project using templates', () => {
    it('should create a JavaScript ESM project', () => {
      const result = runCreateBananass(skipArgs);
      const packageJson = JSON.parse(
        readFileSync(resolve(outDir, 'package.json'), 'utf-8'),
      );

      strictEqual(result.status, 0);
      match(result.stderr, successMessage);

      strictEqual(packageJson.type, 'module');
      strictEqual(packageJson.name, 'create-bananass-javascript-esm');

      ok(isExists('.gitignore'));
      ok(isExists('bananass.config.mjs'));

      ok(!isExists('.vscode'));
      ok(!isExists('.git'));
      ok(!isExists('node_modules'));
    });

    it('should create a JavaScript CJS project', () => {
      const result = runCreateBananass([...skipArgs, '--cjs']);
      const packageJson = JSON.parse(
        readFileSync(resolve(outDir, 'package.json'), 'utf-8'),
      );

      strictEqual(result.status, 0);
      match(result.stderr, successMessage);

      strictEqual(packageJson.type, 'commonjs');
      strictEqual(packageJson.name, 'create-bananass-javascript-cjs');

      ok(isExists('.gitignore'));
      ok(isExists('bananass.config.cjs'));

      ok(!isExists('.vscode'));
      ok(!isExists('.git'));
      ok(!isExists('node_modules'));
    });

    it('should create a TypeScript ESM project', () => {
      const result = runCreateBananass([...skipArgs, '--typescript']);
      const packageJson = JSON.parse(
        readFileSync(resolve(outDir, 'package.json'), 'utf-8'),
      );

      strictEqual(result.status, 0);
      match(result.stderr, successMessage);

      strictEqual(packageJson.type, 'module');
      strictEqual(packageJson.name, 'create-bananass-typescript-esm');

      ok(isExists('.gitignore'));
      ok(isExists('bananass.config.mts'));

      ok(!isExists('.vscode'));
      ok(!isExists('.git'));
      ok(!isExists('node_modules'));
    });

    it('should create a TypeScript CJS project', () => {
      const result = runCreateBananass([...skipArgs, '--typescript', '--cjs']);
      const packageJson = JSON.parse(
        readFileSync(resolve(outDir, 'package.json'), 'utf-8'),
      );

      strictEqual(result.status, 0);
      match(result.stderr, successMessage);

      strictEqual(packageJson.type, 'commonjs');
      strictEqual(packageJson.name, 'create-bananass-typescript-cjs');

      ok(isExists('.gitignore'));
      ok(isExists('bananass.config.cts'));

      ok(!isExists('.vscode'));
      ok(!isExists('.git'));
      ok(!isExists('node_modules'));
    });
  });
});
