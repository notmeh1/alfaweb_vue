<template>
  <v-app>
    <v-main class="pt-0">
      <Navbar />
      <router-view />
      <Snackbars />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Snackbars from "./components/snackbars.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar,
    Snackbars,
  },
  mounted() {
    this.$store.dispatch("cardsInfo/getCoursesList");
  },
};
</script>
