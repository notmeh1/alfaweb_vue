import Vue from "vue";
import Vuex from "vuex";
import { loginModule } from "./login";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login: loginModule,
  },
});
