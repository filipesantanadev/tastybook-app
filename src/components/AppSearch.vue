<template>
  <div
    class="flex bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[0.1px] hover:border-red-400"
  >
    <input
      v-model="searchRecipeTerm"
      type="text"
      placeholder="Search any food"
      class="px-4 py-2 flex-1 text-gray-700 focus:rounded-l-lg focus:outline-sky-500"
    />
    <button
      type="button"
      class="bg-yellow-400 px-6 py-2 text-black font-semibold hover:bg-yellow-500"
      @click="redirectToFood(searchRecipeTerm)"
    >
      Search
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const searchRecipeTerm = ref();

const redirectToFood = (term) => {
  if (!term.trim()) return;

  if (router.currentRoute.value.params.nameFood !== term) {
    router.push({ name: "foods", params: { nameFood: term } });
    searchRecipeTerm.value = "";
  }
};
</script>
