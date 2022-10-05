import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import "./index.css";

Vue.use(Vuex);

const store = new Vuex.Store({
 state () {
  return {
   cartItems: 0
  }
 }
})

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");