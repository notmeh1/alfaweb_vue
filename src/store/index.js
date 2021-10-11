import Vue from "vue";
import Vuex from "vuex";
import { loginModule } from "./login";
import {cardsInfoModule} from "./cardsInfo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login: loginModule,
    cardsInfo: cardsInfoModule,
  },
});
