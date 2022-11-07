<template>
  <Content :title="'Storage²'">
    <div
      class="w-[94%] sm:w-[400px] xl:w-[530px] flex justify-between gap-20 xl:flex xl:justify-between"
    >
      <div v-for="(data, index) in storageData" :key="index" class="grid">
        <span
          id="size"
          class="font-['SF_Pro_Display_Light'] font-semibold text-[32px] text-[#f5f5f7]"
          >{{ data.size }}</span
        >
        <span
          id="size_type"
          class="font-['SF_Pro_Text'] mt-3 font-normal text-[17px] text-[#a2a2a2]"
          >{{ data.size_type }}
        </span>
        <span
          class="font-['SF_Pro_Text'] mt-6 font-semibold text-[#fff] text-[17px]"
          >Configurable to:
        </span>
        <span
          id="configuration"
          class="font-['SF_Pro_Text'] mt-3 font-normal text-[17px] text-[#a2a2a2]"
          >{{ data.configuration.join(" ") }}
        </span>
      </div>
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";
const storageData = [
  {
    id: 1,
    size: "256GB",
    size_type: "256GB SSD",
    configuration: ["512, 1TB", "or 2TB"],
  },
  {
    id: 2,
    size: "512GB",
    size_type: "512GB SSD",
    configuration: ["1TB or", "2TB"],
  },
];
</script>
