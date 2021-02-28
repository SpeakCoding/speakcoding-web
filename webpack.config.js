const webpack = require('webpack'),
    path = require('path'),
    CompressionPlugin = require('compression-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    loaders = require('./utils/loaders');

const dev = process.env.NODE_ENV === 'development',
    mobile = !!process.env.MOBILE;

module.exports = {
    mode: dev ? 'development' : 'production',
    entry: mobile ? './packages/mobile/demo/index.js' : './packages/web/index.js',
    output: {
        path: path.resolve(__dirname, dev ? 'assets' : 'dist/assets'),
        publicPath: '/assets/',
        filename: dev ? '[name].js' : '[name].[contenthash].js'
    },
    module: {
        rules: [
            loaders.jsx(),
            loaders.css({ prod: !dev }),
            loaders.glyph(),
            loaders.mobileglyph(),
            loaders.file()
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: process.env.NODE_ENV,
            API: process.env.API
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: dev ? '[name].css' : '[name].[contenthash].css' }),
        new CompressionPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: mobile ? 'packages/mobile/demo/index.html' : 'packages/web/index.html'
        })
    ],
    devServer: {
        before(app) {
            app.get('/', (req, res, next) => {
                req.url = '/assets/index.html';
                next();
            });

            app.get('*', (req, res, next) => {
                if (!/assets/.test(req.url)) req.url = '/assets/index.html';
                next();
            });
        },
        port: 3000,
        publicPath: '/assets/'
    }
};
