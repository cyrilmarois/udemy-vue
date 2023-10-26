export default {
  async login(context, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_7nMbeNJz4tG8FHtTqqzA_akLhFRMQc4',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();
    console.log({ responseData });
    if (response.status !== 200) {
      const error = new Error(
        responseData.error.errors[0].message || 'Authentication failed'
      );
      throw error;
    }

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
  async signup(context, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_7nMbeNJz4tG8FHtTqqzA_akLhFRMQc4',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();
    if (response.status !== 200) {
      const error = new Error(
        responseData.error.errors[0].message || 'Authentication failed'
      );
      throw error;
    }

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
      registered: responseData.registered,
    });
  },
  logout(context) {
    console.log({ context });
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null,
      registered: false,
    });
  },
};
