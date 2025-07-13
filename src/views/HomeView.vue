<template>
  <section>
    <!-- Hero Section -->
    <HeroSection />

    <!-- Foods List -->
    <TheSpinner v-if="loading" />

    <FoodItem
      v-else
      :titleContainer="titleContainer"
      :titleClass="'font-bold text-center text-gray-800 m-8'"
      :foods="recipeStore.myRecipeList"
      imageFood="strMealThumb"
      nameFood="strMeal"
      otherInformationFood="strInstructions"
      @openModal="openModal"
    />

    <FoodModal :isOpen="isOpen" :food="selectedFood" @close="closeModal" />
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRecipeStore } from "../stores/recipes";
import FoodItem from "../components/FoodItem.vue";
import HeroSection from "../components/HeroSection.vue";
import TheSpinner from "../components/TheSpinner.vue";
import FoodModal from "../components/FoodModal.vue";

const recipeStore = useRecipeStore();
const titleContainer = ref("My favourites".toUpperCase());
const loading = ref(false);
const selectedFood = ref({});
const isOpen = ref(false);

onMounted(async () => {
  loading.value = true;
  await recipeStore.myRecipeList;
  loading.value = false;
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
</script>
