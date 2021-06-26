const path = require ('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const {ClearWebpackPlugin} = require('clean-webpack-plugin')

module.exports = () => {
    const config = merge.merge([common, {
        mode: 'production',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebPackPlugin({
                template: 'public/index.html',
                filename:'index.html'
            }),
            // new ClearWebpackPlugin()
        ]
    }]);
    return config;
}