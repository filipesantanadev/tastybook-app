// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

// Importa seus componentes aqui
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import FoodsView from "../views/FoodsView.vue";
import FoodView from "../views/FoodView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/foods/:nameFood", name: "foods", component: FoodsView },
  { path: "/food/:idFood", name: "food", component: FoodView },
  { path: "/about", name: "about", component: AboutView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
