const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

export default {
  async coaches() {
    try {
      const response = await fetch(`${API_BASE_URL}/coaches.json`);
      console.table({ response });
      if (response.ok) {
        const responseData = await response.json();
        console.table({ responseData });

        return responseData;
      }
    } catch (e) {
      throw new Error(e.message);
    }
    // return response.json();
  },

  async hasCoaches(_, getters) {
    return getters.coaches && getters.coaches.length > 0;
  },
  async isCoach(_, getters, _2, rootGetters) {
    const coaches = await getters.coaches;
    console.table({ coaches });
    const userId = rootGetters.userId;

    return coaches.some((coach) => coach.id === userId);
  },
};
