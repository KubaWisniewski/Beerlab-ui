import Vue from "vue";
import Vuex from "vuex";
import { authentication } from "./store/authentication.module.js";
import { beers } from "./store/beers.module.js";
import { orders } from "./store/orders.module.js";
import { report } from "./store/report.module.js";
import { groups } from "./store/group.module.js";
import { messages } from "./store/message.module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authentication,
    beers,
    orders,
    report,
    groups,
    messages
  }
});
