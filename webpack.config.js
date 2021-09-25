const webpack = require('webpack'),
    path = require('path'),
    CompressionPlugin = require('compression-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    loaders = require('./utils/loaders');

const dev = process.env.NODE_ENV === 'development',
    mobile = !!process.env.MOBILE;

module.exports = {
    mode: dev ? 'development' : 'production',
    entry: mobile ? './packages/mobile/demo/index.js' : './packages/book/index.js',
    output: {
        path: path.resolve(__dirname, dev ? 'assets' : 'build/assets'),
        publicPath: '/assets/',
        filename: dev ? '[name].js' : '[name].[contenthash].js'
    },
    module: {
        rules: [
            loaders.jsx(),
            loaders.css({ prod: !dev }),
            loaders.globalCSS(),
            loaders.glyph(),
            loaders.mobileglyph(),
            loaders.font(),
            loaders.image(),
            loaders.video()
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: process.env.NODE_ENV
            // API: process.env.API
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: dev ? '[name].css' : '[name].[contenthash].css' }),
        new CompressionPlugin(),
        new HtmlWebpackPlugin({
            filename: dev ? 'index.html' : '../index.html',
            template: mobile ? 'packages/mobile/demo/index.html' : 'packages/book/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'static/favicon.png', to: '.' },
                { from: 'static/email-header.png', to: '.' }
            ]
        })
    ],
    devServer: {
        onBeforeSetupMiddleware({ app }) {
            app.get('/', (req, res, next) => {
                req.url = '/assets/index.html';
                next();
            });

            app.get('*', (req, res, next) => {
                if (!/assets/.test(req.url)) req.url = '/assets/index.html';
                next();
            });
        },
        port: process.env.PORT || 4000,
        devMiddleware: { publicPath: '/assets/' },
        liveReload: false
    }
};
