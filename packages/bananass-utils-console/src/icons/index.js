/**
 * @fileoverview Icons used in the console.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const c = require('ansi-colors');
const { isUnicodeSupported } = require('../utils');

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports.successIcon = c.green.bold(isUnicodeSupported ? '✓' : '√');
module.exports.errorIcon = c.red.bold(isUnicodeSupported ? '✕' : '×');
module.exports.warningIcon = c.yellow.bold(isUnicodeSupported ? '‼' : '‼');
module.exports.infoIcon = c.blue.bold(isUnicodeSupported ? '✦' : 'i');
module.exports.bananassIcon = c.yellow(isUnicodeSupported ? '🍌' : '');

module.exports.defaultSpinner = {
  frames: isUnicodeSupported
    ? ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
    : ['-', '\\', '|', '/'],
  interval: 80,
};
