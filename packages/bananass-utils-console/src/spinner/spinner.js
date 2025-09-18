/**
 * @fileoverview Console spinner.
 * @module bananass-utils-console/spinner
 * @license MIT Portions of this code were borrowed from [`yocto-spinner`](https://github.com/sindresorhus/yocto-spinner).
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { styleText } from 'node:util';
import isInteractive from '../is-interactive/index.js';
import {
  successIcon,
  errorIcon,
  warningIcon,
  infoIcon,
  defaultSpinner,
} from '../icons/index.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {"black"|"blackBright"|"blue"|"blueBright"|"cyan"|"cyanBright"|"gray"|"green"|"greenBright"|"grey"|"magenta"|"magentaBright"|"red"|"redBright"|"white"|"whiteBright"|"yellow"|"yellowBright"} ForegroundColors
 */

/**
 * @typedef {object} SpinnerStyle
 * @property {string[]} frames
 * @property {number} interval
 */

/**
 * @typedef {object} Options Spinner options.
 * @property {string} [text] Text to display next to the spinner. (default: `''`)
 * @property {ForegroundColors} [color] The color of the spinner. (default: `'yellow'`)
 * @property {NodeJS.WriteStream} [stream] The stream to which the spinner is written. (default: `process.stderr`)
 * @property {boolean} [isInteractive] Whether the spinner should be interactive. (default: Auto-detected)
 * @property {SpinnerStyle} [spinner]
 * Customize the spinner animation with a custom set of frames and interval.
 *
 * ```
 * {
 *    frames: ['-', '\\', '|', '/'],
 *    interval: 100,
 * }
 * ```
 *
 * Pass in any spinner from [`cli-spinners`](https://github.com/sindresorhus/cli-spinners).
 */

// --------------------------------------------------------------------------------
// Class
// --------------------------------------------------------------------------------

class Spinner {
  // ------------------------------------------------------------------------------
  // Private Properties
  // ------------------------------------------------------------------------------

  /** @type {SpinnerStyle['frames']} */
  #frames;
  /** @type {SpinnerStyle['interval']} */
  #interval;
  /** @type {number} */
  #currentFrame = -1;
  /** @type {NodeJS.Timeout | undefined} */
  #timer = undefined;
  /** @type {string} */
  #text;
  /** @type {NodeJS.WriteStream} */
  #stream;
  /** @type {ForegroundColors} */
  #color;
  /** @type {number} */
  #lines = 0;
  /** @type {boolean} */
  #isInteractive;
  /** @type {(signal: string) => void} */
  #exitHandlerBound;
  /** @type {number} */
  #lastSpinnerFrameTime = 0;

  /** @param {Options} options */
  constructor(options = {}) {
    const spinner = options.spinner ?? defaultSpinner;

    this.#frames = spinner.frames;
    this.#interval = spinner.interval;
    this.#text = options.text ?? '';
    this.#stream = options.stream ?? process.stderr;
    this.#color = options.color ?? 'yellow';
    this.#isInteractive = options.isInteractive ?? isInteractive(this.#stream);
    this.#exitHandlerBound = this.#exitHandler.bind(this);
  }

  // ------------------------------------------------------------------------------
  // Private Methods
  // ------------------------------------------------------------------------------

  /** @param {string} symbol @param {string} [text] */
  #symbolStop(symbol, text = this.#text) {
    return this.stop(`${symbol} ${text}`);
  }

  #render() {
    const currentTime = Date.now();

    // Ensure we only update the spinner frame at the wanted interval, even if the render method is called more often.
    if (
      this.#currentFrame === -1 ||
      currentTime - this.#lastSpinnerFrameTime >= this.#interval
    ) {
      this.#currentFrame = (this.#currentFrame + 1) % this.#frames.length;
      this.#lastSpinnerFrameTime = currentTime;
    }

    const color = this.#color ?? 'yellow';
    const frame = this.#frames[this.#currentFrame];
    let string = `${styleText(color, frame)} ${this.#text}`;

    if (!this.#isInteractive) {
      string += '\n';
    }

    this.clear();
    this.#write(string);

    if (this.#isInteractive) {
      this.#lines = this.#lineCount(string);
    }
  }

  /** @param {string} text */
  #write(text) {
    this.#stream.write(text);
  }

  /** @param {string} text */
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

  /** @param {string} signal */
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

  /**
   * Starts the spinner.
   *
   * Optionally, updates the text.
   *
   * @param {string} [text] The text to display next to the spinner.
   * @returns The spinner instance.
   */
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

  /**
   * Stops the spinner.
   *
   * Optionally displays a final message.
   *
   * @param {string} [finalText] The final text to display after stopping the spinner.
   * @returns The spinner instance.
   */
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

  /**
   * Stops the spinner and displays a success symbol with the message.
   *
   * @param {string} [text] The success message to display.
   * @returns The spinner instance.
   */
  success(text) {
    return this.#symbolStop(successIcon, text);
  }

  /**
   * Stops the spinner and displays an error symbol with the message.
   *
   * @param {string} [text] The error message to display.
   * @returns The spinner instance.
   */
  error(text) {
    return this.#symbolStop(errorIcon, text);
  }

  /**
   * Stops the spinner and displays a warning symbol with the message.
   *
   * @param {string} [text] The warning message to display.
   * @returns The spinner instance.
   */
  warning(text) {
    return this.#symbolStop(warningIcon, text);
  }

  /**
   * Stops the spinner and displays an info symbol with the message.
   *
   * @param {string} [text] The info message to display.
   * @returns The spinner instance.
   */
  info(text) {
    return this.#symbolStop(infoIcon, text);
  }

  /**
   * Clears the spinner.
   *
   * @returns The spinner instance.
   */
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

  // ------------------------------------------------------------------------------
  // Getters and Setters
  // ------------------------------------------------------------------------------

  /**
   * Change the text displayed next to the spinner.
   *
   * @example
   * spinner.text = 'New text';
   */
  get text() {
    return this.#text;
  }

  /**
   * Change the text displayed next to the spinner.
   *
   * @example
   * spinner.text = 'New text';
   */
  set text(value) {
    this.#text = value ?? '';
    this.#render();
  }

  /**
   * Change the spinner color.
   */
  get color() {
    return this.#color;
  }

  /**
   * Change the spinner color.
   */
  set color(value) {
    this.#color = value;
    this.#render();
  }

  /**
   * Returns whether the spinner is currently spinning.
   */
  get isSpinning() {
    return this.#timer !== undefined;
  }
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Create a new spinner instance.
 *
 * @param {Options} [options]
 * @returns {Spinner} A new spinner instance.
 *
 * @example
 * import createSpinner from 'bananass-utils-console/spinner';
 *
 * const spinner = createSpinner({
 *   text: 'Loading…'
 *   color: 'yellow',
 *   stream: process.stderr,
 *   spinner: {
 *     frames: ['-', '\\', '|', '/'],
 *     interval: 100,
 *   },
 * }).start();
 *
 * setTimeout(() => {
 *   spinner.success('Success!');
 * }, 2000);
 */
export default function createSpinner(options) {
  return new Spinner(options);
}
