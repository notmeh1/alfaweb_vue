<template>
  <div>
    <v-card class="mt-10 pa-5 rounded-xl" width="750px" v-if="getData">
      <v-card-title class="justify-center"><h1>Editar Curso</h1></v-card-title>
      <v-form ref="form">
        <v-text-field label="Codigo del curso" v-model="getData.code" />
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
          label="Duracion del curso (número de meses)"
          v-model="getData.durationCourse"
        />
        <v-text-field
          type="text"
          label="Fecha de registro"
          v-model="getData.registrationDate"
        />
        <v-select label="Terminado" v-model="getData.state" :items="stateSelect"></v-select>
      </v-form>
      <div class="d-flex">
        <v-btn class="rounded-xl" color="success" @click="editCourseInfo">Guardar cambios</v-btn>
        <v-spacer></v-spacer>
        <v-btn class="rounded-xl" color="error" @click="discardChanges"
          >Descartar cambios y volver</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<script>
import router from "../router";
import { db } from "../main";
import { doc, setDoc } from "firebase/firestore";
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
    getCode() {
      return this.$route.params.code;
    },
    getData() {
      return this.$store.state.cardsInfo.cardsInfoList.find(
        (course) => course.code === this.getCode
      );
    },
  },
  methods: {
    discardChanges() {
      router.push("/admin");
    },
    editCourseInfo() {
      let id = this.getData.id
      setDoc(doc(db, "cardsInfo", id), this.getData)
      this.$router.push("/admin")
    }
  },
  mounted() {
    this.$vuetify.goTo(0, "lineal");
    console.log(this.getCode)
  },
};
</script>
