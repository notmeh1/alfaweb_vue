<template>
  <v-row>
    <v-col></v-col>
    <v-col class="mt-10" cols="6">
      <Login />
    </v-col>
    <v-col></v-col>
  </v-row>
</template>

<script>
import Login from "../components/login.vue";

export default {
  name: "Home",

  components: {
    Login,
  },
};
</script>
