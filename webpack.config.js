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
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'assets',
    },
    // devServer: {
    //     inline: false,
    //     contentBase: './dist'
    // },
    resolve: {
        extensions: ['js', 'ts', 'tsx'],
        // root: path.join(__dirname, './src'),
    },
    module: {
        rules: [
        //     {
        //         test: /\.jsx?$/,
        //         exclude: /(node_modules|bower_components)/,
        //         loader: 'babel-loader',
        //         query: {
        //             presets: ['es2015', 'react']
        //         }
        //     }
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /public/],
                query: {
                    plugins: ['react-hot-loader/babel', 'transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    }
};
