<template>
  <!-- <pre>{{ recipeStore.recipeById }}</pre> -->
  <br />
  <br />
  <h1>{{ recipeStore.recipeById.strMeal }}</h1>
  <h1>{{ recipeStore.recipeById.strCategory }}</h1>
  <h1>{{ recipeStore.recipeById.strInstructions }}</h1>
  <img :src="recipeStore.recipeById.strMealThumb" alt="" />
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRecipeStore } from "../stores/recipes";

const recipeStore = useRecipeStore();
const route = useRoute();
const idFood = route.params.idFood;

onMounted(async () => {
  console.log("ID da rota:", idFood);
  await recipeStore.getRecipeById(idFood);
});
</script>
