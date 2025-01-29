/**
 * @fileoverview This file declares a function that finds the Bananass configuration file in the specified base directory.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { BANANASS_CONFIG_FILE_BASE_ARRAY } from '../constants.js';
import { findExistingPath } from '../fs/index.js';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Find the Bananass configuration file in the specified base directory.
 *
 * @param {string} baseDir The base directory path to search for the config file.
 * @returns {string} The full file path to the found Bananass config file.
 * @throws {Error} If no config file is found in the specified path.
 */
export default function findBananassConfigFile(baseDir) {
  const bananassConfigFile = findExistingPath(baseDir, BANANASS_CONFIG_FILE_BASE_ARRAY);

  if (bananassConfigFile === null) {
    throw new Error(`Cannot find a Bananass config file in ${baseDir}`);
  }

  return bananassConfigFile;
}
