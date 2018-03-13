const webpack = require('webpack');
const merge = require('webpack-merge');
const wildcardServerPlugin = require('wildcard-server-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new wildcardServerPlugin()
    ]
});
