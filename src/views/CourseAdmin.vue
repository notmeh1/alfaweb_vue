<template>
  <div>
    <v-parallax src="../assets/admin-bg.jpg">
      <v-row align="center" justfy="center">
        <v-col class="text-center">
          <h1 class="text-h4 font-weight-thin mb-4">
            Administracion<br />
            de cursos
          </h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row class="mb-10">
        <v-col></v-col>
        <v-col cols="9">
            <Admin />
        </v-col>
        <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
import Admin from "../components/admin.vue";
export default {
  components: {
    Admin,
  },
};
</script>
