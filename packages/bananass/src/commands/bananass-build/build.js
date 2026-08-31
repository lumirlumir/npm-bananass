/**
 * @fileoverview Asynchronously build and create bundled files using Rolldown and Babel.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { resolve } from 'node:path';
import fsPromises from 'node:fs/promises'; // DO NOT USE DESTRUCTURING syntax due to `mock` usage in test.

import { transformAsync } from '@babel/core';
import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, success, error } from 'bananass-utils-console/theme';
import { build as rolldownBuild } from 'rolldown';

import {
  transformArrayPrototypeToReversed,
  transformArrayPrototypeToSorted,
  transformObjectHasOwn,
} from '../../babel-plugins/index.js';

import { defaultConfigObject as dco } from '../../core/conf/index.js';
import {
  problems as problemsSchema,
  configObject as configObjectSchema,
} from '../../core/types/index.js';
import {
  DEFAULT_OUT_FILE_EXTENSION,
  NODE_VERSION_BAEKJOON,
  ROLLDOWN_BANNER,
  SUPPORTED_SOLUTION_FILE_EXTENSIONS,
} from '../../core/constants.js';

// --------------------------------------------------------------------------------
// Typedef
// --------------------------------------------------------------------------------

/**
 * @import { PluginItem as BabelPluginItem } from '@babel/core';
 * @import { BuildOptions as RolldownConfig, Plugin as RolldownPlugin } from 'rolldown';
 * @import { Problems, ConfigObject } from '../../core/types/index.js';
 */

// --------------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------------

/** @returns {RolldownPlugin} */
function babelPlugin() {
  return {
    name: 'bananass-babel',
    async transform(code, id) {
      if (!/\.(?:[cm]?[jt]s)(?:$|\?)/iu.test(id)) return null;

      /** @type {BabelPluginItem[]} */
      const babelPlugins = [];

      if (/\.mts$/iu.test(id)) {
        babelPlugins.push([
          '@babel/plugin-transform-typescript',
          { allowDeclareFields: true },
        ]);
      } else if (/\.(?:ts|cts)$/iu.test(id)) {
        babelPlugins.push(
          ['@babel/plugin-transform-modules-commonjs', { allowTopLevelThis: true }],
          ['@babel/plugin-transform-typescript', { allowDeclareFields: true }],
        );
      }

      const result = await transformAsync(code, {
        filename: id,
        targets: { node: NODE_VERSION_BAEKJOON },
        presets: [
          // Preset ordering is reversed (last to first).
          // https://babeljs.io/docs/presets#preset-ordering
          [
            '@babel/preset-env',
            {
              targets: { node: NODE_VERSION_BAEKJOON },
            },
          ],
        ],
        plugins: [
          // Plugin ordering is first to last.
          // https://babeljs.io/docs/plugins#plugin-ordering
          ...babelPlugins,
          transformArrayPrototypeToReversed,
          transformArrayPrototypeToSorted,
          transformObjectHasOwn,
        ],
        sourceMaps: false,
        sourceType: /\.(?:ts|cts)$/iu.test(id) ? 'unambiguous' : 'module',
      });
      return result?.code ?? null;
    },
  };
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Asynchronously build and create bundled files using Rolldown and Babel.
 * @param {Problems} problems
 * @param {ConfigObject} [configObject = dco]
 * @async
 */
export default async function build(problems, configObject = dco) {
  // ------------------------------------------------------------------------------
  // Declarations
  // ------------------------------------------------------------------------------

  const sanitizedProblems = problemsSchema.parse(problems);
  const sanitizedConfigObject = configObjectSchema.parse(configObject);

  const {
    cwd = dco.cwd,
    entryDir = dco.entryDir,
    outDir = dco.outDir,
    console: {
      debug = dco.console.debug, // (This comment was used for code formatting.)
      quiet = dco.console.quiet,
    } = dco.console,
    build: {
      clean = dco.build.clean, // (This comment was used for code formatting.)
      templateType = dco.build.templateType,
    } = dco.build,
  } = sanitizedConfigObject;

  const resolvedEntryDir = resolve(cwd, entryDir);
  const resolvedOutDir = resolve(cwd, outDir);
  const resolvedRolldownEntryFile = resolve(
    import.meta.dirname,
    `template-${templateType}.cjs`,
  );

  const logger = createLogger({ debug, quiet });
  const spinner = createSpinner();

  // ------------------------------------------------------------------------------
  // CLI Animation
  // ------------------------------------------------------------------------------

  // Ensure correct `this` binding for `spinner.start` using arrow function. (Or use `apply`, `call` or `bind` method.)
  logger.log(() => spinner.start(bananass('Bananass build is running...', true)));

  // ------------------------------------------------------------------------------
  // Rolldown Configs
  // ------------------------------------------------------------------------------

  /** @type {RolldownConfig[]} */
  const rolldownConfigs = sanitizedProblems.map(
    problem =>
      /** @type {RolldownConfig} */ ({
        platform: 'node',

        resolve: {
          extensions: [...SUPPORTED_SOLUTION_FILE_EXTENSIONS],
        },

        input: resolvedRolldownEntryFile,

        output: {
          file: resolve(resolvedOutDir, `${problem}${DEFAULT_OUT_FILE_EXTENSION}`),
          format: 'cjs',
          minify: true,
          postBanner: ROLLDOWN_BANNER,
        },

        plugins: [babelPlugin()],

        transform: {
          define: {
            'globalThis.BAEKJOON_PROBLEM_NUMBER_WITH_PATH': JSON.stringify(
              resolve(resolvedEntryDir, problem),
            ),
            'globalThis.IS_PROD': JSON.stringify(true),
            'process.env.NODE_ENV': JSON.stringify('production'),
          },
        },
      }),
  );

  // ------------------------------------------------------------------------------
  // Clean Output Directory
  // ------------------------------------------------------------------------------

  try {
    // Clean the output directory before emitting files.
    if (clean) await fsPromises.rm(resolvedOutDir, { recursive: true, force: true });
  } catch (err) {
    logger.log(() => spinner.error(error('Failed to clean output directory')));

    const message = err instanceof Error ? err.message : String(err);
    throw new Error(error(message, true));
  }

  // ------------------------------------------------------------------------------
  // Run Rolldown
  // ------------------------------------------------------------------------------

  try {
    await rolldownBuild(rolldownConfigs);
  } catch (err) {
    logger.log(() => spinner.error(error('Failed to run Rolldown')));

    const message = err instanceof Error ? err.message : String(err);
    const normalizedMessage = message.includes('[UNRESOLVED_IMPORT]')
      ? `The requested module doesn't exist.\n${message}`
      : message;
    throw new Error(error(normalizedMessage, true));
  }

  // ------------------------------------------------------------------------------
  // Exit
  // ------------------------------------------------------------------------------

  logger
    .log(() => spinner.success(success('Bananass build completed successfully')))
    .eol()
    .log('Output Directory:', resolvedOutDir)
    .log(
      'Created:',
      sanitizedProblems
        .map(problem => `${problem}${DEFAULT_OUT_FILE_EXTENSION}`)
        .join(', '),
    );
}
