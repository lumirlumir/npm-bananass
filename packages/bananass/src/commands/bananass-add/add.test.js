/**
 * @fileoverview Test for `add.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { existsSync } from 'node:fs';
import { readdir, readFile, stat, unlink } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { beforeEach, before, describe, it, mock } from 'node:test';
import { fileURLToPath } from 'node:url';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fixturesPath = resolve(__dirname, './fixtures');
const moduleFormats = ['cjs', 'mjs', 'cts', 'mts'];

/**
 * Utility function to iterate over module formats and execute a given async function.
 *
 * @param {Function} fn - The function to be executed for each module format.
 * @returns {Promise<void>} A promise that resolves when all operations are complete.
 */
async function forEachModuleFormat(fn) {
  await Promise.all(
    moduleFormats.map(async moduleFormat => {
      const cwd = resolve(fixturesPath, moduleFormat);
      await fn({ cwd, moduleFormat });
    }),
  );
}

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

let add;

describe('add.js', () => {
  // ------------------------------------------------------------------------------
  // Mocking
  // ------------------------------------------------------------------------------

  before(async () => {
    mock.module(new URL('./parsers.js', import.meta.url), {
      defaultExport: {
        baekjoon: async () => [
          { input: '1 2', output: '3' },
          { input: '3 4', output: '7' },
        ],
      },
    });

    add = (await import('./add.js')).default;
  });

  beforeEach(async () => {
    await forEachModuleFormat(async ({ cwd }) => {
      const solutionDir = join(cwd, './bananass');

      if (await stat(solutionDir, { throwIfNoEntry: false })) {
        const files = await readdir(solutionDir);

        await Promise.all(files.map(file => unlink(join(solutionDir, file))));
      }
    });
  });

  // ------------------------------------------------------------------------------
  // Test
  // ------------------------------------------------------------------------------

  describe('should use default parameters correctly', () => {
    it('should use default parameters when only `cwd` is provided', async () => {
      await forEachModuleFormat(async ({ cwd }) => {
        await add(['1000'], { cwd });
      });
    });

    it('should use default parameters when empty console object is provided', async () => {
      await forEachModuleFormat(async ({ cwd }) => {
        await add(['1000'], { cwd, console: {} });
      });
    });
  });

  describe('should work as expected', () => {
    const TEST_ENTRY_DIR = 'bananass';

    it('should generate a file with testcases for a problem', async () => {
      await forEachModuleFormat(async ({ cwd, moduleFormat }) => {
        const configObject = {
          cwd,
          entryDir: TEST_ENTRY_DIR,
          console: { quiet: true },
        };

        await add(['1000'], configObject);

        const filePath = join(cwd, TEST_ENTRY_DIR, `1000.${moduleFormat}`);
        strictEqual(existsSync(filePath), true);

        const fileContent = await readFile(filePath, 'utf-8');

        strictEqual(fileContent.includes(`input: "1 2"`), true);
        strictEqual(fileContent.includes(`output: "3"`), true);
        strictEqual(fileContent.includes(`input: "3 4"`), true);
        strictEqual(fileContent.includes(`output: "7"`), true);
      });
    });
  });
});
