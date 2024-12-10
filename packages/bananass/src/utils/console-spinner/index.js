/**
 * @fileoverview
 *
 * `is-unicode-supported` package: {@link https://github.com/sindresorhus/is-unicode-supported}
 * `yocto-spinner` package: {@link https://github.com/sindresorhus/yocto-spinner}
 */

/* eslint-disable */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const process = require('node:process');
const c = require('ansi-colors');

// --------------------------------------------------------------------------------
// Variables
// --------------------------------------------------------------------------------

const isUnicodeSupported =
  process.platform !== 'win32'
    ? process.env.TERM !== 'linux'
    : Boolean(process.env.WT_SESSION) ||
      Boolean(process.env.TERMINUS_SUBLIME) ||
      process.env.ConEmuTask === '{cmd::Cmder}' ||
      process.env.TERM_PROGRAM === 'Terminus-Sublime' ||
      process.env.TERM_PROGRAM === 'vscode' ||
      process.env.TERM === 'xterm-256color' ||
      process.env.TERM === 'alacritty' ||
      process.env.TERM === 'rxvt-unicode' ||
      process.env.TERM === 'rxvt-unicode-256color' ||
      process.env.TERMINAL_EMULATOR === 'JetBrains-JediTerm';

const isInteractive = stream =>
  Boolean(stream.isTTY && process.env.TERM !== 'dumb' && !('CI' in process.env));

const infoSymbol = c.blue(isUnicodeSupported ? 'ℹ' : 'i');
const successSymbol = c.green(isUnicodeSupported ? '✔' : '√');
const warningSymbol = c.yellow(isUnicodeSupported ? '⚠' : '‼');
const errorSymbol = c.red(isUnicodeSupported ? '✖️' : '×');

const defaultSpinner = {
  frames: isUnicodeSupported
    ? ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
    : ['-', '\\', '|', '/'],
  interval: 80,
};

// --------------------------------------------------------------------------------
// Class
// --------------------------------------------------------------------------------

class YoctoSpinner {
  #frames;
  #interval;
  #currentFrame = -1;
  #timer;
  #text;
  #stream;
  #color;
  #lines = 0;
  #exitHandlerBound;
  #isInteractive;
  #lastSpinnerFrameTime = 0;

  constructor(options = {}) {
    const spinner = options.spinner ?? defaultSpinner;
    this.#frames = spinner.frames;
    this.#interval = spinner.interval;
    this.#text = options.text ?? '';
    this.#stream = options.stream ?? process.stderr;
    this.#color = options.color ?? 'cyan';
    this.#isInteractive = isInteractive(this.#stream);
    this.#exitHandlerBound = this.#exitHandler.bind(this);
  }

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

  #symbolStop(symbol, text) {
    return this.stop(`${symbol} ${text ?? this.#text}`);
  }

  success(text) {
    return this.#symbolStop(successSymbol, text);
  }

  error(text) {
    return this.#symbolStop(errorSymbol, text);
  }

  warning(text) {
    return this.#symbolStop(warningSymbol, text);
  }

  info(text) {
    return this.#symbolStop(infoSymbol, text);
  }

  get isSpinning() {
    return this.#timer !== undefined;
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

    // SIGINT: 128 + 2
    // SIGTERM: 128 + 15
    const exitCode = signal === 'SIGINT' ? 130 : signal === 'SIGTERM' ? 143 : 1;
    process.exit(exitCode);
  }
}

module.exports = function yoctoSpinner(options) {
  return new YoctoSpinner(options);
};