<template>
  <section class="flex flex-col w-full max-w-[1440px] mb-8">
    <div class="flex flex-wrap justify-center">
      <h1 class="text-center text-[35px] font-bold w-full m-8">
        {{ titleContainer }}
      </h1>
      <div class="flex flex-wrap gap-4 justify-center">
        <component
          class="flex flex-col md:flex-row gap-4 border border-gray-300 rounded-tl-lg rounded-tr-lg overflow-hidden max-w-[558px]"
          v-for="food in foodList"
          :key="food.idCategory"
          :is="enableLink ? 'router-link' : 'div'"
          :to="
            enableLink
              ? { name: 'food', params: { idFood: food.idMeal } }
              : undefined
          "
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
              {{ limitText(food[descriptionFood], 100) }}
            </p>
          </div>
        </component>
      </div>
      <!-- <button
        class="w-[160px] h-[64px] mt-[85px] mb-[120px] px-9 py-2 mx-auto text-[20px] font-bold block bg-[#FFC107] rounded-lg"
      >
        Show All
      </button> -->
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  foodList: {
    type: Array,
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
  descriptionFood: {
    type: String,
    default: "",
  },
  enableLink: {
    type: Boolean,
    default: false,
  },
});

function limitText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

const redirectToFood = (idFood) => {
  router.push({ name: "food", params: { idFood } });
};
</script>
