const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 4200,
        disableHostCheck: true,
        host: '127.0.0.1',
    },
    plugins: []
});