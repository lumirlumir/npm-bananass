/**
 * @fileoverview This file declares a function that finds the first existing path (file or directory) from candidates.
 */

/* eslint-disable no-restricted-syntax -- TODO: Delete this rule in the `eslint-config-bananass` */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import fs from 'node:fs';
import path from 'node:path';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

function validateArgBasePath(basePath) {
  if (typeof basePath !== 'string') {
    throw new TypeError(`${basePath} is not a string`);
  }
}

function validateArgCandidates(candidates) {
  if (!Array.isArray(candidates)) {
    throw new TypeError(`${candidates} is not an array`);
  }

  candidates.forEach((candidate, index) => {
    if (typeof candidate !== 'string') {
      throw new TypeError(`candidates[${index}] is not a string`);
    }
  });
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Find first existing path (file or directory) from candidates.
 *
 * @param {string} basePath Base directory path.
 * @param {string[]} candidates Path names to search.
 * @returns {string|null} Full path of found file/directory or `null`.
 */
export default function findExistingPath(basePath, candidates) {
  validateArgBasePath(basePath);
  validateArgCandidates(candidates);

  for (const candidate of candidates) {
    const fullPath = path.join(basePath, candidate);

    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
  }

  return null;
}
