export const snackbarModule = {
  namespaced: true,
  state: {
    logIn: {
      active: false,
      timeout: 2500,
      errActive: false,
      errTimeout: 5000,
    },
    logOut: {
      active: false,
      timeout: 2500,
    },
    signIn: {
      active: false,
      timeout: 2500,
      errActive: false,
      errTimeout: 5000,
    },
  },
};
