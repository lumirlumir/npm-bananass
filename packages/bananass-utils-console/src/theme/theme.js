/**
 * @fileoverview Console theme.
 * @module bananass-utils-console/theme
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { styleText } from 'node:util';
import {
  successText,
  errorText,
  warningText,
  infoText,
  bananassIcon,
} from '../icons/index.js';

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

/**
 * Formats a string with an optional color and icon.
 * @param {string} str The string to format.
 * @param {boolean} showIcon Whether to show the icon.
 * @param {'green'|'red'|'yellow'|'blue'} color The color to apply to the string.
 * @param {string} icon The icon to prepend to the string if `showIcon` is true.
 * @returns {string} The formatted string with the optional icon and color applied.
 * @private
 */
const format = (str, showIcon, color, icon) =>
  `${showIcon ? `${icon} ` : ''}${styleText(color, str)}`;

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Returns a green-colored success message prefixed with an icon.
 *
 * @param {string} str The success message to format.
 * @param {boolean} showIcon Whether to show the icon. Defaults to `false`.
 * @returns {string} Returns a green-colored success message prefixed with an icon.
 *
 * @example
 * console.log(complete('Operation successful.'));
 * // Output: (icon?) Operation successful. (displayed in green text in the terminal.)
 */
export function success(str, showIcon = false) {
  return format(str, showIcon, 'green', successText);
}

/**
 * Returns a red-colored error message prefixed with an icon.
 *
 * @param {string} str The error message to format.
 * @param {boolean} showIcon Whether to show the icon. Defaults to `false`.
 * @returns {string} Returns a red-colored error message prefixed with an icon.
 *
 * @example
 * console.log(error('Something went wrong.'));
 * // Output: (icon?) Something went wrong. (displayed in red text in the terminal.)
 */
export function error(str, showIcon = false) {
  return format(str, showIcon, 'red', errorText);
}

/**
 * Returns a yellow-colored warning message prefixed with an icon.
 *
 * @param {string} str The warning message to format.
 * @param {boolean} showIcon Whether to show the icon. Defaults to `false`.
 * @returns {string} Returns a yellow-colored warning message prefixed with an icon.
 *
 * @example
 * console.log(warning('This is a warning.'));
 * // Output: (icon?) This is a warning. (displayed in yellow text in the terminal.)
 */
export function warning(str, showIcon = false) {
  return format(str, showIcon, 'yellow', warningText);
}

/**
 * Returns a blue-colored info message prefixed with an icon.
 *
 * @param {string} str The info message to format.
 * @param {boolean} showIcon Whether to show the icon. Defaults to `false`.
 * @returns {string} Returns a blue-colored info message prefixed with an icon.
 *
 * @example
 * console.log(info('Informational message.'));
 * // Output: (icon?) Informational message. (displayed in blue text in the terminal.)
 */
export function info(str, showIcon = false) {
  return format(str, showIcon, 'blue', infoText);
}

/**
 * Returns a yellow-colored error message prefixed with an icon.
 *
 * @param {string} str The bananass message to format.
 * @param {boolean} showIcon Whether to show the icon. Defaults to `false`.
 * @returns Returns a yellow-colored error message prefixed with an icon.
 *
 * @example
 * console.log(bananass('Hello, Bananass.'));
 * // Output: (icon?) Hello, Bananass. (displayed in yellow text in the terminal.)
 */
export function bananass(str, showIcon = false) {
  return format(str, showIcon, 'yellow', bananassIcon);
}
