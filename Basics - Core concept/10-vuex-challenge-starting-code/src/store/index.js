import { createStore } from 'vuex';
import CartModule from './modules/cart/index.js';
import ProductModule from './modules/product/index.js';

const store = createStore({
  modules: { CartModule, ProductModule },
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  getters: {},
});

export default store;
