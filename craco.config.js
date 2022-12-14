const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.path.json');

module.exports = {
  webpack: {
    alias: {
      '@tests-utils': path.resolve(__dirname, 'src/tests-utils'),
      '@atoms': path.resolve(__dirname, 'src/view/atoms'),
      '@molecules': path.resolve(__dirname, 'src/view/molecules'),
      '@organisms': path.resolve(__dirname, 'src/view/organisms'),
      '@pages': path.resolve(__dirname, 'src/view/pages'),
      '@static': path.resolve(__dirname, 'src/view/static'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  jest: {
    setupFiles: ['jest-canvas-mock'],
    configure: {
      preset: 'ts-jest',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/src/',
      }),
    },
  },
};
