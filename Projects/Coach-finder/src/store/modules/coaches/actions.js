const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

export default {
  async registerCoach(context, payload) {
    const coachId = context.rootGetters.userId;

    payload = { ...payload };
    try {
      const response = await fetch(`${API_BASE_URL}/coaches/${coachId}.json`, {
        method: 'PUT',
        body: JSON.stringify(payload),
      });
      console.table({ response });
    } catch (e) {
      throw new Error(e.message);
    }

    context.commit('registerCoach', { ...payload, id: coachId });
  },

  async loadCoaches(context) {
    let coaches = [];
    try {
      const response = await fetch(`${API_BASE_URL}/coaches.json`);
      console.table({ response });

      if (response.ok) {
        const responseData = await response.json();
        console.table({ responseData });

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
      }
      console.table({ coaches });
    } catch (e) {
      throw new Error(e.message);
    }
    context.commit('setCoaches', coaches);
  },
};
