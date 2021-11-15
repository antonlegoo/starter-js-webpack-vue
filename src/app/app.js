import Vue from 'vue'
Vue.config.productionTip = false

import VueHead from 'vue-head';
Vue.use( VueHead );

import { router } from "./router.js";
import { store } from "./store.js";

new Vue(
{
	router,
	store
}
).$mount("#app");