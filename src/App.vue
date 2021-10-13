<template>
  <v-app>
    <v-main class="pt-0">
      <Navbar/>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/navbar.vue"
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar,
  },
  mounted() {
    this.$store.dispatch("cardsInfo/getCoursesList");
  }
};
</script>
