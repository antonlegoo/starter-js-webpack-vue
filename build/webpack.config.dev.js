
var path = require( "path" );
var webpack = require( "webpack" );
var merge = require('webpack-merge');


var config = require( "./config.js" );
var webpackBaseConfig = require('./webpack.config.base.js');

// ********************************************************
//
// ********************************************************

module.exports = merge( webpackBaseConfig,
{
    entry: 
    [
        'webpack-hot-middleware/client?path=/__webpack_hmr&noInfo=true',
    ],
    mode : "development",
    module:
    {
        rules:
        [
            {
                test: /\.scss$/, 
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { 
                        loader: 'sass-loader',
                        options: { includePaths: [ path.resolve( __dirname, "../src/assets/scss/" ) ] },
                    },
                ]
            },
        ]
    },
    plugins:
    [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}
);