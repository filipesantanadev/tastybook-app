<template>
  <div class="min-h-screen flex justify-center m-4 ">
    <div class="w-full max-w-lg px-4 py-6 bg-white shadow-md">
    <h1 class="font-bold text-3xl mb-4">
      {{ recipeStore.recipeById.strMeal }}
    </h1>
    <img
      class="w-full h-[200px] rounded"
      :src="recipeStore.recipeById.strMealThumb"
      alt="Food Photo"
    />
    <p class="text-sm mb-2">Categoria: {{ recipeStore.recipeById.strCategory }}</p>
    <p class="text-sm mb-2">Area: {{ recipeStore.recipeById.strArea }}</p>
    <p class="text-sm mb-2">Instructions: {{ recipeStore.recipeById.strInstructions }}</p>
    <p class="text-sm mb-2">Youtube: {{ recipeStore.recipeById.strYoutube }}</p>
    </div>
  </div>
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
