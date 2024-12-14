/**
 * @fileoverview Logger utility.
 * @module bananass-utils-console/logger
 */

/* eslint-disable lines-between-class-members */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { log } = require('node:console');
const { gray } = require('ansi-colors');

// --------------------------------------------------------------------------------
// Class
// --------------------------------------------------------------------------------

class Logger {
  // ------------------------------------------------------------------------------
  // Private Property
  // ------------------------------------------------------------------------------

  #debug;
  #quiet;
  #textPrefix;
  #lastMethodCalled = 'log';

  constructor(options = {}) {
    this.#debug = options.debug ?? false;
    this.#quiet = options.quiet ?? false;
    this.#textPrefix = options.textPrefix ?? '>';
  }

  // ------------------------------------------------------------------------------
  // Public Method
  // ------------------------------------------------------------------------------

  /**
   *
   *
   * - `quiet === true`: output X
   * - `quiet === false`: output O
   */
  log(textOrCallback, ...args) {
    this.#lastMethodCalled = 'log';

    if (this.#quiet) return this;

    if (typeof textOrCallback === 'function') {
      textOrCallback(...args);
    } else {
      const text = textOrCallback ?? '';

      log(...[this.#textPrefix, text, ...args]);
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
  debug(textOrCallback, ...args) {
    this.#lastMethodCalled = 'debug';

    if (this.#quiet) return this;
    if (!this.#debug) return this;

    if (typeof textOrCallback === 'function') {
      textOrCallback(...args);
    } else {
      const text = textOrCallback ?? '';

      log(
        ...[this.#textPrefix, text, ...args].map(arg =>
          typeof arg === 'string' ? gray(arg) : arg,
        ),
      );
    }

    return this;
  }

  eol() {
    const prevTextPrefix = this.#textPrefix;
    this.#textPrefix = '';

    if (this.#lastMethodCalled === 'log') {
      this.log();
    } else {
      this.debug();
    }

    this.#textPrefix = prevTextPrefix;

    return this;
  }

  get textPrefix() {
    return this.#textPrefix;
  }

  set textPrefix(text = '>') {
    this.#textPrefix = text;
  }

  get lastMethodCalled() {
    return this.#lastMethodCalled;
  }

  set lastMethodCalled(method = 'log') {
    this.#lastMethodCalled = method;
  }
}

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = function createLogger(options) {
  return new Logger(options);
};
