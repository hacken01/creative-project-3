import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Cart from "../views/Cart.vue";
import Temples from "../views/Temples.vue";
import Reviews from "../views/Reviews.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/temples",
    name: "Temples",
    component: Temples,
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: Reviews,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
