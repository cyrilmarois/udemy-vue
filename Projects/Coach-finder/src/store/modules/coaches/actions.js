const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

export default {
  async registerCoach(context, payload) {
    const coachId = context.rootGetters.userId;

    try {
      const response = await fetch(`${API_BASE_URL}/coaches/${coachId}.json`, {
        method: 'PUT',
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const error = new Error(response.message || 'Error during contact');
        throw error;
      }
    } catch (e) {
      throw e;
    }

    context.commit('registerCoach', { ...payload, id: coachId });
  },

  async loadCoaches(context) {
    const response = await fetch(`${API_BASE_URL}/coaches.json`);

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Server Error');
      throw error;
    }

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
  },
};
