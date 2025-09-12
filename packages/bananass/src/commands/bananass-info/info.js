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

import { defaultConfigObject as dco } from '../../core/conf/index.js';
import { ConfigObject as ConfigObjectStruct } from '../../core/structs/index.js';
import { BANANASS_PKG_NAMES } from '../../core/constants.js';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { ConfigObject } from '../../core/types.js';
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Asynchronously print relevant details about the current system which can be used to report bugs.
 * @param {ConfigObject} [configObject = dco]
 * @async
 */
export default async function info(configObject = dco) {
  // ------------------------------------------------------------------------------
  // Runtime Validation
  // ------------------------------------------------------------------------------

  ConfigObjectStruct.assert(configObject);

  // ------------------------------------------------------------------------------
  // Declarations
  // ------------------------------------------------------------------------------

  const {
    console: {
      debug = dco.console.debug, // (This comment was used for code formatting.)
      quiet = dco.console.quiet,
    } = dco.console,
    info: {
      all = dco.info.all, // (This comment was used for code formatting.)
    } = dco.info,
  } = configObject;

  const logger = createLogger({ debug, quiet, textPrefix: false });

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
      // @ts-expect-error -- TODO: Ain't yet supported by `@types/envinfo`.
      Monorepos: ['Lerna', 'Yarn Workspaces'],
      npmPackages: [...BANANASS_PKG_NAMES],
      npmGlobalPackages: [...BANANASS_PKG_NAMES],
    },
    { showNotFound: all },
  );

  logger.log(env);
}
