const BASE_URL = process.env.VUE_APP_API_BASE_URL;

export default {
  async registerCoach(context, payload) {
    const coachId = context.rootGetters.userId;

    payload = { ...payload };
    try {
      const response = await fetch(`${BASE_URL}/coaches/${coachId}.json`, {
        method: 'PUT',
        body: JSON.stringify(payload),
      });
      console.table({ response });
    } catch (e) {
      throw new Error(e.message);
    }

    context.commit('registerCoach', { ...payload, id: coachId });
  },
};
