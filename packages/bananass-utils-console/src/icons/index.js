const c = require('ansi-colors');

const { isUnicodeSupported } = require('../utils');

module.exports.successSymbol = c.green(isUnicodeSupported ? '✅' : '√');
module.exports.errorSymbol = c.red(isUnicodeSupported ? '❌' : '×');
module.exports.warningSymbol = c.yellow(isUnicodeSupported ? '⚠️' : '‼');
module.exports.infoSymbol = c.blue(isUnicodeSupported ? 'ℹ️' : 'i');
module.exports.bananassSymbol = c.yellow(isUnicodeSupported ? '🍌' : '');

module.exports.defaultSpinner = {
  frames: isUnicodeSupported
    ? ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
    : ['-', '\\', '|', '/'],
  interval: 80,
};
