/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const { ProvidePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    mode: 'production',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                // exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                },
                // use: 'babel-loader',
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         plugins: ['react-hot-loader/babel'],
                //         presets: ['es2015', 'stage-0', 'react']
                //     }
                // },
                // use: {
                //     loader: 'babel-loader',
                // },
                // options: {
                    // presets: ['@babel/preset-env']
                // }, 
                // query: {
                // }
            }
            // {
            //     test: /\.tsx?$/,
            //     use: 'ts-loader',
            //     exclude: /(node_modules)/,
            // },
        ]
    }, 
    resolve: {
        extensions: ['tsx', 'ts', 'js'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'assets',
    },
};
