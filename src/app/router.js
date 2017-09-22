import Vue from 'vue';
import VueRouter from 'vue-router';

import app from "./components/app.vue";

// 	********************************************************
// 	...
// 	********************************************************

Vue.use( VueRouter );

const routes = 
[
	{ "path" : "/", "component" : app },
	// { "path" : "/other/:id", "component" : other, "props": true },
];

// 	********************************************************
// 	...
// 	********************************************************

module.exports = new VueRouter( { "routes" : routes } );