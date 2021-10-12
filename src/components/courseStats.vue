<template>
  <div class="mb-10">
    <v-alert dense color="purple">
      Cantidad total de alumnos permitidos: {{totalStock}}
    </v-alert>
    <v-alert dense color="primary">
      Cantidad total de alumnos inscritos: 
    </v-alert>
    <v-alert dense color="red lighten-1">
      Cantidad total de cupos restantes: 
    </v-alert>
    <v-alert dense color="pink accent-3">
      Cantidad total de cursos terminados:
    </v-alert>
    <v-alert dense color="brown">
      Cantidad total de cursos activos:
    </v-alert>
    <v-alert dense color="amber darken-4">
      Cantidad total de cursos: 
    </v-alert>
  </div>
</template>

<script>
export default {
    computed: {
        totalStock() {
            return this.$store.state.admin.totalStock
        }
    }
}
</script>
