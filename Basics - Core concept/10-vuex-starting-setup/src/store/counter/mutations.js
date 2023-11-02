export default {
  addOne(state) {
    state.counter++;
  },
  addTen(state, payload) {
    state.counter += payload.value;
  },
};
