/**
 * @fileoverview Console spinner.
 * @module bananass-utils-console/spinner
 * @license MIT Portions of this code were borrowed from [`yocto-spinner`](https://github.com/sindresorhus/yocto-spinner).
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { styleText } from 'node:util';
import type { WriteStream } from 'node:tty';
import type { SpinnerStyle } from './icons.ts';
import isInteractive from './is-interactive.ts';
import {
  successIcon,
  errorIcon,
  warningIcon,
  infoIcon,
  defaultSpinner,
} from './icons.ts';

// --------------------------------------------------------------------------------
// Typedef
// --------------------------------------------------------------------------------

type ForegroundColors =
  | 'black'
  | 'blackBright'
  | 'blue'
  | 'blueBright'
  | 'cyan'
  | 'cyanBright'
  | 'gray'
  | 'green'
  | 'greenBright'
  | 'grey'
  | 'magenta'
  | 'magentaBright'
  | 'red'
  | 'redBright'
  | 'white'
  | 'whiteBright'
  | 'yellow'
  | 'yellowBright';

/**
 * Spinner options.
 */
interface Options {
  /**
   * Text to display next to the spinner.
   * @default ''
   */
  text?: string | undefined;

  /**
   * The color of the spinner.
   * @default 'yellow'
   */
  color?: ForegroundColors | undefined;

  /**
   * The stream to which the spinner is written.
   * @default process.stderr
   */
  stream?: WriteStream | undefined;

  /**
   * Whether the spinner should be interactive.
   * @default Auto-detected
   */
  isInteractive?: boolean | undefined;

  /**
   * Customize the spinner animation with a custom set of frames and interval.
   *
   * Pass in any spinner from [`cli-spinners`](https://github.com/sindresorhus/cli-spinners).
   *
   * @example
   * {
   *    frames: ['-', '\\', '|', '/'],
   *    interval: 100,
   * }
   */
  spinner?: SpinnerStyle | undefined;
}

// --------------------------------------------------------------------------------
// Class
// --------------------------------------------------------------------------------

class Spinner {
  // ------------------------------------------------------------------------------
  // Private Properties
  // ------------------------------------------------------------------------------

  #frames: SpinnerStyle['frames'];
  #interval: SpinnerStyle['interval'];
  #currentFrame = -1;
  #timer: ReturnType<typeof setInterval> | undefined = undefined;
  #text: string;
  #stream: WriteStream;
  #color: ForegroundColors;
  #lines = 0;
  #isInteractive: boolean;
  #exitHandlerBound: (signal: string) => void;
  #lastSpinnerFrameTime = 0;

  constructor(options: Options = {}) {
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

  #symbolStop(symbol: string, text: string = this.#text): this {
    return this.stop(`${symbol} ${text}`);
  }

  #render(): void {
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

  #write(text: string): void {
    this.#stream.write(text);
  }

  #lineCount(text: string): number {
    const width = this.#stream.columns ?? 80;
    const lines = text.split('\n');

    let lineCount = 0;

    for (const line of lines) {
      lineCount += Math.max(1, Math.ceil(line.length / width));
    }

    return lineCount;
  }

  #hideCursor(): void {
    if (this.#isInteractive) {
      this.#write('\u001B[?25l');
    }
  }

  #showCursor(): void {
    if (this.#isInteractive) {
      this.#write('\u001B[?25h');
    }
  }

  #subscribeToProcessEvents(): void {
    process.once('SIGINT', this.#exitHandlerBound);
    process.once('SIGTERM', this.#exitHandlerBound);
  }

  #unsubscribeFromProcessEvents(): void {
    process.off('SIGINT', this.#exitHandlerBound);
    process.off('SIGTERM', this.#exitHandlerBound);
  }

  #exitHandler(signal: string): void {
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
   * @param text The text to display next to the spinner.
   * @returns The spinner instance.
   */
  start(text?: string): this {
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
   * @param finalText The final text to display after stopping the spinner.
   * @returns The spinner instance.
   */
  stop(finalText?: string): this {
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
   * @param text The success message to display.
   * @returns The spinner instance.
   */
  success(text?: string): this {
    return this.#symbolStop(successIcon, text);
  }

  /**
   * Stops the spinner and displays an error symbol with the message.
   *
   * @param text The error message to display.
   * @returns The spinner instance.
   */
  error(text?: string): this {
    return this.#symbolStop(errorIcon, text);
  }

  /**
   * Stops the spinner and displays a warning symbol with the message.
   *
   * @param text The warning message to display.
   * @returns The spinner instance.
   */
  warning(text?: string): this {
    return this.#symbolStop(warningIcon, text);
  }

  /**
   * Stops the spinner and displays an info symbol with the message.
   *
   * @param text The info message to display.
   * @returns The spinner instance.
   */
  info(text?: string): this {
    return this.#symbolStop(infoIcon, text);
  }

  /**
   * Clears the spinner.
   *
   * @returns The spinner instance.
   */
  clear(): this {
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
  get text(): string {
    return this.#text;
  }

  /**
   * Change the text displayed next to the spinner.
   *
   * @example
   * spinner.text = 'New text';
   */
  set text(value: string) {
    this.#text = value ?? '';
    this.#render();
  }

  /**
   * Change the spinner color.
   */
  get color(): ForegroundColors {
    return this.#color;
  }

  /**
   * Change the spinner color.
   */
  set color(value: ForegroundColors) {
    this.#color = value;
    this.#render();
  }

  /**
   * Returns whether the spinner is currently spinning.
   */
  get isSpinning(): boolean {
    return this.#timer !== undefined;
  }
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Create a new spinner instance.
 *
 * @param options The spinner options.
 * @returns A new spinner instance.
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
export default function createSpinner(options?: Options): Spinner {
  return new Spinner(options);
}
