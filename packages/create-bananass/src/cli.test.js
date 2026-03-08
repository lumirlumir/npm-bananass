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
import pkg from '../package.json' with { type: 'json' };

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const outDir = mkdtempSync(join(tmpdir(), 'create-bananass-'));
const successMessage = /Successfully created a new Bananass framework project!/;

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
  const { status, stdout, stderr } = spawnSync(
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

  return {
    status,
    stdout: stripVTControlCharacters(stdout).trim(),
    stderr: stripVTControlCharacters(stderr).trim(),
  };
}

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('cli', () => {
  afterEach(() => {
    // Clean up the output directory after each test.
    if (exists()) rmSync(outDir, { recursive: true, force: true });
  });

  describe('flags', () => {
    describe('--unknown', () => {
      it('`--unknown` flag should display an error message for unknown flags', () => {
        const result = runCreateBananass('--unknown');

        strictEqual(result.status, 1); // Non-zero status indicates an error.
        strictEqual(result.stdout, ''); // No standard output should be present.
      });
    });

    describe('--version / -v', () => {
      it('`--version` flag should display version information', () => {
        const result = runCreateBananass('--version');

        strictEqual(result.status, 0); // `0` indicates successful execution.
        strictEqual(result.stdout, pkg.version); // Version output should be present.
        strictEqual(result.stderr, ''); // No error output should be present.
      });

      it('`-v` flag should display version information', () => {
        const result = runCreateBananass('-v');

        strictEqual(result.status, 0); // `0` indicates successful execution.
        strictEqual(result.stdout, pkg.version); // Version output should be present.
        strictEqual(result.stderr, ''); // No error output should be present.
      });

      it('`--version` flag should have higher precedence than `--help` flag', () => {
        const result = runCreateBananass('--version', '--help');

        strictEqual(result.status, 0); // `0` indicates successful execution.
        strictEqual(result.stdout, pkg.version); // Version output should be present.
        strictEqual(result.stderr, ''); // No error output should be present.
      });
    });

    describe('--help / -h', () => {
      it('`--help` flag should display help information', () => {
        const result = runCreateBananass('--help');

        strictEqual(result.status, 0); // `0` indicates successful execution.
        match(result.stdout, /Usage:/); // Help output should be present.
        strictEqual(result.stderr, ''); // No error output should be present.
      });

      it('`-h` flag should display help information', () => {
        const result = runCreateBananass('-h');

        strictEqual(result.status, 0); // `0` indicates successful execution.
        match(result.stdout, /Usage:/); // Help output should be present.
        strictEqual(result.stderr, ''); // No error output should be present.
      });
    });
  });

  describe('e2e', () => {
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
