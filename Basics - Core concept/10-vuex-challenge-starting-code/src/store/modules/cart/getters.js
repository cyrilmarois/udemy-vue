export default {
  getCart(state) {
    return state.cart;
  },
  getCartTotal(_, getters) {
    return getters.getCart.total.toFixed(2);
  },
};
