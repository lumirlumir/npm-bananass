/**
 * @fileoverview Minimal text and confirmation prompts for project creation.
 */

import { on } from 'node:events';
import { createInterface, cursorTo, emitKeypressEvents, type Key } from 'node:readline';
import { PassThrough } from 'node:stream';
import type { ReadStream, WriteStream } from 'node:tty';
import { styleText } from 'node:util';
import { errorIcon, successIcon } from 'bananass-utils-console/icons';
import isUnicodeSupported from 'bananass-utils-console/is-unicode-supported';

type Options = { type: 'text'; placeholder: string } | { type: 'confirm' };

interface Streams {
  input: ReadStream;
  output: WriteStream;
}

export default function prompt(
  message: string,
  options: Extract<Options, { type: 'text' }>,
  streams?: Streams,
): Promise<string>;
export default function prompt(
  message: string,
  options: Extract<Options, { type: 'confirm' }>,
  streams?: Streams,
): Promise<boolean>;
export default async function prompt(
  message: string,
  options: Options,
  { input, output }: Streams = { input: process.stdin, output: process.stdout },
): Promise<string | boolean> {
  const wasRaw = input.isRaw;
  const wasFlowing = input.readableFlowing === true;
  const unicode = isUnicodeSupported();
  const controller = new AbortController();
  const cancelled = new Error('Prompt cancelled.');
  const cancel = () => controller.abort();
  // Only forward text-editing keys to readline; confirmation keys stay out of its buffer.
  const editingInput = new PassThrough();
  const readline = createInterface({
    input: editingInput,
    output,
    terminal: true,
    prompt: '',
    historySize: 0,
  });
  let confirmed = false;

  function render() {
    if (options.type === 'confirm') {
      const choices = ['Yes', 'No'].map((label, index) => {
        const active = confirmed === (index === 0);
        const icon = unicode ? (active ? '●' : '○') : active ? '*' : ' ';
        return styleText(active ? 'green' : 'dim', `${icon} ${label}`);
      });
      readline.setPrompt(choices.join(' / '));
    }
    readline.prompt(true);
    if (options.type === 'text' && !readline.line) {
      // Keep the placeholder on one row, even for double-width characters.
      const limit = Math.max(0, Math.floor(((output.columns || 80) - 1) / 2));
      output.write(styleText('dim', [...options.placeholder].slice(0, limit).join('')));
      cursorTo(output, 0);
    }
  }

  function showResult(text: string) {
    readline.write(null, { ctrl: true, name: 'e' });
    readline.write(null, { ctrl: true, name: 'u' });
    readline.setPrompt(text);
    readline.prompt();
    output.write('\n\n');
  }

  try {
    output.write(`${styleText('cyan', unicode ? '❯' : '>')} ${message}\n`);
    if (options.type === 'confirm') output.write('\u001B[?25l');
    output.on('resize', render);
    process.once('SIGINT', cancel);
    process.once('SIGTERM', cancel);
    emitKeypressEvents(input);
    input.setRawMode(true);
    input.resume();
    render();
    const keys = on(input, 'keypress', { signal: controller.signal, close: ['end'] });

    for await (const [value, key] of keys as AsyncIterable<[string | undefined, Key]>) {
      if (
        key.name === 'escape' ||
        (key.ctrl && (key.name === 'c' || (key.name === 'd' && !readline.line)))
      )
        throw cancelled;

      const answerKey =
        options.type === 'confirm' &&
        !key.ctrl &&
        !key.meta &&
        /^[yn]$/i.test(value ?? '');
      if (answerKey) confirmed = value?.toLowerCase() === 'y';
      if (answerKey || key.name === 'return' || key.name === 'enter') {
        const answer =
          options.type === 'text' ? readline.line || options.placeholder : confirmed;
        showResult(
          `${successIcon} ${styleText('dim', typeof answer === 'string' ? answer : answer ? 'Yes' : 'No')}`,
        );
        return answer;
      }
      if (options.type === 'confirm') {
        if (['left', 'right', 'up', 'down'].includes(key.name ?? ''))
          confirmed = !confirmed;
      } else if (key.name === 'tab') {
        if (!readline.line) readline.write(options.placeholder);
      } else {
        readline.write(value ?? null, key);
      }
      render();
    }
    throw cancelled;
  } catch (err) {
    const failure = controller.signal.aborted ? cancelled : err;
    showResult(
      `${errorIcon} ${failure instanceof Error ? failure.message : String(failure)}`,
    );
    throw failure;
  } finally {
    output.off('resize', render);
    process.off('SIGINT', cancel);
    process.off('SIGTERM', cancel);
    readline.close();
    editingInput.destroy();
    input.setRawMode(wasRaw);
    if (!wasFlowing) input.pause();
    output.write('\u001B[?25h');
  }
}
