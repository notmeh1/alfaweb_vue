export const snackbarModule = {
    namespaced: true,
    state: {
        logInAlert: false,
        logOutAlert: false,
        SignInAlert: false,
        newCourseAlert: false,
        editCourseAlert: false,
        deleteCourseAlert: false,
    },
    mutations: {
        LOG_IN(state) {
            state.logInAlert = true
        },
        LOG_OUT(state) {
            state.logOutAlert = true
        },
        SIGN_IN(state) {
            state.SignInAlert = true
        },
        NEW_COURSE(state) {
            state.newCourseAlert = true
        },
        EDIT_COURSE(state) {
            state.editCourseAlert = true
        },
        DELETE_COURSE(state) {
            state.deleteCourseAlert = true
        }
    },
    actions: {
        logIn({commit}) {
            commit("LOG_IN")
        },
        logOut({commit}) {
            commit("LOG_OUT")
        },
        signIn({commit}) {
            commit("SIGN_IN")
        },
        newCourse({commit}) {
            commit("NEW_COURSE")
        },
        editCourse({commit}) {
            commit("EDIT_COURSE")
        },
        deleteCourse({commit}) {
            commit("DELETE_COURSE")
        },
    },
}