import path from 'node:path';
import { createRequire } from 'node:module';

import loadPackageJsonFile from './load-package-json-file.js';
import { JS_EXT_ARRAY } from '../constants.js';

export default async function loadBananassConfigFile(
  pathToBananassConfigFile,
  pathToPackageJsonFile,
) {
  const { type } = loadPackageJsonFile(pathToPackageJsonFile);
  const ext = path.extname(pathToBananassConfigFile);

  switch (ext) {
    case '.js': {
      if (type === 'module') {
        return await import(`file://${pathToBananassConfigFile}`);
      }

      return createRequire(import.meta.url)(pathToBananassConfigFile);
    }

    case '.cjs':
      return createRequire(import.meta.url)(pathToBananassConfigFile);

    case '.mjs':
      return await import(`file://${pathToBananassConfigFile}`);

    default:
      throw new Error(
        `Invalid file extension: \`${ext}\`. Only ${JS_EXT_ARRAY.join(', ')} are supported.`,
      );
  }
}
