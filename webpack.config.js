// import path from 'path';
var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                // loader: 'babel-loader',
                // test: /\.(js|jsx|png|jpe?g|gif)$/i,
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    // [style-loader](/loaders/style-loader)
                    { loader: 'style-loader' },
                    // [css-loader](/loaders/css-loader)
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    // [sass-loader](/loaders/sass-loader)
                    { loader: 'sass-loader' }
                ]
            },
            { test: /\.ts$/, use: 'ts-loader' },
        ]
    },
    // devtool: 'cheap-module-eval-source-map',
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    // devServer: {
    //     contentBase: path.join(__dirname, "public"),
    //     compress: true,
    //     // open: true
    // }
    devServer: {
        static: {
            directory: path.join(__dirname, "public")
        },
    }

}