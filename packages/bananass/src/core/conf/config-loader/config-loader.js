/**
 * @fileoverview Config loader.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

import { createJiti } from 'jiti';
import { defu } from 'defu';

import dco from '../default-config-object/index.js';
import { findRootDir } from '../../fs/index.js';
import { SUPPORTED_CONFIG_FILE_NAMES } from '../../constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { ConfigObject } from '../../types.js';
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
 * @returns {Promise<ConfigObject>} Merged config object.
 * @async
 */
export default async function configLoader({
  cwd = findRootDir(),
  cliConfigObject = {},
  defaultConfigObject = dco,
} = {}) {
  const jiti = createJiti(import.meta.url);

  /** @type {string | null} */
  let configFilePath = null;

  for (const supportedConfigFileName of SUPPORTED_CONFIG_FILE_NAMES) {
    const potentialConfigFilePath = resolve(cwd, supportedConfigFileName);

    if (existsSync(potentialConfigFilePath)) {
      configFilePath = potentialConfigFilePath;
      break;
    }
  }

  const configFileConfigObject =
    configFilePath === null
      ? {}
      : /** @type {ConfigObject} */ (
          await jiti.import(configFilePath, { default: true })
        );

  const mergedConfigObject = defu(
    cliConfigObject,
    configFileConfigObject,
    defaultConfigObject,
  );

  return mergedConfigObject;
}

// TODO: Default export 랑 named export 섞여있는 경우 확인하기.
