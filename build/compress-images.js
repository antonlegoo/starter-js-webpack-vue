const path = require("path");

const imagemin = require('imagemin');
const imageminPngquant = require("imagemin-pngquant");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminSvgo = require("imagemin-svgo");

const CONFIG = require("./config.js");

///////////////////////////////////////////////////////////
// 	...
///////////////////////////////////////////////////////////

// Get the path to the images dir
let inputPath = path.resolve( CONFIG.build.OUTPUT_DIR, "images" );
// The file types to target
let fileTypes = "jpg,png,gif,svg";
// The dir to put the compressed files
let outputPath = inputPath;

// 
console.log("Compressing..." );

// Start imagin min
imagemin
( 
	// Set the input dir
	[ `${inputPath}/*.{${fileTypes}}` ], 
	// Set the output dir
	outputPath, 
	// which plugins to use
	{
		"plugins": [
			imageminMozjpeg( {quality: 85, fastcrush: true } ),
			imageminPngquant({quality: '65-80'}),
			imageminGifsicle(),
			imageminSvgo(),
		]
	}
)
.then( files => 
{
	// 
	console.log("Done compressing! \n" );
});