<template>
  <div class="flex flex-wrap sm:scale-90 sm:text-sm sm:p-2 w-full">
    <TheSpinner
      class="w-full flex justify-center items-center"
      v-if="loading"
    />

    <FoodItem
      :titleContainer="titleContainer"
      :foodList="recipeStore.recipeByName"
      imageFood="strMealThumb"
      nameFood="strMeal"
      :enableLink="true"
    />
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useRecipeStore } from "../stores/recipes";
import FoodItem from "../components/FoodItem.vue";
import TheSpinner from "../components/TheSpinner.vue";
import HeroSection from "../components/HeroSection.vue";

const recipeStore = useRecipeStore();
const route = useRoute();
const searchedFood = route.params.nameFood;
const loading = ref(false);
const titleContainer = computed(() =>
  recipeStore.recipeByName
    ? `Encontrado ${recipeStore.recipeByName?.length} com a pesquisa ${searchedFood}`
    : "Nada encontrado"
);

onMounted(async () => {
  loading.value = true;
  await recipeStore.getRecipeByName(searchedFood);
  loading.value = false;
});
</script>
