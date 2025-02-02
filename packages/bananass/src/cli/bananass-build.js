// import logger from 'bananass-utils-console/logger';

// import { build } from '../commands/index.js';
// import { ENTRY_DIR_NAME_ARRAY, OUTPUT_DIR_NAME_ARRAY } from '../core/constants.js';

// /**
//  * Build.
//  *
//  * `npx bananass build` command.
//  */
// program
//   .command('build')
//   .description(
//     `build and create bundled files using Webpack from the ${ENTRY_DIR_NAME_ARRAY.join(', ')} directory and outputs them to the ${OUTPUT_DIR_NAME_ARRAY.join(', ')} directory`,
//   )
//   .argument('[problems...]', 'baekjoon problem number list', null)
//   .option('-c, --clean', 'clean the output directory before emit', false)
//   .option('-D, --debug', 'enable debug mode', false)
//   .option('-q, --quiet', 'enable quiet mode', false)
//   .action(async (problems, options, command) => {
//     logger(options)
//       .debug('command:', command.name())
//       .debug('problems:', problems)
//       .debug('options:', options)
//       .eol();

//     // await build(problems, options);
//   });
