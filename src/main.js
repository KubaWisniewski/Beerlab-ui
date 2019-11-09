import Vue from "vue";
import App from "./App.vue";
import { router } from "./router.js";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Notifications from "vue-notification";
import "@babel/polyfill";
import Vuelidate from "vuelidate";
import axios from "axios";
Vue.config.productionTip = false;
Vue.use(Notifications);
var token = localStorage.getItem("token");
axios.defaults.headers.common["X-Auth-Token"] = token.replace(/"/g, "");
Vue.use(Vuelidate);
new Vue({
  router,
  store,
  axios,
  vuetify,
  render: h => h(App)
}).$mount("#app");
