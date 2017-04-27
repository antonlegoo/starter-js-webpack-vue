
var path = require( "path" );
var webpack = require( "webpack" );
var merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var config = require( "./config.js" );
var webpackBaseConfig = require('./webpack.config.base.js');

// ********************************************************
//
// ********************************************************

module.exports = merge( webpackBaseConfig,
{
    entry: [],
    module:
    {
        loaders:
        [
            {
                test: /\.scss$/, 
                use: ExtractTextPlugin.extract(
                {
                    fallback: "style-loader",
                    use: [
                        { loader: 'css-loader' },
                        { 
                            loader: 'sass-loader',
                            options: { includePaths: [ path.resolve( __dirname, "../src/assets/scss/" ) ] },
                        },
                    ]
                }),
            },
        ]
    },
    plugins:
    [
        new ExtractTextPlugin( "css/styles.css" ),
    ]
}
);