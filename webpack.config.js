const path = require("path");
const webpack = require("webpack");

module.exports = {
    devtool: "cheap-module-source-map",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'index.js',
        libraryTarget: "umd",
        library: "createBingPixel"
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
    }
};