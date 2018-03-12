const path = require("path");
const webpack = require("webpack");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: "cheap-module-source-map",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env']
                }
            }
        ]
    },
    plugins: [
        // new UglifyJsPlugin(),
    ]
};