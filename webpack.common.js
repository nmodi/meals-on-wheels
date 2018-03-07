const path = require('path');
const webpack    = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const reactRoot  = require('html-webpack-react-root-plugin');

const PATHS = {
  app   : path.join(__dirname, 'src'),
  images: path.join(__dirname, 'src/assets/'),
  build : path.join(__dirname, 'dist')
};

module.exports = {
  entry: {
    app: ['babel-polyfill', PATHS.app + '/index.js']
  },
  output: {
    path    : PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test   : /\.jsx$/,
        exclude: /node_modules/,
        loader : 'babel'
      }, {
        test   : /\.js$/,
        exclude: /node_modules/,
        loader : 'babel'
      }, {
        test  : /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
        query : {
          name: '[path][name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({multiStep: true}),
    new htmlPlugin({title: 'Meals on Wheels', filename: 'index.html'}),
    new reactRoot()
  ]
};