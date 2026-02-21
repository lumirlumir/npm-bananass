/**
 * @fileoverview Test for `build.js`.
 *
 * NOTE: None of the files in the `fixtures` directory are based on actual problem on any platform.
 * They are simply dummy files or A + B examples used for testing purposes.
 */

// TODO: Add tests for external npm libraries

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { doesNotMatch, match, ok, rejects, strictEqual } from 'node:assert';
import { describe, it, afterEach, mock } from 'node:test';
import { stripVTControlCharacters } from 'node:util';
import { spawnSync } from 'node:child_process';
import { join, resolve } from 'node:path';
import { existsSync, rmSync, readFileSync } from 'node:fs';
import fsPromises from 'node:fs/promises';

import build from './build.js';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

/**
 * Removes the specified output directory if it exists.
 * @param {string} outDir The path to the output directory to remove.
 */
function removeOutDir(outDir) {
  if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true });
}

/**
 * Runs the output file with the given input and returns the status, stdout, and stderr.
 * @param {string} outFile The path to the output file to run.
 * @param {string} input The input to pass to the output file.
 */
function runOutFile(outFile, input) {
  const { status, stdout, stderr } = spawnSync('node', [outFile], {
    input,
    encoding: 'utf-8',
  });

  return {
    status,
    stdout: stripVTControlCharacters(stdout).trim(),
    stderr: stripVTControlCharacters(stderr).trim(),
  };
}

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('build', () => {
  describe('shared', () => {
    const cwd = resolve(import.meta.dirname, 'fixtures', 'shared');
    const outDir = resolve(cwd, '.bananass');
    const configObject = { cwd, console: { quiet: true } };

    afterEach(() => {
      // Clean up the output directory after each test
      removeOutDir(outDir);
    });

    describe('should throw an error when invalid first argument is provided', () => {
      it('when first argument is missing', async () => {
        await rejects(() => build());
      });

      it('when first argument is not an array', async () => {
        await rejects(() => build(1000));
        await rejects(() => build(true));
        await rejects(() => build(undefined));
        await rejects(() => build(null));
        await rejects(() => build(Symbol('test')));
        await rejects(() => build({}));
      });

      it('when first argument is an empty array', async () => {
        await rejects(() => build([]));
      });

      it('when first argument is an array but contains invalid values', async () => {
        await rejects(() => build([1000]));
        await rejects(() => build(['1000', 1001]));
        await rejects(() => build([true]));
        await rejects(() => build([undefined]));
        await rejects(() => build([null]));
        await rejects(() => build([Symbol('test')]));
        await rejects(() => build([{}]));
      });
    });

    describe('should throw an error when invalid second argument is provided', () => {
      it('when second argument is not an object', async () => {
        await rejects(() => build(['1000'], 1000));
        await rejects(() => build(['1000'], 'invalid'));
        await rejects(() => build(['1000'], true));
        await rejects(() => build(['1000'], null));
        await rejects(() => build(['1000'], Symbol('test')));
        await rejects(() => build(['1000'], []));
      });

      it('when second argument is an object but contains invalid properties', async () => {
        await rejects(() => build(['1000'], { invalid: 'invalid' }));
        await rejects(() => build(['1000'], { build: { clean: 'true' } }));
      });
    });

    describe('should throw an error when solution file from first argument does not exist', () => {
      it('when a single solution file does not exist', async () => {
        await rejects(() => build(['99999'], configObject), /doesn't exist/);
      });

      it('when two solution files do not exist', async () => {
        await rejects(() => build(['99998', '99999'], configObject), /doesn't exist/);
      });
    });

    describe('should work as expected when valid first argument is provided', () => {
      it('should create output directory and file correctly when a single entry is provided', async () => {
        await build(['1000'], configObject);

        ok(existsSync(outDir)); // Output directory should be created.
        ok(existsSync(join(outDir, '1000.cjs'))); // Output file `1000.cjs` should be created.
      });

      it('should create output directory and files correctly when two entries are provided', async () => {
        await build(['1000', '1001'], configObject);

        ok(existsSync(outDir)); // Output directory should be created.
        ok(existsSync(join(outDir, '1000.cjs'))); // Output file `1000.cjs` should be created.
        ok(existsSync(join(outDir, '1001.cjs'))); // Output file `1001.cjs` should be created.
      });

      it('should create output directory and files correctly when three entries are provided', async () => {
        await build(['1000', '1001', '1002'], configObject);

        ok(existsSync(outDir)); // Output directory should be created.
        ok(existsSync(join(outDir, '1000.cjs'))); // Output file `1000.cjs` should be created.
        ok(existsSync(join(outDir, '1001.cjs'))); // Output file `1001.cjs` should be created.
        ok(existsSync(join(outDir, '1002.cjs'))); // Output file `1002.cjs` should be created.
      });

      it('banner should be added to the output file', async () => {
        await build(['1000'], configObject);

        ok(existsSync(outDir)); // Output directory should be created.

        const outFile = join(outDir, '1000.cjs');
        ok(existsSync(outFile)); // Output file `1000.cjs` should be created.

        const fileContent = readFileSync(outFile, 'utf-8');
        match(fileContent, /DO NOT DELETE THIS COMMENT/u); // Banner should be added to the output file.
      });
    });

    describe('should work as expected when valid second argument is provided', () => {
      it('should use default parameters when only `cwd` is provided', async () => {
        await build(['1000'], { cwd });

        ok(existsSync(outDir)); // Output directory should be created.
        ok(existsSync(join(outDir, '1000.cjs'))); // Output file `1000.cjs` should be created.
      });

      it('should use default parameters when empty `console` object is provided', async () => {
        await build(['1000'], { cwd, console: {} });

        ok(existsSync(outDir)); // Output directory should be created.
        ok(existsSync(join(outDir, '1000.cjs'))); // Output file `1000.cjs` should be created.
      });

      it('should use default parameters when empty `build` object is provided', async () => {
        await build(['1000'], { cwd, build: {} });

        ok(existsSync(outDir)); // Output directory should be created.
        ok(existsSync(join(outDir, '1000.cjs'))); // Output file `1000.cjs` should be created.
      });

      it('option: `entryDir` and `outDir` should work as expected', async () => {
        const customEntryDir = join(cwd, 'src');
        const customOutDir = join(cwd, 'build');

        await build(['2000'], {
          ...configObject,
          entryDir: customEntryDir,
          outDir: customOutDir,
        });

        ok(existsSync(customOutDir)); // Custom output directory should be created.
        ok(existsSync(join(customOutDir, '2000.cjs'))); // Output file `2000.cjs` should be created in the custom output directory.

        removeOutDir(customOutDir);
      });

      it('option: `clean` should work as expected', async () => {
        await build(['1000'], configObject);

        ok(existsSync(outDir)); // Output directory should be created.
        ok(existsSync(join(outDir, '1000.cjs'))); // Output file `1000.cjs` should be created.

        await build(['1001'], configObject);

        ok(existsSync(outDir)); // Output directory should still exist.
        ok(existsSync(join(outDir, '1000.cjs'))); // Output file `1000.cjs` should still exist.
        ok(existsSync(join(outDir, '1001.cjs'))); // Output file `1001.cjs` should be created.

        await build(['1002'], { ...configObject, build: { clean: true } });

        ok(existsSync(outDir)); // Output directory should still exist.
        ok(!existsSync(join(outDir, '1000.cjs'))); // Output file `1000.cjs` should be removed.
        ok(!existsSync(join(outDir, '1001.cjs'))); // Output file `1001.cjs` should be removed.
        ok(existsSync(join(outDir, '1002.cjs'))); // Output file `1002.cjs` should be created.
      });

      it('option: `clean` should throw an error for some reason', async () => {
        mock.method(fsPromises, 'rm', () => {
          throw new Error('Dummy error message');
        });

        await rejects(
          () => build(['1000'], { ...configObject, build: { clean: true } }),
          /Dummy error message/,
        );
      });

      it("option: `templateType: 'fs'` should work as expected", async () => {
        await build(['1000'], {
          ...configObject,
          build: {
            templateType: 'fs',
          },
        });

        ok(existsSync(outDir)); // Output directory should be created.

        const outFile = join(outDir, '1000.cjs');
        ok(existsSync(outFile)); // Output file `1000.cjs` should be created.

        const fileContent = readFileSync(outFile, 'utf-8');
        match(fileContent, /require\("node:fs"\)/u); // Output file should contain `require("node:fs")`.
        doesNotMatch(fileContent, /require\("node:readline"\)/u); // Output file should not contain `require("node:readline")`.
        doesNotMatch(fileContent, /require\("readline"\)/u); // Output file should not contain `require("readline")`.
      });

      it("option: `templateType: 'rl'` should work as expected", async () => {
        await build(['1000'], {
          ...configObject,
          build: {
            templateType: 'rl',
          },
        });

        ok(existsSync(outDir)); // Output directory should be created.

        const outFile = join(outDir, '1000.cjs');
        ok(existsSync(outFile)); // Output file `1000.cjs` should be created.

        const fileContent = readFileSync(outFile, 'utf-8');
        match(fileContent, /require\("node:readline"\)/u); // Output file should contain `require("node:readline")`.
        doesNotMatch(fileContent, /require\("node:fs"\)/u); // Output file should not contain `require("node:fs")`.
        doesNotMatch(fileContent, /require\("fs"\)/u); // Output file should not contain `require("fs")`.
      });
    });
  });

  describe('cjs', () => {
    const cwd = resolve(import.meta.dirname, 'fixtures', 'cjs');
    const outDir = resolve(cwd, '.bananass');
    const configObjectFS = {
      cwd,
      console: { quiet: true },
      build: { templateType: 'fs' },
    };
    const configObjectRL = {
      cwd,
      console: { quiet: true },
      build: { templateType: 'rl' },
    };

    afterEach(() => {
      // Clean up the output directory after each test
      removeOutDir(outDir);
    });

    describe('When the entire solution is in a single file', () => {
      describe('`fs`(file system) template', () => {
        it('A single file with `solution` and `testcases` should build correctly', async () => {
          await build(['1000'], configObjectFS);

          const outFile = resolve(outDir, '1000.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('A single file with only `solution` should build correctly', async () => {
          await build(['1001'], configObjectFS);

          const outFile = resolve(outDir, '1001.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.cjs` should build correctly', async () => {
          await build(['1002'], configObjectFS);

          const outFile = resolve(outDir, '1002.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.mjs` with `export default` should build correctly', async () => {
          await build(['1003'], configObjectFS);

          const outFile = resolve(outDir, '1003.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.mjs` with `export` should build correctly', async () => {
          await build(['1004'], configObjectFS);

          const outFile = resolve(outDir, '1004.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('User-created external modules using the `cjs` format should build correctly', async () => {
          await build(['1005'], configObjectFS);

          const outFile = resolve(outDir, '1005.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Function expression `solution` should build correctly', async () => {
          await build(['1006'], configObjectFS);

          const outFile = resolve(outDir, '1006.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Arrow function `solution` should build correctly', async () => {
          await build(['1007'], configObjectFS);

          const outFile = resolve(outDir, '1007.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });

      describe('`rl`(readline) template', () => {
        it('A single file with `solution` and `testcases` should build correctly', async () => {
          await build(['1000'], configObjectRL);

          const outFile = resolve(outDir, '1000.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('A single file with only `solution` should build correctly', async () => {
          await build(['1001'], configObjectRL);

          const outFile = resolve(outDir, '1001.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.cjs` should build correctly', async () => {
          await build(['1002'], configObjectRL);

          const outFile = resolve(outDir, '1002.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.mjs` with `export default` should build correctly', async () => {
          await build(['1003'], configObjectRL);

          const outFile = resolve(outDir, '1003.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.mjs` with `export` should build correctly', async () => {
          await build(['1004'], configObjectRL);

          const outFile = resolve(outDir, '1004.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('User-created external modules using the `cjs` format should build correctly', async () => {
          await build(['1005'], configObjectRL);

          const outFile = resolve(outDir, '1005.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Function expression `solution` should build correctly', async () => {
          await build(['1006'], configObjectRL);

          const outFile = resolve(outDir, '1006.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Arrow function `solution` should build correctly', async () => {
          await build(['1007'], configObjectRL);

          const outFile = resolve(outDir, '1007.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });
    });

    describe('When the solution is in a single directory with multiple files', () => {
      describe('`fs`(file system) template', () => {
        it('A solution directory with `solution` and `testcases` should build correctly', async () => {
          await build(['2000'], configObjectFS);

          const outFile = resolve(outDir, '2000.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('A solution directory with only `solution` should build correctly', async () => {
          await build(['2001'], configObjectFS);

          const outFile = resolve(outDir, '2001.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.cjs` should build correctly', async () => {
          await build(['2002'], configObjectFS);

          const outFile = resolve(outDir, '2002.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.mjs` with `export default` should build correctly', async () => {
          await build(['2003'], configObjectFS);

          const outFile = resolve(outDir, '2003.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.mjs` with `export` should build correctly', async () => {
          await build(['2004'], configObjectFS);

          const outFile = resolve(outDir, '2004.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('User-created external modules using the `cjs` format should build correctly', async () => {
          await build(['2005'], configObjectFS);

          const outFile = resolve(outDir, '2005.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });

      describe('`rl`(readline) template', () => {
        it('A solution directory with `solution` and `testcases` should build correctly', async () => {
          await build(['2000'], configObjectRL);

          const outFile = resolve(outDir, '2000.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('A solution directory with only `solution` should build correctly', async () => {
          await build(['2001'], configObjectRL);

          const outFile = resolve(outDir, '2001.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.cjs` should build correctly', async () => {
          await build(['2002'], configObjectRL);

          const outFile = resolve(outDir, '2002.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.mjs` with `export default` should build correctly', async () => {
          await build(['2003'], configObjectRL);

          const outFile = resolve(outDir, '2003.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.mjs` with `export` should build correctly', async () => {
          await build(['2004'], configObjectRL);

          const outFile = resolve(outDir, '2004.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('User-created external modules using the `cjs` format should build correctly', async () => {
          await build(['2005'], configObjectRL);

          const outFile = resolve(outDir, '2005.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });
    });

    describe('Latest ECMAScript features with `@babel/preset-env` and custom plugins should be transpiled correctly', () => {
      describe('`fs`(file system) template', () => {
        it('ES2025 `regexp-modifiers` should be transpiled correctly', async () => {
          // https://babeljs.io/docs/babel-plugin-transform-regexp-modifiers

          await build(['3000'], configObjectFS);

          const outFile = resolve(outDir, '3000.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('/(?:[Aa])a/'), true);
          strictEqual(fileContent.includes('/(?i:a)a/'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-array-prototype-to-sorted` plugin should be applied correctly', async () => {
          await build(['3001'], configObjectFS);

          const outFile = resolve(outDir, '3001.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('toSorted()'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-array-prototype-to-reversed` plugin should be applied correctly', async () => {
          await build(['3002'], configObjectFS);

          const outFile = resolve(outDir, '3002.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('toReversed()'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-object-has-own` plugin should be applied correctly', async () => {
          await build(['3003'], configObjectFS);

          const outFile = resolve(outDir, '3003.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('Object.hasOwn'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });

      describe('`rl`(readline) template', () => {
        it('ES2025 `regexp-modifiers` should be transpiled correctly', async () => {
          // https://babeljs.io/docs/babel-plugin-transform-regexp-modifiers

          await build(['3000'], configObjectRL);

          const outFile = resolve(outDir, '3000.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('/(?:[Aa])a/'), true);
          strictEqual(fileContent.includes('/(?i:a)a/'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-array-prototype-to-sorted` plugin should be applied correctly', async () => {
          await build(['3001'], configObjectRL);

          const outFile = resolve(outDir, '3001.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('toSorted()'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-array-prototype-to-reversed` plugin should be applied correctly', async () => {
          await build(['3002'], configObjectRL);

          const outFile = resolve(outDir, '3002.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('toReversed()'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-object-has-own` plugin should be applied correctly', async () => {
          await build(['3003'], configObjectRL);

          const outFile = resolve(outDir, '3003.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('Object.hasOwn'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });
    });

    describe('Webpack `definePlugin` should be applied correctly', () => {
      it('`globalThis.IS_PROD` should work correctly', async () => {
        await build(['4000'], configObjectFS);

        const outFile = resolve(outDir, '4000.cjs');
        ok(existsSync(outFile));

        const fileContent = readFileSync(outFile, 'utf-8');
        strictEqual(
          fileContent.includes(
            'This line should not be included in the production build',
          ),
          false,
        );
        strictEqual(fileContent.includes('testcases'), false);

        const result = runOutFile(outFile, '1 2');
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it("`process.env.NODE_ENV === 'production'` should work correctly", async () => {
        await build(['4001'], configObjectFS);

        const outFile = resolve(outDir, '4001.cjs');
        ok(existsSync(outFile));

        const fileContent = readFileSync(outFile, 'utf-8');
        strictEqual(
          fileContent.includes(
            'This line should not be included in the production build',
          ),
          false,
        );
        strictEqual(fileContent.includes('testcases'), false);

        const result = runOutFile(outFile, '1 2');
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });
    });

    describe('Multiple files', () => {
      it('Multiple files with `fs` template should build correctly', async () => {
        await build(['1000', '1001', '2000'], configObjectFS);

        const outFile1000 = resolve(outDir, '1000.cjs');
        const result1000 = runOutFile(outFile1000, '1 2');

        const outFile1001 = resolve(outDir, '1001.cjs');
        const result1001 = runOutFile(outFile1001, '1 2');

        const outFile2000 = resolve(outDir, '2000.cjs');
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

      it('Multiple files with `rl` template should build correctly', async () => {
        await build(['1000', '2000'], configObjectRL);

        const outFile1000 = resolve(outDir, '1000.cjs');
        const result1000 = runOutFile(outFile1000, '1 2');

        const outFile2000 = resolve(outDir, '2000.cjs');
        const result2000 = runOutFile(outFile2000, '1 2');

        ok(existsSync(outFile1000));
        strictEqual(result1000.status, 0);
        strictEqual(result1000.stdout, '3');

        ok(existsSync(outFile2000));
        strictEqual(result2000.status, 0);
        strictEqual(result2000.stdout, '3');
      });
    });
  });

  describe('cts', () => {
    const cwd = resolve(import.meta.dirname, 'fixtures', 'cts');
    const outDir = resolve(cwd, '.bananass');
    const configObjectFS = {
      cwd,
      console: { quiet: true },
      build: { templateType: 'fs' },
    };
    const configObjectRL = {
      cwd,
      console: { quiet: true },
      build: { templateType: 'rl' },
    };

    afterEach(() => {
      // Clean up the output directory after each test
      removeOutDir(outDir);
    });

    describe('When the entire solution is in a single file', () => {
      describe('`fs`(file system) template', () => {
        it('A single file with `solution` and `testcases` should build correctly', async () => {
          await build(['1000'], configObjectFS);

          const outFile = resolve(outDir, '1000.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('A single file with only `solution` should build correctly', async () => {
          await build(['1001'], configObjectFS);

          const outFile = resolve(outDir, '1001.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.cts` should build correctly', async () => {
          await build(['1002'], configObjectFS);

          const outFile = resolve(outDir, '1002.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.mts` with `export default` should build correctly', async () => {
          await build(['1003'], configObjectFS);

          const outFile = resolve(outDir, '1003.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.mts` with `export` should build correctly', async () => {
          await build(['1004'], configObjectFS);

          const outFile = resolve(outDir, '1004.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('User-created external modules using the `cts` format should build correctly', async () => {
          await build(['1005'], configObjectFS);

          const outFile = resolve(outDir, '1005.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Function expression `solution` should build correctly', async () => {
          await build(['1006'], configObjectFS);

          const outFile = resolve(outDir, '1006.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Arrow function `solution` should build correctly', async () => {
          await build(['1007'], configObjectFS);

          const outFile = resolve(outDir, '1007.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Type importing `with { resolution-mode: require }` should build correctly', async () => {
          await build(['1999'], configObjectFS);

          const outFile = resolve(outDir, '1999.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });

      describe('`rl`(readline) template', () => {
        it('A single file with `solution` and `testcases` should build correctly', async () => {
          await build(['1000'], configObjectRL);

          const outFile = resolve(outDir, '1000.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('A single file with only `solution` should build correctly', async () => {
          await build(['1001'], configObjectRL);

          const outFile = resolve(outDir, '1001.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.cts` should build correctly', async () => {
          await build(['1002'], configObjectRL);

          const outFile = resolve(outDir, '1002.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.mts` with `export default` should build correctly', async () => {
          await build(['1003'], configObjectRL);

          const outFile = resolve(outDir, '1003.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.mts` with `export` should build correctly', async () => {
          await build(['1004'], configObjectRL);

          const outFile = resolve(outDir, '1004.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('User-created external modules using the `cts` format should build correctly', async () => {
          await build(['1005'], configObjectRL);

          const outFile = resolve(outDir, '1005.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Function expression `solution` should build correctly', async () => {
          await build(['1006'], configObjectRL);

          const outFile = resolve(outDir, '1006.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Arrow function `solution` should build correctly', async () => {
          await build(['1007'], configObjectRL);

          const outFile = resolve(outDir, '1007.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Type importing `with { resolution-mode: require }` should build correctly', async () => {
          await build(['1999'], configObjectRL);

          const outFile = resolve(outDir, '1999.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });
    });

    describe('When the solution is in a single directory with multiple files', () => {
      describe('`fs`(file system) template', () => {
        it('A solution directory with `solution` and `testcases` should build correctly', async () => {
          await build(['2000'], configObjectFS);

          const outFile = resolve(outDir, '2000.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('A solution directory with only `solution` should build correctly', async () => {
          await build(['2001'], configObjectFS);

          const outFile = resolve(outDir, '2001.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.cts` should build correctly', async () => {
          await build(['2002'], configObjectFS);

          const outFile = resolve(outDir, '2002.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.mts` with `export default` should build correctly', async () => {
          await build(['2003'], configObjectFS);

          const outFile = resolve(outDir, '2003.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.mts` with `export` should build correctly', async () => {
          await build(['2004'], configObjectFS);

          const outFile = resolve(outDir, '2004.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('User-created external modules using the `cts` format should build correctly', async () => {
          await build(['2005'], configObjectFS);

          const outFile = resolve(outDir, '2005.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });

      describe('`rl`(readline) template', () => {
        it('A solution directory with `solution` and `testcases` should build correctly', async () => {
          await build(['2000'], configObjectRL);

          const outFile = resolve(outDir, '2000.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('A solution directory with only `solution` should build correctly', async () => {
          await build(['2001'], configObjectRL);

          const outFile = resolve(outDir, '2001.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.cts` should build correctly', async () => {
          await build(['2002'], configObjectRL);

          const outFile = resolve(outDir, '2002.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.mts` with `export default` should build correctly', async () => {
          await build(['2003'], configObjectRL);

          const outFile = resolve(outDir, '2003.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.mts` with `export` should build correctly', async () => {
          await build(['2004'], configObjectRL);

          const outFile = resolve(outDir, '2004.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('User-created external modules using the `cts` format should build correctly', async () => {
          await build(['2005'], configObjectRL);

          const outFile = resolve(outDir, '2005.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });
    });

    describe('Latest ECMAScript features with `@babel/preset-env` and custom plugins should be transpiled correctly', () => {
      describe('`fs`(file system) template', () => {
        it('ES2025 `regexp-modifiers` should be transpiled correctly', async () => {
          // https://babeljs.io/docs/babel-plugin-transform-regexp-modifiers

          await build(['3000'], configObjectFS);

          const outFile = resolve(outDir, '3000.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('/(?:[Aa])a/'), true);
          strictEqual(fileContent.includes('/(?i:a)a/'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-array-prototype-to-sorted` plugin should be applied correctly', async () => {
          await build(['3001'], configObjectFS);

          const outFile = resolve(outDir, '3001.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('toSorted()'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-array-prototype-to-reversed` plugin should be applied correctly', async () => {
          await build(['3002'], configObjectFS);

          const outFile = resolve(outDir, '3002.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('toReversed()'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-object-has-own` plugin should be applied correctly', async () => {
          await build(['3003'], configObjectFS);

          const outFile = resolve(outDir, '3003.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('Object.hasOwn'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });

      describe('`rl`(readline) template', () => {
        it('ES2025 `regexp-modifiers` should be transpiled correctly', async () => {
          // https://babeljs.io/docs/babel-plugin-transform-regexp-modifiers

          await build(['3000'], configObjectRL);

          const outFile = resolve(outDir, '3000.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('/(?:[Aa])a/'), true);
          strictEqual(fileContent.includes('/(?i:a)a/'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-array-prototype-to-sorted` plugin should be applied correctly', async () => {
          await build(['3001'], configObjectRL);

          const outFile = resolve(outDir, '3001.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('toSorted()'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-array-prototype-to-reversed` plugin should be applied correctly', async () => {
          await build(['3002'], configObjectRL);

          const outFile = resolve(outDir, '3002.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('toReversed()'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-object-has-own` plugin should be applied correctly', async () => {
          await build(['3003'], configObjectRL);

          const outFile = resolve(outDir, '3003.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('Object.hasOwn'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });
    });

    describe('Webpack `definePlugin` should be applied correctly', () => {
      it('`globalThis.IS_PROD` should work correctly', async () => {
        await build(['4000'], configObjectFS);

        const outFile = resolve(outDir, '4000.cjs');
        ok(existsSync(outFile));

        const fileContent = readFileSync(outFile, 'utf-8');
        strictEqual(
          fileContent.includes(
            'This line should not be included in the production build',
          ),
          false,
        );
        strictEqual(fileContent.includes('testcases'), false);

        const result = runOutFile(outFile, '1 2');
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it("`process.env.NODE_ENV === 'production'` should work correctly", async () => {
        await build(['4001'], configObjectFS);

        const outFile = resolve(outDir, '4001.cjs');
        ok(existsSync(outFile));

        const fileContent = readFileSync(outFile, 'utf-8');
        strictEqual(
          fileContent.includes(
            'This line should not be included in the production build',
          ),
          false,
        );
        strictEqual(fileContent.includes('testcases'), false);

        const result = runOutFile(outFile, '1 2');
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });
    });

    describe('Multiple files', () => {
      it('Multiple files with `fs` template should build correctly', async () => {
        await build(['1000', '1001', '2000'], configObjectFS);

        const outFile1000 = resolve(outDir, '1000.cjs');
        const result1000 = runOutFile(outFile1000, '1 2');

        const outFile1001 = resolve(outDir, '1001.cjs');
        const result1001 = runOutFile(outFile1001, '1 2');

        const outFile2000 = resolve(outDir, '2000.cjs');
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

      it('Multiple files with `rl` template should build correctly', async () => {
        await build(['1000', '2000'], configObjectRL);

        const outFile1000 = resolve(outDir, '1000.cjs');
        const result1000 = runOutFile(outFile1000, '1 2');

        const outFile2000 = resolve(outDir, '2000.cjs');
        const result2000 = runOutFile(outFile2000, '1 2');

        ok(existsSync(outFile1000));
        strictEqual(result1000.status, 0);
        strictEqual(result1000.stdout, '3');

        ok(existsSync(outFile2000));
        strictEqual(result2000.status, 0);
        strictEqual(result2000.stdout, '3');
      });
    });
  });

  describe('mjs', () => {
    const cwd = resolve(import.meta.dirname, 'fixtures', 'mjs');
    const outDir = resolve(cwd, '.bananass');
    const configObjectFS = {
      cwd,
      console: { quiet: true },
      build: { templateType: 'fs' },
    };
    const configObjectRL = {
      cwd,
      console: { quiet: true },
      build: { templateType: 'rl' },
    };

    afterEach(() => {
      // Clean up the output directory after each test
      removeOutDir(outDir);
    });

    describe('When the entire solution is in a single file', () => {
      describe('`fs`(file system) template', () => {
        it('A single file with `solution` and `testcases` should build correctly', async () => {
          await build(['1000'], configObjectFS);

          const outFile = resolve(outDir, '1000.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('A single file with only `solution` should build correctly', async () => {
          await build(['1001'], configObjectFS);

          const outFile = resolve(outDir, '1001.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.cjs` should build correctly', async () => {
          await build(['1002'], configObjectFS);

          const outFile = resolve(outDir, '1002.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.mjs` with `export default` should build correctly', async () => {
          await build(['1003'], configObjectFS);

          const outFile = resolve(outDir, '1003.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.mjs` with `export` should build correctly', async () => {
          await build(['1004'], configObjectFS);

          const outFile = resolve(outDir, '1004.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('User-created external modules using the `mjs` format should build correctly', async () => {
          await build(['1005'], configObjectFS);

          const outFile = resolve(outDir, '1005.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Function expression `solution` should build correctly', async () => {
          await build(['1006'], configObjectFS);

          const outFile = resolve(outDir, '1006.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Arrow function `solution` should build correctly', async () => {
          await build(['1007'], configObjectFS);

          const outFile = resolve(outDir, '1007.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });

      describe('`rl`(readline) template', () => {
        it('A single file with `solution` and `testcases` should build correctly', async () => {
          await build(['1000'], configObjectRL);

          const outFile = resolve(outDir, '1000.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('A single file with only `solution` should build correctly', async () => {
          await build(['1001'], configObjectRL);

          const outFile = resolve(outDir, '1001.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.cjs` should build correctly', async () => {
          await build(['1002'], configObjectRL);

          const outFile = resolve(outDir, '1002.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.mjs` with `export default` should build correctly', async () => {
          await build(['1003'], configObjectRL);

          const outFile = resolve(outDir, '1003.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.mjs` with `export` should build correctly', async () => {
          await build(['1004'], configObjectRL);

          const outFile = resolve(outDir, '1004.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('User-created external modules using the `mjs` format should build correctly', async () => {
          await build(['1005'], configObjectRL);

          const outFile = resolve(outDir, '1005.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Function expression `solution` should build correctly', async () => {
          await build(['1006'], configObjectRL);

          const outFile = resolve(outDir, '1006.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Arrow function `solution` should build correctly', async () => {
          await build(['1007'], configObjectRL);

          const outFile = resolve(outDir, '1007.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });
    });

    describe('When the solution is in a single directory with multiple files', () => {
      describe('`fs`(file system) template', () => {
        it('A solution directory with `solution` and `testcases` should build correctly', async () => {
          await build(['2000'], configObjectFS);

          const outFile = resolve(outDir, '2000.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('A solution directory with only `solution` should build correctly', async () => {
          await build(['2001'], configObjectFS);

          const outFile = resolve(outDir, '2001.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.cjs` should build correctly', async () => {
          await build(['2002'], configObjectFS);

          const outFile = resolve(outDir, '2002.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.mjs` with `export default` should build correctly', async () => {
          await build(['2003'], configObjectFS);

          const outFile = resolve(outDir, '2003.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.mjs` with `export` should build correctly', async () => {
          await build(['2004'], configObjectFS);

          const outFile = resolve(outDir, '2004.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('User-created external modules using the `mjs` format should build correctly', async () => {
          await build(['2005'], configObjectFS);

          const outFile = resolve(outDir, '2005.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });

      describe('`rl`(readline) template', () => {
        it('A solution directory with `solution` and `testcases` should build correctly', async () => {
          await build(['2000'], configObjectRL);

          const outFile = resolve(outDir, '2000.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('A solution directory with only `solution` should build correctly', async () => {
          await build(['2001'], configObjectRL);

          const outFile = resolve(outDir, '2001.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.cjs` should build correctly', async () => {
          await build(['2002'], configObjectRL);

          const outFile = resolve(outDir, '2002.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.mjs` with `export default` should build correctly', async () => {
          await build(['2003'], configObjectRL);

          const outFile = resolve(outDir, '2003.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.mjs` with `export` should build correctly', async () => {
          await build(['2004'], configObjectRL);

          const outFile = resolve(outDir, '2004.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('User-created external modules using the `mjs` format should build correctly', async () => {
          await build(['2005'], configObjectRL);

          const outFile = resolve(outDir, '2005.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });
    });

    describe('Latest ECMAScript features with `@babel/preset-env` and custom plugins should be transpiled correctly', () => {
      describe('`fs`(file system) template', () => {
        it('ES2025 `regexp-modifiers` should be transpiled correctly', async () => {
          // https://babeljs.io/docs/babel-plugin-transform-regexp-modifiers

          await build(['3000'], configObjectFS);

          const outFile = resolve(outDir, '3000.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('/(?:[Aa])a/'), true);
          strictEqual(fileContent.includes('/(?i:a)a/'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-array-prototype-to-sorted` plugin should be applied correctly', async () => {
          await build(['3001'], configObjectFS);

          const outFile = resolve(outDir, '3001.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('toSorted()'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-array-prototype-to-reversed` plugin should be applied correctly', async () => {
          await build(['3002'], configObjectFS);

          const outFile = resolve(outDir, '3002.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('toReversed()'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-object-has-own` plugin should be applied correctly', async () => {
          await build(['3003'], configObjectFS);

          const outFile = resolve(outDir, '3003.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('Object.hasOwn'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });

      describe('`rl`(readline) template', () => {
        it('ES2025 `regexp-modifiers` should be transpiled correctly', async () => {
          // https://babeljs.io/docs/babel-plugin-transform-regexp-modifiers

          await build(['3000'], configObjectRL);

          const outFile = resolve(outDir, '3000.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('/(?:[Aa])a/'), true);
          strictEqual(fileContent.includes('/(?i:a)a/'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-array-prototype-to-sorted` plugin should be applied correctly', async () => {
          await build(['3001'], configObjectRL);

          const outFile = resolve(outDir, '3001.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('toSorted()'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-array-prototype-to-reversed` plugin should be applied correctly', async () => {
          await build(['3002'], configObjectRL);

          const outFile = resolve(outDir, '3002.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('toReversed()'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-object-has-own` plugin should be applied correctly', async () => {
          await build(['3003'], configObjectRL);

          const outFile = resolve(outDir, '3003.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('Object.hasOwn'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });
    });

    describe('Webpack `definePlugin` should be applied correctly', () => {
      it('`globalThis.IS_PROD` should work correctly', async () => {
        await build(['4000'], configObjectFS);

        const outFile = resolve(outDir, '4000.cjs');
        ok(existsSync(outFile));

        const fileContent = readFileSync(outFile, 'utf-8');
        strictEqual(
          fileContent.includes(
            'This line should not be included in the production build',
          ),
          false,
        );
        strictEqual(fileContent.includes('testcases'), false);

        const result = runOutFile(outFile, '1 2');
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it("`process.env.NODE_ENV === 'production'` should work correctly", async () => {
        await build(['4001'], configObjectFS);

        const outFile = resolve(outDir, '4001.cjs');
        ok(existsSync(outFile));

        const fileContent = readFileSync(outFile, 'utf-8');
        strictEqual(
          fileContent.includes(
            'This line should not be included in the production build',
          ),
          false,
        );
        strictEqual(fileContent.includes('testcases'), false);

        const result = runOutFile(outFile, '1 2');
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });
    });

    describe('Multiple files', () => {
      it('Multiple files with `fs` template should build correctly', async () => {
        await build(['1000', '1001', '2000'], configObjectFS);

        const outFile1000 = resolve(outDir, '1000.cjs');
        const result1000 = runOutFile(outFile1000, '1 2');

        const outFile1001 = resolve(outDir, '1001.cjs');
        const result1001 = runOutFile(outFile1001, '1 2');

        const outFile2000 = resolve(outDir, '2000.cjs');
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

      it('Multiple files with `rl` template should build correctly', async () => {
        await build(['1000', '2000'], configObjectRL);

        const outFile1000 = resolve(outDir, '1000.cjs');
        const result1000 = runOutFile(outFile1000, '1 2');

        const outFile2000 = resolve(outDir, '2000.cjs');
        const result2000 = runOutFile(outFile2000, '1 2');

        ok(existsSync(outFile1000));
        strictEqual(result1000.status, 0);
        strictEqual(result1000.stdout, '3');

        ok(existsSync(outFile2000));
        strictEqual(result2000.status, 0);
        strictEqual(result2000.stdout, '3');
      });
    });
  });

  describe('mts', () => {
    const cwd = resolve(import.meta.dirname, 'fixtures', 'mts');
    const outDir = resolve(cwd, '.bananass');
    const configObjectFS = {
      cwd,
      console: { quiet: true },
      build: { templateType: 'fs' },
    };
    const configObjectRL = {
      cwd,
      console: { quiet: true },
      build: { templateType: 'rl' },
    };

    afterEach(() => {
      // Clean up the output directory after each test
      removeOutDir(outDir);
    });

    describe('When the entire solution is in a single file', () => {
      describe('`fs`(file system) template', () => {
        it('A single file with `solution` and `testcases` should build correctly', async () => {
          await build(['1000'], configObjectFS);

          const outFile = resolve(outDir, '1000.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('A single file with only `solution` should build correctly', async () => {
          await build(['1001'], configObjectFS);

          const outFile = resolve(outDir, '1001.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.cts` should build correctly', async () => {
          await build(['1002'], configObjectFS);

          const outFile = resolve(outDir, '1002.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.mts` with `export default` should build correctly', async () => {
          await build(['1003'], configObjectFS);

          const outFile = resolve(outDir, '1003.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.mts` with `export` should build correctly', async () => {
          await build(['1004'], configObjectFS);

          const outFile = resolve(outDir, '1004.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('User-created external modules using the `mts` format should build correctly', async () => {
          await build(['1005'], configObjectFS);

          const outFile = resolve(outDir, '1005.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Function expression `solution` should build correctly', async () => {
          await build(['1006'], configObjectFS);

          const outFile = resolve(outDir, '1006.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Arrow function `solution` should build correctly', async () => {
          await build(['1007'], configObjectFS);

          const outFile = resolve(outDir, '1007.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });

      describe('`rl`(readline) template', () => {
        it('A single file with `solution` and `testcases` should build correctly', async () => {
          await build(['1000'], configObjectRL);

          const outFile = resolve(outDir, '1000.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('A single file with only `solution` should build correctly', async () => {
          await build(['1001'], configObjectRL);

          const outFile = resolve(outDir, '1001.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.cts` should build correctly', async () => {
          await build(['1002'], configObjectRL);

          const outFile = resolve(outDir, '1002.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.mts` with `export default` should build correctly', async () => {
          await build(['1003'], configObjectRL);

          const outFile = resolve(outDir, '1003.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`file.mts` with `export` should build correctly', async () => {
          await build(['1004'], configObjectRL);

          const outFile = resolve(outDir, '1004.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('User-created external modules using the `mts` format should build correctly', async () => {
          await build(['1005'], configObjectRL);

          const outFile = resolve(outDir, '1005.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Function expression `solution` should build correctly', async () => {
          await build(['1006'], configObjectRL);

          const outFile = resolve(outDir, '1006.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Arrow function `solution` should build correctly', async () => {
          await build(['1007'], configObjectRL);

          const outFile = resolve(outDir, '1007.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });
    });

    describe('When the solution is in a single directory with multiple files', () => {
      describe('`fs`(file system) template', () => {
        it('A solution directory with `solution` and `testcases` should build correctly', async () => {
          await build(['2000'], configObjectFS);

          const outFile = resolve(outDir, '2000.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('A solution directory with only `solution` should build correctly', async () => {
          await build(['2001'], configObjectFS);

          const outFile = resolve(outDir, '2001.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.cts` should build correctly', async () => {
          await build(['2002'], configObjectFS);

          const outFile = resolve(outDir, '2002.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.mts` with `export default` should build correctly', async () => {
          await build(['2003'], configObjectFS);

          const outFile = resolve(outDir, '2003.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.mts` with `export` should build correctly', async () => {
          await build(['2004'], configObjectFS);

          const outFile = resolve(outDir, '2004.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('User-created external modules using the `mts` format should build correctly', async () => {
          await build(['2005'], configObjectFS);

          const outFile = resolve(outDir, '2005.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });

      describe('`rl`(readline) template', () => {
        it('A solution directory with `solution` and `testcases` should build correctly', async () => {
          await build(['2000'], configObjectRL);

          const outFile = resolve(outDir, '2000.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('A solution directory with only `solution` should build correctly', async () => {
          await build(['2001'], configObjectRL);

          const outFile = resolve(outDir, '2001.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.cts` should build correctly', async () => {
          await build(['2002'], configObjectRL);

          const outFile = resolve(outDir, '2002.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.mts` with `export default` should build correctly', async () => {
          await build(['2003'], configObjectRL);

          const outFile = resolve(outDir, '2003.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('`directory/index.mts` with `export` should build correctly', async () => {
          await build(['2004'], configObjectRL);

          const outFile = resolve(outDir, '2004.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('User-created external modules using the `mts` format should build correctly', async () => {
          await build(['2005'], configObjectRL);

          const outFile = resolve(outDir, '2005.cjs');
          const result = runOutFile(outFile, '1 2');

          ok(existsSync(outFile));
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });
    });

    describe('Latest ECMAScript features with `@babel/preset-env` and custom plugins should be transpiled correctly', () => {
      describe('`fs`(file system) template', () => {
        it('ES2025 `regexp-modifiers` should be transpiled correctly', async () => {
          // https://babeljs.io/docs/babel-plugin-transform-regexp-modifiers

          await build(['3000'], configObjectFS);

          const outFile = resolve(outDir, '3000.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('/(?:[Aa])a/'), true);
          strictEqual(fileContent.includes('/(?i:a)a/'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-array-prototype-to-sorted` plugin should be applied correctly', async () => {
          await build(['3001'], configObjectFS);

          const outFile = resolve(outDir, '3001.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('toSorted()'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-array-prototype-to-reversed` plugin should be applied correctly', async () => {
          await build(['3002'], configObjectFS);

          const outFile = resolve(outDir, '3002.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('toReversed()'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-object-has-own` plugin should be applied correctly', async () => {
          await build(['3003'], configObjectFS);

          const outFile = resolve(outDir, '3003.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('Object.hasOwn'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });

      describe('`rl`(readline) template', () => {
        it('ES2025 `regexp-modifiers` should be transpiled correctly', async () => {
          // https://babeljs.io/docs/babel-plugin-transform-regexp-modifiers

          await build(['3000'], configObjectRL);

          const outFile = resolve(outDir, '3000.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('/(?:[Aa])a/'), true);
          strictEqual(fileContent.includes('/(?i:a)a/'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-array-prototype-to-sorted` plugin should be applied correctly', async () => {
          await build(['3001'], configObjectRL);

          const outFile = resolve(outDir, '3001.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('toSorted()'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-array-prototype-to-reversed` plugin should be applied correctly', async () => {
          await build(['3002'], configObjectRL);

          const outFile = resolve(outDir, '3002.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('toReversed()'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });

        it('Custom `transform-object-has-own` plugin should be applied correctly', async () => {
          await build(['3003'], configObjectRL);

          const outFile = resolve(outDir, '3003.cjs');
          ok(existsSync(outFile));

          const fileContent = readFileSync(outFile, 'utf-8');
          strictEqual(fileContent.includes('Object.hasOwn'), false);

          const result = runOutFile(outFile, '1 2');
          strictEqual(result.status, 0);
          strictEqual(result.stdout, '3');
        });
      });
    });

    describe('Webpack `definePlugin` should be applied correctly', () => {
      it('`globalThis.IS_PROD` should work correctly', async () => {
        await build(['4000'], configObjectFS);

        const outFile = resolve(outDir, '4000.cjs');
        ok(existsSync(outFile));

        const fileContent = readFileSync(outFile, 'utf-8');
        strictEqual(
          fileContent.includes(
            'This line should not be included in the production build',
          ),
          false,
        );
        strictEqual(fileContent.includes('testcases'), false);

        const result = runOutFile(outFile, '1 2');
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });

      it("`process.env.NODE_ENV === 'production'` should work correctly", async () => {
        await build(['4001'], configObjectFS);

        const outFile = resolve(outDir, '4001.cjs');
        ok(existsSync(outFile));

        const fileContent = readFileSync(outFile, 'utf-8');
        strictEqual(
          fileContent.includes(
            'This line should not be included in the production build',
          ),
          false,
        );
        strictEqual(fileContent.includes('testcases'), false);

        const result = runOutFile(outFile, '1 2');
        strictEqual(result.status, 0);
        strictEqual(result.stdout, '3');
      });
    });

    describe('Multiple files', () => {
      it('Multiple files with `fs` template should build correctly', async () => {
        await build(['1000', '1001', '2000'], configObjectFS);

        const outFile1000 = resolve(outDir, '1000.cjs');
        const result1000 = runOutFile(outFile1000, '1 2');

        const outFile1001 = resolve(outDir, '1001.cjs');
        const result1001 = runOutFile(outFile1001, '1 2');

        const outFile2000 = resolve(outDir, '2000.cjs');
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

      it('Multiple files with `rl` template should build correctly', async () => {
        await build(['1000', '2000'], configObjectRL);

        const outFile1000 = resolve(outDir, '1000.cjs');
        const result1000 = runOutFile(outFile1000, '1 2');

        const outFile2000 = resolve(outDir, '2000.cjs');
        const result2000 = runOutFile(outFile2000, '1 2');

        ok(existsSync(outFile1000));
        strictEqual(result1000.status, 0);
        strictEqual(result1000.stdout, '3');

        ok(existsSync(outFile2000));
        strictEqual(result2000.status, 0);
        strictEqual(result2000.stdout, '3');
      });
    });
  });
});
