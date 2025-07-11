<script setup>
import AppFooter from "./components/AppFooter.vue";
import AppNavbar from "./components/AppNavbar.vue";
</script>

<template>
  <section>
    <AppNavbar />
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link> -->
  </section>
  <router-view></router-view>
  <AppFooter />
</template>

<style></style>
