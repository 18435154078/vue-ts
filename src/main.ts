import { createApp } from "vue";
import App from "./App.vue";
import Particles from "particles.vue3";
import router from "./router";
import store from "@/store";
import "element-plus/dist/index.css";

createApp(App).use(router).use(store).use(Particles).mount("#app");
