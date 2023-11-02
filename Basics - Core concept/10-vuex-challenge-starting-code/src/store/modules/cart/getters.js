export default {
  getCart(state) {
    return state.cart;
  },
  getCartTotal(state, getters) {
    return getters.getCart.total.toFixed(2);
  },
};
