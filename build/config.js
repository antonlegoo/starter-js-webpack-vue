var path = require( "path" );


// ********************************************************
//
// ********************************************************


module.exports = 
{
	build: 
	{
		PORT			: null,
		OUTPUT_DIR 		: path.resolve(__dirname, '../dist')
	},
	dev: 
	{
		// STATIC_DIR		: "./dist",
	}
}