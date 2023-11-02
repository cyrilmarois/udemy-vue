import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const app = createApp(App);

const store = createStore({
  state() {
    return {
      counter: 0,
      isAuthenticated: false,
    };
  },
  mutations: {
    addOne(state) {
      state.counter++;
    },
    addTen(state, payload) {
      state.counter += payload.value;
    },
    setIsAuthenticated(state, payload) {
      console.log({
        MAINJS__MUTATIONS_setIsAuthenticated: payload,
      });
      state.isAuthenticated = payload.isAuthenticated;
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
    setIsAuthenticated(context, payload) {
      console.log({
        MAINJS__ACTIONS_isAuthenticated: payload,
      });
      context.commit('setIsAuthenticated', payload);
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
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
});
app.use(store);

app.mount('#app');
