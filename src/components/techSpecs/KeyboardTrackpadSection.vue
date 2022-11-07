<template>
  <Content :title="'Keyboard and Trackpad'">
    <div class="w-[95%] sm:w-[600px] md:w-[520px] 2xl:w-[750px] grid">
      <span class="text-[#fff] font-['SF_Pro_Text'] font-semibold text-[17px]"
        >Backlit Magic Keyboard with:
      </span>
      <div class="grid gap-1 mt-4">
        <span
          v-for="(data, index) in magicKeyboardData"
          :key="index"
          class="font-['SF_Pro_Text'] text-[17px] text-[#a2a2a2] font-normal"
          >{{ data.content }}</span
        >
      </div>
      <div class="grid sm:w-[290px] md:w-full place-content-center mt-7">
        <span
          class="font-['SF_Pro_Text'] text-[12px] text-[#a2a2a2] font-normal"
          >Touch Bar</span
        >
      </div>
      <img src="../../assets/macbook.jpg" alt="" class="mt-8 hidden md:block" />
      <img
        src="../../assets/macbook_small.jpg"
        alt=""
        class="sm:h-48 md:hidden"
      />
      <span
        class="text-[#a2a2a2] sm:w-[290px] md:w-full text-[12px] font-normal text-center"
        >Force Touch trackpad</span
      >
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";

const magicKeyboardData = [
  {
    id: 1,
    content:
      "65 (U.S.) or 66 (ISO) keys including 4 arrow keys in an inverted‑T arrangement",
  },
  { id: 2, content: "Touch Bar" },
  { id: 3, content: "Touch ID" },
  { id: 4, content: "Ambient light sensor" },
  {
    id: 5,
    content:
      "Force Touch trackpad for precise cursor control and pressure‑sensing capabilities; enables",
  },
  {
    id: 6,
    content:
      "Force clicks, accelerators, pressure‑sensitive drawing, and Multi‑Touch gestures",
  },
];
</script>
