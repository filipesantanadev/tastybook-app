<template>
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
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
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
        ><button
          class="bg-yellow-400 px-6 py-2 text-black font-semibold hover:bg-yellow-500"
          @click="redirectToFood(searchRecipeTerm)"
        >
          Search
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const searchRecipeTerm = ref();

const redirectToFood = (nameFood) => {
  router.push({ name: "foods", params: { nameFood } });
};
</script>
