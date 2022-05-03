import { createApp } from "vue";
import App from "./App.vue";
import send from "./service/send";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.config.globalProperties.$axios = send;
app.use(store).use(router).mount("#app");
