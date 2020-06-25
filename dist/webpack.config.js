"use strict";
var path = require('path');
var webpack = require('webpack');
var TerserPlugin = require('terser-webpack-plugin');
var conf = {
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                use: 'cache-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(ts|js)x?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ],
    resolve: {
        alias: {
            modules: path.resolve(__dirname, 'node_modules')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true
            })
        ]
    }
};
module.exports = conf;
//# sourceMappingURL=webpack.config.js.map