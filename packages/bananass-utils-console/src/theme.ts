/**
 * @fileoverview Console theme.
 * @module bananass-utils-console/theme
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { styleText } from 'node:util';
import { successText, errorText, warningText, infoText, bananassIcon } from './icons.ts';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

/**
 * Formats a string with an optional color and icon.
 * @param str The string to format.
 * @param showIcon Whether to show the icon.
 * @param color The color to apply to the string.
 * @param icon The icon to prepend to the string if `showIcon` is true.
 * @returns The formatted string with the optional icon and color applied.
 * @private
 */
function format(
  str: string,
  showIcon: boolean,
  color: 'green' | 'red' | 'yellow' | 'blue',
  icon: string,
): string {
  return `${showIcon ? `${icon} ` : ''}${styleText(color, str)}`;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Returns a green-colored success message prefixed with an icon.
 *
 * @param str The success message to format.
 * @param showIcon Whether to show the icon. Defaults to `false`.
 * @returns Returns a green-colored success message prefixed with an icon.
 *
 * @example
 * console.log(complete('Operation successful.'));
 * // Output: (icon?) Operation successful. (displayed in green text in the terminal.)
 */
export function success(str: string, showIcon = false): string {
  return format(str, showIcon, 'green', successText);
}

/**
 * Returns a red-colored error message prefixed with an icon.
 *
 * @param str The error message to format.
 * @param showIcon Whether to show the icon. Defaults to `false`.
 * @returns Returns a red-colored error message prefixed with an icon.
 *
 * @example
 * console.log(error('Something went wrong.'));
 * // Output: (icon?) Something went wrong. (displayed in red text in the terminal.)
 */
export function error(str: string, showIcon = false): string {
  return format(str, showIcon, 'red', errorText);
}

/**
 * Returns a yellow-colored warning message prefixed with an icon.
 *
 * @param str The warning message to format.
 * @param showIcon Whether to show the icon. Defaults to `false`.
 * @returns Returns a yellow-colored warning message prefixed with an icon.
 *
 * @example
 * console.log(warning('This is a warning.'));
 * // Output: (icon?) This is a warning. (displayed in yellow text in the terminal.)
 */
export function warning(str: string, showIcon = false): string {
  return format(str, showIcon, 'yellow', warningText);
}

/**
 * Returns a blue-colored info message prefixed with an icon.
 *
 * @param str The info message to format.
 * @param showIcon Whether to show the icon. Defaults to `false`.
 * @returns Returns a blue-colored info message prefixed with an icon.
 *
 * @example
 * console.log(info('Informational message.'));
 * // Output: (icon?) Informational message. (displayed in blue text in the terminal.)
 */
export function info(str: string, showIcon = false): string {
  return format(str, showIcon, 'blue', infoText);
}

/**
 * Returns a yellow-colored bananass message prefixed with an icon.
 *
 * @param str The bananass message to format.
 * @param showIcon Whether to show the icon. Defaults to `false`.
 * @returns Returns a yellow-colored bananass message prefixed with an icon.
 *
 * @example
 * console.log(bananass('Hello, Bananass.'));
 * // Output: (icon?) Hello, Bananass. (displayed in yellow text in the terminal.)
 */
export function bananass(str: string, showIcon = false): string {
  return format(str, showIcon, 'yellow', bananassIcon);
}
