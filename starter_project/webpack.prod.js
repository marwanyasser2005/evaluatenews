const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'production', // You may also consider using 'development' for dev mode
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'], // Ensure this is included to handle modern JavaScript features
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // Extracts CSS into separate files in production
                    'css-loader', 
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css', // Use content hash for better caching
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true, // Allows service workers to take control immediately
            skipWaiting: true, // Skip waiting phase and activate service worker immediately
        }),
        new CleanWebpackPlugin(), // Clean up dist folder before each build
    ],
    devServer: {
        port: 3000,
        allowedHosts: 'all',
    },
    optimization: {
        splitChunks: {
            chunks: 'all', // Split vendor and app code for better caching
        },
        runtimeChunk: 'single', // Optimize runtime chunk for long-term caching
    }
};
