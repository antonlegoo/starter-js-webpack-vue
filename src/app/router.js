import Vue from 'vue';
import VueRouter from 'vue-router';

///////////////////////////////////////////////////////////
//  ...
///////////////////////////////////////////////////////////

Vue.use( VueRouter );

// Gather routes from pages
let routes = [];
routes = routes.concat( require("@pages/home/routes.js").routes );

// Create router instance
let router = new VueRouter( { 	// Register all routes 
								"routes" : routes,

								// set scroll position to top of page after each route navigation
								scrollBehavior (to, from, savedPosition) { return { x: 0, y: 0 } },

								// "history" mode removes the # from URLs. *note* you'll need to add rewrite rules server side
								// mode: "history",
							} );

///////////////////////////////////////////////////////////
//  ...
///////////////////////////////////////////////////////////

export { router }