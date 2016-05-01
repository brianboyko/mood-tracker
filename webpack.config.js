var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname, 'client/src');

module.exports = {
    entry: path.resolve(ROOT_PATH, 'js'),
    output: {
      path: path.resolve(ROOT_PATH, 'build'),
      filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(ROOT_PATH, 'css')
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'React Redux Webpack Boilerplate'
    })
  ]
};
