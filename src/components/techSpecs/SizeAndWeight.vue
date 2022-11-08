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
      class="mt-20 w-11/12 min-h-[10em] bg-[url('https://www.apple.com/v/macbook-pro-13/o/images/specs/dimensions_m1__fuu1s622oyaa_large.jpg')] bg-cover bg-no-repeat"
    >
      <div class="grid place-content-center">
        <p
          class="-translate-y-8 font-['SF_Pro_Text'] text-[#a2a2a2] text-sm font-normal"
        >
          11.97 inches (30.41 cm)
        </p>
        <p
          class="mt-10 font-['SF_Pro_Text'] text-[#a2a2a2] text-sm font-normal"
        >
          11.97 inches (30.41 cm)
        </p>
      </div>
      <div class="mt-12 grid place-content-end">
        <p
          class="text-sm translate-x-12 text-[#a2a2a2] font-['SF_Pro_Text'] font-normal"
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
