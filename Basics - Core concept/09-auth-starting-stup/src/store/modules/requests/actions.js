const url = process.env.VUE_APP_API_FIREBASE;

export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const coachId = '-NhciHNA-kMr-4QQIw3l';
    const response = await fetch(`${url}/requests/${coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest),
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request.'
      );
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = coachId; //payload.coachId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    // const coachId = context.rootGetters.userId;
    const coachId = '-NhciHNA-kMr-4QQIw3l';
    const token = context.rootGetters.token;
    // `https://vue-http-demo-85e9e.firebaseio.com/requests/${coachId}.json`
    const response = await fetch(
      `https://vue-htt-demo-c141a-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json?auth=${token}`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch requests.'
      );
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  },
};
