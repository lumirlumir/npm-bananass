/**
 * @fileoverview Test for `cli.ts`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual, deepStrictEqual, match } from 'node:assert/strict';
import { describe, it, afterEach } from 'node:test';
import { stripVTControlCharacters } from 'node:util';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { existsSync, readFileSync, rmSync } from 'node:fs';
import { ESLint } from 'eslint';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const outDir = join(tmpdir(), 'create-bananass');
const successMessage = /Successfully created a new Bananass framework project!/;

function exists(...paths: string[]) {
  return existsSync(join(outDir, ...paths));
}

function runCreateBananass(...args: string[]) {
  const { status, stderr } = spawnSync(
    'node',
    [join(import.meta.dirname, 'cli.ts'), outDir, ...args],
    {
      // If there is no interactive handling logic using `isInteractive()` in `cli.ts`,
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
  describe('templates', () => {
    describe('JavaScript ESM template', () => {
      it('should lint the JavaScript ESM template without errors or warnings', async () => {
        const eslint = new ESLint({
          cwd: join(import.meta.dirname, '../templates/javascript-esm'),
        });
        const results = await eslint.lintFiles(['.']);

        ok(results.length > 0);
        deepStrictEqual(
          results.flatMap(result => result.messages),
          [],
        );
      });

      it('should accept Node.js globals without errors or warnings', async () => {
        const eslint = new ESLint({
          cwd: join(import.meta.dirname, '../templates/javascript-esm'),
        });
        const results = await eslint.lintText(
          'export const value = process.argv.length;',
          { filePath: 'bananass/globals.mjs' },
        );

        deepStrictEqual(results[0].messages, []);
      });
    });

    describe('JavaScript CJS template', () => {
      it('should lint the JavaScript CJS template without errors or warnings', async () => {
        const eslint = new ESLint({
          cwd: join(import.meta.dirname, '../templates/javascript-cjs'),
        });
        const results = await eslint.lintFiles(['.']);

        ok(results.length > 0);
        deepStrictEqual(
          results.flatMap(result => result.messages),
          [],
        );
      });

      it('should accept Node.js globals without errors or warnings', async () => {
        const eslint = new ESLint({
          cwd: join(import.meta.dirname, '../templates/javascript-cjs'),
        });
        const results = await eslint.lintText('module.exports = process.argv.length;', {
          filePath: 'bananass/globals.cjs',
        });

        deepStrictEqual(results[0].messages, []);
      });
    });

    describe('TypeScript ESM template', () => {
      it('should lint the TypeScript ESM template without errors or warnings', async () => {
        const eslint = new ESLint({
          cwd: join(import.meta.dirname, '../templates/typescript-esm'),
        });
        const results = await eslint.lintFiles(['.']);

        ok(results.length > 0);
        deepStrictEqual(
          results.flatMap(result => result.messages),
          [],
        );
      });

      it('should accept Node.js globals without errors or warnings', async () => {
        const eslint = new ESLint({
          cwd: join(import.meta.dirname, '../templates/typescript-esm'),
        });
        const results = await eslint.lintText(
          'export const value: number = process.argv.length;',
          { filePath: 'bananass/globals.mts' },
        );

        deepStrictEqual(results[0].messages, []);
      });
    });

    describe('TypeScript CJS template', () => {
      it('should lint the TypeScript CJS template without errors or warnings', async () => {
        const eslint = new ESLint({
          cwd: join(import.meta.dirname, '../templates/typescript-cjs'),
        });
        const results = await eslint.lintFiles(['.']);

        ok(results.length > 0);
        deepStrictEqual(
          results.flatMap(result => result.messages),
          [],
        );
      });

      it('should accept Node.js globals without errors or warnings', async () => {
        const eslint = new ESLint({
          cwd: join(import.meta.dirname, '../templates/typescript-cjs'),
        });
        const results = await eslint.lintText(
          'const value: number = process.argv.length; module.exports = value;',
          { filePath: 'bananass/globals.cts' },
        );

        deepStrictEqual(results[0].messages, []);
      });
    });
  });

  describe('e2e', () => {
    afterEach(() => {
      // Clean up the output directory after each test.
      if (exists()) rmSync(outDir, { recursive: true, force: true });
    });

    describe('should create a JavaScript ESM project', () => {
      it('when `--skip-vsc`, `--skip-install` flags are used', () => {
        const result = runCreateBananass('--skip-vsc', '--skip-install');
        const packageJson = JSON.parse(
          readFileSync(join(outDir, 'package.json'), 'utf-8'),
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-javascript-esm');
        strictEqual(packageJson.type, 'module');

        // Files created
        ok(exists('.git'));
        ok(exists('bananass', '1000.mjs'));
        ok(exists('.gitignore'));
        ok(exists('README.md'));
        ok(exists('bananass.config.mjs'));

        // Files not created
        ok(!exists('.vscode'));
        ok(!exists('node_modules'));
      });

      it('when `--skip-vsc`, `--skip-git`, `--skip-install` flags are used', () => {
        const result = runCreateBananass('--skip-vsc', '--skip-git', '--skip-install');
        const packageJson = JSON.parse(
          readFileSync(join(outDir, 'package.json'), 'utf-8'),
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-javascript-esm');
        strictEqual(packageJson.type, 'module');

        // Files created
        ok(exists('bananass', '1000.mjs'));
        ok(exists('.gitignore'));
        ok(exists('README.md'));
        ok(exists('bananass.config.mjs'));

        // Files not created
        ok(!exists('.vscode'));
        ok(!exists('.git'));
        ok(!exists('node_modules'));
      });
    });

    describe('should create a JavaScript CJS project', () => {
      it('when `--skip-vsc`, `--skip-install` flags are used', () => {
        const result = runCreateBananass('--skip-vsc', '--skip-install', '--cjs');
        const packageJson = JSON.parse(
          readFileSync(join(outDir, 'package.json'), 'utf-8'),
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-javascript-cjs');
        strictEqual(packageJson.type, 'commonjs');

        // Files created
        ok(exists('.git'));
        ok(exists('bananass', '1000.cjs'));
        ok(exists('.gitignore'));
        ok(exists('README.md'));
        ok(exists('bananass.config.cjs'));

        // Files not created
        ok(!exists('.vscode'));
        ok(!exists('node_modules'));
      });

      it('when `--skip-vsc`, `--skip-git`, `--skip-install` flags are used', () => {
        const result = runCreateBananass(
          '--skip-vsc',
          '--skip-git',
          '--skip-install',
          '--cjs',
        );
        const packageJson = JSON.parse(
          readFileSync(join(outDir, 'package.json'), 'utf-8'),
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-javascript-cjs');
        strictEqual(packageJson.type, 'commonjs');

        // Files created
        ok(exists('bananass', '1000.cjs'));
        ok(exists('.gitignore'));
        ok(exists('README.md'));
        ok(exists('bananass.config.cjs'));

        // Files not created
        ok(!exists('.vscode'));
        ok(!exists('.git'));
        ok(!exists('node_modules'));
      });
    });

    describe('should create a TypeScript ESM project', () => {
      it('when `--skip-vsc`, `--skip-install` flags are used', () => {
        const result = runCreateBananass('--skip-vsc', '--skip-install', '--typescript');
        const packageJson = JSON.parse(
          readFileSync(join(outDir, 'package.json'), 'utf-8'),
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-typescript-esm');
        strictEqual(packageJson.type, 'module');

        // Files created
        ok(exists('.git'));
        ok(exists('bananass', '1000.mts'));
        ok(exists('.gitignore'));
        ok(exists('README.md'));
        ok(exists('bananass.config.mts'));

        // Files not created
        ok(!exists('.vscode'));
        ok(!exists('node_modules'));
      });

      it('when `--skip-vsc`, `--skip-git`, `--skip-install` flags are used', () => {
        const result = runCreateBananass(
          '--skip-vsc',
          '--skip-git',
          '--skip-install',
          '--typescript',
        );
        const packageJson = JSON.parse(
          readFileSync(join(outDir, 'package.json'), 'utf-8'),
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-typescript-esm');
        strictEqual(packageJson.type, 'module');

        // Files created
        ok(exists('bananass', '1000.mts'));
        ok(exists('.gitignore'));
        ok(exists('README.md'));
        ok(exists('bananass.config.mts'));

        // Files not created
        ok(!exists('.vscode'));
        ok(!exists('.git'));
        ok(!exists('node_modules'));
      });
    });

    describe('should create a TypeScript CJS project', () => {
      it('when `--skip-vsc`, `--skip-install` flags are used', () => {
        const result = runCreateBananass(
          '--skip-vsc',
          '--skip-install',
          '--typescript',
          '--cjs',
        );
        const packageJson = JSON.parse(
          readFileSync(join(outDir, 'package.json'), 'utf-8'),
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-typescript-cjs');
        strictEqual(packageJson.type, 'commonjs');

        // Files created
        ok(exists('.git'));
        ok(exists('bananass', '1000.cts'));
        ok(exists('.gitignore'));
        ok(exists('README.md'));
        ok(exists('bananass.config.cts'));

        // Files not created
        ok(!exists('.vscode'));
        ok(!exists('node_modules'));
      });

      it('when `--skip-vsc`, `--skip-git`, `--skip-install` flags are used', () => {
        const result = runCreateBananass(
          '--skip-vsc',
          '--skip-git',
          '--skip-install',
          '--typescript',
          '--cjs',
        );
        const packageJson = JSON.parse(
          readFileSync(join(outDir, 'package.json'), 'utf-8'),
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-typescript-cjs');
        strictEqual(packageJson.type, 'commonjs');

        // Files created
        ok(exists('bananass', '1000.cts'));
        ok(exists('.gitignore'));
        ok(exists('README.md'));
        ok(exists('bananass.config.cts'));

        // Files not created
        ok(!exists('.vscode'));
        ok(!exists('.git'));
        ok(!exists('node_modules'));
      });
    });
  });
});
