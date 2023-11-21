const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

export default {
  async loadRequestsByCoach(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(`${API_BASE_URL}/requests/${coachId}.json`);
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch requests'
      );
      throw error;
    }

    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        email: responseData[key].userEmail,
        message: responseData[key].userMessage,
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  },

  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      userMessage: payload.message,
    };
    const coachId = payload.coachId;

    const response = await fetch(`${API_BASE_URL}/requests/${coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest),
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to contact coach'
      );
      throw error;
    }

    context.commit('addRequest', {
      ...newRequest,
      id: responseData.name,
      coachId,
    });
  },
};
