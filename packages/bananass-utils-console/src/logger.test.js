/**
 * @fileoverview Test for `logger.js`.
 */

/* eslint-disable import/extensions, no-console */ // TODO: Remove this line after developing `eslint-config-bananass` package.

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual } from 'node:assert';
import { describe, it, mock, afterEach } from 'node:test';

import stripAnsi from 'strip-ansi';

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
  describe('`log` method', () => {
    // lastMethodCalled
    it("when `log` method is called, `#lastMethodCalled` should be set to `'log'`", () => {
      strictEqual('log', createLogger().log().lastMethodCalled);
    });

    describe('when first argument is a function', () => {
      // basic
      it('when a callback function is passed to log method without any arguments', () => {
        const mockFn = mock.fn();

        createLogger().log(mockFn);

        strictEqual(mockFn.mock.callCount(), 1);
      });
      it('when a callback function is passed to log method with one argument', () => {
        const mockFn = mock.fn(a => console.log(a));

        createLogger().log(mockFn, 'a');

        strictEqual(mockFn.mock.callCount(), 1);
        strictEqual(consoleLogMock.output, 'a\n');
      });
      it('when a callback function is passed to log method with multiple arguments', () => {
        const mockFn = mock.fn((a, b, c) => console.log(a, b, c));

        createLogger().log(mockFn, 'a', 'b', 'c');

        strictEqual(mockFn.mock.callCount(), 1);
        strictEqual(consoleLogMock.output, 'a b c\n');
      });

      // method chaining
      it('when method chaining is used a single time', () => {
        const mockFn = mock.fn();

        createLogger().log(mockFn).log(mockFn);

        strictEqual(mockFn.mock.callCount(), 2);
      });
      it('when method chaining is used multiple times', () => {
        const mockFn = mock.fn();

        createLogger().log(mockFn).log(mockFn).log(mockFn).log(mockFn);

        strictEqual(mockFn.mock.callCount(), 4);
      });
    });

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

      // method chaining
      it('when method chaining is used a single time', () => {
        createLogger().log('a').log('b');

        strictEqual(consoleLogMock.output, '> a\n> b\n');
      });
      it('when method chaining is used multiple times', () => {
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
      // quiet
      it('when `quiet` option is `true` and callback is passed', () => {
        const mockFn = mock.fn();

        createLogger({ quiet: true }).log(mockFn).log(mockFn);

        strictEqual(mockFn.mock.callCount(), 0);
      });
      it('when `quiet` option is `true` and text is passed', () => {
        createLogger({ quiet: true }).log('a');

        strictEqual(consoleLogMock.output, '');
      });
      it('when `quiet` option is `false` and callback is passed', () => {
        const mockFn = mock.fn();

        createLogger({ quiet: false }).log(mockFn).log(mockFn);

        strictEqual(mockFn.mock.callCount(), 2);
      });
      it('when `quiet` option is `false` and text is passed', () => {
        createLogger({ quiet: false }).log('a');

        strictEqual(consoleLogMock.output, '> a\n');
      });

      // textPrefix
      it('when `textPrefix` option is `true` and no argument is passed to log method', () => {
        createLogger({ textPrefix: true }).log();

        strictEqual(consoleLogMock.output, '>\n');
      });
      it('when `textPrefix` option is `true` and only one argment is passed to log method', () => {
        createLogger({ textPrefix: true }).log('a');

        strictEqual(consoleLogMock.output, '> a\n');
      });
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
  describe('`debug` method', () => {
    // lastMethodCalled
    it("when `debug` method is called, `#lastMethodCalled` should be set to `'debug'`", () => {
      strictEqual('debug', createLogger().debug().lastMethodCalled);
    });

    describe('when first argument is a function', () => {
      // basic
      it('when a callback function is passed to debug method without any arguments', () => {
        const mockFn = mock.fn();

        createLogger({ debug: true }).debug(mockFn);

        strictEqual(mockFn.mock.callCount(), 1);
      });
      it('when a callback function is passed to debug method with one argument', () => {
        const mockFn = mock.fn(a => console.log(a));

        createLogger({ debug: true }).debug(mockFn, 'a');

        strictEqual(mockFn.mock.callCount(), 1);
        strictEqual(consoleLogMock.output, 'a\n');
      });
      it('when a callback function is passed to debug method with multiple arguments', () => {
        const mockFn = mock.fn((a, b, c) => console.log(a, b, c));

        createLogger({ debug: true }).debug(mockFn, 'a', 'b', 'c');

        strictEqual(mockFn.mock.callCount(), 1);
        strictEqual(consoleLogMock.output, 'a b c\n');
      });

      // method chaining
      it('when method chaining is used a single time', () => {
        const mockFn = mock.fn();

        createLogger({ debug: true }).debug(mockFn).debug(mockFn);

        strictEqual(mockFn.mock.callCount(), 2);
      });
      it('when method chaining is used multiple times', () => {
        const mockFn = mock.fn();

        createLogger({ debug: true })
          .debug(mockFn)
          .debug(mockFn)
          .debug(mockFn)
          .debug(mockFn);

        strictEqual(mockFn.mock.callCount(), 4);
      });
    });

    describe('when first argument is not a function', () => {
      // basic
      it('when no argument is passed to debug method', () => {
        createLogger({ debug: true }).debug();

        strictEqual(stripAnsi(consoleLogMock.output), '>\n');
      });
      it('when only one argment is passed to debug method', () => {
        createLogger({ debug: true }).debug('a');

        strictEqual(stripAnsi(consoleLogMock.output), '> a\n');
      });
      it('when two argments are passed to debug method', () => {
        createLogger({ debug: true }).debug('a', 'b');

        strictEqual(stripAnsi(consoleLogMock.output), '> a b\n');
      });
      it('when three argments are passed to debug method', () => {
        createLogger({ debug: true }).debug('a', 'b', 'c');

        strictEqual(stripAnsi(consoleLogMock.output), '> a b c\n');
      });

      // method chaining
      it('when method chaining is used a single time', () => {
        createLogger({ debug: true }).debug('a').debug('b');

        strictEqual(stripAnsi(consoleLogMock.output), '> a\n> b\n');
      });
      it('when method chaining is used multiple times', () => {
        createLogger({ debug: true }).debug('a').debug('b').debug('c').debug('d');

        strictEqual(stripAnsi(consoleLogMock.output), '> a\n> b\n> c\n> d\n');
      });

      // edge cases
      it('when first argument is `null`', () => {
        createLogger({ debug: true }).debug(null);

        strictEqual(stripAnsi(consoleLogMock.output), '> null\n');
      });
      it('when first and second arguments are `null`', () => {
        createLogger({ debug: true }).debug(null, null);

        strictEqual(stripAnsi(consoleLogMock.output), '> null null\n');
      });
      it('when first argument is `undefined`', () => {
        createLogger({ debug: true }).debug(undefined);

        strictEqual(stripAnsi(consoleLogMock.output), '> undefined\n');
      });
      it('when first and second arguments are `undefined`', () => {
        createLogger({ debug: true }).debug(undefined, undefined);
        strictEqual(stripAnsi(consoleLogMock.output), '> undefined undefined\n');
      });
    });

    describe('options', () => {
      // debug
      it('when `debug` option is `false` and callback is passed', () => {
        const mockFn = mock.fn();

        createLogger({ debug: false }).debug(mockFn).debug(mockFn);

        strictEqual(mockFn.mock.callCount(), 0);
      });
      it('when `debug` option is `false` and text is passed', () => {
        createLogger({ debug: false }).debug('a');

        strictEqual(consoleLogMock.output, '');
      });

      // quiet
      it('when `quiet` option is `true` and callback is passed', () => {
        const mockFn = mock.fn();

        createLogger({ debug: true, quiet: true }).debug(mockFn).debug(mockFn);

        strictEqual(mockFn.mock.callCount(), 0);
      });
      it('when `quiet` option is `true` and text is passed', () => {
        createLogger({ debug: true, quiet: true }).debug('a');

        strictEqual(consoleLogMock.output, '');
      });

      // textPrefix
      it('when `textPrefix` option is `true` and no argument is passed to debug method', () => {
        createLogger({ debug: true, textPrefix: true }).debug();

        strictEqual(stripAnsi(consoleLogMock.output), '>\n');
      });
      it('when `textPrefix` option is `true` and only one argment is passed to debug method', () => {
        createLogger({ debug: true, textPrefix: true }).debug('a');

        strictEqual(stripAnsi(consoleLogMock.output), '> a\n');
      });
      it('when `textPrefix` option is `false` and no argument is passed to debug method', () => {
        createLogger({ debug: true, textPrefix: false }).debug(); // Same with `console.log()`.

        strictEqual(stripAnsi(consoleLogMock.output), '\n');
      });
      it('when `textPrefix` option is `false` and only one argment is passed to debug method', () => {
        createLogger({ debug: true, textPrefix: false }).debug('a'); // Same with `console.log('a')`.

        strictEqual(stripAnsi(consoleLogMock.output), 'a\n');
      });
      it("when `textPrefix` option is `'logger>'` and no argument is passed to debug method", () => {
        createLogger({ debug: true, textPrefix: 'logger>' }).debug(); // Same with `console.log('logger>')`.

        strictEqual(stripAnsi(consoleLogMock.output), 'logger>\n');
      });
      it("when `textPrefix` option is `'logger>'` and only one argment is passed to debug method", () => {
        createLogger({ debug: true, textPrefix: 'logger>' }).debug('a'); // Same with `console.log('logger>', 'a')`.

        strictEqual(stripAnsi(consoleLogMock.output), 'logger> a\n');
      });
      it('when `textPrefix` option is an empty string and no argument is passed to debug method', () => {
        createLogger({ debug: true, textPrefix: '' }).debug(); // Same with `console.log('')`.

        strictEqual(stripAnsi(consoleLogMock.output), '\n');
      });
      it('when `textPrefix` option is an empty string and only one argment is passed to debug method', () => {
        createLogger({ debug: true, textPrefix: '' }).debug('a'); // Same with `console.log('', 'a')`.

        strictEqual(stripAnsi(consoleLogMock.output), ' a\n');
      });
    });
  });
});
