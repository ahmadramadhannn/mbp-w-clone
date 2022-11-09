<template>
  <div id="wrapper" class="min-h-[70vh] rounded-3xl">
    <div class="grid p-8 sm:p-12 xl:p-20">
      <div
        class="flex flex-col-reverse md:flex md:flex-row md:justify-between items-center"
      >
        <p
          class="font-['SF_Pro_Display_Light'] text-center mt-5 text-[24px] md:text-[28px] xl:text-[32px] text-[#f5f5f7] font-semibold"
        >
          MacBook Pro and the Environment
        </p>
        <img src="../../assets/env_logo.png" alt="" class="h-7" />
      </div>
      <div class="mt-7 lg:mt-12 md:flex gap-8 xl:gap-5">
        <div class="grid md:w-6/12">
          <div class="grid gap-8">
            <p
              class="font-['SF_Pro_Text'] text-sm md:text-[17px] font-semibold text-[#f5f5f7]"
            >
              The 13-inch MacBook Pro is designed with the following features to
              reduce its environmental impact:⁵
            </p>
            <a
              href="https://www.apple.com/environment/#reports-product"
              target="_blank"
              class="font-['SF_Pro_Text'] text-sm md:text-[17px] font-normal text-[#2997ff] hover:underline"
              >See the 13-inch MacBook Pro Product Environmental Report ></a
            >
          </div>
          <div
            v-for="(data, index) in environmentData"
            :key="index"
            :class="{ 'mt-7': data.id === 1 }"
            class="grid"
          >
            <p
              id="title"
              class="text-[#a2a2a2] font-semibold text-sm md:text-[17px] font-['SF_Pro_Text']"
            >
              {{ data.title }}
            </p>
            <div class="p-3 md:p-5 grid gap-3">
              <p
                v-for="(content, index) in data.content"
                :key="index"
                class="text-[#a2a2a2] font-['SF_Pro_Text'] font-normal text-sm md:text-[17px]"
              >
                {{ content }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="grid sm:gap-10 mt-10 md:mt-0 md:h-[27em] xl:h-[30em] md:w-6/12"
        >
          <div v-for="(data, index) in envRightData" :key="index">
            <p
              class="font-['SF_Pro_Text'] font-semibold text-[#f5f5f7] text-sm md:text-[17px]"
            >
              {{ data.title }}
            </p>
            <p
              class="font-['SF_Pro_Text'] mt-3 lg:mt-3 mb-2 lg:mb-4 font-normal text-[#a2a2a2] text-sm md:text-[17px]"
            >
              {{ data.content }}
            </p>
            <a
              target="_blank"
              :href="data.link"
              class="text-[#2997ff] hover:underline text-sm md:text-[17px] font-normal font-['SF_Pro_Text']"
              >{{ data.goTo }} ></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import envData from "../../data/envData";

const envRightData = [
  {
    id: 1,
    title: "Apple Trade In",
    content:
      "Trade in your eligible device for credit toward your next purchase, or get an Apple Gift Card you can use anytime.8 If your device isn’t eligible for credit, we’ll recycle it for free.",
    goTo: "See how it works",
    link: "https://www.apple.com/us/shop/goto/trade_in",
  },
  {
    id: 2,
    title: "Apple and the Environment",
    content:
      "We’re committed to making our products without taking from the earth, and to become carbon neutral across our entire business, including products, by 2030.",
    goTo: "See Apple`s commitment",
    link: "https://www.apple.com/environment/",
  },
];

const environmentData = ref(envData);
</script>

<style scoped>
#wrapper {
  background: #1d1d1f;
}
</style>
