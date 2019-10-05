import Vue from "vue";
import App from "./App.vue";
import { router } from "./router.js";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Notifications from "vue-notification";
import "@babel/polyfill";

Vue.config.productionTip = false;
Vue.use(Notifications);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
