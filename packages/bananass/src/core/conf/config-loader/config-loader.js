/**
 * @fileoverview Config loader.
 * @see https://github.com/unjs/c12?tab=readme-ov-file#%EF%B8%8F-c12
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { extname, basename } from 'node:path';

import { error } from 'bananass-utils-console/theme';
import { loadConfig } from 'c12';

import dco from '../default-config-object/index.js';
import { findRootDir } from '../../fs/index.js';
import { PKG_NAME, SUPPORTED_CONFIG_FILE_EXTENSIONS as SCFE } from '../../constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../types.js').ConfigObject} ConfigObject
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Load and merge configuration objects.
 *
 * - Merge priority: CLI config object > Config file config object > Default config object
 *
 * @param {object} configLoaderOptions
 * @param {string} [configLoaderOptions.cwd] Current working directory. (default: `findRootDir()`)
 * @param {ConfigObject} [configLoaderOptions.cliConfigObject] CLI config object. (default: `{}`)
 * @param {ConfigObject} [configLoaderOptions.defaultConfigObject] Default config object. (default: `defaultConfigObject`)
 * @returns {Promise<ConfigObject>} Merged configuration object.
 * @async
 */
export default async function configLoader({
  cwd = findRootDir(),
  cliConfigObject = {},
  defaultConfigObject = dco,
} = {}) {
  const { config, configFile } = await loadConfig({
    cwd,
    name: PKG_NAME,
    rcFile: false,
    globalRc: false,
    dotenv: false,
    packageJson: false,
    defaultConfig: defaultConfigObject,
    overrides: cliConfigObject,
  });

  if (!SCFE.includes(extname(configFile))) {
    throw new Error(
      error(
        `${basename(configFile)} is not supported. Please use one of the following extensions: ${SCFE.filter(
          ext => ext !== '.config',
        ).join(', ')}`,
        true,
      ),
    );
  }

  return config;
}
