/**
 * @fileoverview Test for `config-loader.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { deepStrictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import configLoader from './config-loader.js';
import defaultConfigObject from '../default-config-object/index.js';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

const fixturesDir = fileURLToPath(new URL('fixtures', import.meta.url));
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
  describe('should use default options when incorrect config files are found', () => {
    it('should use default options when loading `bananass.config.json`', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-json'),
        defaultConfigObject: {},
      });

      deepStrictEqual(config, {});
    });

    it('should use default options when loading `bananass.config.json5`', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-json5'),
        defaultConfigObject: {},
      });

      deepStrictEqual(config, {});
    });

    it('should use default options when loading `bananass.config.jsonc`', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-jsonc'),
        defaultConfigObject: {},
      });

      deepStrictEqual(config, {});
    });

    it('should use default options when loading `bananass.config.toml`', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-toml'),
        defaultConfigObject: {},
      });

      deepStrictEqual(config, {});
    });

    it('should use default options when loading `bananass.config.yaml`', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-yaml'),
        defaultConfigObject: {},
      });

      deepStrictEqual(config, {});
    });

    it('should use default options when loading `bananass.config.yml`', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-yml'),
        defaultConfigObject: {},
      });

      deepStrictEqual(config, {});
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

    it('should use the options of config file when `cliConfigObject` is not specified', async () => {
      const config = await configLoader({
        cwd: join(fixturesDir, 'bananass-config-cjs'),
        defaultConfigObject: {},
      });

      deepStrictEqual(config, configObject);
    });
  });
});
