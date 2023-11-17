export default {
  coaches(state) {
    return state.coaches;
  },

  hasCoaches(_, getters) {
    return getters.coaches && getters.coaches.length > 0;
  },
};
