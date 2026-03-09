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
import { delimiter, join } from 'node:path';
import {
  chmodSync,
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import pkg from '../package.json' with { type: 'json' };

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const successMessage = /Successfully created a new Bananass framework project!/;
const temporaryPaths = [];
let cliImportCount = 0;

/**
 * @param {{
 *   args?: string[],
 *   cwd?: string,
 *   directory?: string | undefined,
 *   env?: NodeJS.ProcessEnv,
 * }} [options]
 */
function runCreateBananass(options = {}) {
  const {
    args = [],
    cwd = mkdtempSync(join(tmpdir(), 'create-bananass-cwd-')),
    env,
  } = options;
  const hasDirectory = Object.hasOwn(options, 'directory');
  const directory = hasDirectory
    ? options.directory
    : join(mkdtempSync(join(tmpdir(), 'create-bananass-project-')), 'project');
  const cliArgs = directory ? [directory, ...args] : args;
  const mergedEnv = { ...process.env, ...env };

  temporaryPaths.push(cwd);

  if (directory) {
    temporaryPaths.push(directory);
  }

  const { status, stdout, stderr } = spawnSync(
    'node',
    [join(import.meta.dirname, 'cli.js'), ...cliArgs],
    {
      cwd,
      env: Object.fromEntries(
        Object.entries(mergedEnv).filter(([, value]) => value !== undefined),
      ),
      input: '',
      encoding: 'utf-8',
    },
  );

  return {
    status,
    stdout: stripVTControlCharacters(stdout).trim(),
    stderr: stripVTControlCharacters(stderr).trim(),
    cwd,
    directory: directory ?? cwd,
  };
}

/**
 * @param {object} [options] Test options.
 * @param {string[]} [options.args] Command line arguments.
 * @param {(src: URL, dest: string, options: object) => Promise<void>} [options.cpImplementation] Mock `cp` implementation.
 * @param {(command: string, args: string[], options: object) => { on: (event: string, handler: Function) => object }} [options.spawnImplementation] Mock `spawn` implementation.
 */
async function importCliWithMocks({
  args = [],
  interactive = false,
  promptAnswers = [],
  cpImplementation = async () => {},
  spawnImplementation = () => ({
    on(event, handler) {
      if (event === 'close') {
        queueMicrotask(() => handler(0));
      }

      return this;
    },
  }),
} = {}) {
  const cpMock = mock.fn(cpImplementation);
  const renameMock = mock.fn(async () => {});
  const spawnMock = mock.fn(spawnImplementation);
  const promptMock = mock.fn(async () => promptAnswers.shift());
  const logger = {
    debug: mock.fn(() => logger),
    eol: mock.fn(() => logger),
    log: mock.fn(callback => {
      if (typeof callback === 'function') callback();

      return logger;
    }),
  };

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
    defaultExport: mock.fn(() => logger),
  });
  mock.module('bananass-utils-console/spinner', {
    defaultExport: mock.fn(() => ({
      start: mock.fn(text => text),
      error: mock.fn(text => text),
      success: mock.fn(text => text),
    })),
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

  const argvBeforeImport = process.argv;
  process.argv = ['node', join(import.meta.dirname, 'cli.js'), ...args];

  try {
    await import(`./cli.js?test=${cliImportCount++}`);
  } finally {
    process.argv = argvBeforeImport;
  }

  return {
    cpMock,
    promptMock,
    renameMock,
    spawnMock,
  };
}

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('cli', () => {
  afterEach(() => {
    for (const path of temporaryPaths.splice(0).reverse()) {
      rmSync(path, { recursive: true, force: true });
    }

    mock.reset();
  });

  describe('flags', () => {
    describe('--unknown', () => {
      it('`--unknown` flag should display an error message for unknown flags', () => {
        const result = runCreateBananass({ args: ['--unknown'] });

        strictEqual(result.status, 1); // Non-zero status indicates an error.
        strictEqual(result.stdout, ''); // No standard output should be present.
      });
    });

    describe('--version / -v', () => {
      it('`--version` flag should display version information', () => {
        const result = runCreateBananass({ args: ['--version'] });

        strictEqual(result.status, 0); // `0` indicates successful execution.
        strictEqual(result.stdout, pkg.version); // Version output should be present.
        strictEqual(result.stderr, ''); // No error output should be present.
      });

      it('`-v` flag should display version information', () => {
        const result = runCreateBananass({ args: ['-v'] });

        strictEqual(result.status, 0); // `0` indicates successful execution.
        strictEqual(result.stdout, pkg.version); // Version output should be present.
        strictEqual(result.stderr, ''); // No error output should be present.
      });

      it('`--version` flag should have higher precedence than `--help` flag', () => {
        const result = runCreateBananass({ args: ['--version', '--help'] });

        strictEqual(result.status, 0); // `0` indicates successful execution.
        strictEqual(result.stdout, pkg.version); // Version output should be present.
        strictEqual(result.stderr, ''); // No error output should be present.
      });
    });

    describe('--help / -h', () => {
      it('`--help` flag should display help information', () => {
        const result = runCreateBananass({ args: ['--help'] });

        strictEqual(result.status, 0); // `0` indicates successful execution.
        match(result.stdout, /Usage:/); // Help output should be present.
        strictEqual(result.stderr, ''); // No error output should be present.
      });

      it('`-h` flag should display help information', () => {
        const result = runCreateBananass({ args: ['-h'] });

        strictEqual(result.status, 0); // `0` indicates successful execution.
        match(result.stdout, /Usage:/); // Help output should be present.
        strictEqual(result.stderr, ''); // No error output should be present.
      });
    });
  });

  describe('e2e', () => {
    describe('should create a JavaScript ESM project', () => {
      it('when `--skip-vsc`, `--skip-install` flags are used', () => {
        const result = runCreateBananass({ args: ['--skip-vsc', '--skip-install'] });
        const packageJson = JSON.parse(
          readFileSync(join(result.directory, 'package.json'), 'utf-8'),
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-javascript-esm');
        strictEqual(packageJson.type, 'module');

        // Files created
        ok(existsSync(join(result.directory, '.git')));
        ok(existsSync(join(result.directory, 'bananass', '1000.mjs')));
        ok(existsSync(join(result.directory, '.gitignore')));
        ok(existsSync(join(result.directory, 'README.md')));
        ok(existsSync(join(result.directory, 'bananass.config.mjs')));

        // Files not created
        ok(!existsSync(join(result.directory, '.vscode')));
        ok(!existsSync(join(result.directory, 'node_modules')));
      });

      it('when `--skip-vsc`, `--skip-git`, `--skip-install` flags are used', () => {
        const result = runCreateBananass({
          args: ['--skip-vsc', '--skip-git', '--skip-install'],
        });
        const packageJson = JSON.parse(
          readFileSync(join(result.directory, 'package.json'), 'utf-8'),
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-javascript-esm');
        strictEqual(packageJson.type, 'module');

        // Files created
        ok(existsSync(join(result.directory, 'bananass', '1000.mjs')));
        ok(existsSync(join(result.directory, '.gitignore')));
        ok(existsSync(join(result.directory, 'README.md')));
        ok(existsSync(join(result.directory, 'bananass.config.mjs')));

        // Files not created
        ok(!existsSync(join(result.directory, '.vscode')));
        ok(!existsSync(join(result.directory, '.git')));
        ok(!existsSync(join(result.directory, 'node_modules')));
      });
    });

    describe('should create a JavaScript CJS project', () => {
      it('when `--skip-vsc`, `--skip-install` flags are used', () => {
        const result = runCreateBananass({
          args: ['--skip-vsc', '--skip-install', '--cjs'],
        });
        const packageJson = JSON.parse(
          readFileSync(join(result.directory, 'package.json'), 'utf-8'),
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-javascript-cjs');
        strictEqual(packageJson.type, 'commonjs');

        // Files created
        ok(existsSync(join(result.directory, '.git')));
        ok(existsSync(join(result.directory, 'bananass', '1000.cjs')));
        ok(existsSync(join(result.directory, '.gitignore')));
        ok(existsSync(join(result.directory, 'README.md')));
        ok(existsSync(join(result.directory, 'bananass.config.cjs')));

        // Files not created
        ok(!existsSync(join(result.directory, '.vscode')));
        ok(!existsSync(join(result.directory, 'node_modules')));
      });

      it('when `--skip-vsc`, `--skip-git`, `--skip-install` flags are used', () => {
        const result = runCreateBananass({
          args: ['--skip-vsc', '--skip-git', '--skip-install', '--cjs'],
        });
        const packageJson = JSON.parse(
          readFileSync(join(result.directory, 'package.json'), 'utf-8'),
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-javascript-cjs');
        strictEqual(packageJson.type, 'commonjs');

        // Files created
        ok(existsSync(join(result.directory, 'bananass', '1000.cjs')));
        ok(existsSync(join(result.directory, '.gitignore')));
        ok(existsSync(join(result.directory, 'README.md')));
        ok(existsSync(join(result.directory, 'bananass.config.cjs')));

        // Files not created
        ok(!existsSync(join(result.directory, '.vscode')));
        ok(!existsSync(join(result.directory, '.git')));
        ok(!existsSync(join(result.directory, 'node_modules')));
      });
    });

    describe('should create a TypeScript ESM project', () => {
      it('when `--skip-vsc`, `--skip-install` flags are used', () => {
        const result = runCreateBananass({
          args: ['--skip-vsc', '--skip-install', '--typescript'],
        });
        const packageJson = JSON.parse(
          readFileSync(join(result.directory, 'package.json'), 'utf-8'),
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-typescript-esm');
        strictEqual(packageJson.type, 'module');

        // Files created
        ok(existsSync(join(result.directory, '.git')));
        ok(existsSync(join(result.directory, 'bananass', '1000.mts')));
        ok(existsSync(join(result.directory, '.gitignore')));
        ok(existsSync(join(result.directory, 'README.md')));
        ok(existsSync(join(result.directory, 'bananass.config.mts')));

        // Files not created
        ok(!existsSync(join(result.directory, '.vscode')));
        ok(!existsSync(join(result.directory, 'node_modules')));
      });

      it('when `--skip-vsc`, `--skip-git`, `--skip-install` flags are used', () => {
        const result = runCreateBananass({
          args: ['--skip-vsc', '--skip-git', '--skip-install', '--typescript'],
        });
        const packageJson = JSON.parse(
          readFileSync(join(result.directory, 'package.json'), 'utf-8'),
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-typescript-esm');
        strictEqual(packageJson.type, 'module');

        // Files created
        ok(existsSync(join(result.directory, 'bananass', '1000.mts')));
        ok(existsSync(join(result.directory, '.gitignore')));
        ok(existsSync(join(result.directory, 'README.md')));
        ok(existsSync(join(result.directory, 'bananass.config.mts')));

        // Files not created
        ok(!existsSync(join(result.directory, '.vscode')));
        ok(!existsSync(join(result.directory, '.git')));
        ok(!existsSync(join(result.directory, 'node_modules')));
      });
    });

    describe('should create a TypeScript CJS project', () => {
      it('when `--skip-vsc`, `--skip-install` flags are used', () => {
        const result = runCreateBananass({
          args: ['--skip-vsc', '--skip-install', '--typescript', '--cjs'],
        });
        const packageJson = JSON.parse(
          readFileSync(join(result.directory, 'package.json'), 'utf-8'),
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-typescript-cjs');
        strictEqual(packageJson.type, 'commonjs');

        // Files created
        ok(existsSync(join(result.directory, '.git')));
        ok(existsSync(join(result.directory, 'bananass', '1000.cts')));
        ok(existsSync(join(result.directory, '.gitignore')));
        ok(existsSync(join(result.directory, 'README.md')));
        ok(existsSync(join(result.directory, 'bananass.config.cts')));

        // Files not created
        ok(!existsSync(join(result.directory, '.vscode')));
        ok(!existsSync(join(result.directory, 'node_modules')));
      });

      it('when `--skip-vsc`, `--skip-git`, `--skip-install` flags are used', () => {
        const result = runCreateBananass({
          args: ['--skip-vsc', '--skip-git', '--skip-install', '--typescript', '--cjs'],
        });
        const packageJson = JSON.parse(
          readFileSync(join(result.directory, 'package.json'), 'utf-8'),
        );

        // Result
        strictEqual(result.status, 0);
        match(result.stderr, successMessage);

        // `package.json`
        strictEqual(packageJson.private, true);
        strictEqual(packageJson.name, 'create-bananass-typescript-cjs');
        strictEqual(packageJson.type, 'commonjs');

        // Files created
        ok(existsSync(join(result.directory, 'bananass', '1000.cts')));
        ok(existsSync(join(result.directory, '.gitignore')));
        ok(existsSync(join(result.directory, 'README.md')));
        ok(existsSync(join(result.directory, 'bananass.config.cts')));

        // Files not created
        ok(!existsSync(join(result.directory, '.vscode')));
        ok(!existsSync(join(result.directory, '.git')));
        ok(!existsSync(join(result.directory, 'node_modules')));
      });
    });
  });

  describe('integration', () => {
    it('should use the default directory when no positional directory is provided', () => {
      const cwd = mkdtempSync(join(tmpdir(), 'create-bananass-default-'));
      temporaryPaths.push(cwd);

      const result = runCreateBananass({
        args: ['--yes', '--skip-vsc', '--skip-git', '--skip-install'],
        cwd,
        directory: undefined,
      });

      strictEqual(result.directory, cwd);
      strictEqual(result.status, 1);
      match(result.stderr, /Failed to copy files/);
    });

    it('should trigger prompts and apply interactive answers during interactive mode', async () => {
      const placeholderDirectory = join(tmpdir(), 'create-bananass-placeholder-project');
      const result = await importCliWithMocks({
        args: [placeholderDirectory, '--skip-vsc', '--skip-git', '--skip-install'],
        interactive: true,
        promptAnswers: [placeholderDirectory, true, true, false, false, false],
      });

      strictEqual(result.promptMock.mock.callCount(), 6);
      strictEqual(
        result.promptMock.mock.calls[0].arguments[1].placeholder,
        placeholderDirectory,
      );
      match(String(result.cpMock.mock.calls[0].arguments[0]), /typescript-cjs/);
      strictEqual(result.cpMock.mock.calls[0].arguments[1], placeholderDirectory);
      strictEqual(
        result.cpMock.mock.calls[0].arguments[2].filter(
          join(placeholderDirectory, '.vscode', 'settings.json'),
        ),
        true,
      );
      strictEqual(
        result.renameMock.mock.calls[0].arguments[0],
        join(placeholderDirectory, 'gitignore'),
      );
      strictEqual(
        result.renameMock.mock.calls[0].arguments[1],
        join(placeholderDirectory, '.gitignore'),
      );
      strictEqual(result.spawnMock.mock.callCount(), 4);
    });

    it('should execute Visual Studio Code extension installation, git init, and npm install with stub binaries', () => {
      const directory = join(
        mkdtempSync(join(tmpdir(), 'create-bananass-success-')),
        'successful-project',
      );
      const binDirectory = mkdtempSync(join(tmpdir(), 'create-bananass-bin-'));
      const commandLogPath = join(binDirectory, 'commands.log');

      temporaryPaths.push(directory, binDirectory);

      writeFileSync(
        join(binDirectory, 'code'),
        [
          '#!/bin/sh',
          'printf "code %s %s\\n" "$1" "$2" >> "$CREATE_BANANASS_TEST_COMMAND_LOG"',
          'exit 0',
          '',
        ].join('\n'),
      );
      writeFileSync(
        join(binDirectory, 'git'),
        [
          '#!/bin/sh',
          'printf "git %s\\n" "$1" >> "$CREATE_BANANASS_TEST_COMMAND_LOG"',
          'exit 0',
          '',
        ].join('\n'),
      );
      writeFileSync(
        join(binDirectory, 'npm'),
        [
          '#!/bin/sh',
          'printf "npm %s\\n" "$1" >> "$CREATE_BANANASS_TEST_COMMAND_LOG"',
          'exit 0',
          '',
        ].join('\n'),
      );

      chmodSync(join(binDirectory, 'code'), 0o755);
      chmodSync(join(binDirectory, 'git'), 0o755);
      chmodSync(join(binDirectory, 'npm'), 0o755);

      const result = runCreateBananass({
        args: ['--yes', '--typescript', '--cjs'],
        directory,
        env: {
          CREATE_BANANASS_TEST_COMMAND_LOG: commandLogPath,
          PATH: `${binDirectory}${delimiter}${process.env.PATH ?? ''}`,
        },
      });
      const packageJson = JSON.parse(
        readFileSync(join(directory, 'package.json'), 'utf-8'),
      );
      const commandLog = readFileSync(commandLogPath, 'utf-8');

      strictEqual(result.status, 0);
      match(result.stderr, successMessage);
      strictEqual(packageJson.name, 'create-bananass-typescript-cjs');
      strictEqual(packageJson.type, 'commonjs');
      match(commandLog, /code --install-extension dbaeumer\.vscode-eslint/);
      match(commandLog, /code --install-extension esbenp\.prettier-vscode/);
      match(commandLog, /git init/);
      match(commandLog, /npm install/);
    });

    it('should throw when copying template files fails during actual execution', () => {
      const directory = mkdtempSync(join(tmpdir(), 'create-bananass-copy-error-'));
      temporaryPaths.push(directory);
      writeFileSync(join(directory, 'existing.txt'), 'existing');

      const result = runCreateBananass({
        args: ['--yes', '--skip-vsc', '--skip-git', '--skip-install'],
        directory,
      });

      strictEqual(result.status, 1);
      match(result.stderr, /Failed to copy files/);
    });

    it('should throw when copying template files rejects with a non-error value', async () => {
      await rejects(
        () =>
          importCliWithMocks({
            args: ['.', '--yes', '--skip-vsc', '--skip-git', '--skip-install'],
            cpImplementation: () => ({
              then(...handlers) {
                handlers[1]('copy failed');
              },
            }),
          }),
        /copy failed/,
      );
    });

    it('should throw when installing Visual Studio Code extensions exits with a failure code', () => {
      const binDirectory = mkdtempSync(join(tmpdir(), 'create-bananass-bin-'));
      temporaryPaths.push(binDirectory);

      writeFileSync(join(binDirectory, 'code'), '#!/bin/sh\nexit 1\n');
      chmodSync(join(binDirectory, 'code'), 0o755);

      const result = runCreateBananass({
        args: ['--yes', '--skip-git', '--skip-install'],
        env: {
          PATH: `${binDirectory}${delimiter}${process.env.PATH ?? ''}`,
        },
      });

      strictEqual(result.status, 1);
      match(result.stderr, /Failed to install Visual Studio Code extensions/);
      match(result.stderr, /failed with exit code 1/);
    });

    it('should throw when installing Visual Studio Code extensions emits an error event', async () => {
      await rejects(
        () =>
          importCliWithMocks({
            args: ['.', '--yes', '--skip-git', '--skip-install'],
            spawnImplementation: () => ({
              on(event, handler) {
                if (event === 'error') {
                  queueMicrotask(() => handler('vscode install failed'));
                }

                return this;
              },
            }),
          }),
        /vscode install failed/,
      );
    });

    it('should throw when git initialization exits with a failure code', () => {
      const binDirectory = mkdtempSync(join(tmpdir(), 'create-bananass-bin-'));
      temporaryPaths.push(binDirectory);

      writeFileSync(join(binDirectory, 'git'), '#!/bin/sh\nexit 1\n');
      chmodSync(join(binDirectory, 'git'), 0o755);

      const result = runCreateBananass({
        args: ['--yes', '--skip-vsc', '--skip-install'],
        env: {
          PATH: `${binDirectory}${delimiter}${process.env.PATH ?? ''}`,
        },
      });

      strictEqual(result.status, 1);
      match(result.stderr, /Failed to initialize git/);
      match(result.stderr, /git init failed with exit code 1/);
    });

    it('should throw when git initialization emits an error event', async () => {
      await rejects(
        () =>
          importCliWithMocks({
            args: ['.', '--yes', '--skip-vsc', '--skip-install'],
            spawnImplementation: () => ({
              on(event, handler) {
                if (event === 'error') {
                  queueMicrotask(() => handler('git init failed'));
                }

                return this;
              },
            }),
          }),
        /git init failed/,
      );
    });

    it('should throw when package installation exits with a failure code', () => {
      const binDirectory = mkdtempSync(join(tmpdir(), 'create-bananass-bin-'));
      temporaryPaths.push(binDirectory);

      writeFileSync(join(binDirectory, 'npm'), '#!/bin/sh\nexit 1\n');
      chmodSync(join(binDirectory, 'npm'), 0o755);

      const result = runCreateBananass({
        args: ['--yes', '--skip-vsc', '--skip-git'],
        env: {
          PATH: `${binDirectory}${delimiter}${process.env.PATH ?? ''}`,
        },
      });

      strictEqual(result.status, 1);
      match(result.stderr, /Failed to install packages/);
      match(result.stderr, /npm install failed with exit code 1/);
    });

    it('should throw when package installation emits an error event', async () => {
      await rejects(
        () =>
          importCliWithMocks({
            args: ['.', '--yes', '--skip-vsc', '--skip-git'],
            spawnImplementation: () => ({
              on(event, handler) {
                if (event === 'error') {
                  queueMicrotask(() => handler('npm install failed'));
                }

                return this;
              },
            }),
          }),
        /npm install failed/,
      );
    });
  });
});
