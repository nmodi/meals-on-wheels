const path              = require('path');
const webpack           = require('webpack');
const htmlPlugin        = require('html-webpack-plugin');
const reactRoot         = require('html-webpack-react-root-plugin'); 
const openBrowserPlugin = require('open-browser-webpack-plugin'); 
const dashboardPlugin   = require('webpack-dashboard/plugin'); 

const PATHS = {
  app: path.join(__dirname, 'src'),
  images:path.join(__dirname,'src/assets/'),
  build: path.join(__dirname, 'dist')
};

const options = {
  host:'localhost',
  port:'3000'
};

module.exports = {
  entry: {
    app: PATHS.app + '/index.jsx'
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  devServer: {
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: options.host,
      port: options.port 
    },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,        
        loader: 'file',
        query: {
          name: '[path][name].[ext]'
        }
      },      
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins:[
    new dashboardPlugin(), 
    new webpack.HotModuleReplacementPlugin({
        multiStep: true
    }),
    new htmlPlugin({
      filename: 'index.html'
    }),
    new reactRoot(),
    new openBrowserPlugin({
      url: `http://${options.host}:${options.port}`
    })
  ]
};