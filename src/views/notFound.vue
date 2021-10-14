<template>
  <div>
    <v-row class="my-10"></v-row>
    <v-row class="my-10">
      <v-col></v-col>
      <v-col cols="8" align="center">
        <v-icon x-large>mdi-alert-circle</v-icon>
        <h1>La pagina que buscas no existe</h1>
        <router-link :to="{ name: 'Home' }"
          >Haz click aqui para volver a la pagina principal</router-link
        >
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>
