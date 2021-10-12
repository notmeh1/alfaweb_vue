<template>
  <v-row class="my-10">
      <v-col></v-col>
    <v-col>
      <EditCourse />
    </v-col>
    <v-col></v-col>
  </v-row>
</template>

<script>
import EditCourse from "../components/editCourse.vue";
export default {
  components: {
    EditCourse,
  },
};
</script>
