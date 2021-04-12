
var path = require( "path" );
var webpack = require( "webpack" );
const { merge } = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                use: ExtractTextPlugin.extract(
                {
                    fallback: "style-loader",
                    use: [
                        { loader: 'css-loader' },
                        { 
                            loader: 'sass-loader',
                            options: { sassOptions: { includePaths: [ path.resolve( __dirname, "../src/assets/scss/" ) ] } },
                        },
                    ]
                }),
            },
        ]
    },
    plugins:
    [
        new ExtractTextPlugin( "styles.css" ),
    ]
}
);