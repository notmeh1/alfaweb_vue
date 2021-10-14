<template>
  <v-app-bar class="rounded-xl px-10 mx-3 mt-1" app flat dense>
    <v-app-bar-title
      ><span class="text-p font-weight-thin">alfa-web</span></v-app-bar-title
    >
    <v-spacer v-if="!logInData.email"></v-spacer>
    <v-divider vertical class="mx-2" v-if="logInData.email"></v-divider>
    <v-toolbar-items class="mx-2">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="rounded-xl"
            :to="{ name: 'Home' }"
            exact
            icon
            v-if="logInData.email"
            v-bind="attrs"
            v-on="on"
            ><v-icon>mdi-home</v-icon></v-btn
          >
        </template>
        <span>Inicio</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="rounded-xl"
            :to="{ name: 'Admin' }"
            exact
            icon
            v-if="logInData.email"
            v-bind="attrs"
            v-on="on"
            ><v-icon>mdi-file-edit</v-icon></v-btn
          >
        </template>
        <span>Administrar cursos</span>
      </v-tooltip>
      <v-btn :to="{ name: 'Login' }" exact v-if="!logInData.email"
        >Ingresar</v-btn
      >
      <v-btn exact v-if="!logInData.email" @click="signInOverlay=true">Regístrate</v-btn>
    </v-toolbar-items>
    <v-spacer v-if="logInData.email"></v-spacer>
    <v-divider vertical v-if="logInData.email"></v-divider>
    <span class="mx-3 text-h6 font-weight-thin" v-if="logInData.email"
      >Bienvenido:
      <span class="text-h6 font-weight-medium">{{
        logInData.email
      }}</span></span
    >
    <!-- Log Out btn not showing fix--->
    <v-tooltip bottom v-if="logInData.email">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="error"
          icon
          @click="logOut"
          
          v-bind="attrs"
          v-on="on"
          ><v-icon>mdi-exit-to-app</v-icon></v-btn
        >
      </template>
      <span>Cerrar sesion</span>
    </v-tooltip>
    <Signin :signInOverlay.sync="signInOverlay"/>
  </v-app-bar>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { mapState } from "vuex";
import Signin from "../components/signin.vue"

export default {
  data: () => ({
    signInOverlay: false,
  }),
  components: {
    Signin,
  },
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
