const path = require("path");
const fs = require("fs");

const _ = require("lodash");

const imagemin = require('imagemin');
const imageminPngquant = require("imagemin-pngquant");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminSvgo = require("imagemin-svgo");

const CONFIG = require("./config.js");

///////////////////////////////////////////////////////////
// 	Vars
///////////////////////////////////////////////////////////

// The file types to target
let fileTypes = "jpg,png,gif,svg";
// The dir to put the compressed files
let outputPath = path.resolve( CONFIG.build.OUTPUT_DIR, "images" );
// The file to keep track of what has been previously compressed
let historyFilePath = "./build/image-compress-history.txt";

///////////////////////////////////////////////////////////
// 	Functions
///////////////////////////////////////////////////////////

////////////////
// Returns the files in the directory as an array: [file_name, date_modified]

let getFilesFromDirectory = ( dir ) =>
{
	// Return empty array if dir doesnt exist
	if( fs.existsSync(dir) == false  ) return [];

	try 
	{ 
		// Get the files
		let files = fs.readdirSync( dir );

		// Filter out non-image files
		files = _.filter( files, f => 
		{
			let ext = path.extname(f);
			return fileTypes.split(",").includes(ext.substring(1,ext.length));
		});

		// For each file
		return files.map( (file) => 
		{
			// Return array of [file_name, date_modified]
			let filePath = `${dir}/${file}`;
			let modDate = fs.statSync(filePath).mtime;
			return [filePath, modDate];
		});
	}
	catch(e) { console.log( "Compress error:", e ); }
}

////////////////
// Writes a string to file

let writeStringToFile = ( str, filePath ) =>
{
	try
	{
		fs.writeFileSync( filePath, str );
	}
	catch(e) { console.log( "Write file error:", e ); }
}

////////////////
// Reads a file and returns it as a string

let readFileToString = ( filePath ) =>
{
	// Return null if file doesnt exist
	if( fs.existsSync(filePath) == false  ) return null;

	try
	{
		let text = fs.readFileSync( filePath );
		return text;
	}
	catch(e) { console.log( "Write file error:", e ); }
}

////////////////
// Compresses a list of files

let compressFiles = ( files ) =>
{
	console.log(`Compressing ${files.length} files...` );

	// Start imagin min
	return imagemin
	( 
		// The files to compress
		files, 
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
}


///////////////////////////////////////////////////////////
// 	Run
///////////////////////////////////////////////////////////


// create an array of [file_name, date_modified] from src images
let sourceFiles = getFilesFromDirectory( CONFIG.build.IMAGES_DIR );
// create an array of [file_name, date_modified] from history
let filesHistory = JSON.parse( readFileToString( historyFilePath ) );

let filesToCompress = [];

// If no history, then compress everything
if( !filesHistory ) 
{
	console.log( `Found ${sourceFiles.length} new files...` );
	filesToCompress = sourceFiles;
}
else
{
	// Get files not found in the history
	let newFiles = _.filter( sourceFiles, sf => { return ! _.find( filesHistory, fh => fh[0] == sf[0] ); });

	// Get files that are modified
	let modFiles = _.filter( sourceFiles, sf => 
	{ 
		return _.find( filesHistory, fh => {
			return fh[0] == sf[0] && new Date(fh[1]).getTime() != sf[1].getTime();
		}); 
	});

	console.log( `Found ${newFiles.length} new files and ${modFiles.length} modified files...` );

	// Combine
	filesToCompress = newFiles.concat( modFiles );
}

// Compress the files
let files = _.map( filesToCompress, s => s[0] ); 
compressFiles(files).then( () => 
{
	// Write history
	writeStringToFile( JSON.stringify(sourceFiles), historyFilePath);
});
