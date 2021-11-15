import { createStore } from 'vuex';
import * as _ from "lodash";

///////////////////////////////////////////////////////////
//  ...
///////////////////////////////////////////////////////////

let store = createStore
(
	{ 
		state ()
		{
			return {
				"home" 		: require("@pages/home/data/home.js"),
			}
		},

		"getters" : 
		{
			// Returns a type for a given id
			// "getTypeForId" : (state,getters) => (id) => _.find( state.types, (t)=> t.id == id ),
			
		},

		"mutations" : 
		{
			// "createThing" : ( state, data ) => {},
		},
		
		"actions" : 
		{
			// "createThing" : ( ctx, data ) => { ctx.commit("createThing", data); },
		}
	}
);

///////////////////////////////////////////////////////////
//  ...
///////////////////////////////////////////////////////////

export { store }