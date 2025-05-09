/**
 * @fileoverview Test for `theme.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import { stripVTControlCharacters as stripAnsi } from 'node:util';

import {
  successText,
  errorText,
  warningText,
  infoText,
  bananassIcon,
} from '../icons/index.js';
import { success, error, warning, info, bananass } from './theme.js';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('theme', () => {
  describe('success message formatting', () => {
    const message = 'Operation successful.';

    it('with a icon', () => {
      strictEqual(
        stripAnsi(success(message, true)),
        stripAnsi(`${successText} ${message}`),
      );
    });
    it('without a icon', () => {
      strictEqual(stripAnsi(success(message, false)), message);
    });
  });

  describe('error message formatting', () => {
    const message = 'Something went wrong.';

    it('with a icon', () => {
      strictEqual(stripAnsi(error(message, true)), stripAnsi(`${errorText} ${message}`));
    });
    it('without a icon', () => {
      strictEqual(stripAnsi(error(message, false)), message);
    });
  });

  describe('warning message formatting', () => {
    const message = 'This is a warning.';

    it('with a icon', () => {
      strictEqual(
        stripAnsi(warning(message, true)),
        stripAnsi(`${warningText} ${message}`),
      );
    });
    it('without a icon', () => {
      strictEqual(stripAnsi(warning(message, false)), message);
    });
  });

  describe('info message formatting', () => {
    const message = 'Informational message.';

    it('with a icon', () => {
      strictEqual(stripAnsi(info(message, true)), stripAnsi(`${infoText} ${message}`));
    });
    it('without a icon', () => {
      strictEqual(stripAnsi(info(message, false)), message);
    });
  });

  describe('bananass message formatting', () => {
    const message = 'Hello, Bananass.';

    it('with a icon', () => {
      strictEqual(
        stripAnsi(bananass(message, true)),
        stripAnsi(`${bananassIcon} ${message}`),
      );
    });
    it('without a icon', () => {
      strictEqual(stripAnsi(bananass(message, false)), message);
    });
  });
});
