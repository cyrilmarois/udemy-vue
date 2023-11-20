export default {
  coaches(state) {
    console.log('GETTERS COACHES');
    return state.coaches;
  },

  hasCoaches(_, getters) {
    return getters.coaches && getters.coaches.length > 0;
  },

  async isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    console.log('GETTERS IS_COACH');
    console.log({ coaches });
    const userId = rootGetters.userId;

    return coaches.some((coach) => coach.id === userId);
  },
};
