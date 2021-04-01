/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { ProvidePlugin } = require('webpack');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const port = process.env.webpackDevPort || 3000;

module.exports = {
    context: __dirname,
    mode: 'production',
    entry: [
        './src/index.js',
        'react-hot-loader/patch'
    ],
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['tsx', 'ts', 'js'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'assets',
    },
    plugins: [
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),
        // do not emit compiled assets that include errors
        new HtmlWebpackPlugin({
            title: 'sigbbe.github.io',
            filename: 'sigbbe_dev',
            favicon: './public/github.svg',
            template: path.resolve(__dirname, 'public', 'index.html'),
            scriptLoading: 'defer',
            minify: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.sass?$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(js|jsx|tsx)?$/,
                exclude: /(node_modules|bower_components)/,
                // include: [path.resolve(__dirname, 'src/')],
                // loaders: ['react-hot-loader/webpack']
                use: ['react-hot-loader/babel', 'babel-loader']
                // use: {
                //     loader: 'babel-loader',
                    // options: {
                    //     plugins: ['react-hot-loader/babel'],
                    //     presets: ['@babel/preset-env']
                    // }
                // },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /(node_modules)/,
            },
        ]
    }
};
