<script setup>
import Content from "./Content.vue";

const chipData = [
  {
    id: 1,
    title: "Apple M2 chip",
    content: [
      "8-core CPU with 4 perfomances cores and 4 efficiency cores",
      "10-core GPu",
      "16-core Neutral Engine",
      "100GB/s memory bandiwidth",
    ],
  },
  {
    id: 2,
    title: "Media engine",
    content: [
      "Hardware-accelerated H.264, HEVC, ProRes, and ProRes RAW",
      "Video decode engine",
      "Video encode engine",
      "ProRes encode and decode engine",
    ],
  },
];
</script>

<template>
  <Content :title="'Chip'">
    <div class="w-[98%] lg:w-[600px] grid">
      <img src="../../assets/chip.png" alt="" />
      <div
        v-for="(data, index) in chipData"
        :key="index"
        class="grid gap-2 mt-6 lg:w-[500px]"
      >
        <span
          id="title"
          class="text-[#fff] text-[17px] font-semibold font-['SF_Pro_Text']"
          >{{ data.title }}</span
        >
        <span
          v-for="(dat, index) in data.content"
          class="text-[17px] font-normal text-[#a2a2a2] font-['SF_Pro_Text']"
        >
          {{ dat }}
        </span>
      </div>
    </div>
  </Content>
</template>
