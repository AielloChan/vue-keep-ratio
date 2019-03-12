import Vue from "vue";
import VueKeepRatio from "../../src/main";
import App from "./App.vue";

Vue.use(VueKeepRatio);

new Vue(App).$mount("#app");
