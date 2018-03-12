const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: {
        example: [
            'webpack/hot/dev-server',
            './example/app.js',
        ],
    },
    output: {
        path: path.join(__dirname, 'example'),
        filename: 'bundle.js',
        libraryTarget: 'var',
        library: 'createBingPixel'
    },
    module: {
        rules: [{
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
        }],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({ 'BING_ID': JSON.stringify(process.env.BING_ID) })
    ],
    resolve: {
        extensions: ['*', '.js'],
    },
    devServer: {
        contentBase: './example',
        compress: false,
        port: 8000
    }
};