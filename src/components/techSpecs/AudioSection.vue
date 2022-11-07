<template>
  <Content :title="'Audio'">
    <div class="sm:w-[580px] md:w-[560px] xl:w-[800px] grid">
      <span
        class="font-['SF_Pro_Text'] text-[17px] font-normal text-[#a2a2a2]"
        v-for="(data, index) in audioData"
        :key="index"
        >{{ data.content }}</span
      >
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";

const audioData = [
  { id: 1, content: "Stereo speakers with high dynamic range" },
  { id: 2, content: "Wide stereo sound" },
  {
    id: 3,
    content:
      "Support for Spatial Audio when playing music or video with Dolby Atmos on built-in speakers",
  },
  {
    id: 4,
    content:
      "Spatial Audio with dynamic head tracking when using AirPods (3rd generation), AirPods Pro,",
  },
  { id: 5, content: "and AirPods Max" },
  {
    id: 6,
    content:
      "Studio-quality three-mic array with high signal-to-noise ratio and directional beamforming",
  },
  {
    id: 7,
    content:
      "3.5 mm headphone jack with advanced support for high-impedance headphones",
  },
];
</script>
