import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Notifications from "vue-notification";
import "@babel/polyfill";
import Vuelidate from "vuelidate";
import axios from "axios";
import DatetimePicker from 'vuetify-datetime-picker'
import Vuetify from "vuetify";

Vue.config.productionTip = false;
Vue.use(Notifications);
Vue.use(DatetimePicker);
var token = localStorage.getItem("token");
if (token != null) {
  axios.defaults.headers.common["X-Auth-Token"] = token.replace(/"/g, "");
}
Vue.use(Vuelidate);
Vue.use(Vuetify);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
