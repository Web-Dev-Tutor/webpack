const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let dist = "./output";
let packedfile = '[name].[contenthash].js';
let entry = {
  app: './src/index.js'
};

// let mode = "development";
let mode = "production";

module.exports = {
  mode,
  entry,
  output: {
    filename: packedfile,
    path: path.resolve(__dirname, dist)
  },
  optimization: {
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: dist
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Manager'
    })
  ]
};