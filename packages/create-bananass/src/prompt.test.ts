/**
 * @fileoverview Test the actual keyboard input and terminal cleanup of prompts.
 */

import { deepStrictEqual, match, rejects, strictEqual } from 'node:assert/strict';
import { PassThrough } from 'node:stream';
import { after, before, describe, it } from 'node:test';
import type { ReadStream, WriteStream } from 'node:tty';
import { stripVTControlCharacters } from 'node:util';
import prompt from './prompt.ts';

function createTerminal(pauseInput = true) {
  const input = Object.assign(new PassThrough(), {
    isTTY: true,
    isRaw: false,
    setRawMode(mode: boolean) {
      this.isRaw = mode;
      return this;
    },
  });
  const output = Object.assign(new PassThrough(), { columns: 80 });
  if (pauseInput) input.pause();
  let content = '';
  output.on('data', chunk => {
    content += chunk.toString();
  });

  return {
    input,
    output,
    streams: {
      input: input as unknown as ReadStream,
      output: output as unknown as WriteStream,
    },
    read: () => stripVTControlCharacters(content),
    raw: () => content,
  };
}

describe('prompt', () => {
  const originalTerm = process.env.TERM;

  before(() => {
    process.env.TERM = 'xterm-256color';
  });

  after(() => {
    if (originalTerm === undefined) delete process.env.TERM;
    else process.env.TERM = originalTerm;
  });

  it('returns the directory entered with the keyboard', async () => {
    const terminal = createTerminal();
    const answer = prompt(
      'Directory?',
      { type: 'text', placeholder: '.' },
      terminal.streams,
    );
    terminal.input.write('my-project\r');

    strictEqual(await answer, 'my-project');
    match(terminal.read(), /Directory\?/);
    match(terminal.read(), /my-project\n\n$/);
  });

  it('accepts the displayed directory when Enter is pressed without text', async () => {
    const terminal = createTerminal();
    const answer = prompt(
      'Directory?',
      { type: 'text', placeholder: 'default-project' },
      terminal.streams,
    );
    terminal.input.write('\r');

    strictEqual(await answer, 'default-project');
  });

  it('fills the default directory with Tab and allows appending a path', async () => {
    const terminal = createTerminal();
    const answer = prompt(
      'Directory?',
      { type: 'text', placeholder: 'projects' },
      terminal.streams,
    );
    terminal.input.write('\t/new\r');

    strictEqual(await answer, 'projects/new');
  });

  it('preserves native cursor movement and deletion while editing text', async () => {
    const terminal = createTerminal();
    const answer = prompt(
      'Directory?',
      { type: 'text', placeholder: '.' },
      terminal.streams,
    );
    terminal.input.write('projecX\u001B[D\u001B[3~t\r');

    strictEqual(await answer, 'project');
  });

  it('preserves Korean text across terminal wrapping and resizing', async () => {
    const terminal = createTerminal();
    terminal.output.columns = 10;
    const answer = prompt(
      'Directory?',
      { type: 'text', placeholder: '.' },
      terminal.streams,
    );
    terminal.input.write('프로젝트/연습');
    terminal.output.columns = 8;
    terminal.output.emit('resize');
    terminal.input.write('\r');

    strictEqual(await answer, '프로젝트/연습');
    match(terminal.read(), /프로젝트\/연습\n\n$/);
  });

  it('defaults confirmation to No when Enter is pressed', async () => {
    const terminal = createTerminal();
    const answer = prompt('Use TypeScript?', { type: 'confirm' }, terminal.streams);
    match(terminal.read(), /Yes \/ [●*] No/u);
    terminal.input.write('\r');

    strictEqual(await answer, false);
    match(terminal.read(), /No\n\n$/);
  });

  it('selects Yes with an arrow key and submits with Enter', async () => {
    const terminal = createTerminal();
    const answer = prompt('Use TypeScript?', { type: 'confirm' }, terminal.streams);
    terminal.input.write('\u001B[D\r');

    strictEqual(await answer, true);
    match(terminal.read(), /Yes\n\n$/);
  });

  it('toggles back to No with a second arrow key', async () => {
    const terminal = createTerminal();
    const answer = prompt('Use TypeScript?', { type: 'confirm' }, terminal.streams);
    terminal.input.write('\u001B[A\u001B[B\r');

    strictEqual(await answer, false);
  });

  it('accepts uppercase Y immediately without Enter', async () => {
    const terminal = createTerminal();
    const answer = prompt('Use TypeScript?', { type: 'confirm' }, terminal.streams);
    terminal.input.write('Y');

    strictEqual(await answer, true);
  });

  it('accepts n immediately after Yes has been selected', async () => {
    const terminal = createTerminal();
    const answer = prompt('Use TypeScript?', { type: 'confirm' }, terminal.streams);
    terminal.input.write('\u001B[Cn');

    strictEqual(await answer, false);
  });

  it('ignores unrelated text in confirmation prompts', async () => {
    const terminal = createTerminal();
    const answer = prompt('Use TypeScript?', { type: 'confirm' }, terminal.streams);
    terminal.input.write('hello\r');

    strictEqual(await answer, false);
  });

  it('rejects Ctrl+C and restores terminal state and event listeners', async () => {
    const terminal = createTerminal();
    const signalListeners = [
      process.listenerCount('SIGINT'),
      process.listenerCount('SIGTERM'),
    ];
    const answer = prompt(
      'Directory?',
      { type: 'text', placeholder: '.' },
      terminal.streams,
    );
    const cancelled = rejects(answer, /Prompt cancelled\./);
    terminal.input.write('\u0003');
    await cancelled;

    strictEqual(terminal.input.isRaw, false);
    strictEqual(terminal.input.isPaused(), true);
    strictEqual(terminal.input.listenerCount('keypress'), 0);
    strictEqual(terminal.output.listenerCount('resize'), 0);
    deepStrictEqual(
      [process.listenerCount('SIGINT'), process.listenerCount('SIGTERM')],
      signalListeners,
    );
    strictEqual(terminal.raw().endsWith('\u001B[?25h'), true);
  });

  it('rejects Escape in a confirmation prompt', async () => {
    const terminal = createTerminal();
    const answer = prompt('Use TypeScript?', { type: 'confirm' }, terminal.streams);
    const cancelled = rejects(answer, /Prompt cancelled\./);
    terminal.input.write('\u001B');

    await cancelled;
    strictEqual(terminal.input.isRaw, false);
  });

  it('rejects when input ends before an answer is submitted', async () => {
    const terminal = createTerminal();
    const answer = prompt(
      'Directory?',
      { type: 'text', placeholder: '.' },
      terminal.streams,
    );
    const cancelled = rejects(answer, /Prompt cancelled\./);
    terminal.input.end();

    await cancelled;
  });

  it('rejects Ctrl+D on an empty text input and restores raw mode', async () => {
    const terminal = createTerminal();
    const answer = prompt(
      'Directory?',
      { type: 'text', placeholder: '.' },
      terminal.streams,
    );
    const cancelled = rejects(answer, /Prompt cancelled\./);
    terminal.input.write('\u0004');

    await cancelled;
    strictEqual(terminal.input.isRaw, false);
  });

  it('cleans up a failed input stream and rejects with its error', async () => {
    const terminal = createTerminal();
    const answer = prompt(
      'Directory?',
      { type: 'text', placeholder: '.' },
      terminal.streams,
    );
    const failed = rejects(answer, /Input failed/);
    terminal.input.emit('error', new Error('Input failed'));

    await failed;
    strictEqual(terminal.input.isRaw, false);
  });

  it('restores an existing raw mode after a successful answer', async () => {
    const terminal = createTerminal();
    terminal.input.isRaw = true;
    const answer = prompt('Use TypeScript?', { type: 'confirm' }, terminal.streams);
    terminal.input.write('y');

    strictEqual(await answer, true);
    strictEqual(terminal.input.isRaw, true);
  });

  it('pauses an initially idle input so the process can exit after answering', async () => {
    const terminal = createTerminal(false);
    strictEqual(terminal.input.readableFlowing, null);
    const answer = prompt('Use TypeScript?', { type: 'confirm' }, terminal.streams);
    terminal.input.write('y');

    strictEqual(await answer, true);
    strictEqual(terminal.input.isPaused(), true);
  });

  it('rejects a termination signal and restores the terminal', async () => {
    const terminal = createTerminal();
    const answer = prompt('Use TypeScript?', { type: 'confirm' }, terminal.streams);
    const cancelled = rejects(answer, /Prompt cancelled\./);
    process.emit('SIGTERM', 'SIGTERM');

    await cancelled;
    strictEqual(terminal.input.isRaw, false);
    strictEqual(terminal.input.listenerCount('keypress'), 0);
  });

  it('runs successive prompts without retaining earlier input handlers', async () => {
    const terminal = createTerminal();
    const first = prompt('First?', { type: 'confirm' }, terminal.streams);
    terminal.input.write('y');
    strictEqual(await first, true);

    const second = prompt('Second?', { type: 'confirm' }, terminal.streams);
    terminal.input.write('n');
    strictEqual(await second, false);
    strictEqual(terminal.input.listenerCount('keypress'), 0);
    strictEqual(terminal.output.listenerCount('resize'), 0);
  });
});
