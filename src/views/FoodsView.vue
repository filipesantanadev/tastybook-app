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
      :titleContainer="titleContainer"
      :foodList="recipeStore.recipeByName"
      imageFood="strMealThumb"
      nameFood="strMeal"
      otherInformationFood="strInstructions"
      @openModal="openModal"
    />

    <FoodModal :isOpen="isOpen" :food="selectedFood" @close="closeModal" />
  </div>
</template>

<script setup>
import { onMounted, computed, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useRecipeStore } from "../stores/recipes";
import FoodItem from "../components/FoodItem.vue";
import TheSpinner from "../components/TheSpinner.vue";
import FoodModal from "../components/FoodModal.vue";

const recipeStore = useRecipeStore();
const route = useRoute();
const searchedFood = route.params.nameFood;
const loading = ref(false);
const selectedFood = ref({});
const isOpen = ref(false);
const titleContainer = computed(() =>
  recipeStore.recipeByName
    ? `Encontrado ${recipeStore.recipeByName?.length} com a pesquisa ${searchedFood}`
    : "Nada encontrado"
);

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

onMounted(async () => {
  loading.value = true;
  await recipeStore.getRecipeByName(searchedFood);
  loading.value = false;
});

// watchEffect(() => {
//   if (isOpen.value) {
//     document.body.style.paddingRight = `${
//       window.innerWidth - document.documentElement.clientWidth
//     }px`;
//     document.body.classList.add("overflow-hidden");
//   } else {
//     document.body.style.paddingRight = "";
//     document.body.classList.remove("overflow-hidden");
//   }
// });
</script>
