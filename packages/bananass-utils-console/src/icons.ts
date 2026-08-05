/**
 * @fileoverview Console icons.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { styleText } from 'node:util';
import isUnicodeSupported from './is-unicode-supported.ts';

// --------------------------------------------------------------------------------
// Typedef
// --------------------------------------------------------------------------------

/**
 * Defines the frames and interval of a spinner.
 */
export interface SpinnerStyle {
  /**
   * The frames displayed sequentially to animate the spinner.
   */
  frames: string[];

  /**
   * The interval between frames, in milliseconds.
   */
  interval: number;
}

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

/**
 * @param unicode Used when Unicode is supported.
 * @param ascii Used when Unicode is not supported.
 */
function choose<T extends string | string[]>(unicode: T, ascii: T): T {
  return isUnicodeSupported() ? unicode : ascii;
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const successIcon: string = styleText(['green', 'bold'], choose('✓', 'V'));
export const errorIcon: string = styleText(['red', 'bold'], choose('✕', 'X'));
export const warningIcon: string = styleText(['yellow', 'bold'], choose('⚠', '!'));
export const infoIcon: string = styleText(['blue', 'bold'], choose('✦', 'i'));
export const bananassIcon: string = choose('🍌', '');
export const bulletIcon: string = choose('\u2022', '*');
export const boxDrawingsLightHorizontalIcon: string = choose('\u2500', '-');

// --------------------------------------------------------------------------------

export const successText: string = styleText(
  ['white', 'bgGreen', 'bold'],
  ` ${successIcon} SUCCESS `,
);
export const errorText: string = styleText(
  ['white', 'bgRed', 'bold'],
  ` ${errorIcon} ERROR `,
);
export const warningText: string = styleText(
  ['white', 'bgYellow', 'bold'],
  ` ${warningIcon} WARN `,
);
export const infoText: string = styleText(
  ['white', 'bgBlue', 'bold'],
  ` ${infoIcon} INFO `,
);

// --------------------------------------------------------------------------------

export const defaultSpinner = {
  frames: choose(
    ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
    ['-', '\\', '|', '/'],
  ),
  interval: 80,
} as const satisfies SpinnerStyle;
