import path from 'path';
import { getPackageJSON, resolvePkgPath } from './utils';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';
import generatePackageJSON from 'rollup-plugin-generate-package-json';

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
    plugins: [...getBaseRollupPlugins(), generatePackageJSON({
      inputFolder: pkgPath,
      outputFolder: pkgDistPath,
      baseContents: ({ name, description, version }) => ({
        name, description, version, main: 'index.js',
      }),
    })],
  },
  {
    input: path.join(pkgPath, 'src/jsx.ts'),
    output: [
      {
        file: path.join(pkgDistPath, 'jsx-runtime.js'),
        name: 'jsx.runtime.js',
        format: 'umd',
      },
      {
        file: path.join(pkgDistPath, 'jsx-dev-runtime.js'),
        name: 'jsx-dev-runtime.js',
        format: 'umd',
      },
    ],
    plugins: getBaseRollupPlugins(),
  },
];

function getBaseRollupPlugins({ typescript = { } } = { }) {
  return [cjs(), ts(typescript)];
}
