/**
 * @fileoverview CLI configurations for `create-bananass`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import pkg from '../package.json' with { type: 'json' };

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const directoryDefault = '.';

export const options = /** @type {const} */ ({
  // Init Options
  force: {
    type: 'boolean',
    short: 'f',
    default: false,
  },
  yes: {
    type: 'boolean',
    short: 'y',
    default: false,
  },
  cjs: {
    type: 'boolean',
    short: 'c',
    default: false,
  },
  typescript: {
    type: 'boolean',
    short: 't',
    default: false,
  },
  'skip-vsc': {
    type: 'boolean',
    default: false,
  },
  'skip-git': {
    type: 'boolean',
    default: false,
  },
  'skip-install': {
    type: 'boolean',
    default: false,
  },

  // Console Options
  debug: {
    type: 'boolean',
    short: 'd',
    default: false,
  },
  quiet: {
    type: 'boolean',
    short: 'q',
    default: false,
  },

  // General Options
  version: {
    type: 'boolean',
    short: 'v',
    default: false,
  },
  help: {
    type: 'boolean',
    short: 'h',
    default: false,
  },
});

export const { version } = pkg;

export const help = `
Usage: ${pkg.name} [directory] [options]

${pkg.description} (${pkg.homepage})

Arguments:
  directory         the directory in which this project should be located (default: "${directoryDefault}")

Init Options:
  -f, --force       create a project even if the directory is not empty (default: ${options.force.default})
  -y, --yes         skip all prompts and accept only cli options (default: ${options.yes.default})
  -c, --cjs         initialize as a commonjs project (default: ${options.cjs.default})
  -t, --typescript  initialize as a typescript project (default: ${options.typescript.default})
  --skip-vsc        skip initializing visual studio code (default: ${options['skip-vsc'].default})
  --skip-git        skip initializing git (default: ${options['skip-git'].default})
  --skip-install    skip installing packages with npm (default: ${options['skip-install'].default})

Console Options:
  -d, --debug       enable debug mode (default: ${options.debug.default})
  -q, --quiet       enable quiet mode (default: ${options.quiet.default})

General Options:
  -v, --version     output the version number (default: ${options.version.default})
  -h, --help        display help for command (default: ${options.help.default})
`.trimEnd();
