const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin(
            {
                template: './public/index.html',   
            }
    )],
};