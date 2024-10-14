import path from 'path';
import { getPackageJSON, resolvePkgPath } from './utils';

const { name, module } = getPackageJSON('react');
const pkgPath = resolvePkgPath(name);
const pkgDistPath = resolvePkgPath(name, true);

export default [
  {
    input: path.join(pkgPath, module),
    output: {
      file: path.join(pkgDistPath, 'index.js'),
      name: 'index.js',
      format: 'umd',
    },
  },
];
