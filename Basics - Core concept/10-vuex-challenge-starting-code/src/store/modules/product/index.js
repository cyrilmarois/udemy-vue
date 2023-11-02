import productGetters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      products: [],
    };
  },
  mutations: {},
  actions: {},
  getters: productGetters,
};
