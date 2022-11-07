<template>
  <Content :title="'Wireless'">
    <div
      v-for="(data, index) in wirelessConnectionData"
      :key="index"
      class="grid mb-4"
    >
      <span
        class="text-[#fff] text-[17px] font-semibold font-['SF_Pro_Text']"
        >{{ data.name }}</span
      >
      <div class="grid mt-4">
        <span
          v-for="(dat, index) in data.type"
          class="text-[#a2a2a2] text-[17px] font-normal font-['SF_Pro_Text']"
          >{{ dat }}</span
        >
      </div>
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";

const wirelessConnectionData = [
  {
    id: 1,
    name: "Wi-Fi",
    type: [
      "802.11ax Wi-Fi 6 wireless networking",
      "IEEE 802.11/a/b/g/n/ac compatible",
    ],
  },
  { id: 2, name: "Bluetooth", type: ["Bluetooth 5.0 wireless technology"] },
];
</script>
