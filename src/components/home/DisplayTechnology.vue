<template>
  <div class="flex justify-center">
    <div
      class="grid gap-5 md:flex md:flex-wrap xl:flex xl:flex-nowrap xl:gap-5 w-[88%] sm:w-[400px] md:w-11/12 lg:w-[979px] xl:w-[1300px] 2xl:w-[1400px]"
    >
      <DisplayCard :display-data="ledDisplayData">
        <img
          src="../../assets/backlightsmall_2x.png"
          alt=""
          class="md:hidden"
        />
        <img
          class="hidden md:block"
          src="../../assets/backlightmedium.png"
          alt=""
        />
      </DisplayCard>
      <DisplayCard :display-data="wideColorData">
        <img src="../../assets/colors_small.jpg" alt="" class="md:hidden" />
        <img class="hidden md:block" src="../../assets/colors_large.jpg" alt=""
      /></DisplayCard>
      <DisplayCard
        :image="'https://res.cloudinary.com/dk7urhntn/image/upload/v1668135242/macbook/truetone_warm_bg__gjhxib60wtua_large_2x_ht75ez.jpg'"
        :display-data="truToneTechnology"
      >
        <img src="../../assets/truetone_small.png" alt="" class="md:hidden" />
        <img
          class="hidden md:block"
          src="../../assets/truetone_large.png"
          alt=""
        />
      </DisplayCard>
    </div>
  </div>
</template>

<script setup>
import DisplayCard from "./DisplayCard.vue";
const ledDisplayData = [
  { id: 1, title: "Brightness", otherDesc: "500", desc: "nits of brilliance" },
];

const wideColorData = [
  {
    id: 1,
    title: "P3 wide color",
    otherDesc: "25%",
    desc: "more colors than sRGB",
  },
];

const truToneTechnology = [
  {
    id: 1,
    title: "True Tone technology",
    desc: "A view that adjust to your environment",
  },
];
</script>
