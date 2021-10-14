<template>
  <v-dialog v-model="signInOverlay" persistent content-class="elevation-0">
    <v-row>
      <v-col></v-col>
      <v-col cols="8">
        <v-card class="rounded-md text-center pa-5" elevation="3">
          <v-card-title class="justify-center mb-4"
            ><h1>Registrate</h1></v-card-title
          >
          <v-form>
            <v-text-field
              class="rounded-xl"
              type="email"
              label="Ingresa tu correo electronico"
              v-model="signInData.email"
              outlined
              dense
            />
            <v-text-field
              class="rounded-xl"
              type="password"
              label="Ingresa una contraseña"
              v-model="signInData.password"
              outlined
              dense
            />
            <div class="d-flex">
              <v-btn class="rounded-xl" color="success" width="200px"
                >Crear cuenta</v-btn
              >
              <v-spacer></v-spacer>
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
export default {
  data: () => ({
    signInData: {
      email: null,
      password: null,
    },
  }),
  methods: {
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
