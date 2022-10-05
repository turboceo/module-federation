import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
 state () {
  return {
   cartItems: 0
  }
 },

 mutations: {
    updateCartItems(state) {
        debugger
        state.cartItems++
    }
 }
})

export default store