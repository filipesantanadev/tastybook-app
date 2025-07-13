<template>
  <h1 :class="['text-3xl', customClass]" :style="customClass">
    <slot />
  </h1>
</template>

<script setup>
const props = defineProps({
  customClass: {
    type: String,
    default: "",
  },
  customStyle: {
    type: Object,
    default: () => ({}),
  },
});
</script>
