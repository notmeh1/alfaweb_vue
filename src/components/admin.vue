<template>
  <div>
    <v-card>
      <v-card-title class="justify-center"
        >Lista de cursos
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="success"
              icon
              @click="dialog = true"
              v-bind="attrs"
              v-on="on"
              ><v-icon>mdi-plus-circle</v-icon></v-btn
            >
          </template>
          <span>Agregar curso</span>
        </v-tooltip>
      </v-card-title>
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
              <td>
                <v-chip color="success" v-if="item.registrationDate">
                  {{ item.registrationDate }}
                </v-chip>
              </td>
              <td>
                <div class="d-flex">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        icon
                        :to="{ path: `/admin/edit/${item.id}` }"
                        v-bind="attrs"
                        v-on="on"
                        ><v-icon>mdi-pencil</v-icon></v-btn
                      >
                    </template>
                    <span>Editar curso</span>
                  </v-tooltip>

                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="error"
                        icon
                        @click="deleteCourse(item.id)"
                        v-bind="attrs"
                        v-on="on"
                        ><v-icon>mdi-delete</v-icon></v-btn
                      >
                    </template>
                    <span>Borrar curso</span>
                  </v-tooltip>
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <AddCourse :dialog.sync="dialog" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../main";
import AddCourse from "../components/addCourse.vue";

export default {
  data: () => ({
    dialog: false,
  }),
  components: {
    AddCourse,
  },
  computed: {
    ...mapState({
      cardsInfo: (state) => state.cardsInfo.cardsInfoList,
    }),
  },
  methods: {
    deleteCourse(id) {
      this.$swal({
        title: "<h4 style='color: #ffffff';>Borrar curso?</h4>",
        html: "<p style='color: #ffffff';>No podrás revertir los cambios</p>",
        textColor: "#fffff",
        icon: "warning",
        iconColor: "red",
        background: "#263238",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Borrar curso",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteDoc(doc(db, "cardsInfo", id));
          this.$swal({
            title: "<h4 style='color: #ffffff';>Listo!</h4>",
            html: "<p style='color: #ffffff';>El curso ha sido borrado.</p>",
            icon: "success",
            background: "#263238"
          });
        }
      });
    },
  },
};
</script>
