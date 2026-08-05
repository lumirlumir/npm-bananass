/**
 * @fileoverview Console logger.
 * @module bananass-utils-console/logger
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { styleText } from 'node:util';

// --------------------------------------------------------------------------------
// Typedef
// --------------------------------------------------------------------------------

/**
 * Logger options.
 */
interface Options {
  /**
   * Enable debug mode.
   */
  debug?: boolean | undefined;

  /**
   * Enable quiet mode.
   */
  quiet?: boolean | undefined;

  /**
   * Text prefix.
   */
  textPrefix?: string | boolean | undefined;
}

// --------------------------------------------------------------------------------
// Class
// --------------------------------------------------------------------------------

class Logger {
  // ------------------------------------------------------------------------------
  // Private Properties
  // ------------------------------------------------------------------------------

  #debug: boolean;
  #quiet: boolean;
  #textPrefix: string | symbol;
  #textPrefixDefault = '>';
  #lastMethodCalled: 'log' | 'debug' = 'log';
  #undeclaredValue = Symbol('undeclared-value');

  constructor(options: Options = {}) {
    this.#debug = options.debug ?? false;
    this.#quiet = options.quiet ?? false;
    this.#textPrefix =
      typeof options.textPrefix === 'boolean'
        ? options.textPrefix
          ? this.#textPrefixDefault
          : this.#undeclaredValue
        : (options.textPrefix ?? this.#textPrefixDefault);
  }

  // ------------------------------------------------------------------------------
  // Public Methods
  // ------------------------------------------------------------------------------

  /**
   * Log a message or executes a callback.
   *
   * The first parameter can be a message or a callback function.
   * - If it's a function, it's invoked with subsequent arguments.
   * - Otherwise, the message (with a configured text prefix) and additional arguments are logged.
   *
   * Behavior based on `quiet` option:
   * - `quiet === true`: output X
   * - `quiet === false`: output O
   *
   * @param params The message or callback function, followed by any additional arguments.
   * @returns The current `Logger` instance for chaining.
   */
  log(...params: unknown[]): Logger {
    const textOrCallback =
      typeof params[0] !== 'undefined' // Same with default parameter implemetation using `arguments`
        ? params[0]
        : params.length > 0
          ? undefined
          : this.#undeclaredValue;
    const args = params.slice(1);

    this.#lastMethodCalled = 'log';

    if (this.#quiet) return this;

    if (typeof textOrCallback === 'function') {
      textOrCallback(...args);
    } else {
      // eslint-disable-next-line no-console -- Needed for logging.
      console.log(
        ...[this.#textPrefix, textOrCallback, ...args].filter(
          arg => arg !== this.#undeclaredValue,
        ),
      );
    }

    return this;
  }

  /**
   * Log a message or executes a callback in debug mode.
   *
   * The first parameter can be a message or a callback function.
   * - If it's a function, it's invoked with subsequent arguments.
   * - Otherwise, the message (with a configured text prefix) and additional arguments are logged in debug mode.
   *
   * Behavior based on `debug` and `quiet` options:
   * - `quiet === true`: output X
   * - `quiet === false && debug === true`: output O
   * - `quiet === false && debug === false`: output X
   *
   * @param params The message or callback function, followed by any additional arguments.
   * @returns The current `Logger` instance for chaining.
   */
  debug(...params: unknown[]): Logger {
    const textOrCallback =
      typeof params[0] !== 'undefined'
        ? params[0]
        : params.length > 0
          ? undefined
          : this.#undeclaredValue;
    const args = params.slice(1);

    this.#lastMethodCalled = 'debug';

    if (this.#quiet) return this;
    if (!this.#debug) return this;

    if (typeof textOrCallback === 'function') {
      textOrCallback(...args);
    } else {
      // eslint-disable-next-line no-console -- Needed for logging.
      console.log(
        ...[this.#textPrefix, textOrCallback, ...args]
          .filter(arg => arg !== this.#undeclaredValue)
          .map(arg => (typeof arg === 'string' ? styleText('gray', arg) : arg)),
      );
    }

    return this;
  }

  /**
   * Ends the current line by logging an empty line using the last method called.
   *
   * This method temporarily sets the text prefix to an undeclared value,
   * then invokes either `log()` or `debug()` depending on the previously method called.
   * After logging, it restores the original text prefix.
   *
   * @returns The current `Logger` instance for chaining.
   */
  eol(): Logger {
    const prevTextPrefix = this.#textPrefix;
    this.#textPrefix = this.#undeclaredValue;

    if (this.#lastMethodCalled === 'log') {
      this.log();
    } else {
      this.debug();
    }

    this.#textPrefix = prevTextPrefix;

    return this;
  }

  // ------------------------------------------------------------------------------
  // Getters and Setters
  // ------------------------------------------------------------------------------

  /**
   * Get the last method called.
   * @returns {'log' | 'debug'}
   */
  get lastMethodCalled(): 'log' | 'debug' {
    return this.#lastMethodCalled;
  }
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Create a new `Logger` instance.
 *
 * @param options The logger options.
 * @returns A new `Logger` instance.
 *
 * @example
 * import createLogger from 'bananass-utils-console/logger';
 *
 * const logger = createLogger({
 *   debug: false,
 *   quiet: false,
 *   textPrefix: '>',
 * })
 *
 * logger
 *   .log('Hello, log!');
 *   .debug('Hello, debug!');
 *   .eol();
 */
export default function createLogger(options?: Options): Logger {
  return new Logger(options);
}
