/**
 * @fileoverview Test for `logger.js`.
 */

/* eslint-disable import/extensions, no-console */ // TODO: Remove this line after developing `eslint-config-bananass` package.

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it, mock, afterEach } from 'node:test';

import createLogger from './logger.js';

// --------------------------------------------------------------------------------
// Mock
// --------------------------------------------------------------------------------

class ConsoleLogMock {
  #output = '';

  constructor() {
    mock.method(console, 'log', (...args) => {
      this.#output += `${args.map(arg => String(arg)).join(' ')}\n`;
    }); // Mock `console.log` method.
  }

  reset() {
    this.#output = '';
  }

  get output() {
    return this.#output;
  }
}

const consoleLogMock = new ConsoleLogMock();

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

afterEach(() => {
  consoleLogMock.reset();
});

describe('logger.js', () => {
  describe('`log` method`', () => {
    describe('when first argument is not a function', () => {
      // basic
      it('when no argument is passed to log method', () => {
        createLogger().log();

        strictEqual(consoleLogMock.output, '>\n');
      });
      it('when only one argment is passed to log method', () => {
        createLogger().log('a');

        strictEqual(consoleLogMock.output, '> a\n');
      });
      it('when two argments are passed to log method', () => {
        createLogger().log('a', 'b');

        strictEqual(consoleLogMock.output, '> a b\n');
      });
      it('when three argments are passed to log method', () => {
        createLogger().log('a', 'b', 'c');

        strictEqual(consoleLogMock.output, '> a b c\n');
      });

      // method chaning
      it('when method chaning is used', () => {
        createLogger().log('a').log('b');

        strictEqual(consoleLogMock.output, '> a\n> b\n');
      });
      it('when method chaning is used multiple times', () => {
        createLogger().log('a').log('b').log('c').log('d');

        strictEqual(consoleLogMock.output, '> a\n> b\n> c\n> d\n');
      });

      // edge cases
      it('when first argument is `null`', () => {
        createLogger().log(null);

        strictEqual(consoleLogMock.output, '> null\n');
      });
      it('when first and second arguments are `null`', () => {
        createLogger().log(null, null);

        strictEqual(consoleLogMock.output, '> null null\n');
      });
      it('when first argument is `undefined`', () => {
        createLogger().log(undefined);

        strictEqual(consoleLogMock.output, '> undefined\n');
      });
      it('when first and second arguments are `undefined`', () => {
        createLogger().log(undefined, undefined);

        strictEqual(consoleLogMock.output, '> undefined undefined\n');
      });
    });

    describe('options', () => {
      // textPrefix
      it('when `textPrefix` option is `false` and no argument is passed to log method', () => {
        createLogger({ textPrefix: false }).log(); // Same with `console.log()`.

        strictEqual(consoleLogMock.output, '\n');
      });
      it('when `textPrefix` option is `false` and only one argment is passed to log method', () => {
        createLogger({ textPrefix: false }).log('a'); // Same with `console.log('a')`.

        strictEqual(consoleLogMock.output, 'a\n');
      });
      it("when `textPrefix` option is `'logger>'` and no argument is passed to log method", () => {
        createLogger({ textPrefix: 'logger>' }).log(); // Same with `console.log('logger>')`.

        strictEqual(consoleLogMock.output, 'logger>\n');
      });
      it("when `textPrefix` option is `'logger>'` and only one argment is passed to log method", () => {
        createLogger({ textPrefix: 'logger>' }).log('a'); // Same with `console.log('logger>', 'a')`.

        strictEqual(consoleLogMock.output, 'logger> a\n');
      });
      it('when `textPrefix` option is an empty string and no argument is passed to log method', () => {
        createLogger({ textPrefix: '' }).log(); // Same with `console.log('')`.

        strictEqual(consoleLogMock.output, '\n');
      });
      it('when `textPrefix` option is an empty string and only one argment is passed to log method', () => {
        createLogger({ textPrefix: '' }).log('a'); // Same with `console.log('', 'a')`.

        strictEqual(consoleLogMock.output, ' a\n');
      });
    });
  });
});
