const path = require('path'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    jsx() {
        return {
            test: /\.jsx?$/,
            use: 'babel-loader',
            include: path.resolve(__dirname, '../'),
            exclude: /node_modules/,
            resolve: {
                extensions: ['.js', '.jsx']
            }
        };
    },
    css({ prod = true, extract = true } = {}) {
        return {
            test: /\.css$/,
            use: [
                extract ? MiniCssExtractPlugin.loader : 'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: prod
                                ? '[hash:base64:5]'
                                : '[name]__[local]--[hash:base64:5]',
                            exportLocalsConvention: 'camelCaseOnly'
                        },
                        importLoaders: 1
                    }
                },
                'postcss-loader'
            ],
            exclude: /node_modules/
        };
    },
    glyph() {
        return {
            test: /\.svg$/,
            use: ['svg-sprite-loader'],
            include: /ui\/components\/icon\/glyphs/
        };
    },
    mobileglyph() {
        return {
            test: /\.svg$/,
            use: [
                {
                    loader: 'svg-sprite-loader',
                    options: {
                        symbolId: filePath => `m/${path.basename(filePath, '.svg')}`
                    }
                }
            ],
            include: /ui\/mobile\/icon\/glyphs/
        };
    },
    file() {
        return {
            test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
            use: 'file-loader?name=[hash].[ext]',
            exclude: [/ui\/components\/icon\/glyphs/, /ui\/mobile\/icon\/glyphs/]
        };
    },
    emoji() {
        return {
            test: /emoji-mart\.css/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        };
    }
};
