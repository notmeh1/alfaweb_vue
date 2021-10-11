import router from "../router";

export const loginModule = {
  namespaced: true,
  state: {
    logInData: {
      email: 'testing', // change to null
      password: null,
    },
  },
  mutations: {
    SUBMIT_LOG_IN(state, logInData) {
      state.logInData = logInData;
      router.push("/")
    },
    SUBMIT_LOG_OUT(state) {
      state.logInData.email = null;
      state.logInData.password = null;
      router.push("/login")
    }
  },
  actions: {
    submitLogIn({ commit }, logInData) {
      commit("SUBMIT_LOG_IN", logInData);
    },
    submitLogOut({commit}) {
      commit("SUBMIT_LOG_OUT");
    }
  },
};
