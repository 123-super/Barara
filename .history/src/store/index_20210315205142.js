import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    shopcart: []
  },
  getters: {},
  mutations: {
    addToShopCart(state, good) {
      state.shopcart.push(good);
    }
  },
  actions: {},
})