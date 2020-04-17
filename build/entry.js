
// ********************************************************
//	#	entry.js
//		The main entry point for webpack
// ********************************************************

// For dev hot-reloading: always permit reloading
if (module.hot) module.hot.accept();

// Shim to window
// window._ = require( "underscore" );

// Import the app
require( "../src/app/app.js" );

// Import main SASS
require( "../src/assets/scss/index.scss" );

// Import all images
require.context( "../src/assets/img/", true, /\.(png|jpe?g|gif|svg)(\?.*)?$/ );

// Import all static files
require.context( "../src/assets/static_files/", true, /\.(png|jpe?g|gif|svg|ppt|pdf|zip|ppt|pptx|mp4|mov)(\?.*)?$/ );