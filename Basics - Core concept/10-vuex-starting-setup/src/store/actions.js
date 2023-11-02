export default {
  setIsAuthenticated(context, payload) {
    console.log({
      MAINJS__ACTIONS_isAuthenticated: payload,
    });
    context.commit('setIsAuthenticated', payload);
  },
};
