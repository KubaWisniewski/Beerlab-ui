import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Notifications from "vue-notification";
import "@babel/polyfill";
import Vuelidate from "vuelidate";

import Vuetify from "vuetify";

Vue.config.productionTip = false;
Vue.use(Notifications);
Vue.use(Vuelidate);
Vue.use(Vuetify);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
