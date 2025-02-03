/**
 * @fileoverview Test for `config-loader.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { deepStrictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import configLoader from './config-loader.js';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fixturesDir = join(__dirname, 'fixtures');

const configFileObject = {
  1: {
    1: 'a',
    2: 'b',
    3: 'c',
  },
  2: {
    1: 'd',
    2: 'e',
    3: 'f',
  },
  3: {
    1: 'g',
    2: 'h',
    3: 'i',
  },
};

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('config-loader.js', () => {
  // Load config files
  describe('should load config files correctly', () => {
    it('should load `bananass.config.cjs` correctly', async () => {
      const { config } = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-cjs'),
      });

      deepStrictEqual(config, configFileObject);
    });

    it('should load `bananass.config.cts` correctly', async () => {
      const { config } = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-cts'),
      });

      deepStrictEqual(config, configFileObject);
    });

    it('should load CJS `bananass.config.js` correctly, even if the `type` is not specified in `package.json`', async () => {
      const { config } = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-js-cjs'),
      });

      deepStrictEqual(config, configFileObject);
    });

    it('should load ESM `bananass.config.js` correctly, even if the `type` is not specified in `package.json`', async () => {
      const { config } = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-js-mjs'),
      });

      deepStrictEqual(config, configFileObject);
    });

    it('should load `bananass.config.mjs` correctly', async () => {
      const { config } = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-mjs'),
      });

      deepStrictEqual(config, configFileObject);
    });

    it('should load `bananass.config.mts` correctly', async () => {
      const { config } = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-mts'),
      });

      deepStrictEqual(config, configFileObject);
    });

    it('should load `bananass.config.ts` correctly, even if the `type` is not specified in `package.json`', async () => {
      const { config } = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-ts-cts'),
      });

      deepStrictEqual(config, configFileObject);
    });

    it('should load `bananass.config.ts` correctly, even if the `type` is not specified in `package.json`', async () => {
      const { config } = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-ts-mts'),
      });

      deepStrictEqual(config, configFileObject);
    });

    it('should use default options when no config files are found', async () => {
      const { config } = await configLoader({
        cwd: join(fixturesDir, 'empty'),
        defaultConfigObject: {
          1: {
            1: 'default',
            2: 'default',
            3: 'default',
          },
          2: {
            1: 'default',
            2: 'default',
            3: 'default',
          },
          3: {
            1: 'default',
            2: 'default',
            3: 'default',
          },
        },
      });
      const expected = {
        1: {
          1: 'default',
          2: 'default',
          3: 'default',
        },
        2: {
          1: 'default',
          2: 'default',
          3: 'default',
        },
        3: {
          1: 'default',
          2: 'default',
          3: 'default',
        },
      };

      deepStrictEqual(config, expected);
    });
  });

  describe('CLI options should override config files', () => {
    it('should override all options when all options are specified', async () => {
      const { config } = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-cjs'),
        cliConfigObject: {
          1: {
            1: 'overrided',
            2: 'overrided',
            3: 'overrided',
          },
          2: {
            1: 'overrided',
            2: 'overrided',
            3: 'overrided',
          },
          3: {
            1: 'overrided',
            2: 'overrided',
            3: 'overrided',
          },
        },
      });
      const expected = {
        1: {
          1: 'overrided',
          2: 'overrided',
          3: 'overrided',
        },
        2: {
          1: 'overrided',
          2: 'overrided',
          3: 'overrided',
        },
        3: {
          1: 'overrided',
          2: 'overrided',
          3: 'overrided',
        },
      };

      deepStrictEqual(config, expected);
    });

    it('should override some options when some options are specified', async () => {
      const { config } = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-cjs'),
        cliConfigObject: {
          1: {
            1: 'overrided',
            2: 'overrided',
          },
          2: {
            3: 'overrided',
          },
          3: {
            2: 'overrided',
          },
        },
      });
      const expected = {
        1: {
          1: 'overrided',
          2: 'overrided',
          3: 'c',
        },
        2: {
          1: 'd',
          2: 'e',
          3: 'overrided',
        },
        3: {
          1: 'g',
          2: 'overrided',
          3: 'i',
        },
      };

      deepStrictEqual(config, expected);
    });

    it('should add new properties when unknown config file options are specified', async () => {
      const { config } = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-cjs'),
        cliConfigObject: {
          3: {
            4: 'overrided',
          },
          4: {
            4: 'overrided',
          },
        },
      });
      const expected = {
        1: {
          1: 'a',
          2: 'b',
          3: 'c',
        },
        2: {
          1: 'd',
          2: 'e',
          3: 'f',
        },
        3: {
          1: 'g',
          2: 'h',
          3: 'i',
          4: 'overrided',
        },
        4: {
          4: 'overrided',
        },
      };

      deepStrictEqual(config, expected);
    });

    it('should use the options of config file when no options are specified', async () => {
      const { config } = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-cjs'),
        cliConfigObject: {},
      });

      deepStrictEqual(config, configFileObject);
    });

    it('should use the options of config file when `cliOptions` is not specified', async () => {
      const { config } = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-cjs'),
      });

      deepStrictEqual(config, configFileObject);
    });
  });
});

// TODO: Add more tests.
