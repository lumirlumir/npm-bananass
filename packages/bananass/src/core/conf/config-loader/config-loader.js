/**
 * @fileoverview Config loader.
 * @see https://github.com/unjs/c12?tab=readme-ov-file#%EF%B8%8F-c12
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { loadConfig } from 'c12';

import { findRootDir } from '../../fs/index.js';
import { PKG_NAME } from '../../constants.js';

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
 * @param {string} [configLoaderOptions.cwd] Current working directory.
 * @param {ConfigObject} configLoaderOptions.cliConfigObject CLI config object.
 * @param {ConfigObject} configLoaderOptions.defaultConfigObject Default config object.
 * @returns Merged configuration object.
 * @async
 */
export default async function configLoader({
  cwd = findRootDir(),
  cliConfigObject = {},
  defaultConfigObject = {},
}) {
  const config = await loadConfig({
    cwd,
    name: PKG_NAME,
    rcFile: false,
    globalRc: false,
    dotenv: false,
    packageJson: false,
    defaultConfig: defaultConfigObject,
    overrides: cliConfigObject,
  });

  return config;
}
