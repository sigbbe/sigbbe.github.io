/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
//not working: import ExtractTextPlugin from "extract-text-webpack-plugin";
const ExtractHTMLPlugin = require("extract-html-webpack-plugin");
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
    output: {
        filename: 'my-first-webpack.bundle.js',
    },
    module: {
        rules: [{ test: /\.js$/, use: 'raw-loader' }, { test: /\.tsx$/, use: 'raw-loader' }, { test: /\.sass$/, use: 'sass-loader' }],
    },
};