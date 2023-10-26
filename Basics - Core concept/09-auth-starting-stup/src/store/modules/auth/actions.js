let timer;

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

    // const convertExpirationIn = +responseData.expiresIn * 1000;
    const convertExpirationIn = 5000;
    const expirationTime = new Date().getTime() + convertExpirationIn;
    console.log({ expirationTime });
    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, convertExpirationIn);

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('tokenExpiration', expirationTime);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },
  logout(context) {
    console.log({ context });
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null,
      registered: false,
    });
  },
  autoLogin(context) {
    // check if user is authenticated
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    // manage tokenExpiration
    const expirationTime = +tokenExpiration - new Date().getTime();
    if (expirationTime < 0) {
      // invalid expired token

      return;
    }

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expirationTime);

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
      });
    }
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  },
};
