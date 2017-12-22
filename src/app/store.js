import Vue from 'vue';
import Vuex from 'vuex';

import * as _ from "lodash";

Vue.use( Vuex );

///////////////////////////////////////////////////////////
//  ...
///////////////////////////////////////////////////////////

module.exports = new Vuex.Store
(
	{ 
		"state": function()
		{
			return {
				"home" 		: require("@modules/home/data/home.js"),
			}
		},
		"getters" : 
		{
			///////////////////////////////////////////////////////
		    //  Types
		    ///////////////////////////////////////////////////////

		    // Returns a type for a given id
			// "getTypeForId" : (state,getters) => (id) => _.find( state.types, (t)=> t.id == id ),
			
		},
		"mutations" : {}
	}
);