/**
 * @fileoverview Test for `cli.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok, strictEqual, match, rejects } from 'node:assert';
import { describe, it, afterEach, mock } from 'node:test';
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
let cliImportCount = 0;

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

/**
 * @param {{ code?: number, error?: unknown }} [options] Mock process options.
 */
function createSpawnResult(options = {}) {
  return {
    on(event, handler) {
      if (event === 'close' && options.code !== undefined) {
        queueMicrotask(() => handler(options.code));
      }

      if (event === 'error' && options.error) {
        queueMicrotask(() => handler(options.error));
      }

      return this;
    },
  };
}

function createLoggerMock() {
  const logger = {
    debug: mock.fn(() => logger),
    eol: mock.fn(() => logger),
    log: mock.fn(callback => {
      if (typeof callback === 'function') callback();

      return logger;
    }),
  };

  return logger;
}

function createSpinnerMock() {
  return {
    start: mock.fn(text => text),
    error: mock.fn(text => text),
    success: mock.fn(text => text),
  };
}

/**
 * @param {object} [options] Test options.
 * @param {string[]} [options.args] Command line arguments.
 * @param {boolean} [options.interactive] Whether prompt mode should be enabled.
 * @param {Array<string | boolean>} [options.promptAnswers] Prompt answers.
 * @param {(src: URL, dest: string, options: object) => Promise<void>} [options.cpImplementation] Mock `cp` implementation.
 * @param {(oldPath: string, newPath: string) => Promise<void>} [options.renameImplementation] Mock `rename` implementation.
 * @param {(command: string, args: string[], options: object) => { on: (event: string, handler: Function) => object }} [options.spawnImplementation] Mock `spawn` implementation.
 */
