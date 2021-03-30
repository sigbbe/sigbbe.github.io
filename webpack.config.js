// const HtmlWebpackPlugin = require('html-webpack-plugin');
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = 'index.js';
export const output = {
    title: 'sigbbe.github.io',
    path: './dist',
    filename: 'index_bundle.js',
    minify: false
};
export const plugins = [
    new HtmlWebpackPlugin()
];