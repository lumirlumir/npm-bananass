// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { red } = require('ansi-colors');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

/**
 * Returns a red-colored error message prefixed with ❌.
 *
 * @param {string} str The error message to format.
 * @returns {string} Returns a red-colored error message prefixed with ❌.
 *
 * @example
 * const error = require('./error');
 *
 * console.log(error('Something went wrong.'));
 * // Output: ❌ Something went wrong. (displayed in red text in the terminal.)
 */
module.exports = function error(str) {
  return red(`❌ ${str}`);
};
