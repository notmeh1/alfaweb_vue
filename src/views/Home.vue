<template>
  <div>
    <v-img class="home-bg" src="../assets/home-bg.jpg"> </v-img>
    <h1 class="centered">Cursos<br>Alfa web</h1>
  </div>
</template>

<style lang="scss" scoped>
.home-bg {
  opacity: 55%;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
</style>
