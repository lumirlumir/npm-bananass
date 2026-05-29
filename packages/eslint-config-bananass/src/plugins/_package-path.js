// @ts-nocheck -- TODO: Code was simply copied and pasted. Type annotations will be modified later.

import { dirname } from 'node:path';
import { getPhysicalFilename } from 'eslint-module-utils/contextCompat';
import pkgUpModule from 'eslint-module-utils/pkgUp';
import readPkgUpModule from 'eslint-module-utils/readPkgUp';

const pkgUp = pkgUpModule.default ?? pkgUpModule;
const readPkgUp = readPkgUpModule.default ?? readPkgUpModule;

export function getFilePackagePath(filePath) {
  const fp = pkgUp({ cwd: filePath });
  return dirname(fp);
}

export function getContextPackagePath(context) {
  return getFilePackagePath(getPhysicalFilename(context));
}

export function getFilePackageName(filePath) {
  const { pkg, path } = readPkgUp({ cwd: filePath, normalize: false });
  if (pkg) {
    // recursion in case of intermediate esm package.json without name found
    return pkg.name || getFilePackageName(dirname(dirname(path)));
  }
  return null;
}
