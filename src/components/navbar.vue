<template>
  <v-app-bar class="rounded-b-xl px-10 mx-3" app flat dense>
    <v-app-bar-title
      ><v-btn :to="{ name: 'Home' }" plain>alfa-web</v-btn></v-app-bar-title
    >
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn :to="{ name: 'Login' }" exact v-if="!logInData.email"
        >Ingresar</v-btn
      >
      <v-btn exact v-if="!logInData.email">Regístrate</v-btn>
      <v-divider vertical></v-divider>
    </v-toolbar-items>
    <span class="mx-3" v-if="logInData.email"
      >Bienvenido: {{ logInData.email }}</span
    >
    <v-btn color="error" icon @click="logOut" v-if="logInData.email"
      ><v-icon>mdi-exit-to-app</v-icon></v-btn
    >
  </v-app-bar>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { mapState } from "vuex";

export default {
  methods: {
    logOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$store.dispatch("login/submitLogOut");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  computed: {
    ...mapState({
      logInData: (state) => state.login.logInData,
    }),
  },
};
</script>
