export default {
  registerCoach(context, payload) {
    payload = { ...payload, id: 'c3' };

    context.commit('registerCoach', payload);
  },
};
