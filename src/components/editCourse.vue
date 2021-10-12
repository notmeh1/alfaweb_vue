<template>
  <div>
    <v-card class="mt-10 pa-5 rounded-xl" width="750px" v-if="getData">
      <v-card-title class="justify-center">Editar Curso</v-card-title>
      <v-form ref="form">
        <v-text-field label="Codigo del curso" v-model="getData.id" disabled />
        <v-text-field
          type="text"
          label="Nombre del curso"
          v-model="getData.name"
        />
        <v-text-field
          type="text"
          label="Descripcion del curso"
          v-model="getData.description"
        />
        <v-text-field
          type="text"
          label="URL de la imagen"
          v-model="getData.img"
        />
        <v-text-field
          type="text"
          label="Color de acento"
          v-model="getData.color"
        />
        <v-text-field
          type="number"
          min="1"
          max="1000"
          label="Cupos del curso"
          v-model="getData.stock"
        />
        <v-text-field
          type="number"
          min="1"
          label="Inscritos"
          v-model="getData.enrolledQty"
        />
        <v-text-field
          type="number"
          min="1"
          label="Costo del curso"
          v-model="getData.price"
        />
        <v-text-field
          type="number"
          min="1"
          max="1000"
          label="Duracion del curso (meses)"
          v-model="getData.durationCourse"
        />
        <v-text-field
          type="text"
          label="Fecha de registro"
          v-model="getData.registrationDate"
        />
        <v-select label="Terminado" :v-model="getData.state" :items="stateSelect"></v-select>
      </v-form>
      <div class="d-flex">
        <v-btn color="success">Guardar cambios</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="discardChanges"
          >Descartar cambios y volver</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<script>
import router from "../router";
export default {
    data: () => ({
    stateSelect: [
      {
        text: 'Si',
        value: true,
      },
      {
        text: 'No',
        value: false,
      }
    ]
  }),
  computed: {
    getId() {
      return this.$route.params.id;
    },
    getData() {
      return this.$store.state.cardsInfo.cardsInfoList.find(
        (course) => course.id === this.getId
      );
    },
  },
  methods: {
    discardChanges() {
      router.push("/admin");
    },
  },
  mounted() {
    this.$store.dispatch("cardsInfo/getCoursesList");
    this.$vuetify.goTo(0, "lineal");
  },
};
</script>
