import { createStore } from 'vuex';
import CartModule from './modules/cart/index.js';
import ProductModule from './modules/product/index.js';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

const store = createStore({
  modules: { CartModule, ProductModule },
  state() {
    return {
      isAuthenticated: true,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
