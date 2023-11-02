import { createStore } from 'vuex';

import counterModule from './counter/index.js';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

const Store = createStore({
  modules: {
    number: counterModule,
  },
  state() {
    return {
      isAuthenticated: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default Store;
