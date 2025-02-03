/**
 * @fileoverview This file declares a function that loads and returns `package.json` file contents.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { createRequire } from 'node:module';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Loads and returns `package.json` file contents.
 *
 * @param {string} pathToPackageJsonFile Path to `package.json` file. Both absolute and relative paths are supported.
 * @returns {object} The contents of the `package.json` file as an object.
 */
export default function loadPackageJsonFile(pathToPackageJsonFile) {
  const packageJson = createRequire(import.meta.url)(pathToPackageJsonFile);

  return packageJson;
}
