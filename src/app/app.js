import { createApp } from 'vue' 

// import VueHead from 'vue-head';
// Vue.use( VueHead );

import { router } from "./router.js";
import { store } from "./store.js";

const app = createApp( {} );
app.use( router );
app.use( store );

app.mount("#app");