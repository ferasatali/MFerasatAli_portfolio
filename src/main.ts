/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
import "@/assets/scss/global.scss";

import axios from "axios";
import VueAxios from "vue-axios";
import { requestInterceptor } from "./interceptor";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import router from './router' 

// Components
import App from "./App.vue";
// Composables
import { createApp } from "vue";

const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);
app.use(VueGoogleMaps, {
  load: {
    key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    // language: 'de',
  },
});
app.provide("axios", app.config.globalProperties.axios);

requestInterceptor();

registerPlugins(app);

app.mount("#app");
