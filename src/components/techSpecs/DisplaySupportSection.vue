<template>
  <Content :title="'Display Support'">
    <div
      v-for="(data, index) in displaySupportData"
      :key="index"
      class="sm:w-[580px] md:w-[480px] xl:w-[670px] md:ml-2"
    >
      <p
        :class="{ 'mt-8': data.id === 2 }"
        class="font-['SF_Pro_Text'] font-semibold text-[17px] text-[#fff]"
      >
        {{ data.title }}
      </p>
      <div v-for="(content, index) in data.content">
        <span
          class="font-['SF_Pro_Text'] font-normal text-[17px] text-[#a2a2a2]"
        >
          {{ content }}
        </span>
      </div>
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";

const displaySupportData = [
  {
    id: 1,
    title:
      "Simultaneously supports full native resolution on the built-in display at millions of colors and:",
    content: ["One external display with up to 6K resolution at 60Hz"],
  },
  {
    id: 2,
    title: "Thunderbolt 3 digital video output",
    content: [
      "Native DisplayPort output over USB-C",
      "VGA,HDMI,DVI, and Thunderbolt 2 output supported using adapters (sold separately)",
    ],
  },
];
</script>
