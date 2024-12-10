// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { red, yellow, green } = require('ansi-colors');
const { successSymbol, errorSymbol, bananassSymbol } = require('./icons');

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
 * console.log(complete('Operation successful.'));
 * // Output: ✅ Operation successful. (displayed in green text in the terminal.)
 */
module.exports.success = str => green(`${successSymbol} ${str}`);

/**
 * Returns a red-colored error message prefixed with ❌.
 *
 * @param {string} str The error message to format.
 * @returns {string} Returns a red-colored error message prefixed with ❌.
 *
 * @example
 * console.log(error('Something went wrong.'));
 * // Output: ❌ Something went wrong. (displayed in red text in the terminal.)
 */
module.exports.error = str => red(`${errorSymbol} ${str}`);

/**
 * Returns a yellow-colored error message prefixed with 🍌.
 *
 * @param {string} str The bananass message to format.
 * @returns Returns a yellow-colored error message prefixed with 🍌.
 *
 * @example
 * console.log(bananass('Hello, Bananass.'));
 * // Output: 🍌 Hello, Bananass. (displayed in yellow text in the terminal.)
 */
module.exports.bananass = str => yellow(`${bananassSymbol} ${str}`);
