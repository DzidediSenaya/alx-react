// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            // Add necessary rules for CSS, images, etc.
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            chunks: ['header', 'body', 'footer'],
        }),
        new CleanWebpackPlugin(),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 8564,
    },
};
