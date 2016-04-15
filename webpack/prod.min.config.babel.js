import webpack from 'webpack';
import { resolve } from 'path';

const _root = resolve(__dirname, '..');
const build = resolve(_root, 'dist');

const prodPack = {
  entry: {
    index: [
      './src/index.js',
    ],
    'logix-tour': [
      './src/vanilla.js',
    ],
  },
  output: {
    path: build,
    filename: '[name].min.js',
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
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
};

export default prodPack;
