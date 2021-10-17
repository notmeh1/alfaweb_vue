import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../main";

export const cardsInfoModule = {
  namespaced: true,
  state: {
    cardsInfoList: [],
  },
  mutations: {
    GET_COURSES_LIST(state, list) {
      state.cardsInfoList = list;
    },
  },
  actions: {
    async getCoursesList({ commit }) {
      let list = [];
      await onSnapshot(collection(db, "cardsInfo"), (doc) => {
        doc.forEach((course) => {
          list.push({ id: course.id, ...course.data() });
          commit("GET_COURSES_LIST", list);
          //console.log(list)
        }, (list = []));
      });
    },
  },
};
