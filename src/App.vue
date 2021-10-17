<template>
  <v-app>
    <v-main class="pt-0">
      <Navbar />
      <router-view />
      <Footer/>
      <Snackbars />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Snackbars from "./components/snackbars.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar,
    Footer,
    Snackbars,
  },
  mounted() {
    this.$store.dispatch("cardsInfo/getCoursesList");
  },
};
</script>
