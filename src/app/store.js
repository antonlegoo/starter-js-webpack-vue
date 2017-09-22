import Vue from 'vue';
import Vuex from 'vuex';
// import data from "./data/data.js";

Vue.use( Vuex );

// 	********************************************************
// 	...
// 	********************************************************

module.exports = new Vuex.Store
(
	{ 
		"state": { "foo" : "bar" },
		// "state": data,
		// "getters" : {}
	}
);