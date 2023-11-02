export default {
  setIsAuthenticated(state, payload) {
    console.log({
      MAINJS__MUTATIONS_setIsAuthenticated: payload,
    });
    state.isAuthenticated = payload.isAuthenticated;
  },
};
