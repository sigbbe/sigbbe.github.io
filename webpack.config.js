const { ProvidePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const { HotModuleReplacementPlugin } = webpack;

const port = process.env.webpackDevPort || 3000;

module.exports = {
    context: __dirname,
    mode: 'production',
    entry: [
        // 'react-hot-loader/patch',
        './src/index.js',
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.png'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'assets/',
    },
    plugins: [
        // enable HMR globally
        new HotModuleReplacementPlugin(),
        // do not emit compiled assets that include errors
        new HtmlWebpackPlugin({
            title: 'sigbbe.github.io',
            filename: 'index.html',
            favicon: './public/github.svg',
            template: path.resolve(__dirname, 'dist', 'index.html'),
            scriptLoading: 'defer',
            minify: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.sass?$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['react-hot-loader/babel'],
                    }
                },
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    }]
            }
        ]
    }
};
