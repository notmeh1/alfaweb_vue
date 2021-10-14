import { cardsInfoModule } from "./cardsInfo";

export const adminModule = {
  namespaced: true,
  state: {},
  getters: {
    totalStock(state) {
      return state.cardsInfo.cardsInfoList.reduce((accumulator, item) => {
        accumulator = accumulator + item.stock;
        return accumulator;
      }, 0);
    },
    totalCourses(state) {
      return state.cardsInfo.cardsInfoList.length;
    },
    totalEnrolled(state) {
      return state.cardsInfo.cardsInfoList.reduce((accumulator, item) => {
        accumulator = accumulator + item.enrolledQty;
        return accumulator;
      }, 0);
    },
    stockAvailable(state) {
      return state.cardsInfo.cardsInfoList.reduce((accumulator, item) => {
        accumulator = accumulator + item.stock - item.enrolledQty;
        return accumulator;
      }, 0);
    },
    finishedCourses(state) {
      return state.cardsInfo.cardsInfoList.reduce((accumulator, item) => {
        accumulator = accumulator + item.state;
        return accumulator;
      }, 0);
    },
    activeCourses(state) {
      return state.cardsInfo.cardsInfoList.reduce((accumulator, item) => {
        accumulator = accumulator + !item.state;
        return accumulator;
      }, 0);
    },
  },
  mutations: {},
  actions: {},
  modules: {
    cardsInfo: cardsInfoModule,
  },
};
