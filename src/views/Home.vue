<template>
  <div>
    <v-parallax src="../assets/home-bg.jpg">
      <v-row align="center" justfy="center">
        <v-col class="text-center">
          <h1 class="text-h4 font-weight-thin mb-4">Cursos Alfa-Web</h1>
          <h4>Listado de Cursos</h4>
        </v-col>
      </v-row>
    </v-parallax>
    <CardsInfo />
  </div>
</template>

<script>
import CardsInfo from "../components/cards.vue";
export default {
  components: {
    CardsInfo,
  },
};
</script>

