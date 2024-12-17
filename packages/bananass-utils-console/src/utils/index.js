/**
 * @fileoverview Utility functions and variables.
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Determines if the current terminal supports Unicode based on the OS and terminal environment variables.
 *
 * @see https://github.com/sindresorhus/is-unicode-supported
 */
export const isUnicodeSupported =
  process.platform !== 'win32'
    ? process.env.TERM !== 'linux' // Linux console (kernel)
    : Boolean(process.env.WT_SESSION) || // Windows Terminal
      Boolean(process.env.TERMINUS_SUBLIME) || // Terminus (<0.2.27)
      process.env.ConEmuTask === '{cmd::Cmder}' || // ConEmu and cmder
      process.env.TERM_PROGRAM === 'Terminus-Sublime' ||
      process.env.TERM_PROGRAM === 'vscode' ||
      process.env.TERM === 'xterm-256color' ||
      process.env.TERM === 'alacritty' ||
      process.env.TERM === 'rxvt-unicode' ||
      process.env.TERM === 'rxvt-unicode-256color' ||
      process.env.TERMINAL_EMULATOR === 'JetBrains-JediTerm';

/**
 * Checks if the given stream is in an interactive terminal based on its TTY status, terminal type, and CI environment.
 *
 * @param {object} stream The stream to check (e.g., `process.stdout` or `process.stderr`).
 * @returns {boolean} `true` if the terminal is interactive, otherwise `false`.
 * @see https://github.com/sindresorhus/is-interactive
 */
export const isInteractive = stream =>
  Boolean(stream.isTTY && process.env.TERM !== 'dumb' && !('CI' in process.env));
