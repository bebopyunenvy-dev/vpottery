import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 匯入 router

const app = createApp(App);
app.use(router); // 掛載 router
app.mount("#app"); // 掛載到頁面上
