import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  mode: 'production',
  devtool: 'cheap-eval-source-map',
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    noInfo: false
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new MiniCssExtractPlugin({ filename: 'style.css' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel-loader']
      },

      {
        test: /(\.css)$/,
        loaders: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /(\.less)$/,
        loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader'
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' }, // TO-DO: below are for bootstrap which I'm no longer using; delete?
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
};
