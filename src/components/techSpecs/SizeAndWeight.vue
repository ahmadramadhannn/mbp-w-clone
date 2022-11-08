<template>
  <Content :title="'Size and Weight'">
    <div class="grid gap-3">
      <span
        v-for="(content, index) in sizeAndWeightData"
        :key="index"
        class="font-['SF_Pro_Text'] flex items-center gap-2 font-semibold text-[#fff] text-[17px]"
      >
        {{ content.title }}
        <p class="font-['SF_Pro_Text'] font-normal text-[#a2a2a2] text-[17px]">
          {{ content.content }}
        </p>
      </span>
    </div>
    <div
      class="mt-20 w-11/12 h-[10em] sm:h-[9em] md:min-h-[10em] bg-[url('/small_2x.jpg')] md:bg-[url('/large.jpg')] bg-contain bg-no-repeat"
    >
      <div class="grid sm:w-6/12 md:w-full place-content-center">
        <p
          class="-translate-y-8 font-['SF_Pro_Text'] text-[#a2a2a2] text-sm font-normal"
        >
          11.97 inches (30.41 cm)
        </p>
        <p
          class="mt-10 md:mt-8 font-['SF_Pro_Text'] text-[#a2a2a2] text-sm font-normal"
        >
          8.36 inches (21.24s cm)
        </p>
      </div>
      <div class="mt-12 sm:w-7/12 md:w-full grid place-content-end">
        <p
          class="text-sm w-9/12 sm:w-full translate-x-14 md:translate-x-16 md:-translate-y-7 lg:translate-x-12 text-[#a2a2a2] font-['SF_Pro_Text'] font-normal"
        >
          0.61 inch (1.56 cm)
        </p>
      </div>
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";

const sizeAndWeightData = [
  { id: 1, title: "Height", content: "0.61 inch (1.56 cm)" },
  { id: 2, title: "Width", content: "11.97 inches (30.41 cm)" },
  { id: 3, title: "Depth", content: "8.36 inches (21.24 cm)" },
  { id: 4, title: "Weight", content: "3.0 pounds (1.4 kg)³" },
];
</script>
