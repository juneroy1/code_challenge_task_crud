import Vue from "vue";
import App from "./App.vue";
// import { createApp } from 'vue';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Import BootstrapVue CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./routes.js";
Vue.config.productionTip = false;
// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// const app = createApp(App);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
