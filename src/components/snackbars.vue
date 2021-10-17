<template>
    <div>
        <v-snackbar color="success" timeout="2500" v-model="logInAlert">
            Haz ingresado exitosamente!
        </v-snackbar>
        <v-snackbar color="error" timeout="2500" v-model="logOutAlert">
            Tu sesion fue cerrada!
        </v-snackbar>
        <v-snackbar color="primary" timeout="2500" v-model="signInAlert">
            Se ha creado tu cuenta!
        </v-snackbar>
        <v-snackbar color="success" timeout="2500" v-model="addCourseAlert">
            Se ha agregado el curso!
        </v-snackbar>
        <v-snackbar color="primary" timeout="2500" v-model="editCourseAlert">
            Se han guardado los datos del curso!
        </v-snackbar>
        <v-snackbar color="error" timeout="2500" v-model="deleteCourseAlert">
            El curso se ha borrado exitosamente!
        </v-snackbar>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    computed: {
        ...mapState({
            logInAlert : state => state.snackbars.logInAlert,
            logOutAlert : state => state.snackbars.logOutAlert,
            signInAlert : state => state.snackbars.signInAlert,
            addCourseAlert : state => state.snackbars.addCourseAlert,
            editCourseAlert : state => state.snackbars.editCourseAlert,
            deleteCourseAlert : state => state.snackbars.deleteCourseAlert,
        })
    }
}
</script>