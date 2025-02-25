/**
 * @fileoverview Console icons.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import c from 'ansi-colors';
import isUnicodeSupported from 'is-unicode-supported';

// --------------------------------------------------------------------------------
// Typedef
// --------------------------------------------------------------------------------

/**
 * @typedef {object} SpinnerIcon
 * @property {string[]} frames
 * @property {number} [interval]
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {string} */
export const successIcon = c.green.bold(isUnicodeSupported() ? '✓' : 'V');
/** @type {string} */
export const errorIcon = c.red.bold(isUnicodeSupported() ? '✕' : 'X');
/** @type {string} */
export const warningIcon = c.yellow.bold(isUnicodeSupported() ? '⚠' : '!');
/** @type {string} */
export const infoIcon = c.blue.bold(isUnicodeSupported() ? '✦' : 'i');
/** @type {string} */
export const bananassIcon = c.yellow(isUnicodeSupported() ? '🍌' : '');

/** @type {SpinnerIcon} */
export const defaultSpinner = {
  frames: isUnicodeSupported()
    ? ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
    : ['-', '\\', '|', '/'],
  interval: 80,
};
