import { resolve } from 'path';

const _root = resolve(__dirname, '..');
const build = resolve(_root, 'dist');

const prodPack = {
  entry: {
    'logix-tour': [
      './src/vanilla.js',
    ],
  },
  output: {
    path: build,
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: [/node_modules/],
      },
    ],
  },
};

export default prodPack;
