/**
 * @fileoverview Find root directory path based on the existence of `package.json`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { join, resolve } from 'node:path';
import cp from 'node:child_process'; // DO NOT USE DESTRUCTURING syntax due to `mock` usage in test.
import fs from 'node:fs'; // DO NOT USE DESTRUCTURING syntax due to `mock` usage in test.

import { error } from 'bananass-utils-console/theme';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Find root directory path based on the existence of `package.json`.
 *
 * This function uses `package.json` as a marker to determine the root directory,
 * which is particularly useful in supporting MONOREPO structures.
 * It first checks the current working directory using `process.cwd()`
 * and then falls back to the Git root directory if necessary.
 *
 * @returns {string} The root directory path where `package.json` is found.
 * @throws {Error} If `package.json` cannot be found in either the current
 * working directory or the Git root directory, or if Git is not installed or accessible.
 */
export default function findRootDir() {
  const PACKAGE_JSON = 'package.json';

  const path = process.cwd();
  if (fs.existsSync(join(path, PACKAGE_JSON))) return path;

  let pathFallback;
  try {
    pathFallback = resolve(
      cp.execSync('git rev-parse --show-toplevel').toString().trim(),
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);

    throw new Error(
      error(
        `Git command failed. Ensure Git is installed and you are inside a Git repository\n${message}`,
        true,
      ),
    );
  }
  if (fs.existsSync(join(pathFallback, PACKAGE_JSON))) return pathFallback;

  throw new Error(
    error(
      `Cannot find root directory. Ensure ${PACKAGE_JSON} exists in the project root\n> path: ${path}\n> pathFallback: ${pathFallback}`,
      true,
    ),
  );
}
