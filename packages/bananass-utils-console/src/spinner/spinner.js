/**
 * @fileoverview Console spinner.
 * @module bananass-utils-console/spinner
 * @see https://github.com/sindresorhus/yocto-spinner/tree/v0.1.2 `yocto-spinner` package `v0.1.2`.
 */

// @ts-nocheck

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import process from 'node:process';

import c from 'chalk';
import isInteractive from 'is-interactive';

import {
  successIcon,
  errorIcon,
  warningIcon,
  infoIcon,
  defaultSpinner,
} from '../icons/index.js';

// --------------------------------------------------------------------------------
// Class
// --------------------------------------------------------------------------------

class Spinner {
  // ------------------------------------------------------------------------------
  // Private Properties
  // ------------------------------------------------------------------------------

  #frames;
  #interval;
  #currentFrame = -1;
  #timer;
  #text;
  #stream;
  #color;
  #lines = 0;
  #isInteractive;
  #exitHandlerBound;
  #lastSpinnerFrameTime = 0;

  constructor(options = {}) {
    const spinner = options.spinner ?? defaultSpinner;
    this.#frames = spinner.frames;
    this.#interval = spinner.interval;
    this.#text = options.text ?? '';
    this.#stream = options.stream ?? process.stderr;
    this.#color = options.color ?? 'cyan';
    this.#isInteractive = isInteractive({ stream: this.#stream });
    this.#exitHandlerBound = this.#exitHandler.bind(this);
  }

  // ------------------------------------------------------------------------------
  // Private Methods
  // ------------------------------------------------------------------------------

  #symbolStop(symbol, text) {
    return this.stop(`${symbol} ${text ?? this.#text}`);
  }

  #render() {
    const currentTime = Date.now();

    // Ensure we only update the spinner frame at the wanted interval,
    // even if the render method is called more often.
    if (
      this.#currentFrame === -1 ||
      currentTime - this.#lastSpinnerFrameTime >= this.#interval
    ) {
      this.#currentFrame = (this.#currentFrame + 1) % this.#frames.length;
      this.#lastSpinnerFrameTime = currentTime;
    }

    const applyColor = c[this.#color] ?? c.cyan;
    const frame = this.#frames[this.#currentFrame];
    let string = `${applyColor(frame)} ${this.#text}`;

    if (!this.#isInteractive) {
      string += '\n';
    }

    this.clear();
    this.#write(string);

    if (this.#isInteractive) {
      this.#lines = this.#lineCount(string);
    }
  }

  #write(text) {
    this.#stream.write(text);
  }

  #lineCount(text) {
    const width = this.#stream.columns ?? 80;
    const lines = text.split('\n');

    let lineCount = 0;

    for (const line of lines) {
      lineCount += Math.max(1, Math.ceil(line.length / width));
    }

    return lineCount;
  }

  #hideCursor() {
    if (this.#isInteractive) {
      this.#write('\u001B[?25l');
    }
  }

  #showCursor() {
    if (this.#isInteractive) {
      this.#write('\u001B[?25h');
    }
  }

  #subscribeToProcessEvents() {
    process.once('SIGINT', this.#exitHandlerBound);
    process.once('SIGTERM', this.#exitHandlerBound);
  }

  #unsubscribeFromProcessEvents() {
    process.off('SIGINT', this.#exitHandlerBound);
    process.off('SIGTERM', this.#exitHandlerBound);
  }

  #exitHandler(signal) {
    if (this.isSpinning) {
      this.stop();
    }

    // SIGINT: 128 + 2, SIGTERM: 128 + 15
    const exitCode = signal === 'SIGINT' ? 130 : signal === 'SIGTERM' ? 143 : 1;
    process.exit(exitCode);
  }

  // ------------------------------------------------------------------------------
  // Public Methods
  // ------------------------------------------------------------------------------

  start(text) {
    if (text) {
      this.#text = text;
    }

    if (this.isSpinning) {
      return this;
    }

    this.#hideCursor();
    this.#render();
    this.#subscribeToProcessEvents();

    this.#timer = setInterval(() => {
      this.#render();
    }, this.#interval);

    return this;
  }

  stop(finalText) {
    if (!this.isSpinning) {
      return this;
    }

    clearInterval(this.#timer);
    this.#timer = undefined;
    this.#showCursor();
    this.clear();
    this.#unsubscribeFromProcessEvents();

    if (finalText) {
      this.#stream.write(`${finalText}\n`);
    }

    return this;
  }

  success(text) {
    return this.#symbolStop(successIcon, text);
  }

  error(text) {
    return this.#symbolStop(errorIcon, text);
  }

  warning(text) {
    return this.#symbolStop(warningIcon, text);
  }

  info(text) {
    return this.#symbolStop(infoIcon, text);
  }

  clear() {
    if (!this.#isInteractive) {
      return this;
    }

    this.#stream.cursorTo(0);

    for (let index = 0; index < this.#lines; index++) {
      if (index > 0) {
        this.#stream.moveCursor(0, -1);
      }

      this.#stream.clearLine(1);
    }

    this.#lines = 0;

    return this;
  }

  get text() {
    return this.#text;
  }

  set text(value = '') {
    this.#text = value;
    this.#render();
  }

  get color() {
    return this.#color;
  }

  set color(value) {
    this.#color = value;
    this.#render();
  }

  get isSpinning() {
    return this.#timer !== undefined;
  }
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default function createSpinner(options) {
  return new Spinner(options);
}
