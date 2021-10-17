<template>
  <v-dialog v-model="dialog" persistent content-class="elevation-0">
    <v-row>
      <v-col></v-col>
      <v-col>
        <v-card class="mt-10 pa-5 blue-grey darken-4" width="750px">
          <v-card-title class="justify-center"
            ><h1>Agregar Curso</h1></v-card-title
          >
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              required
              type="text"
              :rules="[(v) => !!v || 'Por favor escribe el codigo del curso']"
              label="Codigo del curso"
              v-model="newCourse.code"
            />
            <v-text-field
              required
              type="text"
              :rules="[(v) => !!v || 'Por favor escribe el nombre del curso']"
              label="Nombre del curso"
              v-model="newCourse.name"
            />
            <v-textarea
              outlined
              required
              type="text"
              :rules="[(v) => !!v || 'Por favor escribe una descripcion']"
              label="Descripcion del curso"
              v-model="newCourse.description"
            />
            <v-text-field
              required
              type="text"
              :rules="[(v) => !!v || 'Por favor escribe la url de la foto']"
              label="URL de la imagen"
              v-model="newCourse.img"
            />
            <v-text-field
              required
              type="text"
              :rules="[(v) => !!v || 'Por favor escribe un color de acento']"
              label="Color de acento"
              v-model="newCourse.color"
            />
            <v-text-field
              required
              type="number"
              :rules="[(v) => !!v || 'Por favor escribe la cantidad de cupos']"
              min="1"
              max="1000"
              label="Cupos del curso"
              v-model.number="newCourse.stock"
            />
            <v-text-field
              required
              type="number"
              :rules="[
                (v) => !!v || 'Por favor escribe la cantidad de inscritos',
                stockCheck,
              ]"
              min="1"
              label="Inscritos"
              v-model.number="newCourse.enrolledQty"
            />
            <v-text-field
              required
              type="number"
              :rules="[(v) => !!v || 'Por favor escribe el costo del curso']"
              min="1"
              label="Costo del curso"
              v-model.number="newCourse.price"
            />
            <v-text-field
              required
              type="number"
              :rules="[(v) => !!v || 'Por favor escribe la duracion del curso']"
              min="1"
              max="1000"
              label="Duracion del curso (número de meses)"
              v-model.number="newCourse.durationCourse"
            />
            <v-text-field
              disabled
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
    valid: true,
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
      state: false,
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
      if (
        this.$refs.form.validate()
      ) {
        this.$swal({
          title: "<h4 style='color: #ffffff';>¿Estás seguro de esto?</h4>",
          textColor: "#fffff",
          icon: "warning",
          iconColor: "green",
          background: "#263238",
          showCancelButton: true,
          confirmButtonColor: "green",
          cancelButtonColor: "#3085d6",
          cancelButtonText: "Volver",
          confirmButtonText: "Agregar curso",
        }).then((result) => {
          if (result.isConfirmed) {
            addDoc(collection(db, "cardsInfo"), this.newCourse);
            this.$emit("update:dialog", false);
            Object.keys(this.newCourse).forEach(
              (i) => (this.newCourse[i] = null)
            );
            this.close();
            this.$swal({
              title: "<h4 style='color: #ffffff';>Listo!</h4>",
              html: "<p style='color: #ffffff';>El curso ha sido agregado.</p>",
              icon: "success",
              background: "#263238",
            });
          }
        });
      }
    },
    close() {
      this.$emit("update:dialog", false);
    },
    stockCheck() {
      if (this.newCourse.enrolledQty > this.newCourse.stock) {
        this.valid = false;
        return "El numero de inscritos es mayor que el stock disponible";
      } else {
        return true;
      }
    },
  },
  props: {
    dialog: {
      default: false,
    },
  },
  mounted() {
    var today = new Date();

    var date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    this.newCourse.registrationDate = date;
  },
};
</script>
