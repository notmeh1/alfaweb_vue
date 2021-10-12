<template>
  <v-row class="my-5">
    <v-col align="center" v-if="cardsInfo.length === 0">
      <span class="text-h4 font-weight-thin">Cargando cursos</span>
      <div class="text-center">
        <v-progress-circular
          class="my-3"
          size="50"
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
    </v-col>
    <v-col
      v-for="card in cardsInfo"
      :key="card.id"
      cols="4"
      xl="3"
      lg="4"
      md="6"
      sm="12"
    >
      <v-card class="mx-5 pa-5 rounded-xl" align="center">
        <v-img :src="card.img" width="150px" />
        <v-card-title class="justify-center"
          ><h2>{{ card.name }}</h2></v-card-title
        >
        <v-divider></v-divider>
        <v-card-text class="justify-start">
          <div class="font-weight-bold ml-8 mb-2" align="start">
            Informacion
          </div>

          <v-timeline align-top dense align="start">
            <v-timeline-item small :color="card.color">
              <div>
                <div class="font-weight-normal">
                  <strong>Costo:</strong> ${{
                    card.price.toLocaleString("es-CL")
                  }}
                </div>
                <div>
                  <strong>Duracion:</strong> {{ card.durationCourse }}
                  <span v-if="card.durationCourse > 1">meses</span>
                  <span v-if="card.durationCourse === 1">mes</span>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item small :color="card.color">
              <div>
                <div class="font-weight-normal">
                  <strong>Cupos disponibles:</strong> {{ card.stock }}
                </div>
                <div>
                  <strong>Completado:</strong>
                  <span v-if="card.state">Si</span>
                  <span v-if="!card.state">No</span>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item small :color="card.color">
              <div class="font-weight-normal">
                <strong>Descripcion: </strong> {{ card.description }}
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
        <v-btn :color="card.color" light>Comprar curso</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({}),
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
