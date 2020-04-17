import Vue from 'vue';
import VueRouter from 'vue-router';

///////////////////////////////////////////////////////////
//  ...
///////////////////////////////////////////////////////////

Vue.use( VueRouter );

// Gather routes from modules
let routes = [];
routes = routes.concat( require("@modules/home/routes.js") );

// Create router instance
let router = new VueRouter( { 	"routes" : routes,
								// set scroll position to top of page after each route navigation
								scrollBehavior (to, from, savedPosition) { return { x: 0, y: 0 } },
							} );

///////////////////////////////////////////////////////////
//  ...
///////////////////////////////////////////////////////////

module.exports = router;