<template>
  <v-dialog v-model="dialog" persistent content-class="elevation-0">
    <v-row>
      <v-col></v-col>
      <v-col>
        <v-card class="mt-10 pa-5 rounded-xl" width="750px">
          <v-card-title class="justify-center"
            ><h1>Agregar Curso</h1></v-card-title
          >
          <v-form ref="form">
            <v-text-field label="Codigo del curso" v-model="newCourse.code" />
            <v-text-field
              type="text"
              label="Nombre del curso"
              v-model="newCourse.name"
            />
            <v-text-field
              type="text"
              label="Descripcion del curso"
              v-model="newCourse.description"
            />
            <v-text-field
              type="text"
              label="URL de la imagen"
              v-model="newCourse.img"
            />
            <v-text-field
              type="text"
              label="Color de acento"
              v-model="newCourse.color"
            />
            <v-text-field
              type="number"
              min="1"
              max="1000"
              label="Cupos del curso"
              v-model="newCourse.stock"
            />
            <v-text-field
              type="number"
              min="1"
              label="Inscritos"
              v-model="newCourse.enrolledQty"
            />
            <v-text-field
              type="number"
              min="1"
              label="Costo del curso"
              v-model="newCourse.price"
            />
            <v-text-field
              type="number"
              min="1"
              max="1000"
              label="Duracion del curso (número de meses)"
              v-model="newCourse.durationCourse"
            />
            <v-text-field
              type="text"
              label="Fecha de registro"
              v-model="newCourse.registrationDate"
            />
            <v-select
              label="Terminado"
              v-model="newCourse.state"
              :items="stateSelect"
            ></v-select>
          </v-form>
          <div class="d-flex">
            <v-btn class="rounded-xl" color="success" @click="addCourseInfo"
              >Guardar cambios</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn class="rounded-xl" color="error" @click.native="close"
              >Descartar cambios y volver</v-btn
            >
          </div>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-dialog>
</template>

<script>
import router from "../router";
import { db } from "../main";
import { addDoc, collection } from "firebase/firestore";
export default {
  data: () => ({
    newCourse: {
      name: null,
      description: null,
      img: null,
      color: null,
      durationCourse: null,
      enrolledQty: null,
      code: null,
      price: null,
      registrationDate: null,
      stock: null,
      state: null,
    },
    stateSelect: [
      {
        text: "Si",
        value: true,
      },
      {
        text: "No",
        value: false,
      },
    ],
  }),
  methods: {
    discardChanges() {
      router.push("/admin");
    },
    addCourseInfo() {
      addDoc(collection(db, "cardsInfo"), this.newCourse);
      this.$emit("update:dialog", false);
    },
    close() {
      this.$emit("update:dialog", false);
    },
  },
  props: {
    dialog: {
      default: false,
    },
  },
};
</script>
