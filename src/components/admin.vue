<template>
  <div>
    <v-card>
      <v-card-title class="justify-center"
        >Lista de cursos
        <v-btn color="success" icon
          ><v-icon>mdi-plus-circle</v-icon></v-btn
        ></v-card-title
      >
      <v-spacer></v-spacer>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Curso</th>
              <th class="text-left">Cupos</th>
              <th class="text-left">Inscritos</th>
              <th class="text-left">Duracion</th>
              <th class="text-left">Costo</th>
              <th class="text-left">Terminado</th>
              <th class="text-left">Fecha</th>
              <th class="text-left">Accion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cardsInfo" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.stock }}</td>
              <td>{{ item.enrolledQty }}</td>
              <td>
                {{ item.durationCourse }}
                <span v-if="item.durationCourse > 1">meses</span
                ><span v-if="item.durationCourse === 1">mes</span>
              </td>
              <v-chip color="green">
                <td>${{ item.price.toLocaleString("es-CL") }}</td>
              </v-chip>
              <td>
                <v-chip color="primary" v-if="item.state">
                  <span>Si</span>
                </v-chip>
                <v-chip color="gray" v-if="!item.state">
                  <span>No</span>
                </v-chip>
              </td>
              <td>{{ item.registrationDate }}</td>
              <td>
                <div class="d-flex">
                  <v-btn color="primary" icon @click="$store.dispatch('admin/toggleOverlay')"><v-icon>mdi-pencil</v-icon></v-btn
                  ><v-btn color="error" icon><v-icon>mdi-delete</v-icon></v-btn>
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <!-- put editCourse component in v-overlay --->
    <v-overlay :value="editOverlay">
      <EditCourse/>
    </v-overlay>
  </div>
</template>

<script>
import { mapState } from "vuex";
import EditCourse from "../components/editCourse.vue"
export default {
  computed: {
    ...mapState({
      cardsInfo: (state) => state.cardsInfo.cardsInfoList,
      editOverlay: (state) => state.admin.editOverlay,
    }),
  },
  components: {
    EditCourse,
  },
  mounted() {
    this.$store.dispatch("cardsInfo/getCoursesList");
  },
};
</script>
