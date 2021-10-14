<template>
  <div class="mb-10">
    <v-alert dense color="purple">
      <v-icon class="mx-2">mdi-account-group</v-icon>
      Cantidad total de alumnos permitidos:
      <strong>{{ totalStock }}</strong> alumnos
    </v-alert>
    <v-alert dense color="primary">
      <v-icon class="mx-2">mdi-account-multiple-check</v-icon>
      Cantidad total de alumnos inscritos:
      <strong>{{ totalEnrolled }}</strong> alumnos
    </v-alert>
    <v-alert dense color="red lighten-1">
      <v-icon class="mx-2">mdi-account-clock</v-icon>
      Cantidad total de cupos restantes:
      <strong>{{ stockAvailable }}</strong> cupos
    </v-alert>
    <v-alert dense color="pink accent-3">
      <v-icon class="mx-2">mdi-cancel</v-icon>
      Cantidad total de cursos terminados:
      <strong>{{ finishedCourses }}</strong> cursos
    </v-alert>
    <v-alert dense color="brown">
      <v-icon class="mx-2">mdi-bell-ring</v-icon>
      Cantidad total de cursos activos:
      <strong>{{ activeCourses }}</strong> cursos</v-alert
    >
    <v-alert dense color="amber darken-4">
      <v-icon class="mx-2">mdi-bell</v-icon>
      Cantidad total de cursos:
      <strong>{{ totalCourses }}</strong> cursos</v-alert
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      totalStock: "admin/totalStock",
      totalEnrolled: "admin/totalEnrolled",
      stockAvailable: "admin/stockAvailable",
      finishedCourses: "admin/finishedCourses",
      activeCourses: "admin/activeCourses",
      totalCourses: "admin/totalCourses",
    }),
  },
};
</script>
