<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex bg-black/80 items-start md:items-center justify-center p-4 md:px-64"
  >
    <div
      class="bg-white rounded-lg p-5 w-full max-w-xl relative my-8 md:my-0 max-h-[90vh] md:max-h-[80vh] overflow-y-auto"
    >
      <button
        @click="close"
        class="absolute top-3 right-3 text-gray-500 hover:text-gray-900 hover:scale-110 text-2xl"
      >
        <TheCloseModal />
      </button>

      <h2
        class="text-xl sm:text-2xl font-bold text-[#403F3F] overline decoration-red-400 mb-4"
      >
        {{ food.name }}
      </h2>

      <img
        :src="food.image"
        alt="Imagem da receita"
        class="w-full h-64 object-cover rounded-lg mb-4"
      />

      <p>
        <strong class="text-[#403F3F]">Category : </strong>
        <span class="text-[#706F6F]">{{ food.category }}</span>
      </p>
      <p>
        <strong class="text-[#403F3F]">Area : </strong>
        <span class="text-[#706F6F]">{{ food.area }}</span>
      </p>

      <p class="mt-3">
        <strong class="text-[#403F3F]">Instructions : </strong>
        <span class="text-[#706F6F]">{{ food.instructions }}</span>
      </p>

      <p v-if="food.youtube" class="mt-3">
        <strong>Youtube : </strong>
        <a
          :href="food.youtube"
          target="_blank"
          class="text-blue-500 underline break-all"
        >
          <span class="text-[#706F6F]">{{ food.youtube }}</span>
        </a>
      </p>

      <div class="mt-6 text-right">
        <button
          @click="close"
          class="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheCloseModal from "./TheCloseModal.vue";

const props = defineProps({
  isOpen: Boolean,
  food: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["close"]);
const close = () => {
  emit("close");
};
</script>
