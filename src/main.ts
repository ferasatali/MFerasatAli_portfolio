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
import router from './router' 
import moment from 'moment';



// Components
import App from "./App.vue";
// Composables
import { createApp } from "vue";

const app = createApp(App);

app.config.globalProperties.$moment = moment;

app.use(VueAxios, axios);
app.use(router);
app.provide("axios", app.config.globalProperties.axios);

requestInterceptor();

registerPlugins(app);

app.mount("#app");
