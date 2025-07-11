<template>
  <section class="flex flex-col w-full mb-8">
    <div class="flex flex-wrap justify-center">
      <span class="text-center text-[35px] font-bold w-full m-8">
        {{ titleContainer }}
      </span>
      <div class="flex flex-wrap gap-4 justify-center">
        <div
          class="flex flex-col md:flex-row gap-4 border border-gray-300 rounded-tl-lg rounded-tr-lg overflow-hidden max-w-[558px] cursor-pointer"
          v-for="food in foodList"
          @click="emit('openModal', food)"
          :key="food.idCategory"
        >
          <img
            :src="food[imageFood]"
            alt="Food"
            class="md:w-[230px] object-cover md:h-full"
          />
          <div class="flex flex-col justify-center gap-4 p-4">
            <h3 class="text-[#403F3F] font-bold text-[25px]">
              {{ food[nameFood] }}
            </h3>
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
const props = defineProps({
  foodList: {
    type: Object,
    required: true,
  },
  titleContainer: {
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
  enableLink: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["openModal"]);

function limitText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

// const redirectToFood = (idFood) => {
//   router.push({ name: "food", params: { idFood } });
// };
</script>
