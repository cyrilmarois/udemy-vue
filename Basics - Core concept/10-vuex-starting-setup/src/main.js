import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const app = createApp(App);

const counterModule = {
  state() {
    return { counter: 0 };
  },
  mutations: {
    addOne(state) {
      state.counter++;
    },
    addTen(state, payload) {
      state.counter += payload.value;
    },
  },
  actions: {
    increment(context) {
      console.log({ context });
      setTimeout(() => {
        context.commit('addOne');
      }, 5000);
    },
    increment10(context, payload) {
      context.commit('addTen', payload);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
};

const store = createStore({
  modules: {
    number: counterModule,
  },
  state() {
    return {
      isAuthenticated: false,
    };
  },
  mutations: {
    setIsAuthenticated(state, payload) {
      console.log({
        MAINJS__MUTATIONS_setIsAuthenticated: payload,
      });
      state.isAuthenticated = payload.isAuthenticated;
    },
  },
  actions: {
    setIsAuthenticated(context, payload) {
      console.log({
        MAINJS__ACTIONS_isAuthenticated: payload,
      });
      context.commit('setIsAuthenticated', payload);
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
});
app.use(store);

app.mount('#app');
