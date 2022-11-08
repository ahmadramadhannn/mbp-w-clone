<template>
  <Content :title="'Operating Requirements'">
    <div class="grid gap-3">
      <span
        v-for="(content, index) in operatingReqData"
        :key="index"
        class="font-['SF_Pro_Text'] md:flex items-center gap-2 font-semibold text-[#fff] text-[17px]"
      >
        {{ content.title }}
        <p class="font-['SF_Pro_Text'] font-normal text-[#a2a2a2] text-[17px]">
          {{ content.content }}
        </p>
      </span>
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";

const operatingReqData = [
  { id: 1, title: "Line voltage:", content: "100V to 240V AC" },
  { id: 2, title: "Frequency:", content: "50Hz to 60Hz" },
  {
    id: 3,
    title: "Operating temperature",
    content: "50° to 95°F (10° to 35° C)",
  },
  {
    id: 4,
    title: "Storage temperature:",
    content: "-13° to 113°F (-25° to 45° C)",
  },
  { id: 5, title: "Relative humidity:", content: "0% to 90% noncondensing" },
  { id: 6, title: "Operating altitude:", content: "tested up to 10,000 feet" },
  { id: 7, title: "Maximum storage altitude:", content: "15,000 feet" },
  { id: 8, title: "Maximum shipping altitude:", content: "35,000 feet" },
];
</script>
