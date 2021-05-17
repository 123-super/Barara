import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    shopcart: [],
    selectgoods: [],
    totalPrice: 0,
    totalNumber: 0,
    token: 1,
    user: {}
  },
  getters: {},
  mutations: {
    addToShopCart(state, good) {
      // Vue.set(good, 'count', 1)
      state.shopcart.push(good)
    },
    updateNum(state, num) {
      state.totalNumber = num
    },
    updatePri(state, price) {
      state.totalPrice = price
    },
    updateGoodList(state, item) {
      state.selectgoods = item
    },
    savetoken(state, token) {
      state.token = token
    },
    saveUser(state, username) {
      state.user = username
    },
    deleteGoodList(state, delgoods) {
      state.shopcart = delgoods.rows.splice(delgoods.index, 1)
    }
  },
  actions: {},
})