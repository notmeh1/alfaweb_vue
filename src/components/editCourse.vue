<template>
  <div>
    <v-card class="mt-10 pa-5 rounded-xl" width="750px" v-if="getData">
      <v-card-title class="justify-center"><h1>Editar Curso</h1></v-card-title>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          required
          :rules="[(v) => !!v || 'Por favor escribe el codigo del curso']"
          label="Codigo del curso"
          v-model="getData.code"
        />
        <v-text-field
          required
          type="text"
          :rules="[(v) => !!v || 'Por favor escribe el nombre del curso']"
          label="Nombre del curso"
          v-model="getData.name"
        />
        <v-text-field
          required
          type="text"
          :rules="[(v) => !!v || 'Por favor escribe una descripcion']"
          label="Descripcion del curso"
          v-model="getData.description"
        />
        <v-text-field
          required
          type="text"
          :rules="[(v) => !!v || 'Por favor escribe la url de la foto']"
          label="URL de la imagen"
          v-model="getData.img"
        />
        <v-text-field
          required
          type="text"
          :rules="[(v) => !!v || 'Por favor escribe un color de acento']"
          label="Color de acento"
          v-model="getData.color"
        />
        <v-text-field
          required
          type="number"
          :rules="[(v) => !!v || 'Por favor escribe la cantidad de cupos']"
          min="1"
          max="1000"
          label="Cupos del curso"
          v-model.number="getData.stock"
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
          v-model.number="getData.enrolledQty"
        />
        <v-text-field
          required
          type="number"
          :rules="[(v) => !!v || 'Por favor escribe el costo del curso']"
          min="1"
          label="Costo del curso"
          v-model.number="getData.price"
        />
        <v-text-field
          required
          type="number"
          :rules="[(v) => !!v || 'Por favor escribe la duracion del curso']"
          min="1"
          max="1000"
          label="Duracion del curso (número de meses)"
          v-model.number="getData.durationCourse"
        />
        <v-text-field
          required
          type="text"
          :rules="[(v) => !!v || 'Por favor escribe la fecha de registro']"
          label="Fecha de registro"
          v-model="getData.registrationDate"
        />
        <v-select
          label="Terminado"
          v-model="getData.state"
          :items="stateSelect"
        ></v-select>
      </v-form>
      <div class="d-flex">
        <v-btn class="rounded-xl" color="success" @click="editCourseInfo"
          >Guardar cambios</v-btn
        >
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
    valid: true,
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
  computed: {
    getCode() {
      return this.$route.params.id;
    },
    getData() {
      return this.$store.state.cardsInfo.cardsInfoList.find(
        (course) => course.id === this.getCode
      );
    },
  },
  methods: {
    discardChanges() {
      router.push("/admin");
    },
    editCourseInfo() {
      if (this.$refs.form.validate()) {
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
          confirmButtonText: "Guardar cambios",
        }).then((result) => {
          if (result.isConfirmed) {
            let id = this.getData.id;
            setDoc(doc(db, "cardsInfo", id), this.getData);
            this.$router.push("/admin");
            this.$swal({
              title: "<h4 style='color: #ffffff';>Listo!</h4>",
              html: "<p style='color: #ffffff';>Los cambios se han guardado.</p>",
              icon: "success",
              background: "#263238",
            });
          }
        });
      }
    },
    stockCheck() {
      if (this.getData.enrolledQty > this.getData.stock) {
        this.valid = false;
        return "El numero de inscritos es mayor que el stock disponible";
      } else {
        return true;
      }
    },
  },
  mounted() {
    this.$vuetify.goTo(0, "lineal");
    console.log(this.getCode);
  },
};
</script>
