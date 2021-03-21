import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        shopcart: [],
        totalPrice: 0,
        totalNumber: 0,
    },
    getters: {},
    mutations: {
        addToShopCart(state, good) {
            Vue.set(good, 'count', 1)
            state.shopcart.push(good)
        },
        updateNum(state, num) {
            state.totalNumber = num
        },
        updatePri(state, price) {

        }
        state.totalPrice = price
    },
    actions: {},
})