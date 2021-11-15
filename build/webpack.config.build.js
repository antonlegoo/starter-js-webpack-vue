
var path = require( "path" );
var webpack = require( "webpack" );
const { merge } = require('webpack-merge');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')


var webpackBaseConfig = require('./webpack.config.base.js');

// ********************************************************
//
// ********************************************************

module.exports = merge( webpackBaseConfig,
{
    entry: [],
    mode : "production",
    module:
    {
        rules:
        [
            {
                test: /\.scss$/, 
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
        ]
    },
    plugins:
    [
        new MiniCssExtractPlugin( {filename: 'style.css'} ),
    ]
}
);