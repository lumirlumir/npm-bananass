/**
 * @fileoverview Check if stdout or stderr is interactive.
 * @module bananass-utils-console/is-interactive
 * @license MIT Portions of this code were borrowed from [`is-interactive`](https://github.com/sindresorhus/is-interactive).
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import type { WriteStream } from 'node:tty';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Check if stdout or stderr is [interactive](https://unix.stackexchange.com/a/43389/7678).
 *
 * It checks that the stream is [TTY](https://jameshfisher.com/2017/12/09/what-is-a-tty/), not a dumb terminal, and not running in a CI.
 *
 * This can be useful to decide whether to present interactive UI or animations in the terminal.
 * @param stream The stream to check. (default: `process.stdout`)
 * @returns `true` if the stream is interactive, `false` otherwise.
 * @example
 * ```js
 * import isInteractive from 'bananass-utils-console/is-interactive';
 *
 * isInteractive(); // true
 * ```
 */
export default function isInteractive(stream: WriteStream = process.stdout): boolean {
  return Boolean(
    stream && stream.isTTY && process.env.TERM !== 'dumb' && !('CI' in process.env),
  );
}
