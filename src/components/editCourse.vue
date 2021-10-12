<template>
    <div>
      <v-card width="100%" height="300px">
        <v-card-title>Editar Curso</v-card-title>
        <v-form ref="form">
          <v-text-field label="Nombre del curso" />
          <v-text-field label="URL de la imagen" />
          <v-text-field label="Color de acento" />
          <v-text-field label="Cupos del curso" />
          <v-text-field label="Inscritos" />
          <v-text-field label="Costo del curso" />
          <v-text-field label="Duracion del curso" />
          <v-text-field label="Codigo del curso" />
          <v-text-field label="Descripcion del curso" />
          <v-text-field label="Fecha de registro" />
          <v-text-field label="Estado del curso" />
        </v-form>
      </v-card>
      <v-btn @click="$store.dispatch('admin/toggleOverlay')">Cerrar</v-btn>
</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      editOverlay: (state) => state.admin.editOverlay,
    }),
  },
};
</script>
