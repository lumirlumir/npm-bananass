/**
 * @fileoverview Test for `theme.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { strictEqual } = require('node:assert');
const { describe, it } = require('node:test');

const { green, red, yellow, blue } = require('ansi-colors');

const {
  successIcon,
  errorIcon,
  warningIcon,
  infoIcon,
  bananassIcon,
} = require('./icons');
const { success, error, warning, info, bananass } = require('./theme');

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('theme.js', () => {
  describe('success message formatting', () => {
    const message = 'Operation successful.';

    it('with a icon', () => {
      strictEqual(success(message), green(`${successIcon} ${message}`));
    });
    it('without a icon', () => {
      strictEqual(success(message, false), green(message));
    });
  });

  describe('error message formatting', () => {
    const message = 'Something went wrong.';

    it('with a icon', () => {
      strictEqual(error(message), red(`${errorIcon} ${message}`));
    });
    it('without a icon', () => {
      strictEqual(error(message, false), red(message));
    });
  });

  describe('warning message formatting', () => {
    const message = 'This is a warning.';

    it('with a icon', () => {
      strictEqual(warning(message), yellow(`${warningIcon} ${message}`));
    });
    it('without a icon', () => {
      strictEqual(warning(message, false), yellow(message));
    });
  });

  describe('info message formatting', () => {
    const message = 'Informational message.';

    it('with a icon', () => {
      strictEqual(info(message), blue(`${infoIcon} ${message}`));
    });
    it('without a icon', () => {
      strictEqual(info(message, false), blue(message));
    });
  });

  describe('bananass message formatting', () => {
    const message = 'Hello, Bananass.';

    it('with a icon', () => {
      strictEqual(bananass(message), yellow(`${bananassIcon} ${message}`));
    });
    it('without a icon', () => {
      strictEqual(bananass(message, false), yellow(message));
    });
  });
});
