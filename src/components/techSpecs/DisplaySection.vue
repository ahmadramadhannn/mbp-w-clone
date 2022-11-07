<template>
  <Content :title="'Display'">
    <div class="grid gap-2 w-[97%] md:w-[500px] xl:w-[750px]">
      <span
        class="font-['SF_Pro_Text'] mb-1 text-[#fff] font-semibold text-[17px]"
        >Retina Display
      </span>
      <span
        v-for="(data, index) in displayData"
        :key="index"
        class="text-[#a2a2a2] font-normal text-[17px] font-['SF_Pro_Text']"
        >{{ data.content }}</span
      >
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";
const displayData = [
  {
    id: 1,
    content:
      "13.3-inch (diagonal) LED-backlit display with IPS technology; 25600-by-1600 native resolution at",
  },
  {
    id: 2,
    content: "500 nits brightness",
  },
  {
    id: 3,
    content: "Wide color (P3)",
  },
  {
    id: 4,
    content: "True Tone technology",
  },
];
</script>
