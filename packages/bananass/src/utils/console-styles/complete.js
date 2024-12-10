// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { green } = require('ansi-colors');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

/**
 * Returns a green-colored success message prefixed with ✅.
 *
 * @param {string} str The success message to format.
 * @returns {string} Returns a green-colored success message prefixed with ✅.
 *
 * @example
 * const complete = require('./complete');
 *
 * console.log(complete('Operation successful.'));
 * // Output: ✅ Operation successful. (displayed in green text in the terminal.)
 */
module.exports = function complete(str) {
  return green(`✅ ${str}`);
};
