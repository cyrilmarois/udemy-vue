export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_7nMbeNJz4tG8FHtTqqzA_akLhFRMQc4';
    if (mode === 'signup') {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_7nMbeNJz4tG8FHtTqqzA_akLhFRMQc4';
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();
    console.log({ responseData });
    if (response.status !== 200) {
      const error = new Error(
        responseData.error.errors[0].message || 'Authentication failed'
      );
      throw error;
    }

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
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
  autoLogin(context) {
    // check if user is authenticated
    const token = localStorage.getItem('token'););
    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
        tokenExpiration: null,
      });
    }
  },
};
