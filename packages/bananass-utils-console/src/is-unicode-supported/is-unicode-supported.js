/**
 * @fileoverview Detect whether the terminal supports Unicode.
 * @module bananass-utils-console/is-unicode-supported
 * @license MIT Portions of this code were borrowed from [`is-unicode-supported`](https://github.com/sindresorhus/is-unicode-supported).
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import process from 'node:process';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Detect whether the terminal supports Unicode.
 *
 * This can be useful to decide whether to use Unicode characters or
 * fallback ASCII characters in command-line output.
 *
 * Note that the check is quite naive.
 * It just assumes all non-Windows terminals support Unicode and hard-codes
 * which Windows terminals that do support Unicode.
 * However, I have been using this logic in some popular packages for years without problems.
 *
 * @returns {boolean} Returns a `boolean` for whether the terminal supports Unicode.
 * @example
 * ```
 * import isUnicodeSupported from 'bananass-utils-console/is-unicode-supported';
 *
 * isUnicodeSupported(); // true
 * ```
 */
export default function isUnicodeSupported() {
  const { env } = process;
  const { TERM, TERM_PROGRAM } = env;

  if (process.platform !== 'win32') {
    return TERM !== 'linux'; // Linux console (kernel)
  }

  return (
    Boolean(env.WT_SESSION) || // Windows Terminal
    Boolean(env.TERMINUS_SUBLIME) || // Terminus (<0.2.27)
    env.ConEmuTask === '{cmd::Cmder}' || // ConEmu and cmder
    TERM_PROGRAM === 'Terminus-Sublime' ||
    TERM_PROGRAM === 'vscode' ||
    TERM === 'xterm-256color' ||
    TERM === 'alacritty' ||
    TERM === 'rxvt-unicode' ||
    TERM === 'rxvt-unicode-256color' ||
    env.TERMINAL_EMULATOR === 'JetBrains-JediTerm'
  );
}
