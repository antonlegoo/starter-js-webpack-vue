
// var underscore = require( "underscore" );
var path = require( "path" );
var webpack = require( "webpack" );
var HtmlWebpackPlugin = require('html-webpack-plugin');


var config = require( "./config.js" );

// ********************************************************
//
// ********************************************************

module.exports =
{
    entry: 
    [
        path.resolve(__dirname, "./entry.js" )
    ],
    output:
    {
        path: config.build.OUTPUT_DIR,
        filename: "js/bundle.js",
    },
    module:
    {
        loaders:
        [
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options:
                {
                    limit: 1,
                    // The following preserves the folder structure of images relative to their place in "../src/assets/img"
                    name: function( p ){ return "img/" + p.replace( path.resolve( __dirname, "../src/assets/img" ), "" ); },
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options:
                {
                    limit: 10000,
                    name: "fonts/[name].[ext]"
                }
            },
            {
                test: /\.vue?$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve:
    {
        modules: ["node_modules"],
        alias : 
        {
            vue: 'vue/dist/vue.js',
            styles : path.resolve( __dirname, "../src/assets/scss/" ),
        }
    },
    plugins:
    [
        new HtmlWebpackPlugin(
        {
            title: 'App',
            filename: './index.html',
            template: 'src/index.html'
        }),
    ]
};