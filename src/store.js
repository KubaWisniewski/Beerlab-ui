import Vue from "vue";
import Vuex from "vuex";
import { authentication } from "./store/authentication.module.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authentication
  }
});
