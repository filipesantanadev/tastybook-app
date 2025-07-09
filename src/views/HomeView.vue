<template>
  <section>
    <!-- Hero Section -->
    <HeroSection />

    <!-- Foods List -->
    <TheSpinner v-if="loading" />

    <FoodItem
      v-else
      :titleContainer="titleContainer"
      :foodList="recipeStore.recipeList"
      imageFood="strCategoryThumb"
      nameFood="strCategory"
      descriptionFood="strCategoryDescription"
    />
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRecipeStore } from "../stores/recipes";
import { useRouter } from "vue-router";
import FoodItem from "../components/FoodItem.vue";
import HeroSection from "../components/HeroSection.vue";
import TheSpinner from "../components/TheSpinner.vue";

const recipeStore = useRecipeStore();
const titleContainer = ref("Food Categories");
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  await recipeStore.getRecipesCategories();
  loading.value = false;
});
</script>
