export default {
  removeProduct(context, payload) {
    context.commit('removeProductFromCart', payload);
  },
  addProduct(context, payload) {
    const prodId = payload.id;
    const products = context.rootGetters['prod/getProducts'];
    const product = products.find((prod) => prod.id === prodId);
    context.commit('addProductToCart', product);
  },
};
