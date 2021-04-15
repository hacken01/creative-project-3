import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import dataBase from "./temple-data.js";
import clearance from "./clearance.js";
Vue.config.productionTip = false

let data = {
  products: dataBase,
  discounted: clearance,
  cart: [],
  cartSize: 0,
  totalPrice: 0,
}
new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
