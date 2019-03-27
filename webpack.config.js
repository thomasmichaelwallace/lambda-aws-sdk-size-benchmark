const path = require('path');
/* eslint-disable import/no-extraneous-dependencies */
const slsw = require('serverless-webpack');
/* eslint-enable */

async function configure() {
  const config = {
    mode: 'production',
    entry: slsw.lib.entries,
    output: {
      filename: '[name].js',
      libraryTarget: 'commonjs2',
      path: path.resolve('./', '.webpack'),
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [path.resolve(__dirname)],
          exclude: /node_modules/, // compile @devicepilot/package
          loader: 'babel-loader',
        },
      ],
    },
    stats: 'minimal',
  };
  return config;
}

module.exports = configure();
