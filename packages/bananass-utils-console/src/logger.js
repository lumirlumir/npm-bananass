/**
 * @fileoverview Logger utility.
 * @module bananass-utils-console/logger
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import c from 'ansi-colors';

// --------------------------------------------------------------------------------
// Class
// --------------------------------------------------------------------------------

class Logger {
  // ------------------------------------------------------------------------------
  // Private Properties
  // ------------------------------------------------------------------------------

  #debug;
  #quiet;
  #textPrefix;
  #textPrefixDefault = '>';
  #lastMethodCalled = 'log';
  #undeclaredValue = Symbol('undeclared-value');

  constructor(options = {}) {
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
   *
   *
   * - `quiet === true`: output X
   * - `quiet === false`: output O
   */
  log(...params) {
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
      console.log(
        ...[this.#textPrefix, textOrCallback, ...args].filter(
          arg => arg !== this.#undeclaredValue,
        ),
      );
    }

    return this;
  }

  /**
   *
   *
   * - `quiet === true`: output X
   * - `quiet === false && debug === true`: output O
   * - `quiet === false && debug === false`: output X
   */
  debug(...params) {
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
      console.log(
        ...[this.#textPrefix, textOrCallback, ...args]
          .filter(arg => arg !== this.#undeclaredValue)
          .map(arg => (typeof arg === 'string' ? c.gray(arg) : arg)),
      );
    }

    return this;
  }

  eol() {
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

  get lastMethodCalled() {
    return this.#lastMethodCalled;
  }
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 *
 * @param {{textPrefix: string | boolean}} options
 * @param {string | boolean} options.textPrefix
 * @returns
 */
export default function createLogger(options) {
  return new Logger(options);
}
