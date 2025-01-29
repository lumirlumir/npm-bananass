/**
 * @fileoverview This file declares a function that finds the `package.json` file in the specified base directory.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { PACKAGE_JSON_FILE_BASE_ARRAY } from '../constants.js';
import { findExistingPath } from '../fs/index.js';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Find the `package.json` file in the specified base directory.
 *
 * @param {string} baseDir The base directory to search for `package.json`.
 * @returns {string} The full path to the found `package.json` file.
 * @throws {Error} If no `package.json` file is found in the specified directory.
 */
export default function findPackageJsonFile(baseDir) {
  const packageJsonFile = findExistingPath(baseDir, PACKAGE_JSON_FILE_BASE_ARRAY);

  if (packageJsonFile === null) {
    throw new Error(`Cannot find a \`package.json\` file in ${baseDir}`);
  }

  return packageJsonFile;
}
