export default {
  registerCoach(context, payload) {
    payload = { ...payload, id: context.rootGetters.userId };

    context.commit('registerCoach', payload);
  },
};
