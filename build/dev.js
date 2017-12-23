var path = require('path');
var webpack = require('webpack');
var express = require('express');
var webpackConfig = require('./webpack.config.dev.js');

var config = require( "./config.js" );

//  *******************************************************
//  
//  *******************************************************

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.build.PORT;

// Init express
var app = express();

// Init webpack
var compiler = webpack( webpackConfig );

// Enable dev middleware
app.use(require("webpack-dev-middleware")(compiler,
{
    noInfo: true, publicPath: "/", stats: { colors: true },
}));

// Enable hot-reloading
app.use( require("webpack-hot-middleware")(compiler) );

// Start the server 
var actualPort = app.listen( port ).address().port;

// Print out the URL
console.log( "http://localhost:" + actualPort );