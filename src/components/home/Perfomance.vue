<template>
  <div class="flex justify-center mt-48 xl:mt-[235px]">
    <div
      class="bg-[#151516] min-h-screen w-10/12 sm:w-[400px] md:w-11/12 lg:w-[979px] xl:w-[97%] 2xl:w-[1400px] md:flex rounded-3xl"
    >
      <div id="aside" class="p-6 md:p-8 xl:p-10 xl:w-[450px]">
        <div class="grid">
          <span
            class="text-[#fff] font-['SF_Pro_Medium'] font-medium text-[21px]"
            >Performance</span
          >
          <span
            class="text-[#fff] w-11/12 md:w-11/12 xl:w-10/12 mt-6 font-medium text-[24px] md:text-[28px] xl:text-[32px] font-['SF_Pro_Medium']"
          >
            M2 brings more power. To go.
          </span>
        </div>
      </div>
      <div class="md:mt-14 xl:mt-20 md:w-11/12 xl:w-[740px]">
        <Compared />
      </div>
    </div>
  </div>
</template>

<script setup>
import Compared from "./Compared.vue";
</script>

<style scoped>
.bars {
  background: linear-gradient(to right, #ffc600, #e8482e, #9c209d);
}
</style>
