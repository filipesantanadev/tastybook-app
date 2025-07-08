// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

// Importa seus componentes aqui
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
