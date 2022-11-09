<template>
  <Content :title="'In the Box'">
    <div class="grid gap-y-2">
      <p
        v-for="(content, index) in inTheBoxData"
        :key="index"
        class="font-['SF_Pro_Text'] text-[17px] text-[#a2a2a2] font-normal"
      >
        {{ content.name }}
      </p>
    </div>
    <img
      src="../../assets/in_thebox_small.jpg"
      alt="inside macbook pro 13"
      class="mt-10 md:hidden"
    />
    <img
      src="../../assets/in_thebox_large.jpg"
      class="hidden md:block mt-10"
      alt="inside macbook pro 13"
    />
  </Content>
</template>

<script setup>
import Content from "./Content.vue";
const inTheBoxData = [
  { id: 1, name: "13-inch Macbook Pro" },
  { id: 2, name: "67W USB-C Power Adapter" },
  { id: 3, name: "USB-C Charge Cable (2 m)" },
];
</script>
