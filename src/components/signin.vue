<template>
  <v-dialog
    v-model="signInOverlay"
    persistent
    content-class="elevation-0"
    height="100%"
  >
    <v-row>
      <v-col></v-col>
      <v-col cols="7">
        <v-card
          class="rounded-md blue-grey darken-4 text-center pa-4"
          elevation="3"
        >
          <v-card-title class="justify-center mb-4"
            ><h1>Registrate</h1></v-card-title
          >
          <v-form class="px-10" ref="form" v-model="valid" lazy-validation>
            <v-text-field
              required
              class="rounded-xl"
              type="email"
              :rules="[(v) => !!v || 'Por favor escribe tu correo electronico']"
              label="Ingresa tu correo electronico"
              v-model="signInData.email"
              outlined
              dense
            />
            <v-text-field
              required
              class="rounded-xl"
              type="password"
              :rules="[(v) => !!v || 'Por favor escribe tu contraseña']"
              label="Ingresa una contraseña"
              v-model="signInData.password"
              outlined
              dense
            />
            <div class="d-flex">
              <v-btn
                class="rounded-xl"
                color="primary"
                width="200px"
                @click="signIn"
                >Crear cuenta</v-btn
              >
              <v-spacer class="mx-2"></v-spacer>
              <v-btn
                class="rounded-xl"
                color="error"
                width="200px"
                @click="close"
                >Volver</v-btn
              >
            </div>
          </v-form>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-dialog>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  data: () => ({
    valid: true,
    signInData: {
      email: null,
      password: null,
    },
  }),
  methods: {
    signIn() {
      if (this.$refs.form.validate()) {
        const auth = getAuth();
        createUserWithEmailAndPassword(
          auth,
          this.signInData.email,
          this.signInData.password
        )
          .then((userCredentials) => {
            // Signed in
            this.$store.state.snackbars.signIn.active = true;
            this.$store.dispatch("login/submitLogIn", this.signInData);
            this.close();
            const user = userCredentials.user;
            console.log(user);
          })
          .catch((error) => {
            // If there is an error
            this.$store.dispatch("login/errorSignIn");
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
          });
      }
    },
    close() {
      this.$emit("update:signInOverlay", false);
    },
  },
  props: {
    signInOverlay: {
      default: false,
    },
  },
};
</script>
