// @ts-nocheck -- TODO: Code was simply copied and pasted. Type annotations will be modified later.

import path from 'node:path';

import readPkgUpModule from 'eslint-module-utils/readPkgUp';
import { getPhysicalFilename } from 'eslint-module-utils/contextCompat';
import resolveModule from 'eslint-module-utils/resolve';
import moduleVisitorModule, {
  makeOptionsSchema,
} from 'eslint-module-utils/moduleVisitor';

import importType from './_import-type.js';

const readPkgUp = readPkgUpModule.default ?? readPkgUpModule;
const resolve = resolveModule.default ?? resolveModule;
const moduleVisitor = moduleVisitorModule.default ?? moduleVisitorModule;

/** @param {string} filePath */
function toPosixPath(filePath) {
  return filePath.replace(/\\/g, '/');
}

function findNamedPackage(filePath) {
  const found = readPkgUp({ cwd: filePath });
  if (found.pkg && !found.pkg.name) {
    return findNamedPackage(path.join(found.path, '../..'));
  }
  return found;
}

function checkImportForRelativePackage(context, importPath, node, moduleSystem) {
  const potentialViolationTypes = ['parent', 'index', 'sibling'];
  if (potentialViolationTypes.indexOf(importType(importPath, context)) === -1) {
    return;
  }

  const resolvedImport = resolve(importPath, context, moduleSystem);
  const resolvedContext = getPhysicalFilename(context);

  if (!resolvedImport || !resolvedContext) {
    return;
  }

  const importPkg = findNamedPackage(resolvedImport);
  const contextPkg = findNamedPackage(resolvedContext);

  if (importPkg.pkg && contextPkg.pkg && importPkg.pkg.name !== contextPkg.pkg.name) {
    const importBaseName = path.basename(importPath);
    const importRoot = path.dirname(importPkg.path);
    const properPath = path.relative(importRoot, resolvedImport);
    const properImport = path.join(
      importPkg.pkg.name,
      path.dirname(properPath),
      importBaseName === path.basename(importRoot) ? '' : importBaseName,
    );
    context.report({
      node,
      message: `Relative import from another package is not allowed. Use \`${properImport}\` instead of \`${importPath}\``,
      fix: fixer => fixer.replaceText(node, JSON.stringify(toPosixPath(properImport))),
    });
  }
}

export default {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Static analysis',
      description: 'Forbid importing packages through relative paths.',
      url: 'https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md',
    },
    fixable: 'code',
    schema: [makeOptionsSchema()],
  },

  create(context) {
    return moduleVisitor(
      (source, node, moduleSystem) =>
        checkImportForRelativePackage(context, source.value, source, moduleSystem),
      context.options[0],
    );
  },
};
