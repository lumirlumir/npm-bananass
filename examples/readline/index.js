/**
 * This example shows how to use `readline` module.
 *
 * For more information, see {@link https://nodejs.org/api/readline.html}.
 *
 * - Event `'close'`: {@link https://nodejs.org/api/readline.html#event-close}
 * - Event `'line'`: {@link https://nodejs.org/api/readline.html#event-line}
 * - `readline.createInterface(options)`: {@link https://nodejs.org/api/readline.html#readlinecreateinterfaceoptions}
 */

const { createInterface } = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = createInterface({ input, output });

rl.on('line', line => {
  console.log(`Received: ${line}`);

  if (line === 'close') rl.close();
}).on('close', () => {
  console.log('Closed!');
});
