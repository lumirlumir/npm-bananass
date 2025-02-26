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
export const successIcon = c.bold.green(choose('✓', 'V'));
/** @type {string} */
export const errorIcon = c.bold.red(choose('✕', 'X'));
/** @type {string} */
export const warningIcon = c.bold.yellow(choose('⚠', '!'));
/** @type {string} */
export const infoIcon = c.bold.blue(choose('✦', 'i'));
/** @type {string} */
export const bananassIcon = choose('🍌', '');

// --------------------------------------------------------------------------------

/** @type {string} */
export const successText = c.white.bgGreen.bold(` ${successIcon} SUCCESS `);
/** @type {string} */
export const errorText = c.white.bgRed.bold(` ${errorIcon} ERROR `);
/** @type {string} */
export const warningText = c.white.bgYellow.bold(` ${warningIcon} WARN `);
/** @type {string} */
export const infoText = c.white.bgBlue.bold(` ${infoIcon} INFO `);

// --------------------------------------------------------------------------------

/** @type {SpinnerStyle} */
export const defaultSpinner = {
  frames: choose(
    ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
    ['-', '\\', '|', '/'],
  ),
  interval: 80,
};
