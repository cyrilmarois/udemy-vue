export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.registered = payload?.registered || false;
  },
};
