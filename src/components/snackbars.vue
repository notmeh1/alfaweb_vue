<template>
  <div>
    <v-snackbar
      color="success"
      :timeout="logIn.timeout"
      v-model="logIn.active"
      right
    >
      <v-icon>mdi-location-enter</v-icon>
      Haz ingresado exitosamente!
    </v-snackbar>
    <v-snackbar
      color="error"
      :timeout="logOut.timeout"
      v-model="logOut.active"
      right
    >
      <v-icon>mdi-location-exit</v-icon>
      Tu sesion fue cerrada!
    </v-snackbar>
    <v-snackbar
      color="primary"
      :timeout="signIn.timeout"
      v-model="signIn.active"
      right
    >
      <v-icon>mdi-account-plus</v-icon>
      Se ha creado tu cuenta!
    </v-snackbar>
    <v-snackbar
      color="error"
      :timeout="logIn.errTimeout"
      v-model="logIn.errActive"
      right
    >
      <v-icon>mdi-alert-circle-outline</v-icon>
      Los datos ingresados son incorrectos!
    </v-snackbar>
    <v-snackbar
      color="error"
      :timeout="signIn.errTimeout"
      v-model="signIn.errActive"
      right
    >
      <v-icon>mdi-alert-circle-outline</v-icon>
      Ya existe una cuenta con este correo!
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
