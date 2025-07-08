<template>
  <section>
    <!-- Hero Section -->
    <section
      class="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center"
      style="background-image: url(img/FoodHeroSection.png)"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 text-white px-4 max-w-2xl">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight">
          Taste Our Delicious<br />Best Foods
        </h1>
        <p class="mt-4 text-sm md:text-base">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>

        <!-- Search Box -->
        <div
          class="mt-6 flex bg-white rounded-lg overflow-hidden max-w-md mx-auto"
        >
          <input
            v-model="searchRecipeTerm"
            type="text"
            placeholder="Search any food"
            class="px-4 py-2 flex-1 outline-none text-gray-700"
          />
          <button
            class="bg-yellow-400 px-6 py-2 text-black font-semibold hover:bg-yellow-500"
            @click="search"
          >
            Search
          </button>
        </div>
      </div>
    </section>

    <!-- Foods List -->
    <section class="flex flex-col w-full max-w-[1440px] mx-auto">
      <div class="flex flex-wrap justify-center">
        <h1 class="text-center text-[35px] font-bold w-full m-8">
          Your Favorite Food
        </h1>
        <div class="flex flex-wrap gap-4 justify-center">
          <div
            class="flex flex-col md:flex-row gap-4 border border-gray-300 rounded-tl-lg rounded-tr-lg overflow-hidden max-w-[558px]"
            v-for="food in recipeStore.recipeList"
            :key="food.idCategory"
          >
            <img
              :src="food.strCategoryThumb"
              alt="Food"
              class="md:w-[230px] object-cover md:h-full"
            />
            <div class="flex flex-col justify-center gap-4 p-4">
              <h3 class="text-[#403F3F] font-bold text-[25px]">
                {{ food.strCategory }}
              </h3>
              <p class="text-lg text-gray-600">
                {{ limitText(food.strCategoryDescription, 100) }}
              </p>
              <a
                href="#"
                class="text-[#e7b709] text-lg font-medium mt-2 inline-block underline"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
        <button
          class="w-[160px] h-[64px] mt-[85px] mb-[120px] px-9 py-2 mx-auto text-[20px] font-bold block bg-[#FFC107] rounded-lg"
        >
          Show All
        </button>
      </div>
    </section>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRecipeStore } from "../stores/recipes";

const recipeStore = useRecipeStore();
const searchRecipeTerm = ref();

onMounted(() => {
  recipeStore.getRecipesCategories();
});

const search = () => {
  recipeStore.getRecipeByName(searchRecipeTerm.value);
};

function limitText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
</script>
