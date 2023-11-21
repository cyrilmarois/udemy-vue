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
};
