<template>
  <v-footer bottom :fixed="!logInData.email">
    <v-row class="my-4" justify="center">
      <v-btn icon href="https://github.com/notmeh1/alfaweb_vue" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      logInData: (state) => state.login.logInData,
    }),
  },
};
</script>
