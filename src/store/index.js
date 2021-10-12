import Vue from "vue";
import Vuex from "vuex";
import { loginModule } from "./login";
import { cardsInfoModule } from "./cardsInfo";
import { adminModule } from "./admin";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login: loginModule,
    cardsInfo: cardsInfoModule,
    admin: adminModule,
  },
});
