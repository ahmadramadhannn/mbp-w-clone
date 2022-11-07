<template>
  <Content :title="'Charging and Expansion'">
    <div class="w-[97%] grid">
      <span class="text-[#fff] font-['SF_Pro_Text'] font-semibold"
        >Two Thunderbolt / USB 4 ports with support for:
      </span>
      <div class="grid gap-2 mt-4">
        <span
          class="font-['SF_Pro_Text'] font-normal text-[#a2a2a2] text-[17px]"
          v-for="(data, index) in portSupportData"
          :key="index"
        >
          {{ data.name }}
        </span>
      </div>
      <div
        class="w-11/12 sm:w-[300px] xl:w-[310px] translate-y-8 grid place-content-end"
      >
        <span
          class="font-['SF_Pro_Text'] text-[#a2a2a2] font-normal text-[12px]"
          >3.5 mm headphone jack</span
        >
      </div>
      <img src="../../assets/port.jpg" alt="" class="mt-8" />
      <span
        class="text-center text-[#a2a2a2] font-normal text-[12px] sm:w-[320px] xl:w-80"
        >Thunderbolt / USB 4
      </span>
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";

const portSupportData = [
  {
    id: 1,
    name: "Charging",
  },
  {
    id: 2,
    name: "DisplayPort",
  },
  {
    id: 3,
    name: "Thunderbolt 3 (up to 40Gb/s)",
  },
  {
    id: 4,
    name: "USB 4 (up to 40Gb/s)",
  },
  {
    id: 5,
    name: "USB 3.1 Gen 2 (up to 10Gb/s)",
  },
];
</script>
