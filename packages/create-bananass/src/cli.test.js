/**
 * @fileoverview Test for `cli.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual, match } from 'node:assert';
import { describe, it } from 'node:test';
import { stripVTControlCharacters } from 'node:util';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const successMessage = /Successfully created a new Bananass framework project!/;

function createOutDir() {
  return mkdtempSync(join(tmpdir(), 'create-bananass-'));
}

function removeOutDir(outDir) {
  rmSync(outDir, { recursive: true, force: true });
}

/**
 * @param {string[]} [paths] Paths to check.
 */
function exists(outDir, ...paths) {
  return existsSync(join(outDir, ...paths));
}

/**
 * @param {string} outDir Output directory.
 * @param {string[]} [args] Command line arguments.
 */
function runCreateBananass(outDir, ...args) {
  const { status, stderr } = spawnSync(
    'node',
    [join(import.meta.dirname, 'cli.js'), outDir, ...args],
    {
      // If there is no interactive handling logic using `isInteractive()` in `cli.js`,
      // `consola` will throw an error when `input` is passed to `spawnSync`.
      // `spawnSync` assumes a non-interactive environment.
      input: '',
      encoding: 'utf-8',
    },
  );

  return { status, stderr: stripVTControlCharacters(stderr).trim() };
}

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('cli', () => {
  describe('e2e', () => {
    describe('should create a JavaScript ESM project', () => {
      it('when `--skip-vsc`, `--skip-install` flags are used', () => {
        const outDir = createOutDir();
        const result = runCreateBananass(outDir, '--skip-vsc', '--skip-install');

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // Read `package.json`
        const packageJson = JSON.parse(
          readFileSync(join(outDir, 'package.json'), 'utf-8'),
        );

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-javascript-esm');
        strictEqual(packageJson.type, 'module');

        // Files created
        ok(exists(outDir, '.git'));
        ok(exists(outDir, 'bananass', '1000.mjs'));
        ok(exists(outDir, '.gitignore'));
        ok(exists(outDir, 'README.md'));
        ok(exists(outDir, 'bananass.config.mjs'));

        // Files not created
        ok(!exists(outDir, '.vscode'));
        ok(!exists(outDir, 'node_modules'));

        // Clean up
        removeOutDir(outDir);
      });

      it('when `--skip-vsc`, `--skip-git`, `--skip-install` flags are used', () => {
        const outDir = createOutDir();
        const result = runCreateBananass(
          outDir,
          '--skip-vsc',
          '--skip-git',
          '--skip-install',
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // Read `package.json`
        const packageJson = JSON.parse(
          readFileSync(join(outDir, 'package.json'), 'utf-8'),
        );

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-javascript-esm');
        strictEqual(packageJson.type, 'module');

        // Files created
        ok(exists(outDir, 'bananass', '1000.mjs'));
        ok(exists(outDir, '.gitignore'));
        ok(exists(outDir, 'README.md'));
        ok(exists(outDir, 'bananass.config.mjs'));

        // Files not created
        ok(!exists(outDir, '.vscode'));
        ok(!exists(outDir, '.git'));
        ok(!exists(outDir, 'node_modules'));

        // Clean up
        removeOutDir(outDir);
      });
    });

    describe('should create a JavaScript CJS project', () => {
      it('when `--skip-vsc`, `--skip-install` flags are used', () => {
        const outDir = createOutDir();
        const result = runCreateBananass(outDir, '--skip-vsc', '--skip-install', '--cjs');

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // Read `package.json`
        const packageJson = JSON.parse(
          readFileSync(join(outDir, 'package.json'), 'utf-8'),
        );

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-javascript-cjs');
        strictEqual(packageJson.type, 'commonjs');

        // Files created
        ok(exists(outDir, '.git'));
        ok(exists(outDir, 'bananass', '1000.cjs'));
        ok(exists(outDir, '.gitignore'));
        ok(exists(outDir, 'README.md'));
        ok(exists(outDir, 'bananass.config.cjs'));

        // Files not created
        ok(!exists(outDir, '.vscode'));
        ok(!exists(outDir, 'node_modules'));

        // Clean up
        removeOutDir(outDir);
      });

      it('when `--skip-vsc`, `--skip-git`, `--skip-install` flags are used', () => {
        const outDir = createOutDir();
        const result = runCreateBananass(
          outDir,
          '--skip-vsc',
          '--skip-git',
          '--skip-install',
          '--cjs',
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // Read `package.json`
        const packageJson = JSON.parse(
          readFileSync(join(outDir, 'package.json'), 'utf-8'),
        );

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-javascript-cjs');
        strictEqual(packageJson.type, 'commonjs');

        // Files created
        ok(exists(outDir, 'bananass', '1000.cjs'));
        ok(exists(outDir, '.gitignore'));
        ok(exists(outDir, 'README.md'));
        ok(exists(outDir, 'bananass.config.cjs'));

        // Files not created
        ok(!exists(outDir, '.vscode'));
        ok(!exists(outDir, '.git'));
        ok(!exists(outDir, 'node_modules'));

        // Clean up
        removeOutDir(outDir);
      });
    });

    describe('should create a TypeScript ESM project', () => {
      it('when `--skip-vsc`, `--skip-install` flags are used', () => {
        const outDir = createOutDir();
        const result = runCreateBananass(
          outDir,
          '--skip-vsc',
          '--skip-install',
          '--typescript',
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // Read `package.json`
        const packageJson = JSON.parse(
          readFileSync(join(outDir, 'package.json'), 'utf-8'),
        );

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-typescript-esm');
        strictEqual(packageJson.type, 'module');

        // Files created
        ok(exists(outDir, '.git'));
        ok(exists(outDir, 'bananass', '1000.mts'));
        ok(exists(outDir, '.gitignore'));
        ok(exists(outDir, 'README.md'));
        ok(exists(outDir, 'bananass.config.mts'));

        // Files not created
        ok(!exists(outDir, '.vscode'));
        ok(!exists(outDir, 'node_modules'));

        // Clean up
        removeOutDir(outDir);
      });

      it('when `--skip-vsc`, `--skip-git`, `--skip-install` flags are used', () => {
        const outDir = createOutDir();
        const result = runCreateBananass(
          outDir,
          '--skip-vsc',
          '--skip-git',
          '--skip-install',
          '--typescript',
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // Read `package.json`
        const packageJson = JSON.parse(
          readFileSync(join(outDir, 'package.json'), 'utf-8'),
        );

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-typescript-esm');
        strictEqual(packageJson.type, 'module');

        // Files created
        ok(exists(outDir, 'bananass', '1000.mts'));
        ok(exists(outDir, '.gitignore'));
        ok(exists(outDir, 'README.md'));
        ok(exists(outDir, 'bananass.config.mts'));

        // Files not created
        ok(!exists(outDir, '.vscode'));
        ok(!exists(outDir, '.git'));
        ok(!exists(outDir, 'node_modules'));

        // Clean up
        removeOutDir(outDir);
      });
    });

    describe('should create a TypeScript CJS project', () => {
      it('when `--skip-vsc`, `--skip-install` flags are used', () => {
        const outDir = createOutDir();
        const result = runCreateBananass(
          outDir,
          '--skip-vsc',
          '--skip-install',
          '--typescript',
          '--cjs',
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // Read `package.json`
        const packageJson = JSON.parse(
          readFileSync(join(outDir, 'package.json'), 'utf-8'),
        );

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-typescript-cjs');
        strictEqual(packageJson.type, 'commonjs');

        // Files created
        ok(exists(outDir, '.git'));
        ok(exists(outDir, 'bananass', '1000.cts'));
        ok(exists(outDir, '.gitignore'));
        ok(exists(outDir, 'README.md'));
        ok(exists(outDir, 'bananass.config.cts'));

        // Files not created
        ok(!exists(outDir, '.vscode'));
        ok(!exists(outDir, 'node_modules'));

        // Clean up
        removeOutDir(outDir);
      });

      it('when `--skip-vsc`, `--skip-git`, `--skip-install` flags are used', () => {
        const outDir = createOutDir();
        const result = runCreateBananass(
          outDir,
          '--skip-vsc',
          '--skip-git',
          '--skip-install',
          '--typescript',
          '--cjs',
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // Read `package.json`
        const packageJson = JSON.parse(
          readFileSync(join(outDir, 'package.json'), 'utf-8'),
        );

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-typescript-cjs');
        strictEqual(packageJson.type, 'commonjs');

        // Files created
        ok(exists(outDir, 'bananass', '1000.cts'));
        ok(exists(outDir, '.gitignore'));
        ok(exists(outDir, 'README.md'));
        ok(exists(outDir, 'bananass.config.cts'));

        // Files not created
        ok(!exists(outDir, '.vscode'));
        ok(!exists(outDir, '.git'));
        ok(!exists(outDir, 'node_modules'));

        // Clean up
        removeOutDir(outDir);
      });
    });
  });
});
