/**
 * @fileoverview CLI configurations for `create-bananass`.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { createRequire } from 'node:module';

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

/** @type {{ description: string, homepage: string, name: string, version: string }} */
const { description, homepage, name, version } = createRequire(import.meta.url)(
  '../package.json',
);

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export default /** @type {const} */ ({
  version,

  description: `
Usage: ${name} [directory] [options]

${description} (${homepage})`,

  arguments: [
    {
      directory: {
        type: 'string',
        default: '.',
        description: 'the directory in which this project should be located',
      },
    },
  ],

  options: {
    help: {
      type: 'boolean',
      short: 'h',
      default: false,
      description: 'display help for command',
    },
    version: {
      type: 'boolean',
      short: 'v',
      default: false,
      description: 'output the version number',
    },
    debug: {
      type: 'boolean',
      short: 'd',
      default: false,
      description: 'enable debug mode',
    },
    quiet: {
      type: 'boolean',
      short: 'q',
      default: false,
      description: 'enable quiet mode',
    },
    force: {
      type: 'boolean',
      short: 'f',
      default: false,
      description: 'create a project even if the directory is not empty',
    },
    yes: {
      type: 'boolean',
      short: 'y',
      default: false,
      description: 'skip all prompts and accept only cli options',
    },
    cjs: {
      type: 'boolean',
      short: 'c',
      default: false,
      description: 'initialize as a commonjs project',
    },
    typescript: {
      type: 'boolean',
      short: 't',
      default: false,
      description: 'initialize as a typescript project',
    },
    'skip-vsc': {
      type: 'boolean',
      default: false,
      description: 'skip initializing visual studio code',
    },
    'skip-git': {
      type: 'boolean',
      default: false,
      description: 'skip initializing git',
    },
    'skip-install': {
      type: 'boolean',
      default: false,
      description: 'skip installing packages with npm',
    },
  },
});
