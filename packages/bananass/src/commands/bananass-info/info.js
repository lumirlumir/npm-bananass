/**
 * @fileoverview Asynchronously print relevant details about the current system which can be used to report bugs.
 *
 * Run `npx envinfo --showNotFound` to see the list of all available options.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import createLogger from 'bananass-utils-console/logger';
import envinfo from 'envinfo';

import { ConfigObject } from '../../core/structs/index.js';
import { BANANASS_PKG_NAMES } from '../../core/constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('../../core/types.js').ConfigObject} ConfigObject
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Asynchronously print relevant details about the current system which can be used to report bugs.
 *
 * @param {ConfigObject} configObject
 * @async
 */
export default async function info(configObject) {
  // ------------------------------------------------------------------------------
  // Runtime Validation
  // ------------------------------------------------------------------------------

  ConfigObject.assert(configObject);

  // ------------------------------------------------------------------------------
  // Declarations
  // ------------------------------------------------------------------------------

  const {
    console,
    info: { all },
  } = configObject;

  const logger = createLogger({ ...console, textPrefix: false });

  // ------------------------------------------------------------------------------
  // Info
  // ------------------------------------------------------------------------------

  const env = await envinfo.run(
    {
      System: ['OS', 'CPU', 'Memory', 'Shell'],
      Binaries: ['Node', 'Yarn', 'npm', 'pnpm', 'bun'],
      Utilities: ['Git'],
      IDEs: [
        'Atom',
        'Emacs',
        'Nano',
        'Sublime Text',
        'VSCode',
        'Visual Studio',
        'Vim',
        'Xcode',
      ],
      Languages: ['Bash'],
      Browsers: [
        'Chrome',
        'Chrome Canary',
        'Firefox',
        'Firefox Developer Edition',
        'Firefox Nightly',
        'Safari',
        'Safari Technology Preview',
        'Edge',
        'Internet Explorer',
      ],
      Monorepos: ['Lerna', 'Yarn Workspaces'],
      npmPackages: BANANASS_PKG_NAMES,
      npmGlobalPackages: BANANASS_PKG_NAMES,
    },
    { showNotFound: all },
  );

  logger.log(env);
}
