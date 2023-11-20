const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

export default {
  async coaches() {
    console.log('GETTERS COACHES');
    try {
      const response = await fetch(`${API_BASE_URL}/coaches.json`);
      console.log({ response });
      if (response.ok) {
        const responseData = await response.json();
        console.log({ responseData });

        return responseData;
      }
    } catch (e) {
      throw new Error(e.message);
    }
  },

  async hasCoaches(_, getters) {
    return getters.coaches && getters.coaches.length > 0;
  },

  async isCoach(_, getters, _2, rootGetters) {
    const coaches = await getters.coaches;
    console.log('GETTERS IS_COACH');
    console.log({ coaches });
    const userId = rootGetters.userId;

    return coaches.some((coach) => coach.id === userId);
  },
};
