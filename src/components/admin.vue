<template>
  <v-card>
    <v-card-title class="justify-center">Lista de cursos <v-btn color="success" icon><v-icon>mdi-plus-circle</v-icon></v-btn></v-card-title>
    <v-spacer></v-spacer>
    <v-data-table
      loading="true"
      loading-text="Cargando datos..."
      :headers="headers"
      :items="cardsInfo"
      :items-per-page="5"
      class="elevation-1"
    >
    </v-data-table>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      headers: [
        {
          text: "Curso",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Cupos", value: "stock" },
        { text: "Inscritos", value: "enrolledQty" },
        { text: "Duracion", value: "durationCourse" },
        { text: "Costo", value: "price" },
        { text: "Terminado", value: "state" },
        { text: "Fecha", value: "registrationDate" },
        { text: "Accion", sortable: false}
      ],
    };
  },
  computed: {
    ...mapState({
      cardsInfo: (state) => state.cardsInfo.cardsInfoList,
    }),
  },
  mounted() {
    this.$store.dispatch("cardsInfo/getCoursesList");
  },
};
</script>
