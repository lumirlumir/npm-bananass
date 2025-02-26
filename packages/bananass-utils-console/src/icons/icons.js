/**
 * @fileoverview Console icons.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import c from 'chalk';
import isUnicodeSupported from 'is-unicode-supported';

// --------------------------------------------------------------------------------
// Typedef
// --------------------------------------------------------------------------------

/**
 * @typedef {object} SpinnerStyle
 * @property {string[]} frames
 * @property {number} [interval]
 */

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

/**
 * @param {any} unicode Used when Unicode is supported.
 * @param {any} ascii Used when Unicode is not supported.
 * @returns {any}
 */
const choose = (unicode, ascii) => (isUnicodeSupported() ? unicode : ascii);

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {string} */
export const successIcon = c.bold(choose('✓', 'V'));
/** @type {string} */
export const errorIcon = c.bold(choose('✕', 'X'));
/** @type {string} */
export const warningIcon = c.bold(choose('⚠', '!'));
/** @type {string} */
export const infoIcon = c.bold(choose('✦', 'i'));
/** @type {string} */
export const bananassIcon = choose('🍌', '');

// --------------------------------------------------------------------------------

/** @type {SpinnerStyle} */
export const defaultSpinner = {
  frames: choose(
    ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
    ['-', '\\', '|', '/'],
  ),
  interval: 80,
};
