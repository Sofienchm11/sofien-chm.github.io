import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import portfolio from "../components/global/Portfolio.vue";
import whatido from "../components/global/WhatIDo.vue";
import aboutme from "../components/global/AboutMe.vue";
import experience from "../components/global/Experience.vue";
import Contact from "../components/global/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "aboutme",
    component: aboutme,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: portfolio,
  },
  {
    path: "/whatido",
    name: "what-ido",
    component: whatido,
  },
  {
    path: "/experience",
    name: "experience",
    component: experience,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
