export default {
  coaches(state) {
    return state.coaches;
  },

  hasCoaches(_, getters) {
    return getters.coaches && getters.coaches.length > 0;
  },

  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;

    return coaches.some((coach) => coach.id === userId);
  },

  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    return !lastFetch ? true : (new Date().getTime() - lastFetch) / 1000 > 60; // if last fetch was > 1 min
  },
};
