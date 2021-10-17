import router from "../router";
import { snackbarModule } from "./snackbars";

export const loginModule = {
  namespaced: true,
  state: {
    logInData: {
      email: "Fernando", // change to null
      password: null,
    },
  },
  mutations: {
    SUBMIT_LOG_IN(state, logInData) {
      state.logInData = logInData;
      router.push("/");
      state.snackbars.logIn.active = true;
    },
    SUBMIT_LOG_OUT(state) {
      state.logInData.email = null;
      state.logInData.password = null;
      router.push("/login");
      state.snackbars.logOut.active = true;
    },
    ERROR_LOG_IN(state) {
      state.snackbars.logIn.errActive = true;
    },
    ERROR_SIGN_IN(state) {
      state.snackbars.signIn.errActive = true;
    },
  },
  actions: {
    submitLogIn({ commit }, logInData) {
      commit("SUBMIT_LOG_IN", logInData);
    },
    submitLogOut({ commit }) {
      commit("SUBMIT_LOG_OUT");
    },
    errorLogIn({ commit }) {
      commit("ERROR_LOG_IN");
    },
    errorSignIn({ commit }) {
      commit("ERROR_SIGN_IN");
    },
  },
  modules: {
    snackbars: snackbarModule,
  },
};
