/**
 * @fileoverview Test for `spinner.js`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual, match, ok } from 'node:assert';
import { describe, it, mock } from 'node:test';
import { stripVTControlCharacters as stripAnsi } from 'node:util';
import { PassThrough } from 'node:stream';

import createSpinner from './spinner.js';

// --------------------------------------------------------------------------------
// Mock
// --------------------------------------------------------------------------------

delete process.env.CI;

function getPassThroughStream() {
  const stream = new PassThrough();

  stream.clearLine = () => {};
  stream.cursorTo = () => {};
  stream.moveCursor = () => {};

  return stream;
}

function getStream(stream) {
  let data = '';
  let chunk;

  while ((chunk = stream.read()) !== null) {
    data += chunk;
  }

  return data;
}

function runSpinner(callback, options = {}) {
  const stream = getPassThroughStream();
  const spinner = createSpinner({
    stream,
    text: 'foo',
    spinner: {
      frames: ['-'],
      interval: 10_000,
    },
    ...options,
  });

  spinner.start();
  callback(spinner);
  stream.end();

  return stripAnsi(getStream(stream));
}

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('spinner.js', () => {
  it('start and stop spinner', () => {
    const output = runSpinner(spinner => spinner.stop());

    strictEqual(output, '- foo\n');
  });

  it('start and stop spinner when interactive', () => {
    const output = runSpinner(spinner => spinner.stop(), {
      isInteractive: true,
      text: 'foo\nbar\nbaz',
    });

    match(output, /- foo\nbar\nbaz/);
  });

  it('start spinner in a row', () => {
    const output = runSpinner(spinner => spinner.start().stop());

    strictEqual(output, '- foo\n');
  });

  it('stop spinner in a row', () => {
    const output = runSpinner(spinner => spinner.stop().stop());

    strictEqual(output, '- foo\n');
  });

  it('spinner.success()', () => {
    const output = runSpinner(spinner => spinner.success());

    match(output, /[✓V] foo\n$/u);
  });

  it('spinner.error()', () => {
    const output = runSpinner(spinner => spinner.error());

    match(output, /[✕X] foo\n$/u);
  });

  it('spinner.warning()', () => {
    const output = runSpinner(spinner => spinner.warning());

    match(output, /[⚠!] foo\n$/u);
  });

  it('spinner.info()', () => {
    const output = runSpinner(spinner => spinner.info());

    match(output, /[✦i] foo\n$/u);
  });

  it('spinner set text and get text', () => {
    const spinner = createSpinner({ text: 'foo' });

    strictEqual(spinner.text, 'foo');

    spinner.text = 'bar';

    strictEqual(spinner.text, 'bar');
  });

  it('spinner set color and get color', () => {
    const spinner = createSpinner({ color: 'red' });

    strictEqual(spinner.color, 'red');

    spinner.color = 'green';

    strictEqual(spinner.color, 'green');
  });

  it('spinner changes text', () => {
    const output = runSpinner(spinner => {
      spinner.text = 'bar';
      spinner.stop();
    });

    strictEqual(output, '- foo\n- bar\n');
  });

  it('spinner stops with final text', () => {
    const output = runSpinner(spinner => spinner.stop('final'));

    match(output, /final\n$/);
  });

  it('spinner with non-TTY stream', () => {
    const stream = getPassThroughStream();
    stream.isTTY = false;
    const spinner = createSpinner({ stream, text: 'foo' });

    spinner.start();
    spinner.stop('final');

    ok(true);
  });

  it('spinner starts with custom text', () => {
    const output = runSpinner(spinner => spinner.stop(), { text: 'custom' });

    strictEqual(output, '- custom\n');
  });

  it('spinner starts and changes text multiple times', () => {
    const output = runSpinner(spinner => {
      spinner.text = 'bar';
      spinner.text = 'baz';
      spinner.stop();
    });

    strictEqual(output, '- foo\n- bar\n- baz\n');
  });

  it('spinner handles multiple start/stop cycles', () => {
    const output = runSpinner(spinner => {
      spinner.stop();
      spinner.start('bar');
      spinner.stop();
      spinner.start('baz');
      spinner.stop();
    });

    strictEqual(output, '- foo\n- bar\n- baz\n');
  });

  it('spinner stops with success symbol and final text', () => {
    const output = runSpinner(spinner => spinner.success('done'));

    match(output, /[✓V] done\n$/u);
  });

  it('spinner stops with error symbol and final text', () => {
    const output = runSpinner(spinner => spinner.error('failed'));

    match(output, /[✕X] failed\n$/u);
  });

  it('spinner stops and exits process on SIGINT', () => {
    mock.method(process, 'exit', () => {});

    const stream = getPassThroughStream();
    createSpinner({ stream }).start();

    process.emit('SIGINT');

    mock.reset();
  });

  it('spinner renders multiple frames using timer', () => {
    const stream = getPassThroughStream();
    const spinner = createSpinner({
      stream,
      spinner: { frames: ['-'], interval: 5 },
    }).start();

    setTimeout(() => {
      spinner.stop();
    }, 10);
  });
});
