import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyC_jbugH9SS5U4kZ_Eueq1ytYxYhATiwqE",
  authDomain: "alfaweb-nuxt.firebaseapp.com",
  projectId: "alfaweb-nuxt",
  storageBucket: "alfaweb-nuxt.appspot.com",
  messagingSenderId: "1018956774832",
  appId: "1:1018956774832:web:fa56ccd7f7bd3cbb686a75"
});

export const db = getFirestore(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
