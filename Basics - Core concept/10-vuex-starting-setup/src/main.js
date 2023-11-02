import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const app = createApp(App);

const store = createStore({
  state() {
    return {
      counter: 0,
    };
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
      setTimeout(function () {
        context.commit('addTen', payload);
      }, 5000);
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
});
app.use(store);

app.mount('#app');
