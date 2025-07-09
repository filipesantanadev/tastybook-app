// src/stores/counter.js
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useRecipeStore = defineStore("recipes", () => {
  // !! state -> propriedades reativas
  const recipeList = ref([]);
  const recipeByName = ref([]);
  const recipeById = ref([]);
  // const myRecipeList = ref([]);

  // !! actions -> methods
  const getRecipesCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const categories = response.data.categories;
      // console.log(categories);
      recipeList.value = categories;
    } catch (error) {
      console.error("Erro ao buscar receita:", error);
    }
  };

  const getRecipeByName = async (name) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      );
      const recipe = response.data.meals;
      recipeByName.value = recipe;
      // console.log("Aqui:", recipeByName.value);
    } catch (error) {
      console.log("Erro ao buscar receita:", error);
    }
  };

  const getRecipeById = async (id) => {
    // console.log("ID recebido:", id);
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      recipeById.value = data.meals ? data.meals[0] : null;
    } catch (error) {
      console.log("Erro ao buscar receita:", error);
    }
  };

  // !! getters -> propriedades computadas

  return {
    recipeList,
    recipeByName,
    recipeById,
    getRecipesCategories,
    getRecipeByName,
    getRecipeById,
  };
});
