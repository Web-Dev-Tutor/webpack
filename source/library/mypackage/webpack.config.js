var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-algebra.js',
    library: 'WebpackAlgrebra',
    libraryTarget: 'umd'
  },
  externals: [/^uuid\/.+$/, 'lodash']
};