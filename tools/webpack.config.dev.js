const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, '../src/index')
  ],
  target: 'web',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({ debug: true })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, '../src'),
        loaders: ['babel-loader']
      },
      {
        test: /(\.less)$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  }
};
