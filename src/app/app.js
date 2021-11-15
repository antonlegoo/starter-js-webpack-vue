import { createApp } from 'vue' 
import { createHead } from '@vueuse/head'

import { router } from "./router.js";
import { store } from "./store.js";
import App from "./App.vue";

const app = createApp( App );
const head = createHead();

app.use( router );
app.use( store );

app.use(head);


app.mount("#app");
