/**
 * @fileoverview Icons used in the console.
 */

/* eslint-disable import/extensions */ // TODO: Remove this line after developing `eslint-config-bananass` package.

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import c from 'ansi-colors';
import isUnicodeSupported from 'is-unicode-supported';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const successIcon = c.green.bold(isUnicodeSupported() ? '✓' : 'V');
export const errorIcon = c.red.bold(isUnicodeSupported() ? '✕' : 'X');
export const warningIcon = c.yellow.bold(isUnicodeSupported() ? '⚠' : '!');
export const infoIcon = c.blue.bold(isUnicodeSupported() ? '✦' : 'i');
export const bananassIcon = c.yellow(isUnicodeSupported() ? '🍌' : '');

export const defaultSpinner = {
  frames: isUnicodeSupported()
    ? ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
    : ['-', '\\', '|', '/'],
  interval: 80,
};
