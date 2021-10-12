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
  },
};
