import Vue from "vue";
import App from "./App.vue";

import "./index.css";

Vue.config.productionTip = false;

import store from 'Company/store'

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");