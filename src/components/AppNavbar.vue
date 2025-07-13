<template>
  <nav class="bg-white shadow-md px-10 py-4">
    <div class="flex justify-between items-center">
      <router-link to="/">
        <h1 class="group text-4xl font-bold text-gray-800 ml-6">
          TastyFood<span
            class="text-yellow-400 group-hover:text-red-400 transition-colors duration-300 before:content-['.']"
          ></span>
        </h1>
      </router-link>
      <AppSearch />
    </div>
  </nav>
</template>

<script setup>
import AppSearch from "./AppSearch.vue";
</script>
