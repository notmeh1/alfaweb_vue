<template>
  <div>
    <v-snackbar color="success" :timeout="logIn.timeout" v-model="logIn.active" right>
      Haz ingresado exitosamente!
    </v-snackbar>
    <v-snackbar color="error" :timeout="logOut.timeout" v-model="logOut.active" right>
      Tu sesion fue cerrada!
    </v-snackbar>
    <v-snackbar color="primary" :timeout="signIn.timeout" v-model="signIn.active" right>
      Se ha creado tu cuenta!
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      logIn: (state) => state.snackbars.logIn,
      logOut: (state) => state.snackbars.logOut,
      signIn: (state) => state.snackbars.signIn,
    }),
  },
};
</script>
