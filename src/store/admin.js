export const adminModule = {
    namespaced: true,
    state: {
        editOverlay: false,
    },
    mutations: {
        TOGGLE_OVERLAY(state) {
            state.editOverlay = !state.editOverlay
        }
    },
    actions: {
        toggleOverlay({commit}) {
            commit('TOGGLE_OVERLAY')
        }
    },
}