const c = require('ansi-colors');

const { isUnicodeSupported } = require('../utils');

module.exports.successSymbol = c.green.bold(isUnicodeSupported ? '✓' : '√');
module.exports.errorSymbol = c.red.bold(isUnicodeSupported ? '✕' : '×');
module.exports.warningSymbol = c.yellow.bold(isUnicodeSupported ? '‼' : '‼');
module.exports.infoSymbol = c.blue.bold(isUnicodeSupported ? '✦' : 'i');
module.exports.bananassSymbol = c.yellow(isUnicodeSupported ? '🍌' : '');

module.exports.defaultSpinner = {
  frames: isUnicodeSupported
    ? ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
    : ['-', '\\', '|', '/'],
  interval: 80,
};
