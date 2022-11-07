<template>
  <Content :title="'Battery and Power¹'">
    <div class="w-[97%] grid">
      <span
        v-for="(data, index) in batteryData"
        :key="index"
        class="text-[#a2a2a2] font-['SF_Pro_Text'] font-normal text-[17px]"
        >{{ data.content }}</span
      >
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";

const batteryData = [
  {
    id: 1,
    content: "Up to 20 hours Apple TV app movie playback",
  },
  {
    id: 2,
    content: "Up to 17 hours wireless web",
  },
  {
    id: 3,
    content: "58.2-watt-hour lithium-polymer battery",
  },
  {
    id: 4,
    content: "67W USB-C Power Adapter",
  },
];
</script>
