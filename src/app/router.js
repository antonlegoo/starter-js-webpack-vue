import Vue from 'vue';
import VueRouter from 'vue-router';

import page_home 	from "@modules/home/home.vue";

///////////////////////////////////////////////////////////
//  ...
///////////////////////////////////////////////////////////

Vue.use( VueRouter );

const routes = 
[
	{ "path" : "/", "component" : page_home },
	// { "path" : "/other/:id", "component" : other, "props": true },
];

let router = new VueRouter( { "routes" : routes } );

///////////////////////////////////////////////////////////
//  ...
///////////////////////////////////////////////////////////

router.beforeEach((to, from, next) =>
{
	// Scroll to the top when new page is loaded
	// Add delay to allow for DOM to be rewritten before scrolling top
	window.setTimeout( ()=> {
		window.scrollTo(0, 0);
		next();
	},10);

});

///////////////////////////////////////////////////////////
//  ...
///////////////////////////////////////////////////////////

module.exports = router;