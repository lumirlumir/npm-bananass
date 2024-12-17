/**
 * @fileoverview A collection of functions for console theme colors and icons.
 * @module bananass-utils-console/theme
 */

/* eslint-disable import/extensions */ // TODO: Remove this line after developing `eslint-config-bananass` package.

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import c from 'ansi-colors';
import {
  successIcon,
  errorIcon,
  warningIcon,
  infoIcon,
  bananassIcon,
} from './icons/index.js';

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

/**
 * Formats a string with an optional color and icon.
 *
 * @param {string} str The string to format.
 * @param {boolean} showIcon Whether to show the icon.
 * @param {function} color The function to apply color to the string.
 * @param {string} icon The icon to prepend to the string if showIcon is true.
 * @returns {string} The formatted string with the optional icon and color applied.
 * @private
 */
const format = (str, showIcon, color, icon) =>
  color(`${showIcon ? `${icon} ` : ''}${str}`);

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

/**
 * Returns a green-colored success message prefixed with an icon.
 *
 * @param {string} str The success message to format.
 * @param {boolean} showIcon Whether to show the icon. Defaults to `true`.
 * @returns {string} Returns a green-colored success message prefixed with an icon.
 *
 * @example
 * console.log(complete('Operation successful.'));
 * // Output: (icon?) Operation successful. (displayed in green text in the terminal.)
 */
export function success(str, showIcon = true) {
  return format(str, showIcon, c.green, successIcon);
}

/**
 * Returns a red-colored error message prefixed with an icon.
 *
 * @param {string} str The error message to format.
 * @param {boolean} showIcon Whether to show the icon. Defaults to `true`.
 * @returns {string} Returns a red-colored error message prefixed with an icon.
 *
 * @example
 * console.log(error('Something went wrong.'));
 * // Output: (icon?) Something went wrong. (displayed in red text in the terminal.)
 */
export function error(str, showIcon = true) {
  return format(str, showIcon, c.red, errorIcon);
}

/**
 * Returns a yellow-colored warning message prefixed with an icon.
 *
 * @param {string} str The warning message to format.
 * @param {boolean} showIcon Whether to show the icon. Defaults to `true`.
 * @returns {string} Returns a yellow-colored warning message prefixed with an icon.
 *
 * @example
 * console.log(warning('This is a warning.'));
 * // Output: (icon?) This is a warning. (displayed in yellow text in the terminal.)
 */
export function warning(str, showIcon = true) {
  return format(str, showIcon, c.yellow, warningIcon);
}

/**
 * Returns a blue-colored info message prefixed with an icon.
 *
 * @param {string} str The info message to format.
 * @param {boolean} showIcon Whether to show the icon. Defaults to `true`.
 * @returns {string} Returns a blue-colored info message prefixed with an icon.
 *
 * @example
 * console.log(info('Informational message.'));
 * // Output: (icon?) Informational message. (displayed in blue text in the terminal.)
 */
export function info(str, showIcon = true) {
  return format(str, showIcon, c.blue, infoIcon);
}

/**
 * Returns a yellow-colored error message prefixed with an icon.
 *
 * @param {string} str The bananass message to format.
 * @param {boolean} showIcon Whether to show the icon. Defaults to `true`.
 * @returns Returns a yellow-colored error message prefixed with an icon.
 *
 * @example
 * console.log(bananass('Hello, Bananass.'));
 * // Output: (icon?) Hello, Bananass. (displayed in yellow text in the terminal.)
 */
export function bananass(str, showIcon = true) {
  return format(str, showIcon, c.yellow, bananassIcon);
}
