var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.build.js');

var config = require( "./config.js" );

//  *******************************************************
//  
//  *******************************************************

// Start webpack
webpack( webpackConfig, function (err, stats)
{
	// Handle error
	if (err) throw err;

	// Write the output to console
	process.stdout.write
	( 
		stats.toString
		(
			{
				colors: true,
				modules: false,
				children: false,
				chunks: false,
				chunkModules: false
			}
		) 
		+ '\n\n'
	);
});