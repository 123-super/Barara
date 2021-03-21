export default new Vuex.Store({
  state: {
    shopcart: []
  },
  getters: {},
  mutations: {
    addToShopCart(good) {
      state.shopcart.push(good);
    }
  },
  actions: {},
})
