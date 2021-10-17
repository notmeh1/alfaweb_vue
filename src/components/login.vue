<template>
  <v-card class="rounded-md text-center pa-5" elevation="3">
    <v-card-title class="justify-center mb-4"
      ><h1>Ingresa a tu cuenta</h1></v-card-title
    >
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        required
        class="rounded-xl px-5"
        type="email"
        :rules="[(v) => !!v || 'Por favor escribe tu correo electronico']"
        prepend-inner-icon="mdi-account"
        label="Correo electronico"
        v-model="loginData.email"
        outlined
        dense
      />
      <v-text-field
        required
        class="rounded-xl px-5"
        type="password"
        :rules="[(v) => !!v || 'Por favor escribe tu contraseña']"
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
    valid: true,
    loginData: {
      email: null,
      password: null,
    },
  }),
  methods: {
    logIn() {
      if (this.$refs.form.validate()) {
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
            this.$store.dispatch("login/errorLogIn");
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      }
    },
  },
};
</script>
