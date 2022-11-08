<template>
  <div class="grid p-5 md:p-10 lg:mt-6 xl:mt-0 overflow-hidden">
    <div id="compared_to_m1" class="grid">
      <p
        id="title"
        class="font-['SF_Pro_Medium'] w-8/12 sm:w-[320px] md:w-[400px] lg:w-full text-2xl md:text-[28px] xl:text-[32px] text-[#f5f5f7] font-semibold"
      >
        Compared to MacBook Pro 13″ with M1
      </p>
      <Tabs :content="comparedToM1" />
    </div>
    <div id="compared_to_m1_i7" class="grid mt-10">
      <p
        id="title"
        class="font-['SF_Pro_Medium'] w-8/12 sm:w-[320px] md:w-[400px] lg:w-full text-2xl md:text-[28px] xl:text-[32px] text-[#f5f5f7] font-semibold"
      >
        Compared to Intel-based MacBook Pro 13″
      </p>
      <Tabs :content="comparedToM1i7" />
    </div>
  </div>
</template>

<script setup>
import Tabs from "./Tabs.vue";
import comparedToM1Data from "../../data/comparedToM1";
import comparedToi7Data from "../../data/comparedToi7";
import { ref } from "vue";

const comparedToM1 = ref(comparedToM1Data);
const comparedToM1i7 = ref(comparedToi7Data);
</script>

<style scoped>
#compared_to_m1 {
  border-bottom: 1px solid rgba(255, 255, 255, 0.24);
}
</style>
