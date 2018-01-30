const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const extractCSS = require('./webpack/css.extract');
const images = require('./webpack/images');
const ulr = require('./webpack/url');
const html = require('./webpack/html');
const font = require('./webpack/font');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            'index': PATHS.source + '/index.js'
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template:  './source/html/index.html',
                filename: 'index.html',
                hash:     false,
                inject:   'body',
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    images(),
    ulr(),
    html(),
    font()
]);

module.exports = function(env) {
    if (env === 'production'){
        return merge([
            common,
            extractCSS(),
        ]);
    }
    if (env === 'development'){
        return merge([
            common,
            devserver(),
            sass()
        ])
    }
};










