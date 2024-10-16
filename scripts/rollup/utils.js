import fs from 'fs';
import path from 'path';
import cjs from '@rollup/plugin-commonjs';
import ts from 'rollup-plugin-typescript2';

const pkgPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../dist/node_modules');

export
function resolvePkgPath(pkgName, isDist) {
  if (isDist) {
    return path.join(distPath, pkgName);
  } else {
    return path.join(pkgPath, pkgName);
  }
}

export
function getPackageJSON(pkgName) {
  const jsonText = fs.readFileSync(path.join(resolvePkgPath(pkgName), 'package.json'), 'utf8');
  return JSON.parse(jsonText);
}

export
function getBaseRollupPlugins({ typescript = { } } = { }) {
  return [cjs(), ts(typescript)];
}
