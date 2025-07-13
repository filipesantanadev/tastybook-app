<template>
  <section class="flex flex-col w-full mb-8">
    <div class="flex flex-col flex-wrap justify-center">
      <TheTitle :customClass="titleClass">
        {{ titleContainer }}
      </TheTitle>
      <div class="flex flex-wrap gap-4 justify-center">
        <div
          class="flex flex-col md:flex-row gap-4 border border-gray-300 rounded-tl-lg rounded-tr-lg overflow-hidden max-w-[558px] cursor-pointer"
          v-for="food in foods"
          @click="emit('openModal', food)"
          :key="food.idMeal"
        >
          <img
            :src="food[imageFood]"
            alt="Food"
            class="md:w-[230px] object-cover md:h-full"
          />
          <div class="flex flex-col justify-center gap-4 p-4">
            <div class="flex justify-between items-center">
              <h3 class="text-[#403F3F] font-bold text-[25px]">
                {{ food[nameFood] }}
              </h3>
              <TheFavoriteItem
                @click.stop="toggleFavorite(food)"
                :is-favorite="isFavorite(food)"
              />
            </div>
            <p class="text-lg text-gray-600">
              {{ limitText(food[otherInformationFood], 100) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TheTitle from "./TheTitle.vue";
import TheFavoriteItem from "./TheFavoriteItem.vue";
import { useRecipeStore } from "../stores/recipes";

const props = defineProps({
  foods: {
    type: Object,
    required: true,
    default: () => [],
  },
  titleContainer: {
    type: String,
    default: "",
  },
  titleClass: {
    type: String,
    default: "",
  },
  nameFood: {
    type: String,
    default: "",
  },
  imageFood: {
    type: String,
    default: "",
  },
  otherInformationFood: {
    type: String,
    default: "",
  },
  favoriteFood: {
    type: Boolean,
    default: false,
  },
});
const recipeStore = useRecipeStore();
const emit = defineEmits({
  openModal: null,
  "update:favoriteFood": (value) => typeof value === "boolean",
});

function limitText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

const toggleFavorite = (food) => {
  if (!food || !food.idMeal) return;

  if (isFavorite(food)) {
    recipeStore.removeFromMyRecipeList(food.idMeal);
  } else {
    recipeStore.addToMyRecipeList(food);
  }
};

const isFavorite = (food) => {
  if (!food || !food.idMeal) return false;
  return recipeStore.myRecipeList.some((item) => item.idMeal === food.idMeal);
};
</script>
