import webpack from 'webpack';
import { resolve } from 'path';

const _root = resolve(__dirname, '..');
const build = resolve(_root, 'dist');

const prodPack = {
  entry: {
    index: [
      './src/index.js',
    ],
  },
  output: {
    path: build,
    filename: '[name].min.js',
    libraryTarget: 'var',
    library: 'logixTour',
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
