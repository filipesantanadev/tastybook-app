<template>
  <div
    class="flex flex-wrap sm:text-sm sm:p-2 w-full h-auto min-h-screen overflow-y-auto"
    :class="{ 'overflow-hidden': isOpen }"
  >
    <TheSpinner
      class="w-full flex justify-center items-center"
      v-if="loading"
    />

    <FoodItem
      v-else
      :titleContainer="titleContainer"
      :titleClass="'font-bold text-center text-gray-800 m-8'"
      :foods="recipeStore.recipeByName || {}"
      imageFood="strMealThumb"
      nameFood="strMeal"
      otherInformationFood="strInstructions"
      @openModal="openModal"
    />

    <FoodModal :isOpen="isOpen" :food="selectedFood" @close="closeModal" />
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useRecipeStore } from "../stores/recipes";
import FoodItem from "../components/FoodItem.vue";
import TheSpinner from "../components/TheSpinner.vue";
import FoodModal from "../components/FoodModal.vue";

const recipeStore = useRecipeStore();
const route = useRoute();
const searchedFood = computed(() => route.params.nameFood);
const loading = ref(false);
const selectedFood = ref({});
const isOpen = ref(false);
const titleContainer = computed(() => {
  const searchTerm = searchedFood.value;
  const totalRecipesByName = recipeStore.recipeByName?.length;

  if (!totalRecipesByName)
    return searchTerm
      ? `No results found for "${searchTerm}"`
      : "No results found"; // Fallback for empty search

  return totalRecipesByName > 1
    ? `${totalRecipesByName} results found for ${searchTerm}`
    : `${totalRecipesByName} item found for ${searchTerm}`;
});

function openModal(food) {
  selectedFood.value = {
    name: food.strMeal,
    image: food.strMealThumb,
    category: food.strCategory,
    area: food.strArea,
    instructions: food.strInstructions,
    youtube: food.strYoutube,
  };
  isOpen.value = true;
}

const closeModal = () => {
  isOpen.value = false;
};

const fetchData = async (term) => {
  loading.value = true;
  await recipeStore.getRecipeByName(term);
  loading.value = false;
};

fetchData(route.params.nameFood);

watch(
  () => route.params.nameFood,
  (newTerm) => {
    fetchData(newTerm);
  }
);
</script>
