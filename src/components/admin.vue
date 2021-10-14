<template>
  <div>
    <v-card>
      <v-card-title class="justify-center"
        >Lista de cursos
        <v-btn color="success" icon @click="dialog=true"
          ><v-icon>mdi-plus-circle</v-icon></v-btn
        ></v-card-title
      >
      <v-spacer></v-spacer>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Codigo</th>
              <th class="text-left">Color</th>
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
              <td>{{ item.code }}</td>
              <td><v-icon :color="item.color">mdi-circle</v-icon></td>
              <td>{{ item.name }}</td>
              <td>{{ item.stock }}</td>
              <td>{{ item.enrolledQty }}</td>
              <td>
                {{ item.durationCourse }}
                <span v-if="item.durationCourse > 1">meses</span
                ><span v-if="item.durationCourse === 1">mes</span>
              </td>
              <td>
                <v-chip color="green">
                  ${{ item.price.toLocaleString("es-CL") }}
                </v-chip>
              </td>
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
                  <v-btn
                    color="primary"
                    icon
                    :to="{ path: `/admin/edit/${item.code}` }"
                    ><v-icon>mdi-pencil</v-icon></v-btn
                  ><v-btn color="error" icon @click="deleteCourse(item.id)"
                    ><v-icon>mdi-delete</v-icon></v-btn
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <AddCourse :dialog.sync="dialog"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../main";
import AddCourse from "../components/addCourse.vue"

export default {
  data: () => ({
    dialog: false,
  }),
  components: {
    AddCourse
  },
  computed: {
    ...mapState({
      cardsInfo: (state) => state.cardsInfo.cardsInfoList,
    }),
  },
  methods: {
    deleteCourse(id) {
      deleteDoc(doc(db, "cardsInfo", id));
    },
  },
};
</script>
