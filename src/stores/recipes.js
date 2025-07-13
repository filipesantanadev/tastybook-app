// src/stores/counter.js
import axios from "axios";
import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useRecipeStore = defineStore("recipes", () => {
  // !! state -> propriedades reativas
  // const recipeList = ref([]);
  const myRecipeList = ref(
    JSON.parse(localStorage.getItem("myRecipeList")) || []
  );
  const recipeByName = ref([]);
  const recipeById = ref([]);

  // Reagir a mudanças em myRecipeList e salvar no localStorage
  watch(
    myRecipeList,
    (newList) => {
      localStorage.setItem("myRecipeList", JSON.stringify(newList));
    },
    { deep: true }
  );

  // !! actions -> methods
  // const getRecipesCategories = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://www.themealdb.com/api/json/v1/1/categories.php"
  //     );
  //     const categories = response.data.categories;
  //     recipeList.value = categories;
  //   } catch (error) {
  //     console.error("Erro ao buscar receita:", error);
  //   }
  // };

  const getRecipeByName = async (name) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      );
      const recipe = response.data.meals;
      recipeByName.value = recipe;
    } catch (error) {
      console.log("Erro ao buscar receita:", error);
    }
  };

  const getRecipeById = async (id) => {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      recipeById.value = data.meals ? data.meals[0] : null;
    } catch (error) {
      console.log("Erro ao buscar receita:", error);
    }
  };

  //Favorite foods
  const addToMyRecipeList = (recipe) => {
    try {
      const exists = myRecipeList.value.some((r) => r.idMeal === recipe.idMeal);

      if (!exists) {
        myRecipeList.value.push(recipe);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromMyRecipeList = (idMeal) => {
    myRecipeList.value = myRecipeList.value.filter((r) => r.idMeal !== idMeal);
  };

  // !! getters -> propriedades computadas

  return {
    //state
    // recipeList,
    recipeByName,
    recipeById,
    myRecipeList,
    //actions
    // getRecipesCategories,
    getRecipeByName,
    getRecipeById,
    addToMyRecipeList,
    removeFromMyRecipeList,
  };
});
