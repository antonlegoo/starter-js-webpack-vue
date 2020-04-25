var path = require( "path" );


// ********************************************************
//
// ********************************************************


module.exports = 
{
	build: 
	{
		PORT			: 8080,
		OUTPUT_DIR 		: path.resolve(__dirname, '../dist'),
		IMAGES_DIR 		: path.resolve(__dirname, '../src/assets/img')
	},
}