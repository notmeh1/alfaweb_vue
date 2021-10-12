<template>
  <div>
    <v-card class="mt-10 pa-5" width="750px">
      <v-card-title class="justify-center">Editar Curso</v-card-title>
      <v-form ref="form">
        <v-text-field label="Nombre del curso" v-model="getData.name"/>
        <v-text-field label="URL de la imagen" v-model="getData.img"/>
        <v-text-field label="Color de acento" v-model="getData.color"/>
        <v-text-field label="Cupos del curso" v-model="getData.stock"/>
        <v-text-field label="Inscritos" v-model="getData.enrolledQty"/>
        <v-text-field label="Costo del curso" v-model="getData.price"/>
        <v-text-field label="Duracion del curso" v-model="getData.durationCourse"/>
        <v-text-field label="Codigo del curso" v-model="getData.id"/>
        <v-text-field label="Descripcion del curso" v-model="getData.description"/>
        <v-text-field label="Fecha de registro" v-model="getData.registrationDate"/>
        <v-text-field label="Estado del curso" v-model="getData.state"/>
      </v-form>
      <v-btn color="success">Guardar cambios</v-btn>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      editOverlay: (state) => state.admin.editOverlay,
    }),
    getId() {
        return this.$route.params.id
    },
    getData() {
        return this.$store.state.cardsInfo.cardsInfoList.find((course) => course.id === this.getId)
    }
  },
};
</script>
