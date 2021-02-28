const webpack = require('webpack'),
    path = require('path'),
    fs = require('fs'),
    express = require('express'),
    CompressionPlugin = require('compression-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin'),
    loaders = require('./utils/loaders');

const isDev = process.env.NODE_ENV === 'development',
    landingInject = fs.readFileSync(path.resolve(__dirname, 'landing-inject.html')).toString();

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: './packages/web/index.js',
    output: {
        path: path.resolve(__dirname, isDev ? 'assets' : 'build/assets'),
        publicPath: '/assets/',
        filename: isDev ? '[name].js' : '[name].[contenthash].js'
    },
    module: {
        rules: [
            loaders.jsx(),
            loaders.css({ prod: !isDev }),
            loaders.glyph(),
            loaders.file(),
            loaders.emoji()
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: process.env.NODE_ENV,
            API: process.env.API
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: isDev ? '[name].css' : '[name].[contenthash].css' }),
        new CompressionPlugin(),
        new HtmlWebpackPlugin({
            // filename: isDev ? 'index.html' : path.resolve(__dirname, 'build/index.html'),
            filename: 'index.html',
            template: 'packages/web/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './static', to: './' },
                { from: './landing/**/*', to: '../' }
            ]
        }),
        new ReplaceInFileWebpackPlugin([
            {
                dir: 'build/landing',
                files: ['index.html'],
                rules: [
                    {
                        search: '<head>',
                        replace: `<head>${landingInject}`
                    }
                ]
            }
        ])
    ],
    devServer: {
        before(app) {
            app.get('/', (req, res, next) => {
                req.url = '/assets/index.html';
                next();
            });

            app.get('/l', (req, res) => {
                res.sendFile(path.resolve(__dirname, 'build/landing/index.html'));
            });

            app.use(express.static('build/landing'));

            app.get('*', (req, res, next) => {
                if (!/assets/.test(req.url)) req.url = '/assets/index.html';
                next();
            });
        },
        port: 3000,
        publicPath: '/assets/'
    }
};
