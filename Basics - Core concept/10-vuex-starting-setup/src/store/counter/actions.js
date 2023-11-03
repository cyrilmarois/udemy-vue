export default {
  increment(context) {
    console.log({ context });
    setTimeout(() => {
      context.commit('addOne');
    }, 2000);
  },
  increment10(context, payload) {
    context.commit('addTen', payload);
  },
};
