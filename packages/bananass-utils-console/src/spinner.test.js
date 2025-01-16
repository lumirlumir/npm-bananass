/**
 * @fileoverview Test for `spinner.js`.
 */

/* eslint-disable no-param-reassign */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { strictEqual, match, ok } from 'node:assert';
import { describe, it } from 'node:test';
import process from 'node:process';
import { PassThrough } from 'node:stream'; // TODO: Remove `PassThrough` and replace it with stream mocking.

import getStream from 'get-stream'; // TODO: Remove `get-stream` devdependency and replace it with stream mocking.
import stripAnsi from 'strip-ansi';

import createSpinner from './spinner.js';

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

delete process.env.CI;

const getPassThroughStream = () => {
  const stream = new PassThrough();

  stream.clearLine = () => {};
  stream.cursorTo = () => {};
  stream.moveCursor = () => {};

  return stream;
};

const runSpinner = async (callback, options = {}) => {
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

  return stripAnsi(await getStream(stream));
};

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('spinner.js', () => {
  it('start and stop spinner', async () => {
    const output = await runSpinner(spinner => spinner.stop());

    strictEqual(output, '- foo\n');
  });

  it('spinner.success()', async () => {
    const output = await runSpinner(spinner => spinner.success());

    match(output, /✓ foo\n$/);
  });

  it('spinner.error()', async () => {
    const output = await runSpinner(spinner => spinner.error());

    match(output, /✕ foo\n$/);
  });

  it('spinner.warning()', async () => {
    const output = await runSpinner(spinner => spinner.warning());

    match(output, /⚠ foo\n$/);
  });

  it('spinner.info()', async () => {
    const output = await runSpinner(spinner => spinner.info());

    match(output, /✦ foo\n$/);
  });

  it('spinner changes text', async () => {
    const output = await runSpinner(spinner => {
      spinner.text = 'bar';
      spinner.stop();
    });

    strictEqual(output, '- foo\n- bar\n');
  });

  it('spinner stops with final text', async () => {
    const output = await runSpinner(spinner => spinner.stop('final'));

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

  it('spinner starts with custom text', async () => {
    const output = await runSpinner(spinner => spinner.stop(), { text: 'custom' });

    strictEqual(output, '- custom\n');
  });

  it('spinner starts and changes text multiple times', async () => {
    const output = await runSpinner(spinner => {
      spinner.text = 'bar';
      spinner.text = 'baz';
      spinner.stop();
    });

    strictEqual(output, '- foo\n- bar\n- baz\n');
  });

  it('spinner handles multiple start/stop cycles', async () => {
    const output = await runSpinner(spinner => {
      spinner.stop();
      spinner.start('bar');
      spinner.stop();
      spinner.start('baz');
      spinner.stop();
    });

    strictEqual(output, '- foo\n- bar\n- baz\n');
  });

  it('spinner stops with success symbol and final text', async () => {
    const output = await runSpinner(spinner => spinner.success('done'));

    match(output, /✓ done\n$/);
  });

  it('spinner stops with error symbol and final text', async () => {
    const output = await runSpinner(spinner => spinner.error('failed'));

    match(output, /✕ failed\n$/);
  });
});
