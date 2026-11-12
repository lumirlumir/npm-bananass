/**
 * @fileoverview Asynchronously build and create bundled files.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { resolve } from 'node:path';
import fsp from 'node:fs/promises'; // DO NOT USE DESTRUCTURING syntax due to `mock` usage in test.

import { transformAsync } from '@babel/core';
import transformModulesCommonjs from '@babel/plugin-transform-modules-commonjs';
import presetEnv from '@babel/preset-env';
import createLogger from 'bananass-utils-console/logger';
import createSpinner from 'bananass-utils-console/spinner';
import { bananass, success, error } from 'bananass-utils-console/theme';
import { build as rolldownBuild } from 'rolldown';
import { transformSync } from 'rolldown/utils';

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
  BANNER,
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

/** @returns {RolldownPlugin<never>} */
function babelPlugin() {
  return {
    name: 'bananass-babel',

    async transform(code, id) {
      // Transform JavaScript and TypeScript files only.
      if (!/\.(?:js|mjs|cjs|ts|mts|cts)$/iu.test(id)) return null;

      let sourceCode = code;
      if (/\.(?:ts|mts|cts)$/iu.test(id)) {
        // Strip types before Babel's module and syntax transforms run.
        // Rolldown's automatic TypeScript transform runs after plugin hooks.
        const transformed = transformSync(id, code, { tsconfig: false });
        if (transformed.errors.length > 0) this.error(transformed.errors[0]);
        sourceCode = transformed.code;
      }

      /** @type {BabelPluginItem[]} */
      const babelPlugins = [];
      /** @type {'module' | 'unambiguous'} */
      let sourceType = 'module';

      if (/\.(?:ts|cts)$/iu.test(id)) {
        babelPlugins.push([transformModulesCommonjs, { allowTopLevelThis: true }]);
        sourceType = 'unambiguous';
      }

      const result = await transformAsync(sourceCode, {
        filename: id,
        targets: { node: NODE_VERSION_BAEKJOON },
        presets: [
          // Preset ordering is reversed (last to first).
          // https://babeljs.io/docs/presets#preset-ordering
          [
            presetEnv,
            {
              targets: { node: NODE_VERSION_BAEKJOON },
              modules: 'commonjs',
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
        sourceType,
      });

      return result?.code ?? null;
    },
  };
}

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Asynchronously build and create bundled files.
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
  const resolvedEntryFile = resolve(import.meta.dirname, `template-${templateType}.cjs`);

  const logger = createLogger({ debug, quiet });
  const spinner = createSpinner();

  // ------------------------------------------------------------------------------
  // CLI Animation
  // ------------------------------------------------------------------------------

  // Ensure correct `this` binding for `spinner.start` using arrow function. (Or use `apply`, `call` or `bind` method.)
  logger.log(() => spinner.start(bananass('Bananass build is running...', true)));

  // ------------------------------------------------------------------------------
  // Bundler Configs
  // ------------------------------------------------------------------------------

  /** @type {RolldownConfig[]} */
  const rolldownConfigs = sanitizedProblems.map(
    problem =>
      /** @type {RolldownConfig} */ ({
        platform: 'node',

        resolve: {
          extensions: [...SUPPORTED_SOLUTION_FILE_EXTENSIONS],
        },

        input: resolvedEntryFile,

        output: {
          file: resolve(resolvedOutDir, `${problem}${DEFAULT_OUT_FILE_EXTENSION}`),
          format: 'cjs',
          minify: true,
          postBanner: BANNER,
        },

        plugins: [babelPlugin()],

        transform: {
          define: {
            'globalThis.BAEKJOON_PROBLEM_NUMBER_WITH_PATH': JSON.stringify(
              resolve(resolvedEntryDir, problem),
            ),
            'globalThis.IS_PROD': JSON.stringify(true), // Same with `process.env.NODE_ENV === 'production'`.
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
    if (clean) await fsp.rm(resolvedOutDir, { recursive: true, force: true });
  } catch (err) {
    logger.log(() => spinner.error(error('Failed to clean output directory')));

    const message = err instanceof Error ? err.message : String(err);
    throw new Error(error(message, true));
  }

  // ------------------------------------------------------------------------------
  // Run Bundler
  // ------------------------------------------------------------------------------

  try {
    await rolldownBuild(rolldownConfigs);
  } catch (err) {
    logger.log(() => spinner.error(error('Failed to run Rolldown')));

    const message = err instanceof Error ? err.message : String(err);
    throw new Error(error(message, true));
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
