/**
 * @fileoverview Test for `theme.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import c from 'chalk';

import {
  successIcon,
  errorIcon,
  warningIcon,
  infoIcon,
  bananassIcon,
} from '../icons/index.js';
import { success, error, warning, info, bananass } from './theme.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('theme.js', () => {
  describe('success message formatting', () => {
    const message = 'Operation successful.';

    it('with a icon', () => {
      strictEqual(success(message), c.green(`${successIcon} ${message}`));
    });
    it('without a icon', () => {
      strictEqual(success(message, false), c.green(message));
    });
  });

  describe('error message formatting', () => {
    const message = 'Something went wrong.';

    it('with a icon', () => {
      strictEqual(error(message), c.red(`${errorIcon} ${message}`));
    });
    it('without a icon', () => {
      strictEqual(error(message, false), c.red(message));
    });
  });

  describe('warning message formatting', () => {
    const message = 'This is a warning.';

    it('with a icon', () => {
      strictEqual(warning(message), c.yellow(`${warningIcon} ${message}`));
    });
    it('without a icon', () => {
      strictEqual(warning(message, false), c.yellow(message));
    });
  });

  describe('info message formatting', () => {
    const message = 'Informational message.';

    it('with a icon', () => {
      strictEqual(info(message), c.blue(`${infoIcon} ${message}`));
    });
    it('without a icon', () => {
      strictEqual(info(message, false), c.blue(message));
    });
  });

  describe('bananass message formatting', () => {
    const message = 'Hello, Bananass.';

    it('with a icon', () => {
      strictEqual(bananass(message), c.yellow(`${bananassIcon} ${message}`));
    });
    it('without a icon', () => {
      strictEqual(bananass(message, false), c.yellow(message));
    });
  });
});