async function importCliWithMocks({
  args = [],
  interactive = false,
  promptAnswers = [],
  cpImplementation = async () => {},
  renameImplementation = async () => {},
  spawnImplementation = () => createSpawnResult({ code: 0 }),
} = {}) {
  const promptMock = mock.fn(async () => promptAnswers.shift());
  const cpMock = mock.fn(cpImplementation);
  const renameMock = mock.fn(renameImplementation);
  const spawnMock = mock.fn(spawnImplementation);
  const loggerMock = createLoggerMock();
  const spinnerMock = createSpinnerMock();
  const consoleLogMock = mock.fn(() => {});

  mock.module('node:fs/promises', {
    namedExports: {
      cp: cpMock,
      rename: renameMock,
    },
  });
  mock.module('node:child_process', {
    namedExports: {
      spawn: spawnMock,
    },
  });
  mock.module('bananass-utils-console/is-interactive', {
    defaultExport: mock.fn(() => interactive),
  });
  mock.module('bananass-utils-console/logger', {
    defaultExport: mock.fn(() => loggerMock),
  });
  mock.module('bananass-utils-console/spinner', {
    defaultExport: mock.fn(() => spinnerMock),
  });
  mock.module('bananass-utils-console/theme', {
    namedExports: {
      bananass: mock.fn(text => text),
      error: mock.fn(text => text),
      success: mock.fn(text => text),
    },
  });
  mock.module('consola', {
    namedExports: {
      consola: {
        prompt: promptMock,
      },
    },
  });
  mock.method(console, 'log', consoleLogMock);

  const argvBeforeImport = process.argv;
  process.argv = ['node', join(import.meta.dirname, 'cli.js'), ...args];

  try {
    await import(`./cli.js?test=${cliImportCount++}`);
  } finally {
    process.argv = argvBeforeImport;
  }

  return {
    consoleLogMock,
    cpMock,
    loggerMock,
    promptMock,
    renameMock,
    spawnMock,
    spinnerMock,
  };
}

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('cli', () => {
  afterEach(() => {
    // Clean up the output directory after each test.
    if (exists()) rmSync(outDir, { recursive: true, force: true });
    mock.reset();
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

  describe('unit', () => {
    it('should use the default directory when no positional directory is provided', async () => {
      const result = await importCliWithMocks({
        args: ['--yes', '--skip-vsc', '--skip-git', '--skip-install'],
      });

      strictEqual(result.cpMock.mock.calls[0].arguments[1], '.');
    });

    it('should use prompted values when prompts are available', async () => {
      const promptedDirectory = join(outDir, 'prompted-project');
      const result = await importCliWithMocks({
        args: [outDir],
        interactive: true,
        promptAnswers: [promptedDirectory, true, true, true, true, true],
      });

      strictEqual(result.promptMock.mock.callCount(), 6);
      strictEqual(result.promptMock.mock.calls[0].arguments[1].placeholder, outDir);
      match(String(result.cpMock.mock.calls[0].arguments[0]), /typescript-cjs/);
      strictEqual(result.cpMock.mock.calls[0].arguments[1], promptedDirectory);
      strictEqual(
        result.cpMock.mock.calls[0].arguments[2].filter(
          join(promptedDirectory, '.vscode', 'settings.json'),
        ),
        false,
      );
      strictEqual(
        result.renameMock.mock.calls[0].arguments[0],
        join(promptedDirectory, 'gitignore'),
      );
      strictEqual(
        result.renameMock.mock.calls[0].arguments[1],
        join(promptedDirectory, '.gitignore'),
      );
      strictEqual(result.consoleLogMock.mock.callCount(), 1);
      strictEqual(result.spawnMock.mock.callCount(), 0);
    });

    it('should throw when copying template files fails', async () => {
      await rejects(
        () =>
          importCliWithMocks({
            args: [outDir, '--yes', '--skip-vsc', '--skip-git', '--skip-install'],
            cpImplementation: () => ({
              then(_resolve, reject) {
                reject('copy failed');
              },
            }),
          }),
        /copy failed/,
      );
    });

    it('should throw when copying template files fails with an Error instance', async () => {
      await rejects(
        () =>
          importCliWithMocks({
            args: [outDir, '--yes', '--skip-vsc', '--skip-git', '--skip-install'],
            cpImplementation: async () => {
              throw new Error('copy failed with error');
            },
          }),
        /copy failed with error/,
      );
    });

    it('should install Visual Studio Code extensions when initialization is enabled', async () => {
      const result = await importCliWithMocks({
        args: [outDir, '--yes', '--skip-git', '--skip-install'],
      });

      strictEqual(result.spawnMock.mock.callCount(), 2);
      strictEqual(result.spawnMock.mock.calls[0].arguments[0], 'code');
      strictEqual(result.spawnMock.mock.calls[0].arguments[1][0], '--install-extension');
      strictEqual(
        result.spawnMock.mock.calls[1].arguments[1][1],
        'esbenp.prettier-vscode',
      );
    });

    it('should throw when installing Visual Studio Code extensions exits with a failure code', async () => {
      await rejects(
        () =>
          importCliWithMocks({
            args: [outDir, '--yes', '--skip-git', '--skip-install'],
            spawnImplementation: () => createSpawnResult({ code: 1 }),
          }),
        /code --install-extension dbaeumer\.vscode-eslint failed with exit code 1/,
      );
    });

    it('should throw when installing Visual Studio Code extensions emits an error event', async () => {
      await rejects(
        () =>
          importCliWithMocks({
            args: [outDir, '--yes', '--skip-git', '--skip-install'],
            spawnImplementation: () =>
              createSpawnResult({ error: 'vscode install failed' }),
          }),
        /vscode install failed/,
      );
    });

    it('should throw when git initialization exits with a failure code', async () => {
      await rejects(
        () =>
          importCliWithMocks({
            args: [outDir, '--yes', '--skip-vsc', '--skip-install'],
            spawnImplementation: () => createSpawnResult({ code: 1 }),
          }),
        /git init failed with exit code 1/,
      );
    });

    it('should throw when git initialization emits an error event', async () => {
      await rejects(
        () =>
          importCliWithMocks({
            args: [outDir, '--yes', '--skip-vsc', '--skip-install'],
            spawnImplementation: () => createSpawnResult({ error: 'git init failed' }),
          }),
        /git init failed/,
      );
    });

    it('should install packages when installation is enabled', async () => {
      const result = await importCliWithMocks({
        args: [outDir, '--yes', '--skip-vsc', '--skip-git'],
      });

      strictEqual(result.spawnMock.mock.callCount(), 1);
      strictEqual(result.spawnMock.mock.calls[0].arguments[0], 'npm');
      strictEqual(result.spawnMock.mock.calls[0].arguments[1][0], 'install');
    });

    it('should throw when package installation exits with a failure code', async () => {
      await rejects(
        () =>
          importCliWithMocks({
            args: [outDir, '--yes', '--skip-vsc', '--skip-git'],
            spawnImplementation: () => createSpawnResult({ code: 1 }),
          }),
        /npm install failed with exit code 1/,
      );
    });

    it('should throw when package installation emits an error event', async () => {
      await rejects(
        () =>
          importCliWithMocks({
            args: [outDir, '--yes', '--skip-vsc', '--skip-git'],
            spawnImplementation: () => createSpawnResult({ error: 'npm install failed' }),
          }),
        /npm install failed/,
      );
    });
  });
});
