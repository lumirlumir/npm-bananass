/**
 * @fileoverview This example shows how to use `readline` module.
 * For more information, see https://nodejs.org/api/readline.html.
 *
 * Event `close`: https://nodejs.org/api/readline.html#event-close
 * Event `line`: https://nodejs.org/api/readline.html#event-line
 * `readline.createInterface(options)`: https://nodejs.org/api/readline.html#readlinecreateinterfaceoptions
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { createInterface } = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('node:console');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const rl = createInterface({ input, output });

// --------------------------------------------------------------------------------
// Event Listening
// --------------------------------------------------------------------------------

log("Type 'close' to quit");

rl.on('line', line => {
  log(`Received: ${line}`);

  if (line === 'close') rl.close();
}).on('close', () => {
  log('Closed!');
});
