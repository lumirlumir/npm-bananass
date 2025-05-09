/**
 * @fileoverview Test for `config-loader.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { deepStrictEqual, rejects } from 'node:assert';
import { describe, it } from 'node:test';

import configLoader from './config-loader.js';
import defaultConfigObject from '../default-config-object/index.js';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fixturesDir = join(__dirname, 'fixtures');

const configObject = {
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

describe('config-loader', () => {
  // Default parameters
  describe('should use default parameters and options correctly', () => {
    it('should use default parameters when no arguments are provided', async () => {
      const config = await configLoader();

      deepStrictEqual(config, defaultConfigObject);
    });

    it('should use default options for missing arguments', async () => {
      const config = await configLoader({ cwd: join(fixturesDir, 'empty') });

      deepStrictEqual(config, defaultConfigObject);
    });
  });

  // Correct config files
  describe('should load config files correctly', () => {
    it('should load `bananass.config.cjs` correctly', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-cjs'),
        defaultConfigObject: {},
      });

      deepStrictEqual(config, configObject);
    });

    it('should load `bananass.config.cts` correctly', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-cts'),
        defaultConfigObject: {},
      });

      deepStrictEqual(config, configObject);
    });

    it('should load CJS `bananass.config.js` correctly, even if the `type` is not specified in `package.json`', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-js-cjs'),
        defaultConfigObject: {},
      });

      deepStrictEqual(config, configObject);
    });

    it('should load ESM `bananass.config.js` correctly, even if the `type` is not specified in `package.json`', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-js-mjs'),
        defaultConfigObject: {},
      });

      deepStrictEqual(config, configObject);
    });

    it('should load `bananass.config.mjs` correctly', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-mjs'),
        defaultConfigObject: {},
      });

      deepStrictEqual(config, configObject);
    });

    it('should load `bananass.config.mts` correctly', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-mts'),
        defaultConfigObject: {},
      });

      deepStrictEqual(config, configObject);
    });

    it('should load CJS `bananass.config.ts` correctly, even if the `type` is not specified in `package.json`', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-ts-cts'),
        defaultConfigObject: {},
      });

      deepStrictEqual(config, configObject);
    });

    it('should load ESM `bananass.config.ts` correctly, even if the `type` is not specified in `package.json`', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-ts-mts'),
        defaultConfigObject: {},
      });

      deepStrictEqual(config, configObject);
    });

    it('should use default options when no config files are found', async () => {
      const config = await configLoader({
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

  // Incorrect config files
  describe('should throw an error when incorrect config files are found', () => {
    it('should throw an error when loading `bananass.config.json`', () => {
      rejects(
        () =>
          configLoader({
            cwd: join(fixturesDir, 'bananass-config-json'),
            defaultConfigObject: {},
          }),
        {
          name: 'Error',
          message: /bananass.config.json is not supported/,
        },
      );
    });

    it('should throw an error when loading `bananass.config.json5`', () => {
      rejects(
        () =>
          configLoader({
            cwd: join(fixturesDir, 'bananass-config-json5'),
            defaultConfigObject: {},
          }),
        {
          name: 'Error',
          message: /bananass.config.json5 is not supported/,
        },
      );
    });

    it('should throw an error when loading `bananass.config.jsonc`', () => {
      rejects(
        () =>
          configLoader({
            cwd: join(fixturesDir, 'bananass-config-jsonc'),
            defaultConfigObject: {},
          }),
        {
          name: 'Error',
          message: /bananass.config.jsonc is not supported/,
        },
      );
    });

    it('should throw an error when loading `bananass.config.toml`', () => {
      rejects(
        () =>
          configLoader({
            cwd: join(fixturesDir, 'bananass-config-toml'),
            defaultConfigObject: {},
          }),
        {
          name: 'Error',
          message: /bananass.config.toml is not supported/,
        },
      );
    });

    it('should throw an error when loading `bananass.config.yaml`', () => {
      rejects(
        () =>
          configLoader({
            cwd: join(fixturesDir, 'bananass-config-yaml'),
            defaultConfigObject: {},
          }),
        {
          name: 'Error',
          message: /bananass.config.yaml is not supported/,
        },
      );
    });

    it('should throw an error when loading `bananass.config.yml`', () => {
      rejects(
        () =>
          configLoader({
            cwd: join(fixturesDir, 'bananass-config-yml'),
            defaultConfigObject: {},
          }),
        {
          name: 'Error',
          message: /bananass.config.yml is not supported/,
        },
      );
    });
  });

  describe('CLI options should override config files', () => {
    it('should override all options when all options are specified', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-cjs'),
        defaultConfigObject: {},
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
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-cjs'),
        defaultConfigObject: {},
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
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-cjs'),
        defaultConfigObject: {},
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
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-cjs'),
        defaultConfigObject: {},
        cliConfigObject: {},
      });

      deepStrictEqual(config, configObject);
    });

    it('should use the options of config file when `cliOptions` is not specified', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-cjs'),
        defaultConfigObject: {},
      });

      deepStrictEqual(config, configObject);
    });
  });
});
