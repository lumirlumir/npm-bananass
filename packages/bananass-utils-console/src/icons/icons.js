/**
 * @fileoverview Console icons.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { styleText } from 'node:util';
import isUnicodeSupported from '../is-unicode-supported/index.js';

// --------------------------------------------------------------------------------
// Typedef
// --------------------------------------------------------------------------------

/**
 * @typedef {object} SpinnerStyle
 * @property {string[]} frames
 * @property {number} interval
 */

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

/**
 * @template {string | string[]} T
 * @param {T} unicode Used when Unicode is supported.
 * @param {T} ascii Used when Unicode is not supported.
 * @returns {T}
 */
const choose = (unicode, ascii) => (isUnicodeSupported() ? unicode : ascii);

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/** @type {string} */
export const successIcon = styleText(['green', 'bold'], choose('✓', 'V'));
/** @type {string} */
export const errorIcon = styleText(['red', 'bold'], choose('✕', 'X'));
/** @type {string} */
export const warningIcon = styleText(['yellow', 'bold'], choose('⚠', '!'));
/** @type {string} */
export const infoIcon = styleText(['blue', 'bold'], choose('✦', 'i'));
/** @type {string} */
export const bananassIcon = choose('🍌', '');
/** @type {string} U+2022: "Bullet" (•) */
export const bulletIcon = choose('\u2022', '*');
/** @type {string} U+2500: "Box Drawings Light Horizontal" (─) */
export const boxDrawingsLightHorizontalIcon = choose('\u2500', '-');

// --------------------------------------------------------------------------------

/** @type {string} */
export const successText = styleText(
  ['white', 'bgGreen', 'bold'],
  ` ${successIcon} SUCCESS `,
);
/** @type {string} */
export const errorText = styleText(['white', 'bgRed', 'bold'], ` ${errorIcon} ERROR `);
/** @type {string} */
export const warningText = styleText(
  ['white', 'bgYellow', 'bold'],
  ` ${warningIcon} WARN `,
);
/** @type {string} */
export const infoText = styleText(['white', 'bgBlue', 'bold'], ` ${infoIcon} INFO `);

// --------------------------------------------------------------------------------

/** @type {SpinnerStyle} */
export const defaultSpinner = {
  frames: choose(
    ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
    ['-', '\\', '|', '/'],
  ),
  interval: 80,
};
