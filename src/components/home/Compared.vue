<template>
  <div class="grid p-5 md:p-10 lg:mt-6 2xl:mt-0 overflow-hidden">
    <p
      id="title"
      class="font-['SF_Pro_Medium'] w-8/12 sm:w-[320px] md:w-[400px] lg:w-full text-2xl md:text-[28px] xl:text-[32px] text-[#f5f5f7] font-semibold"
    >
      Compared to MacBook Pro 13″ with M1
    </p>
    <Tabs :content="comparedToM1" />
  </div>
</template>

<script setup>
import Tabs from "./Tabs.vue";
import comparedToM1Data from "../../data/comparedToM1";
import { ref } from "vue";

const comparedToM1 = ref(comparedToM1Data);
</script>
