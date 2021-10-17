<template>
  <v-card class="rounded-md text-center pa-5" elevation="3">
    <v-card-title class="justify-center mb-4"
      ><h1>Ingresa a tu cuenta</h1></v-card-title
    >
    <v-form>
      <v-text-field
        class="rounded-xl px-5"
        type="email"
        prepend-inner-icon="mdi-account"
        label="Correo electronico"
        v-model="loginData.email"
        outlined
        dense
      />
      <v-text-field
        class="rounded-xl px-5"
        type="password"
        prepend-inner-icon="mdi-lock"
        label="Contraseña"
        v-model="loginData.password"
        outlined
        dense
      />
      <v-btn class="rounded-xl" color="success" width="200px" @click="logIn"
        >Ingresar</v-btn
      >
    </v-form>
  </v-card>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data: () => ({
    loginData: {
      email: null,
      password: null,
    },
  }),
  methods: {
    logIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        this.loginData.email,
        this.loginData.password
      )
        .then((userCredentials) => {
          // Signed in
          this.$store.dispatch("login/submitLogIn", this.loginData);
          const user = userCredentials.user;
          console.log(user);
        })
        .catch((error) => {
          // If there is an error
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    },
  },
};
</script>
