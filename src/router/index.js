import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "../components/Home.vue";
 import AboutVue from "../components/About.vue"
 import WhyVue from "../components/Why.vue"
 import Cards from "../components/Cards.vue"
 import SubscribeVue from "../components/Subscribe.vue"
 import LoginVue from "../components/Login.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "/Home",
      component: HomeVue
    },
    {
      path: "/about",
      name: "About",
      component: AboutVue
    },
    {
      path: "/whyus",
      name: "Whyus",
      component: WhyVue
    },
    {
      path: "/management",
      name: "Management",
      component: Cards
    },
    {
      path: "/sub",
      name: "Subscribe",
      component: SubscribeVue
    },
    {
      path: "/login",
      name: "Login",
      component: LoginVue
    },
  ],
});

export default router;
