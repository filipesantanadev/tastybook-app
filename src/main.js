import { createApp } from "vue";
import "./global.css";
import { createPinia } from "pinia";
import { router } from "./router";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia()); // registra Pinia
app.use(router); // registra Router

app.mount("#app");
